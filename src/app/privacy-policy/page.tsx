import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for PRISM AI Consultants. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />

      <Section>
        <Container size="md">
          <div className="prose max-w-none">
            <p>
              <strong>Last Updated:</strong> January 15, 2025
            </p>
            <p>
              PRISM AI Consultants (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates the website{" "}
              <a href="https://prismaiconsultants.com">
                prismaiconsultants.com
              </a>{" "}
              (the &ldquo;Site&rdquo;). This Privacy Policy describes how we
              collect, use, and protect your personal information when you visit
              our Site or engage with our services.
            </p>

            <h2>Information We Collect</h2>

            <h3>Information You Provide</h3>
            <p>
              We collect information you voluntarily provide when you interact
              with our Site, including:
            </p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number, and company name when you fill out a contact form or
                book a consultation.
              </li>
              <li>
                <strong>Scheduling Information:</strong> Details provided when
                you book a call through our scheduling system, including your
                name, email, and any notes you include.
              </li>
              <li>
                <strong>Email Correspondence:</strong> Information you share
                when you email us directly at{" "}
                <a href="mailto:info@prismaiconsultants.com">
                  info@prismaiconsultants.com
                </a>
                .
              </li>
              <li>
                <strong>Community Participation:</strong> Information you provide
                when joining our community platforms, such as name and email.
              </li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <p>
              When you visit our Site, we may automatically collect certain
              information about your device and usage, including:
            </p>
            <ul>
              <li>IP address and approximate geographic location</li>
              <li>Browser type, version, and operating system</li>
              <li>Pages visited, time spent on pages, and navigation patterns</li>
              <li>Referring website or source</li>
              <li>Device type and screen resolution</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Schedule and manage consultation calls</li>
              <li>Send relevant follow-up communications about our services</li>
              <li>
                Improve our Site, services, and user experience through
                analytics
              </li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              We use the following third-party services that may collect
              information as described in their respective privacy policies:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to
                understand how visitors interact with our Site. Google Analytics
                uses cookies to collect anonymous usage data. You can opt out by
                installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
              <li>
                <strong>Calendly:</strong> We use Calendly for scheduling
                consultations and strategy calls. When you book a call, your
                information is processed by Calendly in accordance with their
                privacy policy.
              </li>
              <li>
                <strong>GoHighLevel:</strong> We use GoHighLevel for customer
                relationship management and communications. Contact information
                you provide may be stored and processed through this platform.
              </li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our Site uses cookies and similar tracking technologies to enhance
              your experience. Cookies are small text files stored on your
              device that help us understand how you use our Site. You can
              control cookie settings through your browser preferences. Note
              that disabling cookies may affect certain features of the Site.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes described in this policy, or as required
              by law. Contact information submitted through forms is retained
              for the duration of our business relationship and a reasonable
              period afterward.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100%
              secure.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@prismaiconsultants.com">
                info@prismaiconsultants.com
              </a>
              .
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our Site and services are not directed to individuals under the
              age of 18. We do not knowingly collect personal information from
              children. If you believe we have inadvertently collected
              information from a child, please contact us immediately.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. We encourage
              you to review this policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our
              data practices, contact us at:
            </p>
            <p>
              <strong>PRISM AI Consultants</strong>
              <br />
              Email:{" "}
              <a href="mailto:info@prismaiconsultants.com">
                info@prismaiconsultants.com
              </a>
              <br />
              Website:{" "}
              <a href="https://prismaiconsultants.com">
                prismaiconsultants.com
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
