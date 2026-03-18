import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { StatsBar } from "@/components/ui/stats-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";

export const metadata: Metadata = {
  title: "Results - Client Transformations & ROI",
  description:
    "$350K-$700K+ in AI system value delivered to clients. Real transformations, real numbers. Most systems built in days, not months.",
};

const transformations = [
  {
    industry: "M&A Advisory",
    role: "Business Valuator",
    need: "Producing valuation reports manually, each requiring hours of comparable transaction research.",
    built: "An AI research agent that pulls and synthesizes valuation data, generating structured research briefs automatically.",
    result: "Research time cut from hours to minutes per report. The tool pays for itself on a single engagement.",
    marketValue: "$12K-$20K",
    buildTime: "1 day",
    quote: "This saves me 4-5 hours per report.",
  },
  {
    industry: "Legal",
    role: "Managing Partner (8-Attorney Firm)",
    need: "No real-time visibility into attorney performance. Had to wait for month-end reports to see who was on track.",
    built: "A live performance dashboard pulling real data, showing on-track and off-track scoring for every attorney.",
    result: "Complete real-time firm visibility. Performance issues caught in days, not months.",
    marketValue: "$15K-$25K",
    buildTime: "Sprint delivery",
    quote: "This is exactly what I wanted.",
  },
  {
    industry: "Economic Development",
    role: "Leadership Team",
    need: "Needed a strategic plan for a multi-billion dollar investment opportunity. Had to present to the CEO's leadership team.",
    built: "A complete strategic plan built live in front of their team, including role assignments created in real-time.",
    result: "The team walked out with a plan, assignments, and next steps. Work that normally takes weeks, delivered in one session.",
    marketValue: "$10K-$15K",
    buildTime: "Live session",
    quote: null,
  },
  {
    industry: "Professional Services",
    role: "CEO / Consultant",
    need: "Had consulting expertise but no packaged offer. No clear pricing, no defined deliverables.",
    built: "A fully defined productized service with clear scope, deliverables, and pricing structure.",
    result: "Left with a sellable, packaged offer ready to take to market immediately.",
    marketValue: "$2.5K-$5K",
    buildTime: "Single session",
    quote: "I'm converted.",
  },
  {
    industry: "Financial Advisory",
    role: "Managing Director",
    need: "Needed a CRM, AI integration, and automation system to manage deal flow and client relationships.",
    built: "A complete CRM build with AI-powered lead scoring, automated follow-ups, and pipeline management.",
    result: "Full deal pipeline visibility with automated workflows. From manual chaos to structured operations.",
    marketValue: "$25K-$40K",
    buildTime: "Multi-sprint",
    quote: null,
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHeader
        title="Results"
        description="Real transformations. Real numbers. Real quotes from real clients."
      />

      {/* Aggregate Stats */}
      <Section className="border-b border-border bg-muted/20">
        <Container>
          <StatsBar
            stats={[
              { value: "$350K-$700K+", label: "Market Value of Systems Built" },
              { value: "13+", label: "Client Builds Delivered" },
              { value: "Hours to Days", label: "Typical Build Time" },
              { value: "2-5x", label: "Avg. Client ROI" },
            ]}
          />
        </Container>
      </Section>

      {/* Transformation Stories */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">
            Transformation Stories
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every project below involved real businesses with real problems.
            Here is what we built and what it was worth.
          </p>

          <div className="mt-10 space-y-8">
            {transformations.map((story) => (
              <Card key={story.industry}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {story.industry}
                    </h3>
                    <Badge variant="accent">{story.role}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          The Need
                        </p>
                        <p className="mt-1 text-sm text-foreground">
                          {story.need}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          What We Built
                        </p>
                        <p className="mt-1 text-sm text-foreground">
                          {story.built}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Result
                        </p>
                        <p className="mt-1 text-sm text-foreground">
                          {story.result}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <div className="rounded-[var(--radius-md)] bg-muted px-3 py-2">
                          <p className="text-xs text-muted-foreground">
                            Market Value
                          </p>
                          <p className="text-sm font-bold text-accent">
                            {story.marketValue}
                          </p>
                        </div>
                        <div className="rounded-[var(--radius-md)] bg-muted px-3 py-2">
                          <p className="text-xs text-muted-foreground">
                            Build Time
                          </p>
                          <p className="text-sm font-bold text-foreground">
                            {story.buildTime}
                          </p>
                        </div>
                      </div>
                      {story.quote && (
                        <blockquote className="border-l-2 border-accent pl-4 text-sm italic text-muted-foreground">
                          &ldquo;{story.quote}&rdquo;
                        </blockquote>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Visual Proof */}
      <Section className="border-t border-border bg-muted/20">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Building in the Real World
            </h2>
            <p className="mt-3 text-muted-foreground">
              These are not stock photos. This is PRISM, live with clients.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/events/chamber-event.jpg"
                alt="PRISM AI at a local Chamber of Commerce event"
                width={600}
                height={400}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/events/carter-1.jpg"
                alt="PRISM AI client event with Carter"
                width={600}
                height={400}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/events/event-group.jpg"
                alt="Group photo at a PRISM AI event"
                width={600}
                height={400}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Aggregate Statement */}
      <Section className="border-y border-border bg-muted/10">
        <Container size="md">
          <div className="text-center">
            <p className="text-2xl font-bold tracking-tight text-foreground">
              $350K-$700K+ in AI system value delivered to clients.
            </p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-accent">
              Most systems built in days, not months.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              That is the ROI from AI when you work with someone who builds.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              See what we could build for you
            </h2>
            <p className="mt-3 text-muted-foreground">
              Book an introductory call and we will scope your first build
              together.
            </p>
          </div>
          <div className="mt-8">
            <CalendlyEmbed url="https://calendly.com/prismaiconsultants/introductory-call" />
          </div>
        </Container>
      </Section>
    </>
  );
}
