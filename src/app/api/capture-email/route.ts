import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, name, eventSlug } = body;

  if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
  }

  try {
    // Send to GHL if configured
    const GHL_API_KEY = process.env.GHL_API_KEY;
    if (GHL_API_KEY) {
      const [firstName, ...lastParts] = (name || "").trim().split(" ");
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
          tags: [`prism-speaking-event-${eventSlug || "unknown"}`],
          source: `prismaiconsultants.com Speaking Event: ${eventSlug || "unknown"}`,
        }),
      });
    }

    // Send to n8n webhook if configured
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
    if (N8N_WEBHOOK_URL) {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          eventSlug,
          source: "prismaiconsultants.com",
          timestamp: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email capture error:", error);
    return NextResponse.json(
      { error: "Failed to capture email" },
      { status: 500 }
    );
  }
}
