import { NextRequest, NextResponse } from "next/server";

// Captures PRISM referral-partner signups + referrals. Non-BNI program only
// (BNI is Givers Gain, never cash). Pushes the partner to GHL as a tagged
// contact and forwards the full payload (including who they're referring) to
// n8n so nothing is lost. The formal 10%/12-month agreement + W-9 ride along
// at first payout, so referring here never requires signing anything.
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, referring, note } = body;

  if (!email || !name) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  try {
    const GHL_API_KEY = process.env.GHL_API_KEY;
    if (GHL_API_KEY) {
      const [firstName, ...lastParts] = String(name).trim().split(" ");
      await fetch("https://rest.gohighlevel.com/v1/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GHL_API_KEY}`,
        },
        body: JSON.stringify({
          firstName: firstName || undefined,
          lastName: lastParts.join(" ") || undefined,
          email,
          phone: phone || undefined,
          tags: ["prism-referral-partner"],
          source: "prismaiconsultants.com referral partner",
          customField: referring
            ? { referral_lead: String(referring).slice(0, 500) }
            : undefined,
        }),
      });
    }

    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
    if (N8N_WEBHOOK_URL) {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "referral-partner",
          name,
          email,
          phone,
          referring,
          note,
          source: "prismaiconsultants.com",
          timestamp: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Referral capture error:", error);
    return NextResponse.json(
      { error: "Failed to submit referral" },
      { status: 500 }
    );
  }
}
