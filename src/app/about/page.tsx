import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { StatsBar } from "@/components/ui/stats-bar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Dr. Jeff Bullock - AI Systems Architect",
  description:
    "PharmD turned AI Systems Architect. Founder of 2 AI companies, builder of 34 autonomous agents, and creator of $350K-$700K worth of AI systems for clients.",
};

const prismValues = [
  {
    letter: "P",
    word: "Positivity",
    description:
      "We lead with energy. Every engagement starts with belief in what is possible.",
  },
  {
    letter: "R",
    word: "Resilience",
    description:
      "We push through complexity. Hard problems are the ones worth solving.",
  },
  {
    letter: "I",
    word: "Innovation",
    description:
      "We build what does not exist yet. If it can be automated, we will find the way.",
  },
  {
    letter: "S",
    word: "Service",
    description:
      "We serve our clients, our community, and our team. Results first, always.",
  },
  {
    letter: "M",
    word: "Mastery",
    description:
      "We study the craft relentlessly. Every system we ship is better than the last.",
  },
];

const communityInvolvements = [
  {
    role: "Board Member",
    org: "African American Business Leaders' Chamber (AABLC)",
  },
  {
    role: "Active in the Community",
    org: "Allentown, PA",
  },
  {
    role: "Active Big Brother",
    org: "Big Brothers Big Sisters",
  },
  {
    role: "Chapter Launch Coach",
    org: "BNI (Business Network International)",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        description="The person who builds the AI systems everyone else is just talking about."
      />

      {/* Jeff's Story */}
      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight">
                Builder, Not Talker
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Dr. Jeff Bullock holds a PharmD from Xavier University of
                  Louisiana. He spent 18 years at CVS Health, rising from
                  pharmacy clerk to district leader overseeing multi-million
                  dollar operations across multiple states.
                </p>
                <p>
                  Then he left to build. He founded two AI companies: PRISM AI
                  Consultants and VersAssist LLC.
                </p>
                <p className="text-lg font-medium text-foreground">
                  &ldquo;I don&rsquo;t talk about AI. I build AI systems. 34
                  autonomous agents run my own business. I&rsquo;ve built
                  $350K-$700K worth of AI systems for clients at near-zero
                  marginal cost.&rdquo;
                </p>
                <p>
                  Every system PRISM delivers was proven internally first. The
                  agents, dashboards, and automations that run Jeff&rsquo;s
                  business are the same architecture his clients receive.
                </p>
                <p className="mt-2">
                  <a
                    href="https://drjeffbullock.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    Learn more about Dr. Jeff Bullock &rarr;
                  </a>
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-2 rounded-[var(--radius-lg)] bg-accent/15 blur-lg" />
                <Image
                  src="/images/jeff-bullock-headshot.jpg"
                  alt="Dr. Jeff Bullock, AI Systems Architect and founder of PRISM AI Consultants"
                  width={480}
                  height={480}
                  className="relative w-full rounded-[var(--radius-lg)] border-2 border-accent/20 object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Credibility Bar */}
      <Section className="border-y border-border bg-muted/20">
        <Container>
          <StatsBar
            stats={[
              { value: "18", label: "Years in Operations Leadership" },
              { value: "2", label: "AI Companies Founded" },
              { value: "34", label: "AI Systems Built" },
              { value: "200+", label: "Professionals Trained" },
            ]}
          />
        </Container>
      </Section>

      {/* The Execution Model */}
      <Section>
        <Container size="md">
          <h2 className="text-3xl font-bold tracking-tight">
            The Execution Model
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p className="text-lg">
              When you hire PRISM, you get me for strategy. My execution team of
              11 builds the systems we architect together.
            </p>
            <p className="text-lg">
              Every deliverable includes at least one AI-enhanced element. Our
              execution delivers 2x the output of traditional approaches
              because every team member uses AI tools.
            </p>
            <p>
              That means you get more output, faster turnaround, and higher
              quality for every dollar invested. This is not theory. It is how
              we operate every day.
            </p>
          </div>
        </Container>
      </Section>

      {/* The Team */}
      <Section className="border-t border-border bg-muted/20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">
            The Team
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Strategy from Jeff. Execution from a team that ships every week.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-accent">JB</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Dr. Jeff Bullock</h3>
                  <p className="text-sm text-accent font-medium">CEO &amp; AI Systems Architect</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    PharmD. 18 years CVS Health. Builds the architecture, leads strategy sessions, owns every client relationship.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-accent">SM</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Saleem</h3>
                  <p className="text-sm text-accent font-medium">Lead Developer</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Full-stack engineering. Builds the dashboards, automations, and integrations that run in client environments.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-accent">JM</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">James</h3>
                  <p className="text-sm text-accent font-medium">Chief of Staff</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Operations, scheduling, and campaign execution. Keeps the machine running while Jeff builds.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-accent">+8</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Execution Team</h3>
                  <p className="text-sm text-accent font-medium">Specialists</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Content, design, research, QA, and VA support. Every team member uses AI tools daily to deliver 2x output.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Community Involvement */}
      <Section className="border-t border-border bg-muted/10">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">
            Community Involvement
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Building AI systems is only part of the work. Jeff is deeply
            invested in the Lehigh Valley community and the organizations
            shaping its future.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communityInvolvements.map((item) => (
              <Card key={item.org}>
                <CardContent>
                  <Badge variant="accent" className="mb-3">
                    {item.role}
                  </Badge>
                  <p className="text-sm font-semibold text-foreground">
                    {item.org}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* PRISM Values */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">PRISM Values</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Five principles that guide every system we build and every
            relationship we maintain.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {prismValues.map((value) => (
              <Card key={value.letter}>
                <CardContent>
                  <span className="text-4xl font-extrabold text-accent">
                    {value.letter}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">
                    {value.word}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border bg-muted/20">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Ready to build?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Book a call and find out what 34 agents and a team of 11 can do
              for your business.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="accent" size="lg">
                  Book a Call
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
