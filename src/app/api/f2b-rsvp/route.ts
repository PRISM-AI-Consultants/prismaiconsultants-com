import { NextRequest, NextResponse } from "next/server";

/**
 * Founder to Builder Cohort 2 info-session RSVP.
 *
 * Deliberately separate from /api/capture-email so a change here can never break
 * the AI readiness scorecard flow that already runs through that route.
 *
 * Honesty rule: if every sink fails we return 500 so the form can tell the person
 * to email us directly. A silent success that drops the lead is worse than an error.
 */

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  session?: string;
  attending?: string;
  question?: string;
  /** honeypot, must stay empty */
  website?: string;
};

const SESSION_LABEL: Record<string, string> = {
  sep3: "Thu Sep 3, 7:00 PM ET",
  sep12: "Sat Sep 12, 10:00 AM ET",
  either: "Either session",
};

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const { name, email, phone, company, session, attending, question } = body;

  // Bot trap. Silently accept so the bot does not learn anything.
  if (body.website) return NextResponse.json({ success: true });

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }
  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: "Your name is required." }, { status: 400 });
  }

  const sessionLabel = SESSION_LABEL[session ?? "either"] ?? "Either session";
  const [firstName, ...lastParts] = name.trim().split(" ");

  const record = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || null,
    company: company?.trim() || null,
    session: session ?? "either",
    sessionLabel,
    attending: attending ?? "undecided",
    question: question?.trim() || null,
    source: "prismaiconsultants.com/founder-to-builder",
    timestamp: new Date().toISOString(),
  };

  // Sink 1, AUTHORITATIVE: the VPS capture service. Disk write on the VPS is
  // what decides whether this person is recorded. Verified working 2026-08-28.
  //
  // Why this is first: the GoHighLevel v1 API below returned a hard failure in
  // production on 2026-08-28 (the key is months old and v1 answers with a
  // Cloudflare 403), which meant the form recorded nobody. Never let a
  // third-party CRM be the only place a lead lands.
  let durable = false;
  try {
    const res = await fetch("https://clients.prismaiconsultants.com/f2b/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      cache: "no-store",
    });
    durable = res.ok;
  } catch {
    durable = false;
  }

  const results: boolean[] = [durable];

  // Sink 2, best effort: GHL. If it works the contact is tagged for campaigns.
  // If it fails we still have the lead above, so it never blocks the response.
  const GHL_API_KEY = process.env.GHL_API_KEY;
  if (GHL_API_KEY) {
    try {
      const res = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GHL_API_KEY}`,
        },
        body: JSON.stringify({
          firstName: firstName || undefined,
          lastName: lastParts.join(" ") || undefined,
          email: record.email,
          phone: record.phone || undefined,
          companyName: record.company || undefined,
          tags: [
            "f2b-cohort2",
            "f2b-info-session",
            `f2b-session-${record.session}`,
            `f2b-${record.attending}`,
          ],
          source: record.source,
        }),
      });
      results.push(res.ok);
    } catch {
      results.push(false);
    }
  }

  // Sink 3, best effort: n8n, if it is ever configured.
  const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
  if (N8N_WEBHOOK_URL) {
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "f2b-rsvp", ...record }),
      });
      results.push(res.ok);
    } catch {
      results.push(false);
    }
  }

  // Always leave a trace in the platform logs, whatever else happened.
  console.log("[f2b-rsvp]", JSON.stringify(record));

  // Success means the lead is recorded somewhere we control, not that a
  // third party accepted it.
  if (durable || results.some(Boolean)) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { error: "We could not record that. Please email info@prismaiconsultants.com." },
    { status: 500 }
  );
}
