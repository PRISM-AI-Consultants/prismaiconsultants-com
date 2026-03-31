import type { Metadata } from "next";
import { ArrowRight, Zap, Rocket, Settings, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { PricingTable } from "@/components/ui/pricing-table";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { pricingTiers, premiumAddOns } from "@/data/pricing";

export const metadata: Metadata = {
  title: "How It Works & Pricing - AI Systems Implementation",
  description:
    "Transparent pricing for AI systems architecture and implementation. From Momentum Sprints to Scale retainers and enterprise custom builds. No hourly billing. Real outcomes.",
  keywords: [
    "AI consulting pricing",
    "AI systems implementation cost",
    "AI agent pricing",
    "AI automation cost",
    "AI consultant retainer",
    "PRISM AI pricing",
    "AI consulting packages",
  ],
  openGraph: {
    title: "How It Works & Pricing",
    description:
      "Transparent pricing. Real outcomes. No hourly billing. Four clear paths to production AI systems.",
  },
};

const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";
const AGENT_INTAKE_URL = "https://agent-intake.prismaiconsultants.com";

const journeySteps = [
  {
    icon: Zap,
    name: "Momentum Sprint",
    price: "$4,500",
    priceNote: "over 90 days",
    description:
      "The accelerator. High-touch sessions, multiple AI systems deployed, and a 90-day transformation roadmap.",
  },
  {
    icon: Settings,
    name: "Core",
    price: "$2,500",
    priceNote: "/month",
    description:
      "Your AI business partner. Weekly strategy sessions with Dr. Jeff, continuous builds, and a dedicated execution team.",
  },
  {
    icon: TrendingUp,
    name: "Scale",
    price: "$5,000",
    priceNote: "/month",
    description:
      "Maximum velocity. Accelerated parallel builds, complex multi-system projects, and priority support.",
  },
  {
    icon: Rocket,
    name: "Enterprise",
    price: "$25,000+",
    priceNote: "custom",
    description:
      "Full-stack AI solutions for complex organizations. Custom scoping, dedicated teams, and scaled delivery.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How It Works"
        description="Transparent pricing. Real outcomes. No hourly billing."
      />

      {/* Visual Journey */}
      <Section>
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Your Path to Production AI
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Three partnership tiers and enterprise solutions. Pick the one
              that fits your stage.
            </p>
          </div>

          {/* Steps with connecting arrows */}
          <div className="relative grid gap-8 md:grid-cols-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.name} className="relative">
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-accent/15">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-foreground">
                        {step.name}
                      </h3>
                      <div className="mt-2">
                        <span className="text-2xl font-extrabold text-accent">
                          {step.price}
                        </span>
                        <span className="ml-1 text-sm text-muted-foreground">
                          {step.priceNote}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  {/* Connecting arrow (desktop) */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-accent/50" />
                    </div>
                  )}
                  {/* Connecting arrow (mobile) */}
                  {index < journeySteps.length - 1 && (
                    <div className="flex md:hidden justify-center py-2">
                      <ArrowRight className="h-5 w-5 rotate-90 text-accent/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Not Sure Where to Start? */}
      <Section className="border-t border-border bg-accent/5">
        <Container size="md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Not Sure Where to Start?
            </h2>
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex-1">
                    <p className="font-bold text-foreground">
                      &ldquo;I have never used AI in my business.&rdquo;
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Start with a <span className="text-accent font-semibold">Momentum Sprint</span>. In 90 days, you will have multiple working systems and know exactly what AI can do for you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex-1">
                    <p className="font-bold text-foreground">
                      &ldquo;I use some tools but need more built and connected.&rdquo;
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="text-accent font-semibold">Core</span> is your fit. Weekly strategy sessions with Dr. Jeff, continuous builds, and a team shipping for you every week.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex-1">
                    <p className="font-bold text-foreground">
                      &ldquo;I need everything built fast, in parallel, with priority.&rdquo;
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="text-accent font-semibold">Scale</span> gives you maximum velocity. Multiple systems building at once, priority support, and accelerated delivery.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Still unsure? <a href="/ai-readiness-scorecard" className="text-accent hover:underline font-medium">Take the 2-minute AI Readiness Scorecard</a> and we will tell you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing Table */}
      <Section className="border-t border-border bg-muted/30">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Detailed Pricing
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Everything included. No surprises. No hourly billing.
            </p>
          </div>
          <PricingTable tiers={pricingTiers} />
        </Container>
      </Section>

      {/* Premium Add-Ons */}
      <Section className="border-t border-border">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Premium Add-Ons
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              For organizations that need deeper engagement.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {premiumAddOns.map((addon) => (
              <Card key={addon.name}>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {addon.name}
                  </h3>
                  <p className="mt-2 text-2xl font-extrabold text-accent">
                    {addon.priceRange}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {addon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Enterprise Anchor */}
      <Section className="border-t border-border">
        <Container size="md">
          <div className="mt-12 rounded-2xl border border-accent/30 bg-card p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Enterprise and Custom Builds</h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Banks, health systems, franchises, and organizations with complex compliance
              or infrastructure needs. Full-stack AI solutions with custom scoping, dedicated teams,
              and scaled delivery. Engagements start at $25,000.
            </p>
            <a
              href="https://calendly.com/prismaiconsultants/introductory-call"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Discuss Enterprise Needs
            </a>
          </div>
        </Container>
      </Section>

      {/* The PRISM Method */}
      <Section className="border-t border-border bg-muted/30">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              The PRISM Method
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Every engagement follows the same proven process.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            {[
              { step: "1", name: "Discover", desc: "Map your workflows, pain points, and revenue levers in a strategy session." },
              { step: "2", name: "Design", desc: "Architect the AI systems that solve real problems, not hypothetical ones." },
              { step: "3", name: "Build", desc: "Deploy production systems in days, not months. You see working software fast." },
              { step: "4", name: "Integrate", desc: "Connect to your CRM, email, calendar, and existing tools. No rip-and-replace." },
              { step: "5", name: "Optimize", desc: "Measure results, tune performance, and expand. Your systems get smarter over time." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Key Phrase Highlight */}
      <Section className="border-t border-border">
        <Container size="md">
          <div className="rounded-[var(--radius-lg)] border-2 border-accent/40 bg-accent/5 p-8 md:p-12 text-center">
            <p className="text-xl font-bold text-foreground md:text-2xl">
              &ldquo;You get me in your corner for strategy, and my team
              building the systems that hit your goal.&rdquo;
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Dr. Jeff Bullock, CEO &amp; AI Systems Architect
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Ready to Start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Pick your path. We will build the system. No long contracts, no
              hourly billing, no vague deliverables.
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
