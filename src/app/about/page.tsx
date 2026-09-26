import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { MISSION, prismValues } from "@/data/values";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { StatsBar } from "@/components/ui/stats-bar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Dr. Jeff Bullock - AI Systems Architect",
  description:
    "Pharm.D. turned AI Systems Architect. Founder of 2 AI companies and creator of an estimated $350K to $700K in production AI system value for clients.",
};

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
        title="About Dr. Jeff Bullock"
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
                  Dr. Jeff Bullock holds a Pharm.D. from Xavier University of
                  Louisiana. He spent 18 years at CVS Health, rising from
                  pharmacy clerk to district leader overseeing multi-million
                  dollar operations across multiple states.
                </p>
                <p>
                  Then he left to build. He founded two AI companies, including
                  PRISM AI Consultants.
                </p>
                <p className="text-lg font-medium text-foreground">
                  &ldquo;I don&rsquo;t talk about AI. I build AI systems that run
                  my own business. I&rsquo;ve delivered $350K to $700K in AI
                  system value to clients, most built in days, not
                  months.&rdquo;
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
              { value: "$350K-$700K+", label: "In Est. Client System Value" },
              { value: "750+", label: "Coaching Sessions Delivered" },
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
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              {
                img: "/images/team/jeff.jpg",
                name: "Dr. Jeff Bullock",
                role: "CEO & AI Systems Architect",
                bio: "Pharm.D. 18 years CVS Health. Builds the architecture, leads strategy sessions, owns every client relationship.",
              },
              {
                img: "/images/team/saleem.jpg",
                name: "Saleem Raja",
                role: "Head of Operations",
                bio: "Runs day-to-day delivery and operations. Keeps every client account on deadline, on spec, and renewed.",
              },
              {
                img: "/images/team/james.jpg",
                name: "James Liu",
                role: "Chief of Staff",
                bio: "Operations, scheduling, and campaign execution. Keeps the machine running while Jeff builds.",
              },
              {
                img: "/images/team/jamie.jpg",
                name: "Jamie Calma",
                role: "Executive Assistant",
                bio: "Client coordination, scheduling, and content execution. Keeps sessions, calendars, and deliverables on track.",
              },
              {
                img: "/images/team/mythzkie.jpg",
                name: "Mythzkie Geronimo",
                role: "Voice & Video Production",
                bio: "Voice, music, and video production. Turns sessions and scripts into finished assets, and keeps every recording labeled and filed.",
              },
            ].map((m) => (
              <Card
                key={m.name}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <CardContent>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={m.img}
                        alt={m.name}
                        width={80}
                        height={80}
                        className="h-20 w-20 object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
                    <p className="text-sm text-accent font-medium">{m.role}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{m.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* PRISM Certified Consultants */}
      <Section className="border-t border-border bg-muted/20">
        <Container>
          <div className="max-w-2xl">
            <Badge variant="accent" className="mb-4">
              Now Certifying
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              PRISM Certified Consultants
            </h2>
            <p className="mt-4 text-muted-foreground">
              PRISM is scaling AI implementation the way it builds everything
              else: with proven operators on the ground. Our Certified
              Consultant program trains independent professionals to bring the
              full PRISM method to their own markets. Each consultant runs their
              own business and delivers the systems PRISM is known for, backed
              by our team and our tools.
            </p>
            <p className="mt-4">
              <Link
                href="/certified"
                className="font-medium text-accent hover:underline"
              >
                Learn about becoming a Certified PRISM Consultant &rarr;
              </Link>
            </p>
          </div>

          {/* Featured consultant: Dan Garrett (Seat #1) */}
          <div className="mt-12 grid gap-10 md:grid-cols-5 md:items-center">
            <div className="md:col-span-2">
              <div className="relative mx-auto max-w-xs md:max-w-none">
                <div className="absolute -inset-2 rounded-[var(--radius-lg)] bg-accent/15 blur-lg" />
                <Image
                  src="/images/consultants/dan-garrett.jpg"
                  alt="Dan Garrett, Certified PRISM AI Consultant"
                  width={800}
                  height={800}
                  className="relative aspect-square w-full rounded-[var(--radius-lg)] border-2 border-accent/20 object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <Badge variant="accent" className="mb-3">
                Certified PRISM AI Consultant &middot; Seat #1
              </Badge>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Dan Garrett
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Lehigh Valley, PA &middot; BNI Bethlehem One
              </p>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>
                  Dan brings four decades of B2B sales leadership to the PRISM
                  network. He spent his career building and scaling companies,
                  from VP of Sales and Marketing roles to leading global sales
                  organizations, selling by live demonstration the entire way.
                </p>
                <p>
                  Now he does the same thing with AI. Dan helps Lehigh Valley
                  business owners put AI to work in the rooms he already knows,
                  turning real conversations into real workflows. Not theory,
                  installed.
                </p>
                <p className="font-medium text-foreground">
                  If you run a local business and want AI built into it, not
                  just explained, Dan is your first call in the Valley.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="accent">Work with Dan</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Featured consultant: Kwame Lewis (Seat #2) */}
          <div className="mt-16 grid gap-10 border-t border-border pt-16 md:grid-cols-5 md:items-center">
            <div className="md:col-span-2">
              <div className="relative mx-auto max-w-xs md:max-w-none">
                <div className="absolute -inset-2 rounded-[var(--radius-lg)] bg-accent/15 blur-lg" />
                <Image
                  src="/images/consultants/kwame-lewis.jpg"
                  alt="Kwame Lewis, Certified PRISM AI Consultant"
                  width={800}
                  height={800}
                  className="relative aspect-square w-full rounded-[var(--radius-lg)] border-2 border-accent/20 object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <Badge variant="accent" className="mb-3">
                Certified PRISM AI Consultant &middot; Seat #2
              </Badge>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Kwame Lewis
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Easton, PA &middot; BNI Easton I &middot; Trades
              </p>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>
                  Kwame leads the trades lane for PRISM. Through his company
                  TaskRipple he works with contractors and home service
                  businesses on the handoff between the field and the office,
                  the point where a finished job sits unbilled because the
                  information never made it back in time.
                </p>
                <p>
                  Now he brings the PRISM method into those same shops. He sits
                  with the owner, finds where the work is getting stuck, and
                  installs AI into the day to day so completed jobs turn into
                  invoices instead of paperwork.
                </p>
                <p className="font-medium text-foreground">
                  If you run a trades or home services business and the office
                  is always catching up to the field, Kwame is your call.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="accent">Work with Kwame</Button>
                </Link>
              </div>
            </div>
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our mission</p>
          <p className="mt-3 max-w-3xl text-2xl font-bold leading-snug tracking-tight md:text-3xl">{MISSION}</p>
          <h2 className="mt-12 text-3xl font-bold tracking-tight">PRISM Values</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The name is the promise. Every letter is a standard we hold ourselves to on every engagement.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {prismValues.map((value) => (
              <Card key={value.letter}>
                <CardContent>
                  <span className="text-4xl font-extrabold" style={{ color: value.color }}>
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
              Book a call and find out what Dr. Jeff and a team of 11 can do
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
