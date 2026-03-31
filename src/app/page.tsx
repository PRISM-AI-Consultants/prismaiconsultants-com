import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { StatsBar } from "@/components/ui/stats-bar";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { PortfolioCard } from "@/components/content/portfolio-card";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioItems } from "@/data/portfolio";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title:
    "PRISM AI Consultants | AI Systems Architect, Business Partner, Builder",
  description:
    "We build production AI systems that run live in your business. Agents, dashboards, automations, and integrations. 34 autonomous agents built. $350K-$700K+ in AI systems delivered. Allentown, PA.",
  keywords: [
    "AI consultant Allentown",
    "AI systems architect",
    "AI automation consultant",
    "AI agent development",
    "business AI systems",
    "AI consulting Pennsylvania",
    "Lehigh Valley AI consultant",
    "production AI systems",
    "AI dashboard development",
    "AI business partner",
  ],
  openGraph: {
    title: "PRISM AI Consultants | AI Systems Architect. Business Partner. Builder.",
    description:
      "We build production AI systems that run live in your business. 34 autonomous agents. $350K-$700K+ in systems delivered.",
    images: [
      {
        url: "https://prismaiconsultants.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Jeff Bullock - AI Systems Architect & Speaker",
      },
    ],
  },
};

const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";
const AGENT_INTAKE_URL = "https://agent-intake.prismaiconsultants.com";
const SKOOL_URL = "https://www.skool.com/prism-ai-consultants";

const stats = [
  { value: "15+", label: "Hours Saved Per Client Weekly" },
  { value: "Days", label: "Not Months to Deploy" },
  { value: "2-5x", label: "Avg. Client ROI" },
  { value: "200+", label: "Professionals Trained" },
];

const steps = [
  {
    number: 1,
    name: "Momentum Sprint",
    price: "$4,500",
    description: "90-day accelerator with multiple AI systems deployed.",
  },
  {
    number: 2,
    name: "Core",
    price: "$2,500/mo",
    description: "Your AI business partner. Strategy, builds, and a dedicated execution team.",
  },
  {
    number: 3,
    name: "Scale",
    price: "$5,000/mo",
    description: "Maximum velocity with parallel builds and priority support.",
  },
  {
    number: 4,
    name: "Enterprise",
    price: "$25,000+",
    description: "Full-stack AI solutions for complex organizations.",
  },
];

const featuredTestimonials = testimonials.slice(0, 3);
const featuredPortfolio = portfolioItems.filter((item) => item.featured);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        {/* Purple gradient glow behind hero */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <Container size="lg">
          <div className="relative flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
            {/* Text column */}
            <div className="flex-1 animate-fade-in-up">
              <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
                <span className="text-foreground">Your team is stuck doing</span>
                <br />
                <span className="gradient-text">work that software should handle.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                We build the AI systems that give you your time back.
                Dashboards that show what matters. Automations that eliminate busywork.
                Tools your competitors wish they had. Deployed in days, not months.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Book a Free Strategy Call
                </a>
                <Link
                  href="/ai-readiness-scorecard"
                  className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-transparent px-6 text-base font-medium text-foreground transition-colors hover:bg-muted hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Take the 2-Minute Scorecard
                </Link>
              </div>
            </div>
            {/* Hero image column */}
            <div className="mt-12 md:mt-0 flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-accent/20 blur-xl" />
                <Image
                  src="/images/hero/jeff-hero.jpg"
                  alt="Dr. Jeff Bullock, AI Systems Architect"
                  width={460}
                  height={460}
                  className="relative rounded-2xl border-2 border-accent/30 object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Bar */}
      <Section className="py-12 md:py-16 border-y border-border bg-muted/30">
        <Container>
          <StatsBar stats={stats} />
        </Container>
      </Section>

      {/* Is This You? */}
      <Section>
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Sound Familiar?
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                pain: "You spend hours every week on tasks a system should handle",
                fix: "We automate the busywork so you focus on revenue",
              },
              {
                pain: "Your tools don't talk to each other and data falls through the cracks",
                fix: "We connect everything into one intelligent workflow",
              },
              {
                pain: "You're making decisions on gut feel because you can't see the numbers",
                fix: "We build dashboards that show what matters in real time",
              },
              {
                pain: "Onboarding new clients takes days when it should take minutes",
                fix: "We build intake systems that do the heavy lifting automatically",
              },
              {
                pain: "You know AI could help but you don't know where to start",
                fix: "We figure that out for you and build it in the first week",
              },
              {
                pain: "You've been burned by consultants who deliver slide decks, not results",
                fix: "We deliver working software. Every engagement. No exceptions.",
              },
            ].map((item) => (
              <Card key={item.pain}>
                <CardContent>
                  <p className="text-sm font-medium text-foreground">
                    {item.pain}
                  </p>
                  <p className="mt-3 text-sm text-accent font-medium">
                    {item.fix}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* What We Build Preview */}
      <Section id="portfolio-preview">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Live Systems. Not Slide Decks.
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Click any of these. They&apos;re running right now.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredPortfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                name={item.name}
                client={item.client}
                description={item.description}
                category={item.category}
                liveUrl={item.liveUrl}
                marketValue={item.marketValue}
                clientPaid={item.clientPaid}
                quote={item.quote}
                quoteAuthor={item.quoteAuthor}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-accent font-medium transition-colors hover:text-accent/80"
            >
              See Everything We&apos;ve Built
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* How It Works Preview */}
      <Section className="bg-muted/30 border-y border-border">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Four clear paths. Transparent pricing. No hourly billing.
            </p>
          </div>

          {/* Steps: horizontal on desktop, vertical on mobile */}
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.name} className="relative">
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 md:flex-col md:items-start">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                        {step.number}
                      </div>
                      {/* Connecting arrow (desktop only) */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                          <ArrowRight className="h-5 w-5 text-accent/50" />
                        </div>
                      )}
                      <div className="md:mt-4">
                        <h3 className="text-lg font-bold text-foreground">
                          {step.name}
                        </h3>
                        <p className="text-xl font-extrabold text-accent">
                          {step.price}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-accent font-medium transition-colors hover:text-accent/80"
            >
              See Full Pricing Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section>
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredTestimonials.map((t) => (
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

      {/* Video Testimonials */}
      <Section className="border-t border-border bg-muted/20">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Hear It Directly
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Real clients. Real results. Unscripted.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/Wcnn2-b_iQQ"
                    title="Client Testimonial: Financial Services"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-sm font-medium text-foreground">Financial Services</p>
              <p className="text-xs text-muted-foreground">Professional and personal impact from AI systems</p>
            </div>
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/c-mkT74bbvk"
                    title="AI Expo Testimonials"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-sm font-medium text-foreground">Live Event</p>
              <p className="text-xs text-muted-foreground">What attendees said after an AI live demo</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-accent font-medium transition-colors hover:text-accent/80"
            >
              See All Client Results
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Lead Magnet */}
      <Section className="border-t border-border bg-accent/5">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Not Ready for a Call Yet?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Take the free AI Readiness Scorecard. Five questions. Two minutes.
              Find out where AI can save you the most time and money.
            </p>
            <div className="mt-8">
              <a
                href="/ai-readiness-scorecard"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border-2 border-accent bg-transparent px-6 text-base font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Take the AI Readiness Scorecard
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="border-t border-border bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Ready to Build?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Stop paying for slide decks and strategy documents that collect
              dust. Get real AI systems running in your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Book a Strategy Call
              </a>
              <a
                href={AGENT_INTAKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-transparent px-6 text-base font-medium text-foreground transition-colors hover:bg-muted hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Tell Us What Agent You Need
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
