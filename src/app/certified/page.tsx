import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Become a Certified PRISM AI Consultant",
  description:
    "Turn your domain expertise into AI implementation income. PRISM certifies independent consultants, sets up your network, gives you the method and the delivery team, and pays you to build.",
};

const includes = [
  {
    title: "Your networking membership",
    body: "We place you inside a proven referral pipeline and cover your first-year membership. You are surrounded by an active business ecosystem from day one, not cold-starting alone.",
  },
  {
    title: "Chamber and event access",
    body: "Select chamber of commerce and local business events. The rooms you would need to be in anyway, handled for you.",
  },
  {
    title: "A support assistant",
    body: "A dedicated assistant for follow-up, pipeline tracking, and admin, so you stay in front of people instead of buried in busywork.",
  },
  {
    title: "The PRISM method and tools",
    body: "Our implementation frameworks, workflow libraries, transcript intelligence, and the certification itself. The system that lets one person deliver what used to take a firm.",
  },
  {
    title: "The PRISM brand behind you",
    body: "You walk into every room as a Certified PRISM AI Consultant. The trust is already built. You carry it.",
  },
  {
    title: "A delivery team that builds with you",
    body: "When you close, our team builds the deliverables alongside you. You sell and guide. We help you ship.",
  },
];

const earn = [
  {
    pct: "50%",
    label: "Client engagements you close",
    body: "Every activation and retainer you bring in, split with you fifty-fifty.",
  },
  {
    pct: "70%",
    label: "Workshops and speaking",
    body: "PRISM-booked workshops and speaking engagements pay out the majority to you.",
  },
  {
    pct: "100%",
    label: "Your own outside work",
    body: "Speaking, books, and advisory you source on your own, outside the PRISM brand, stays yours.",
  },
];

const steps = [
  {
    title: "Book a fit call",
    body: "We confirm this is right for both of us before anyone commits.",
  },
  {
    title: "Get certified and equipped",
    body: "The method, the tools, the brand, a support assistant, and your place in the network.",
  },
  {
    title: "Land your first client",
    body: "You sell and guide. Our team builds the deliverables alongside you.",
  },
  {
    title: "Build your book",
    body: "Stack clients, run workshops, take the stage. The splits pay the person doing the work.",
  },
];

const faqs = [
  {
    q: "Do I need to be technical?",
    a: "No. You bring the industry and the relationships. Our team builds the AI systems. You sell and you own the relationship.",
  },
  {
    q: "Who actually does the work?",
    a: "You guide and own the client relationship. Our delivery team builds the deliverables alongside you, so you are never the bottleneck.",
  },
  {
    q: "Is the $5,000 a recurring fee?",
    a: "It covers your full first year. We are transparent about year-two terms before you ever commit.",
  },
  {
    q: "Do I keep my own business?",
    a: "Yes. You own your business outright and carry the PRISM brand. You are not an employee.",
  },
  {
    q: "What if I have never sold AI before?",
    a: "You do not need to have. You need to know your field and your people. We bring the method, the demos, and the team.",
  },
  {
    q: "How many consultants do you take?",
    a: "A small number at a time, because the team builds for every one of them.",
  },
];

export default function CertifiedPage() {
  return (
    <>
      <PageHeader
        title="Become a Certified PRISM AI Consultant"
        description="Turn what you already know into AI implementation income. You own your business. PRISM gives you the method, the network, the team, and the brand."
      />

      {/* Brand hero band */}
      <div className="relative w-full overflow-hidden border-b border-border">
        <Image
          src="/images/certified/hero-prism.jpg"
          alt="A beam of white light refracting through a prism into a full spectrum of color"
          width={1600}
          height={893}
          priority
          className="h-[clamp(220px,38vw,440px)] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* The model */}
      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-5 md:items-center">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight">
                PRISM turns domain expertise into implementation
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="text-lg">
                  You already understand the workflows, the language, and the
                  real pain points of your field. That is the hard part, and it
                  is the part that cannot be faked.
                </p>
                <p>
                  PRISM supplies the rest. We certify you, set up your network,
                  hand you the frameworks and workflow libraries, and put a
                  delivery team behind you. You bring the trust and the
                  relationships. We make sure every client walks away with
                  something built, not just explained.
                </p>
                <p className="text-lg font-medium text-foreground">
                  You run your own business. You carry the PRISM brand. You keep
                  the majority of what you earn.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-2 rounded-[var(--radius-lg)] bg-accent/15 blur-lg" />
                <Image
                  src="/images/certified/hero-network.jpg"
                  alt="A prism refracting light into a connected network of nodes"
                  width={1200}
                  height={669}
                  className="relative w-full rounded-[var(--radius-lg)] border border-border object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What the investment covers */}
      <Section className="border-y border-border bg-muted/20">
        <Container>
          <div className="max-w-2xl">
            <Badge variant="accent" className="mb-4">
              Year One: $5,000
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              What your certification covers
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most of this is what you would spend to launch a serious practice
              anyway. We bundle it, set it up for you, and put you to work. The
              investment is your first year, all in.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <Card key={item.title}>
                <CardContent>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Four steps from interested to your first client.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Card key={s.title}>
                <CardContent>
                  <span className="text-sm font-bold text-accent">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How you earn */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">How you earn</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Clients, activations, workshops, and speaking. Four paths to income,
            and the split is built to pay the person doing the work.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {earn.map((item) => (
              <Card key={item.label}>
                <CardContent>
                  <span className="text-4xl font-extrabold text-accent">
                    {item.pct}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold tracking-tight">
              The four paths, plainly
            </h3>
            <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-foreground">
                  Activations <span className="text-accent">the door</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A paid entry package, a few working sessions and real
                  deliverables. You source it and run it, and you keep half. The
                  first close that proves value.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Clients{" "}
                  <span className="text-accent">the recurring engine</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Activations grow into an ongoing monthly retainer. You keep
                  half of it every month the client stays. This is where your
                  income compounds.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Workshops <span className="text-accent">one to many</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill a room instead of one seat. You drive attendance and
                  deliver, and the split flips to seventy percent in your favor.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Speaking <span className="text-accent">top of the funnel</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Paid talks at seventy percent to you, and every stage puts
                  activations and workshop seats in front of a new audience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[var(--radius-lg)] border border-border bg-muted/20 p-6">
            <p className="text-sm font-semibold text-foreground">
              Run the math yourself
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              One client you close and convert is a $1,500 activation plus a
              $2,500 monthly retainer. At the fifty-fifty split that is $750 up
              front and $1,250 every month they stay. Stack a few and you can see
              how a year adds up. What you actually earn depends on you, your
              market, and your effort. We make no income promises and no
              guarantees.
            </p>
          </div>
        </Container>
      </Section>

      {/* Proof: Dan */}
      <Section className="border-t border-border bg-muted/20">
        <Container size="md">
          <Badge variant="accent" className="mb-4">
            The proof
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Our first consultant is already closing
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p className="text-lg">
              Dan Garrett is the founding Certified PRISM AI Consultant. Four
              decades in B2B sales, now bringing AI implementation to Lehigh
              Valley businesses, and he closed his first client in his opening
              weeks.
            </p>
            <p>
              That is the whole point of the program. A skilled operator, using
              the PRISM system, selling and converting real clients without Jeff
              in the room. Dan is the blueprint. You could be next.
            </p>
            <p>
              <Link
                href="/about"
                className="font-medium text-accent hover:underline"
              >
                Meet Dan on our team page &rarr;
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section>
        <Container size="md">
          <h2 className="text-3xl font-bold tracking-tight">Who this is for</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              This is for experienced operators who know an industry cold and
              want to put AI to work in it. Sales leaders, consultants, advisors,
              and domain experts with real relationships and the drive to build
              something of their own.
            </p>
            <p className="font-medium text-foreground">
              It is not for you if you want something to watch, a side project,
              or someone to hand you customers.
            </p>
            <p>
              This is a business you run, with PRISM standing behind you.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border bg-muted/20">
        <Container size="md">
          <h2 className="text-3xl font-bold tracking-tight">
            Questions, answered
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-base font-bold text-foreground">{f.q}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border bg-muted/10">
        <Container size="sm">
          <div className="text-center">
            <Badge variant="accent" className="mb-4">
              Founding cohort open
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight">
              Ready to carry the brand?
            </h2>
            <p className="mt-3 text-muted-foreground">
              We onboard a small number of consultants at a time, because the
              team builds for every one of them. Early consultants lock in their
              industry and territory first. Tell us about your background and the
              market you want to work, and if it is a fit we will walk you
              through the program.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="accent" size="lg">
                  Book a Fit Call
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
