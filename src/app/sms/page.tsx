import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SmsOptinForm } from "@/components/ui/sms-optin-form";

// This page is the Terms and Conditions URL and the Call to Action evidence
// for PRISM's A2P 10DLC texting campaign (Twilio, 610-795-2409). The March
// 2026 submission was rejected for missing both. Keep the wording here in
// sync with the campaign's message samples and opt-in description.
export const metadata: Metadata = {
  alternates: { canonical: "/sms" },
  title: "Text Messaging Terms",
  description:
    "Text messaging (SMS) terms for PRISM AI Consultants: what we text, how often, and how to opt in or out.",
};

export default function SmsPage() {
  return (
    <>
      <PageHeader title="Text Messaging Terms" />

      <Section>
        <Container size="md">
          <div className="rounded-[var(--radius-md)] border border-border p-6 md:p-8">
            <h2 className="text-xl font-semibold">Get texts from PRISM</h2>
            <p className="mt-2 text-muted-foreground">
              Want us to text you about your inquiry? Leave your mobile number
              below. This is optional.
            </p>
            <div className="mt-6">
              <SmsOptinForm />
            </div>
          </div>

          <div className="prose mt-12 max-w-none">
            <p>
              <strong>Effective Date:</strong> September 27, 2026
            </p>

            <h2>1. Program</h2>
            <p>
              PRISM AI Consultants LLC (&quot;PRISM&quot;) sends text messages
              to people who ask to receive them. Messages come from
              610-795-2409 and cover your inquiry with PRISM: replies to your
              questions, links to book a call, appointment confirmations, and
              appointment reminders. We do not send marketing blasts.
            </p>

            <h2>2. How you opt in</h2>
            <p>
              You opt in by entering your mobile number in the form on this page
              and checking the consent box. The box is never checked for you.
            </p>
            <p>Consent to receive texts is never a condition of any purchase.</p>

            <h2>3. Message frequency and cost</h2>
            <p>
              Message frequency varies with your inquiry. Message and data rates
              may apply, depending on your mobile plan.
            </p>

            <h2>4. How to opt out or get help</h2>
            <ul>
              <li>
                Reply <strong>STOP</strong> to any message to stop receiving
                texts. You will get one confirmation and nothing after that.
              </li>
              <li>
                Reply <strong>HELP</strong> for help, or contact us at{" "}
                <a href="mailto:info@prismaiconsultants.com">
                  info@prismaiconsultants.com
                </a>{" "}
                or 877-418-2507.
              </li>
            </ul>

            <h2>5. Carriers</h2>
            <p>
              Mobile carriers are not liable for delayed or undelivered
              messages.
            </p>

            <h2>6. Privacy</h2>
            <p>
              We do not sell, rent, or share your mobile number or your text
              messaging opt-in with third parties or affiliates for their
              marketing or promotional purposes. Text messaging originator
              opt-in data and consent are never shared with any third party.
              See our <Link href="/privacy">Privacy Policy</Link> for how we
              handle your information.
            </p>

            <h2>7. Contact</h2>
            <p>
              PRISM AI Consultants LLC, Allentown, Pennsylvania.
              <br />
              <a href="mailto:info@prismaiconsultants.com">
                info@prismaiconsultants.com
              </a>{" "}
              · 877-418-2507
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
