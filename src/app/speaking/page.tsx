import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { StatsBar } from "@/components/ui/stats-bar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";
import {
  speakingTopics,
  speakingStats,
  pastEvents,
} from "@/data/speaking-topics";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Speaking & Events - Book Dr. Jeff Bullock",
  description:
    "Keynotes, workshops, and breakout sessions on AI systems, automation, and the future of work. 25-30% audience-to-pipeline conversion rate.",
  openGraph: {
    title: "Speaking & Events - Book Dr. Jeff Bullock | PRISM AI Consultants",
    description:
      "Keynotes, workshops, and breakout sessions on AI systems, automation, and the future of work. 25-30% audience-to-pipeline conversion rate.",
  },
};

const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";

const stats = [
  { value: speakingStats.eventsDelivered, label: "Events Delivered" },
  { value: speakingStats.audiencesTrained, label: "Audiences Trained" },
  { value: speakingStats.conversionRate, label: "Audience-to-Pipeline Conversion" },
  {
    value: speakingStats.calendlyBookingsFromOneSession,
    label: "Calendly Bookings from One Session",
  },
];

const speakingTestimonials = testimonials.filter(
  (t) => t.id === "kristina-ifel" || t.id === "lvedc-team"
);

export default function SpeakingPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Speaking & Events"
        description="Keynotes. Workshops. Breakout sessions. 25-30% audience-to-pipeline conversion."
      />

      {/* Speaker Profile */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-accent/15 blur-lg" />
                <Image
                  src="/images/jeff-bullock-speaking.jpg"
                  alt="Dr. Jeff Bullock speaking at an AI event"
                  width={400}
                  height={400}
                  className="relative rounded-2xl border-2 border-accent/20 object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Dr. Jeff Bullock
              </h2>
              <p className="mt-2 text-lg font-medium text-accent">
                AI Systems Architect. Speaker. Builder.
              </p>
              <p className="mt-4 text-muted-foreground">
                Jeff does not talk about AI in the abstract. Every keynote and workshop features
                live demonstrations of production AI systems. Audiences leave with practical
                frameworks they can implement immediately, not theoretical concepts they will
                forget by Monday.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Speaker Stats */}
      <Section className="py-12 md:py-16 border-b border-border bg-muted/30">
        <Container>
          <StatsBar stats={stats} />
        </Container>
      </Section>

      {/* Topics Section */}
      <Section id="topics">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Speaking Topics
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Each topic includes live demonstrations with production AI systems.
              No slides without substance.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {speakingTopics.map((topic) => (
              <Card key={topic.title}>
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground">
                    {topic.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.description}</p>
                  <div className="mt-4">
                    <Badge variant="accent">{topic.audience}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Event Photo Gallery */}
      <Section className="border-t border-border bg-muted/10">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              In Action
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Real events. Real audiences. Real energy.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl glow-accent">
              <Image
                src="/images/events/event-presentation.jpg"
                alt="Dr. Jeff Bullock presenting on AI systems at a live event"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl glow-accent">
              <Image
                src="/images/events/event-audience.jpg"
                alt="Engaged audience at a PRISM AI speaking event"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl glow-accent">
              <Image
                src="/images/events/event-networking.jpg"
                alt="Networking after a PRISM AI workshop"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Past Events */}
      <Section className="border-y border-border bg-muted/30">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Past Events
            </h2>
          </div>
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <Card key={event.slug}>
                <CardContent>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {event.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {event.organization} &middot; {event.date} &middot;{" "}
                        {event.location}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              What Event Organizers Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {speakingTestimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
                metric={t.metric}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Speaker Reel Placeholder */}
      <Section className="border-y border-border bg-muted/30">
        <Container size="md">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Speaker Reel
            </h2>
          </div>
          <Card className="bg-muted">
            <CardContent>
              <div className="flex aspect-video items-center justify-center">
                <p className="text-lg font-medium text-muted-foreground">
                  Speaker Reel Coming Soon
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Pricing Note */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Investment
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Workshop fees: $7,500 to $15,000. Speaking engagement fees:
              $10,000 to $20,000.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Custom packages available for multi-session engagements and
              ongoing training partnerships.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA: Book Dr. Jeff */}
      <Section className="border-t border-border bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Book Dr. Jeff for Your Event
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Bring real AI systems to your audience. Live demonstrations,
              practical frameworks, and the kind of energy that turns attendees
              into advocates.
            </p>
            <div className="mt-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
          <div className="mt-12">
            <CalendlyEmbed url={CALENDLY_URL} />
          </div>
        </Container>
      </Section>
    </>
  );
}
