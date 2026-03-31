import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";

export const metadata: Metadata = {
  title: "Contact PRISM AI Consultants",
  description:
    "Book a call, send a message, or tell us what agent you need. PRISM AI Consultants builds production AI systems for businesses.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Book a call, send a message, or tell us what agent you need."
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Column 1: Calendly */}
            <div className="lg:col-span-1 lg:order-1">
              <h2 className="mb-4 text-xl font-bold tracking-tight">
                Book a Call
              </h2>
              <CalendlyEmbed url="https://calendly.com/prismaiconsultants/introductory-call" />
            </div>

            {/* Column 2: Contact Info */}
            <div className="lg:col-span-1 lg:order-2">
              <h2 className="mb-4 text-xl font-bold tracking-tight">
                Get in Touch
              </h2>
              <Card>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:info@prismaiconsultants.com"
                      className="mt-1 block text-sm font-medium text-accent hover:underline"
                    >
                      info@prismaiconsultants.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:+18774182507"
                      className="mt-1 block text-sm font-medium text-foreground hover:text-accent"
                    >
                      877-418-2507
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/company/prism-ai-consultants"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium text-accent hover:underline"
                    >
                      PRISM AI Consultants
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      Allentown, PA
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Serving clients nationwide
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Column 3: Alternative CTAs */}
            <div className="lg:col-span-1 lg:order-3">
              <h2 className="mb-4 text-xl font-bold tracking-tight">
                Not Ready for a Call?
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-foreground">
                      Tell Us What Agent You Need
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Fill out our agent intake form and we will scope it for
                      you. No commitment, no pressure.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://agent-intake.prismaiconsultants.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="accent" size="md">
                          Start Agent Intake
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-foreground">
                      Join Our Free Community
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Connect with other business leaders exploring AI. Free
                      resources, live sessions, and real conversations about
                      implementation.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://www.skool.com/prism-ai-consultants"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary" size="md">
                          Join on Skool
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
