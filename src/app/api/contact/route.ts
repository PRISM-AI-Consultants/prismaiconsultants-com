import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const GHL_API_KEY = process.env.GHL_API_KEY;
  if (!GHL_API_KEY) {
    console.error("GHL_API_KEY not configured");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const [firstName, ...lastParts] = name.trim().split(" ");
    const lastName = lastParts.join(" ") || "";

    // Create contact in GHL
    const contactRes = await fetch(
      "https://rest.gohighlevel.com/v1/contacts/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GHL_API_KEY}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          tags: [
            `prism-contact-${(subject || "general").toLowerCase().replace(/\s+/g, "-")}`,
          ],
          source: "prismaiconsultants.com Contact Form",
        }),
      }
    );

    const contactData = await contactRes.json();
    const contactId = contactData?.contact?.id;

    // Add note if contact was created
    if (contactId) {
      await fetch(
        `https://rest.gohighlevel.com/v1/contacts/${contactId}/notes/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GHL_API_KEY}`,
          },
          body: JSON.stringify({
            body: `Contact form submission from prismaiconsultants.com\n\nSubject: ${subject || "General"}\n\nMessage: ${message}`,
          }),
        }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit" },
      { status: 500 }
    );
  }
}
