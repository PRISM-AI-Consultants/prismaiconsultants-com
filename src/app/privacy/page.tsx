import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy and Data Protection Policy",
  description:
    "Privacy and data protection policy for PRISM AI Consultants LLC. Learn how we collect, process, store, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy and Data Protection Policy" />

      <Section>
        <Container size="md">
          <div className="prose max-w-none">
            <p>
              <strong>Version:</strong> 1.0
              <br />
              <strong>Effective Date:</strong> April 12, 2026
              <br />
              <strong>Owner:</strong> Dr. Jeffrey Bullock, CEO
              <br />
              <strong>Review Cycle:</strong> Annual
            </p>

            <h2>1. Purpose</h2>
            <p>
              This policy governs how PRISM collects, processes, stores, and
              protects personal and business information from clients, prospects,
              and users of PRISM services and applications.
            </p>

            <h2>2. Data We Collect</h2>

            <h3>2.1 Client Data</h3>
            <ul>
              <li>Contact information (name, email, phone, company)</li>
              <li>
                Session transcripts (with client knowledge and consent)
              </li>
              <li>
                Business information shared during consulting sessions
              </li>
              <li>Financial transaction data (invoices, payments)</li>
              <li>Deliverables and work product</li>
            </ul>

            <h3>2.2 Financial Data (Plaid Integration)</h3>
            <ul>
              <li>
                PRISM connects its own business bank accounts via Plaid for
                internal revenue tracking
              </li>
              <li>
                No client bank accounts are connected without explicit written
                authorization
              </li>
              <li>
                Transaction data pulled via Plaid is stored in
                access-controlled systems on PRISM infrastructure
              </li>
              <li>
                Plaid credentials and tokens are encrypted and stored separately
                from application code
              </li>
            </ul>

            <h3>2.3 Website and Application Data</h3>
            <ul>
              <li>Standard web analytics (page views, referral sources)</li>
              <li>Form submissions (name, email, inquiry details)</li>
              <li>
                No cookies are used for tracking beyond essential functionality
              </li>
            </ul>

            <h2>3. How We Use Data</h2>
            <ul>
              <li>
                <strong>Client consulting:</strong> Delivering AI strategy,
                coaching, and implementation services
              </li>
              <li>
                <strong>Internal operations:</strong> Revenue tracking, session
                scheduling, deliverable management
              </li>
              <li>
                <strong>Communication:</strong> Session recaps, follow-ups,
                newsletters (with consent)
              </li>
              <li>
                <strong>Quality assurance:</strong> Reviewing session transcripts
                to improve coaching effectiveness
              </li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>
              PRISM does not sell, rent, or trade personal or business
              information.
            </p>
            <p>Data is shared only with:</p>
            <ul>
              <li>
                <strong>Service providers</strong> who process data on our behalf
                (Google Workspace, Stripe, Plaid) under their respective privacy
                policies
              </li>
              <li>
                <strong>Team members</strong> (employees, contractors) on a
                need-to-know basis for service delivery
              </li>
              <li>
                <strong>Legal requirements</strong> if compelled by law,
                regulation, or legal process
              </li>
            </ul>

            <h2>5. Data Storage and Security</h2>
            <ul>
              <li>
                Client data is stored in Google Drive, iCloud, and PRISM
                production infrastructure
              </li>
              <li>
                All storage locations use encryption in transit (TLS) and access
                controls
              </li>
              <li>
                Production infrastructure is hosted on Hostinger VPS with SSH key
                authentication
              </li>
              <li>Backups are maintained weekly</li>
            </ul>

            <h2>6. Data Retention</h2>
            <ul>
              <li>
                <strong>Active clients:</strong> Data retained for duration of
                engagement plus 12 months
              </li>
              <li>
                <strong>Prospects:</strong> Contact data retained for 24 months
                after last interaction, then deleted
              </li>
              <li>
                <strong>Financial records:</strong> Retained per IRS requirements
                (7 years)
              </li>
              <li>
                <strong>Session transcripts:</strong> Retained for 24 months
                after engagement ends
              </li>
            </ul>

            <h2>7. Client Rights</h2>
            <p>Clients may request:</p>
            <ul>
              <li>A summary of what data PRISM holds about them</li>
              <li>Correction of inaccurate information</li>
              <li>
                Deletion of their data (subject to legal retention requirements)
              </li>
              <li>A copy of their data in a portable format</li>
            </ul>
            <p>
              Requests should be directed to{" "}
              <a href="mailto:info@prismaiconsultants.com">
                info@prismaiconsultants.com
              </a>{" "}
              and will be fulfilled within 30 days.
            </p>

            <h2>8. Third-Party Services</h2>
            <p>
              PRISM uses the following third-party services that process data:
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Purpose</th>
                    <th>Data Processed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Workspace</td>
                    <td>Email, Drive, Calendar</td>
                    <td>
                      Client communications, documents, scheduling
                    </td>
                  </tr>
                  <tr>
                    <td>Stripe</td>
                    <td>Payment processing</td>
                    <td>Payment card and transaction data</td>
                  </tr>
                  <tr>
                    <td>Plaid</td>
                    <td>Bank account connectivity</td>
                    <td>PRISM business bank transactions</td>
                  </tr>
                  <tr>
                    <td>Calendly</td>
                    <td>Scheduling</td>
                    <td>Client name, email, meeting details</td>
                  </tr>
                  <tr>
                    <td>Zoom</td>
                    <td>Video conferencing</td>
                    <td>Session recordings (with notice)</td>
                  </tr>
                  <tr>
                    <td>Cloudflare</td>
                    <td>DNS, CDN, security</td>
                    <td>Web traffic routing</td>
                  </tr>
                  <tr>
                    <td>Hostinger</td>
                    <td>Infrastructure hosting</td>
                    <td>Application data, client portals</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>9. Breach Notification</h2>
            <p>
              In the event of a data breach affecting client personal or business
              information, PRISM will:
            </p>
            <ul>
              <li>
                Notify affected individuals within 72 hours of confirmation
              </li>
              <li>
                Describe what data was affected and what steps PRISM is taking
              </li>
              <li>
                Provide guidance on protective measures clients should take
              </li>
              <li>Report to relevant authorities as required by law</li>
            </ul>

            <hr />

            <p>
              <strong>Approved by:</strong>
            </p>
            <p>
              Dr. Jeffrey Bullock, CEO
              <br />
              PRISM AI Consultants LLC
              <br />
              Date: April 12, 2026
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
