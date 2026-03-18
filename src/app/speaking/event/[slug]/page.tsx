import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { speakingEvents } from "@/data/events";
import { EmailCaptureForm } from "./email-capture-form";

const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";
const SKOOL_URL = "https://www.skool.com/prism-ai-consultants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return speakingEvents.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = speakingEvents.find((e) => e.slug === slug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: `${event.name} | PRISM AI Consultants`,
    description: event.description,
    openGraph: {
      title: `${event.name} | PRISM AI Consultants`,
      description: event.description,
    },
  };
}

export default async function EventCapturePage({ params }: PageProps) {
  const { slug } = await params;
  const event = speakingEvents.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const eventUrl = `https://prismaiconsultants.com/speaking/event/${slug}`;

  return (
    <>
      {/* Event Header */}
      <Section className="pt-12 pb-8 md:pt-16 md:pb-12">
        <Container size="md">
          <div className="text-center">
            <Badge variant="accent" className="mb-4">
              {event.organization}
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {event.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {event.date} &middot; {event.location}
            </p>
          </div>
        </Container>
      </Section>

      {/* Thank You Message */}
      <Section className="py-8 md:py-12">
        <Container size="md">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {event.description}
          </p>
        </Container>
      </Section>

      {/* Three CTA Cards */}
      <Section className="py-8 md:py-12">
        <Container size="md">
          <div className="grid gap-6">
            {/* CTA 1: Book a Strategy Call */}
            <Card variant="featured">
              <CardContent className="text-center py-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Book a Strategy Call
                </h2>
                <p className="mt-2 text-muted-foreground">
                  See how AI systems can work inside your business. 30 minutes,
                  no pitch, just a real conversation about what is possible.
                </p>
                <div className="mt-6">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-8 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Book a Strategy Call
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* CTA 2: Join PRISM AI University */}
            <Card>
              <CardContent className="text-center py-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Join PRISM AI University
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Free community for business owners learning AI. Templates,
                  frameworks, live workshops, and a network of professionals who
                  are building with AI right now.
                </p>
                <div className="mt-6">
                  <a
                    href={SKOOL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-transparent px-8 text-base font-medium text-foreground transition-colors hover:bg-muted hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Join PRISM AI University
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* CTA 3: Get Session Resources */}
            <Card>
              <CardContent className="py-8">
                <h2 className="text-2xl font-bold text-foreground text-center">
                  Get Session Resources
                </h2>
                <p className="mt-2 text-muted-foreground text-center">
                  Enter your email and we will send you all the resources,
                  templates, and follow-up materials from today&apos;s session.
                </p>
                <div className="mx-auto mt-6 max-w-sm">
                  <EmailCaptureForm eventSlug={slug} />
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Session Resources (if available) */}
      {event.resources && event.resources.length > 0 && (
        <Section className="border-t border-border bg-muted/30">
          <Container size="md">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Session Resources
            </h2>
            <ul className="space-y-3">
              {event.resources.map((resource, index) => {
                const linkMatch = resource.match(
                  /^(.+?):\s*(https?:\/\/.+)$/
                );

                if (linkMatch) {
                  return (
                    <li key={index}>
                      <a
                        href={linkMatch[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent font-medium hover:text-accent/80 transition-colors"
                      >
                        {linkMatch[1]}
                      </a>
                    </li>
                  );
                }

                return (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {resource}
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>
      )}

      {/* QR Code + Share */}
      <Section className="border-t border-border">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-xl font-bold text-foreground">
              Share This Page
            </h2>
            <p className="mt-2 text-sm text-muted-foreground break-all">
              {eventUrl}
            </p>
            <div className="mt-6 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/api/qr/${slug}`}
                alt={`QR code for ${event.name} event page`}
                width={200}
                height={200}
                className="rounded-[var(--radius-md)]"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
