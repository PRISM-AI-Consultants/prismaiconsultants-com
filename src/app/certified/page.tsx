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
    "Turn your domain expertise into AI implementation income. PRISM certifies independent consultants, places you in a referral network, gives you the method and the delivery team, and puts a closer on your calls. Certified is earned, not bought.",
};

const kit = [
  {
    title: "Your networking membership, year one",
    body: "We place you inside a proven referral pipeline and cover your first-year membership. You are surrounded by an active business ecosystem from day one instead of cold-starting alone.",
  },
  {
    title: "Your micro-site",
    body: "A real presence of your own, built for you, pointed at the market you work.",
  },
  {
    title: "Branding and business cards",
    body: "The materials you need to walk into a room and be taken seriously. Handled before your first meeting.",
  },
  {
    title: "Your tools, wired up",
    body: "Your connectors and AI stack configured and working, so the system runs the way it is supposed to from the start.",
  },
  {
    title: "Onboarding",
    body: "We get you set up and pointed at the work, rather than handing you a login and wishing you luck.",
  },
];

const behind = [
  {
    title: "A dedicated person who builds it with you",
    body: "Not a queue and not a ticket system. You get an assigned team member who builds the deliverables for your clients. You are never the bottleneck and you never have to become technical.",
  },
  {
    title: "A trained closer on your calls",
    body: "You do not close alone. On your thirty-minute strategy calls, a trained closer from our team is on with you, naming the price and handling objections while you stay in the room.",
  },
  {
    title: "Coaching off your own conversations",
    body: "We cover your transcript seat. Your real calls get reviewed and coached, so you improve from your own tape instead of generic advice. Nobody sits in on your meetings.",
  },
  {
    title: "The PRISM method and tools",
    body: "Our implementation frameworks, workflow libraries, and transcript intelligence. The system that lets one person deliver what used to take a firm.",
  },
  {
    title: "The PRISM brand behind you",
    body: "You walk into every room carrying a brand that is already trusted, and you run your own business while you do it.",
  },
  {
    title: "A weekly room with the other consultants",
    body: "One standing call a week where real deals get worked. Not a webinar. Your actual pipeline, with people doing the same thing you are.",
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
    body: "PRISM-booked workshops and speaking engagements you deliver pay out the majority to you.",
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
    title: "Get equipped and start earning",
    body: "You come on as a PRISM AI Consultant in training and you can source and earn from day one. You just do it with a net under you.",
  },
  {
    title: "Sell it, then teach it",
    body: "You run the one-to-ones and the strategy call with a closer beside you. When they say yes, you run all three sessions yourself while our team builds behind you.",
  },
  {
    title: "Earn the certification",
    body: "Certified is earned, not bought. Do the reps, prove you can run a full cycle, and the badge is yours. Usually sixty to ninety days.",
  },
];

const faqs = [
  {
    q: "Do I need to be technical?",
    a: "No. You bring the industry and the relationships. Our team builds the AI systems. You sell it, you teach it, and you own the relationship.",
  },
  {
    q: "Who actually does the work?",
    a: "Our delivery team builds every deliverable. You are in the room for all three client sessions, teaching them how to run it. Selling is half the job and teaching is the other half.",
  },
  {
    q: "Am I certified as soon as I pay?",
    a: "No, and that is the point. You start as a PRISM AI Consultant in training, earning from day one with support on your calls. You earn the full certification by doing the work and proving you can run a cycle yourself. A badge you can buy is not worth carrying.",
  },
  {
    q: "Is the $5,000 a recurring fee?",
    a: "It covers your full first year. We are transparent about year-two terms before you ever commit.",
  },
  {
    q: "Do I keep my own business?",
    a: "Yes. You own your business outright and carry the PRISM brand. You are not an employee, and we do not tell you how to run your week.",
  },
  {
    q: "What if I have never sold AI before?",
    a: "You do not need to have. You need to know your field and your people. We bring the method, the demos, the team, and a closer who is on the call with you.",
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
        description="Turn what you already know into AI implementation income. You own your business. PRISM gives you the method, the network, the team, and the brand. The certification you earn."
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
                  PRISM supplies the rest. We certify you, place you in a
                  referral network, hand you the frameworks and workflow
                  libraries, and put a delivery team behind you. You bring the
                  trust and the relationships. We make sure every client walks
                  away with something built, not just explained.
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
              investment is your first year, all in. It does not cover your gas,
              your travel, or your hotels. Those are yours, the same as any
              business you own.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kit.map((item) => (
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

      {/* What stands behind you */}
      <Section>
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">
              And this is what stands behind you
            </h2>
            <p className="mt-4 text-muted-foreground">
              The kit gets you launched. This is the part that keeps you in
              business, and it does not stop after year one.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {behind.map((item) => (
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
      <Section className="border-y border-border bg-muted/20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Four steps from interested to certified.
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

      {/* Certified is earned */}
      <Section>
        <Container size="md">
          <Badge variant="accent" className="mb-4">
            The certification
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Certified is earned, not bought
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p className="text-lg">
              Plenty of programs hand you a badge when your card clears. Ours
              does not, because a credential anyone can buy is not worth
              carrying into a room.
            </p>
            <p>
              You come on as a{" "}
              <span className="font-medium text-foreground">
                PRISM AI Consultant, in training
              </span>
              . From day one you can work your rooms, source clients, and earn.
              You just do it with support on your calls and our team building
              behind you.
            </p>
            <p>
              You earn the full{" "}
              <span className="font-medium text-foreground">
                Certified PRISM AI Consultant
              </span>{" "}
              badge by doing the actual work: your recorded one-to-ones, the
              coursework and the AI tool certifications, co-delivering an
              activation, closing a client with support, and then running one
              full cycle on your own and winning it. Most of that happens inside
              sixty to ninety days, and every rep of it is paid work on your own
              pipeline.
            </p>
            <p className="font-medium text-foreground">
              When you finally say you are certified, it will be true, and the
              room will feel the difference.
            </p>
          </div>
        </Container>
      </Section>

      {/* What the work actually is */}
      <Section className="border-y border-border bg-muted/20">
        <Container size="md">
          <h2 className="text-3xl font-bold tracking-tight">
            What the work actually is
          </h2>
          <p className="mt-4 text-muted-foreground">
            No mystery, no motivational fog. Here is the job.
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <p className="font-semibold text-foreground">
                You do one-to-ones. A lot of them.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ten a week is decent. Twenty a week is where it compounds. You
                never talk money in a one-to-one. Its only job is to earn a
                second meeting.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Then a thirty-minute strategy call, and you are not alone on it.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                That is where the money gets discussed, and a trained closer from
                our team is on the call with you. You do not have to be a great
                closer on day one, because you are not closing by yourself.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                When they say yes, you teach.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Our team builds every deliverable. You run all three client
                sessions yourself and teach them how to operate what we built.
                Selling is half the job. Teaching is the other half, and it is
                the half that turns one close into a client who stays.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                There is exactly one bar.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Two activations closed in your first ninety days. That is the
                only requirement we hold you to. We do not dictate your hours or
                your calendar. You own the business, so you run your week.
              </p>
            </div>
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
                  A paid entry package, three working sessions and real
                  deliverables. You source it, close it, and teach it, and you
                  keep half. The first close that proves value.
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
                  income compounds, and it is the reward for being the person who
                  taught them.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Workshops <span className="text-accent">one to many</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill a room instead of one seat. You drive attendance and
                  deliver, and the split flips to seventy percent in your favor.
                  It is the best split in the program on purpose.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Speaking <span className="text-accent">top of the funnel</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Paid talks at seventy percent to you, and every stage puts
                  activations and workshop seats in front of a new audience. We
                  teach it and we pay for it. We never make you do it.
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
              Valley businesses, and he has closed real paying clients out of his
              own rooms and his own relationships.
            </p>
            <p>
              That is the whole point of the program. A skilled operator works
              the network, the PRISM system does the rest, and the client walks
              away with something built. Dan is the blueprint. You could be next.
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
            <p>
              You take one lane and you lead it. Each consultant works a single
              vertical, and the playbook you build in it becomes part of the
              PRISM method.
            </p>
            <p className="font-medium text-foreground">
              It is not for you if you want something to watch, a side project,
              or someone to hand you customers.
            </p>
            <p>This is a business you run, with PRISM standing behind you.</p>
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section className="border-t border-border bg-muted/20">
        <Container size="md">
          <h2 className="text-3xl font-bold tracking-tight">How we work</h2>
          <p className="mt-4 text-muted-foreground">
            Five words we actually hold each other to. They spell the name.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-foreground">Positivity</p>
              <p className="mt-1 text-sm text-muted-foreground">
                People buy from someone they want to be around. Urgency is a
                gain, never a threat.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Resilience</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Most rooms will not turn into a client. You go back next week
                anyway.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Innovation</p>
              <p className="mt-1 text-sm text-muted-foreground">
                The tools change constantly. Staying current is part of the job,
                not a bonus.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Service</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Give first in every room. Service does not stop when the payment
                clears.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Mastery</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Mastery is not what you know. It is what you can transfer to
                someone else.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border">
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
              team builds for every one of them. Early consultants are first into
              their vertical and help write the playbook for it. Tell us about
              your background and the market you want to work, and if it is a fit
              we will walk you through the program.
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
