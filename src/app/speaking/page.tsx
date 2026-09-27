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
import { LiteYouTube } from "@/components/ui/lite-youtube";
import {
  speakingTopics,
  speakingStats,
  pastEvents,
} from "@/data/speaking-topics";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  alternates: { canonical: "/speaking" },
  title: "Speaking & Events - Book Dr. Jeff Bullock",
  description:
    "Book Dr. Jeff Bullock, PA SHRM 2025 and 2026 keynote speaker. Keynotes and workshops where the audience watches AI get built live on their own problems.",
  openGraph: {
    title: "Speaking & Events - Book Dr. Jeff Bullock",
    description:
      "Book Dr. Jeff Bullock, PA SHRM 2025 and 2026 keynote speaker. Keynotes and workshops where the audience watches AI get built live on their own problems.",
    images: ["/images/speaking/pa-shrm-2026-keynote-gesture.jpg"],
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

const INQUIRY_URL = "https://drjeffbullock.com/speaking#inquire";

const shrmTestimonials = [
  {
    quote: "He was engaging and fun. He made everybody laugh. I didn't only learn, I was using what I learned right here.",
    name: "Angela Jeffries",
    role: "PA SHRM 2026 attendee",
  },
  {
    quote: "A lot of these AI chats have been very high level, and this was very tactical. What can we do right now, today, tomorrow?",
    name: "Anthony Fernandez",
    role: "SSP International",
  },
  {
    quote: "I saw him last year, too. So I was excited for his presentation again.",
    name: "Ala Ingros",
    role: "HR, InFirst Bank",
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
        description="Keynote speaker at PA SHRM in 2025 and 2026. Every talk includes a live AI build on real problems from the room."
      />

      {/* Reel + full keynote */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="aspect-video overflow-hidden rounded-xl border border-border shadow-2xl">
                <LiteYouTube id="LD_4ZoSdz7g" title="Dr. Jeff Bullock speaker reel, PA SHRM 2026" priority />
              </div>
              <p className="mt-3 font-semibold">Speaker reel, PA SHRM 2026 (1:36)</p>
            </div>
            <div>
              <div className="aspect-video overflow-hidden rounded-xl border border-border shadow-2xl">
                <LiteYouTube id="lAx1SRTICps" title="Full Keynote: AI That Actually Works, PA SHRM 2026" />
              </div>
              <p className="mt-3 font-semibold">The full keynote: AI That Actually Works (34 min)</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={INQUIRY_URL}
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Check your date
            </a>
            <a
              href="#topics"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border px-6 text-base font-medium transition-colors hover:bg-muted"
            >
              See the talks
            </a>
          </div>
        </Container>
      </Section>

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
                src="/images/speaking/pa-shrm-2026-keynote-podium.jpg"
                alt="Dr. Jeff Bullock at the PA SHRM 2026 podium"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl glow-accent">
              <Image
                src="/images/speaking/pa-shrm-2026-ballroom.jpg"
                alt="The full ballroom at the PA SHRM 2026 opening keynote"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl glow-accent">
              <Image
                src="/images/speaking/pa-shrm-2026-live-build.jpg"
                alt="A live AI build on stage with an HR volunteer at PA SHRM 2026"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Past Events */}
      <Section id="events" className="border-y border-border bg-muted/30">
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
              What Audiences Say
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">Recorded right after the PA SHRM 2026 keynote.</p>
          </div>
          <div className="mb-10 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="aspect-video overflow-hidden rounded-xl border border-border">
                <LiteYouTube id="emD7VLaE3cI" title="What HR leaders said after the PA SHRM 2026 keynote" />
              </div>
            </div>
            <div className="grid gap-4 lg:col-span-3">
              {shrmTestimonials.map((t) => (
                <figure key={t.name} className="rounded-xl border border-border bg-card p-5">
                  <blockquote className="text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-3 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-muted-foreground">, {t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
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

      {/* Full Speaker Portfolio Link */}
      <Section className="border-y border-border bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Full Speaker Portfolio
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              View the complete speaker profile with video demos, detailed topic breakdowns, and event photos.
            </p>
            <div className="mt-6">
              <a
                href="https://speaker.prismaiconsultants.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border-2 border-accent bg-transparent px-6 text-base font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Speaker Portfolio
              </a>
            </div>
          </div>
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
              Virtual delivery available. Custom packages available for multi-session engagements and
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
                href={INQUIRY_URL}
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Check Your Date
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Or talk it through first on the calendar below.{" "}
                <a href="https://proof.prismaiconsultants.com" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
                  See the proof library
                </a>
                .
              </p>
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
