import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

// Primary action = book the free audit (the live 0-10 audit is where Activations
// actually close). Direct Stripe buy is the secondary express lane for warm,
// already-sold buyers. This ordering follows the conversion research for a
// $1,500 "expensive and complicated" service: earn the call, don't force the buy.
const STRIPE_URL = "https://buy.stripe.com/4gMbJ2grK5KP7WNbXF5AQ0J";
const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";

// Canonical PRISM brand kit (2026-06-13): near-black #0A0A0A, hot-pink #FF1493
// accent, spectrum gradient blue->cyan->rose->amber->red-orange. Plus Jakarta Sans.
const SPECTRUM =
  "linear-gradient(135deg, #0099FF 0%, #00C2D1 28%, #FF4D8D 58%, #FFB347 82%, #FF4D2A 100%)";

export const metadata: Metadata = {
  title: "Get AI Installed In Your Business | PRISM Activation",
  description:
    "Activation is a done-with-you AI install. In three working sessions PRISM builds your website, social, automation, and brand film with you, and you walk out with AI running your business. Starts with a free audit. $1,500.",
  alternates: { canonical: "/activation" },
  openGraph: {
    title: "PRISM Activation: Get AI Installed In Your Business",
    description:
      "A done-with-you install, not a course. Three sessions, real systems, AI running your business in weeks. Starts with a free audit. $1,500.",
    url: "https://prismaiconsultants.com/activation",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center h-12 px-7 text-base font-semibold rounded-[10px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1493] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";
  const styles =
    variant === "primary"
      ? "text-white shadow-[0_0_40px_rgba(255,20,147,0.35)] hover:shadow-[0_0_56px_rgba(255,20,147,0.5)] hover:-translate-y-0.5"
      : "border border-[#262626] text-[#F5F5F4] hover:border-[#FF1493]/50 hover:bg-white/[0.03]";
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      style={
        variant === "primary"
          ? { background: "linear-gradient(135deg, #FF1493 0%, #FF4D2A 100%)" }
          : undefined
      }
    >
      {children}
    </a>
  );
}

// Primary CTA pair, reused so every section drives the same single action.
function CTAPair({ center = true }: { center?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row ${
        center ? "items-center justify-center" : "items-start"
      }`}
    >
      <CTAButton href={CALENDLY_URL}>Book your free AI audit</CTAButton>
      <CTAButton href={STRIPE_URL} variant="ghost">
        Ready now? Start for $1,500
      </CTAButton>
    </div>
  );
}

export default function ActivationPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F4]">
      {/* Minimal landing header (global nav/footer suppressed on this route) */}
      <header className="border-b border-[#171717]">
        <Container size="lg">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-heading text-xl font-extrabold tracking-tight">
              <Image src="/images/prism-logo.png" alt="PRISM AI" width={30} height={30} />
              <span>PRISM</span>
            </a>
            <a
              href={CALENDLY_URL}
              className="text-sm font-semibold text-[#FF6FB5] transition-colors hover:text-[#FF1493]"
            >
              Book your free audit
            </a>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 opacity-[0.22] blur-[110px]"
          style={{ background: SPECTRUM }}
        />
        <Container size="lg" className="relative">
          <div className="mx-auto max-w-3xl py-20 text-center md:py-28">
            <span className="inline-flex items-center rounded-full border border-[#262626] bg-white/[0.03] px-3 py-1 text-xs font-medium text-[#A3A3A3]">
              Done-with-you install. Not a course.
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
              You don&apos;t have an AI problem.
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: SPECTRUM }}>
                You have an install problem.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A3A3A3] md:text-xl">
              Everyone has access to AI now. Almost no one has it running their
              business. Activation is the install. In three working sessions PRISM
              builds the systems with you, and you walk out with AI live in your
              business. It starts with a free audit where we grade your business
              and show you exactly what we would build.
            </p>

            {/* proof ABOVE the CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#A3A3A3]">
              <span>
                <span className="font-bold text-[#F5F5F4]">750+</span> sessions
                delivered
              </span>
              <span className="hidden h-3 w-px bg-[#333] sm:inline-block" />
              <span>
                <span className="font-bold text-[#F5F5F4]">$350K-$700K+</span> in
                systems built
              </span>
              <span className="hidden h-3 w-px bg-[#333] sm:inline-block" />
              <span>Built with Dr. Jeff (PharmD)</span>
            </div>

            <div className="mt-7">
              <CTAPair />
            </div>

            {/* proof + reassurance BELOW the CTA (flanking lift) */}
            <p className="mt-5 text-sm text-[#737373]">
              The audit is free and there is no pressure. You walk out with AI
              running on your business, or PRISM keeps working at no extra cost
              until you do.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm italic text-[#D4D4D4]">
              &ldquo;I&apos;m converted.&rdquo;
              <span className="not-italic text-[#737373]"> CEO, Professional Services</span>
            </p>
          </div>
        </Container>
      </section>

      {/* STAT STRIP */}
      <section className="border-t border-[#171717] bg-[#0c0c0c]">
        <Container size="lg">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4">
            {[
              { n: "$350K-$700K+", l: "in AI systems delivered" },
              { n: "Days", l: "to ship, not months" },
              { n: "7-13x", l: "system value vs. price paid" },
              { n: "750+", l: "coaching sessions delivered" },
            ].map((s) => (
              <div key={s.l} className="bg-[#101010] p-6 text-center">
                <div
                  className="text-2xl font-extrabold md:text-3xl"
                  style={{ backgroundImage: SPECTRUM, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
                >
                  {s.n}
                </div>
                <div className="mt-1 text-xs text-[#A3A3A3]">{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* THE SHIFT */}
      <Section className="border-t border-[#171717]">
        <Container size="md">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#FF1493]">
              The real gap
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Knowing about AI is not the same as running it
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[#A3A3A3]">
              You have read the threads. You have tried the tools. And it still
              lives in a browser tab, separate from the work that actually pays
              you. The difference between a business that talks about AI and one
              that runs on it is not knowledge. It is the install. That is the one
              thing we do for you.
            </p>
          </div>
        </Container>
      </Section>

      {/* WHAT YOU WALK OUT WITH (real current deliverable stack) */}
      <Section className="border-t border-[#171717]">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              What you walk out with
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#A3A3A3]">
              Activation is hands-on. We build it with you in three working
              sessions, and it is still running the day after we are done.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              { t: "A live 0-to-10 audit of your business", d: "On the first call we grade your website and digital presence and show you exactly where the money is leaking." },
              { t: "A lead-capturing website", d: "Drafted by the end of week one. Built to turn visitors into booked calls and customers, not just look nice." },
              { t: "A social channel and a 4-week content calendar", d: "Set up and scheduled so you stay visible without thinking about it." },
              { t: "Automation that runs the busywork", d: "Booking, payment, and email capture wired together so leads stop slipping through the cracks." },
              { t: "A custom brand film and song", d: "An AI-produced video and an original track for your brand. The thing that makes people stop scrolling." },
              { t: "A sharper offer and pricing", d: "We rebuild what you sell and what you charge so the traffic we send actually converts." },
              { t: "Training on your core AI tools", d: "You and your team learn to run the systems we install, inside your own environment." },
              { t: "Everything you keep", d: "Recordings, materials, and every build stay yours after Activation ends." },
            ].map((item) => (
              <div key={item.t} className="rounded-2xl border border-[#1f1f1f] bg-[#111111] p-6 transition-colors hover:border-[#FF1493]/30">
                <div className="mb-4 h-1 w-10 rounded-full" style={{ background: SPECTRUM }} />
                <h3 className="text-lg font-bold">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">{item.d}</p>
              </div>
            ))}
          </div>

          {/* value anchor (market-comparable framing, honest) */}
          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-[#FF1493]/20 bg-[#120a10] p-6 text-center">
            <p className="text-lg text-[#F5F5F4]">
              A recent client&apos;s Activation produced a stack we would price
              around{" "}
              <span className="font-bold" style={{ backgroundImage: SPECTRUM, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                $22,000
              </span>{" "}
              on the open market. Theirs was $1,500.
            </p>
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS (real 3-session cadence) */}
      <Section className="border-t border-[#171717]">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Three sessions. AI running your business.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#A3A3A3]">
              One working hour each, about a week apart. We build live, in your
              environment, the whole way.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Audit and website", d: "We grade your business live, pick the bottleneck, and your lead-capturing website is drafted by the end of the week." },
              { n: "02", t: "Social and content", d: "We set up a social channel and build a 4-week content calendar so you show up consistently without the effort." },
              { n: "03", t: "Automation and what's next", d: "We wire up booking, payment, and email automation, hand you a custom brand film and song, sharpen your offer, and set your 90-day direction." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-[#1f1f1f] bg-[#111111] p-7">
                <div className="text-4xl font-extrabold" style={{ backgroundImage: SPECTRUM, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[#737373]">
            Your website is drafted by the end of week one. Activation is built
            around real revenue inside 90 days.
          </p>
        </Container>
      </Section>

      {/* PROOF: REAL BUILDS */}
      <Section className="border-t border-[#171717]">
        <Container size="lg">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#FF1493]">
              This is what we install
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Real builds, real businesses
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#A3A3A3]">
              Not slides. Working systems we built with owners like you, most of
              them in days.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              { t: "Law Firm Performance Dashboard", d: "A live dashboard tracking every attorney's KPIs, caseload, and revenue, pulling real data through an API. Built and deployed in 2 days.", v: "$15,000-$25,000 comparable", q: "Oh my God, holy moly. This is exactly what I wanted.", a: "Managing Partner" },
              { t: "Business Valuation Research Agent", d: "An AI agent that pulls comparable transactions and industry data and writes structured valuation research briefs automatically.", v: "$12,000-$20,000 comparable", q: "This saves me 4-5 hours per report.", a: "Business Valuator, M&A" },
              { t: "Strategic Plan, Built Live", d: "A complete strategic plan for a multi-billion dollar investment opportunity, built live in front of the CEO's leadership team in one session.", v: "$10,000-$15,000 comparable", q: "Work that normally takes weeks, delivered in one session.", a: "Leadership Team, Economic Development" },
              { t: "Clinical Literature Research Agent", d: "An AI agent that searches, summarizes, and synthesizes clinical literature so a practice stays current without hours of manual research.", v: "$8,000-$12,000 comparable", q: "", a: "" },
            ].map((b) => (
              <div key={b.t} className="flex flex-col rounded-2xl border border-[#1f1f1f] bg-[#111111] p-6 transition-colors hover:border-[#FF1493]/30">
                <h3 className="text-lg font-bold">{b.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">{b.d}</p>
                {b.q ? (
                  <p className="mt-4 border-l-2 border-[#FF1493] pl-3 text-sm italic text-[#D4D4D4]">
                    &ldquo;{b.q}&rdquo;
                    <span className="mt-1 block not-italic text-xs text-[#737373]">{b.a}</span>
                  </p>
                ) : null}
                <span className="mt-5 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(255,20,147,0.12)", color: "#FF6FB5" }}>
                  {b.v}
                </span>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] p-6 text-center">
            <p className="text-sm text-[#A3A3A3]">
              Dashboards, agents, automations, full applications, even a studio of
              playable games. The point is range.{" "}
              <a href="https://prismstudios.app" className="font-semibold text-[#FF6FB5] underline underline-offset-2 hover:text-[#FF1493]">
                See what we build at PRISM Studios
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* MID-PAGE CTA (flanked by proof) */}
      <Section className="border-t border-[#171717]">
        <Container size="md">
          <div className="text-center">
            <p className="mx-auto max-w-xl text-lg italic text-[#D4D4D4]">
              &ldquo;Almost fell off my seat.&rdquo;
              <span className="not-italic text-sm text-[#737373]"> Certified EOS Implementer</span>
            </p>
            <h2 className="mt-6 text-2xl font-extrabold md:text-3xl">
              Start with the free audit
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#A3A3A3]">
              We grade your business 0 to 10 and show you exactly what your
              Activation would build. You leave with clarity even if you never buy.
            </p>
            <div className="mt-7">
              <CTAPair />
            </div>
            <p className="mx-auto mt-6 max-w-xl text-lg italic text-[#D4D4D4]">
              &ldquo;You got me excited right now. That&apos;s dope.&rdquo;
              <span className="not-italic text-sm text-[#737373]"> Producer, Podcast</span>
            </p>
          </div>
        </Container>
      </Section>

      {/* WHO IT'S FOR (scope-based, never revenue-band) */}
      <Section className="border-t border-[#171717]">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Who Activation is for
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1f1f1f] bg-[#111111] p-7">
              <h3 className="text-lg font-bold text-[#F5F5F4]">This is for you if</h3>
              <ul className="mt-4 space-y-3 text-sm text-[#A3A3A3]">
                {[
                  "You run the business and you are tired of AI living on the sidelines.",
                  "You want it set up and working, not another course to get through.",
                  "You have a clear bottleneck you would pay to make disappear.",
                  "You move when something is in front of you and it works.",
                ].map((x) => (
                  <li key={x} className="flex gap-3"><span className="mt-1 text-[#FF1493]">&#9656;</span><span>{x}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] p-7">
              <h3 className="text-lg font-bold text-[#737373]">This is not for you if</h3>
              <ul className="mt-4 space-y-3 text-sm text-[#737373]">
                {[
                  "You want to watch videos and figure it out on your own later.",
                  "You are looking for the cheapest tool, not a working system.",
                  "You are not ready to give three working sessions to install it right.",
                ].map((x) => (
                  <li key={x} className="flex gap-3"><span className="mt-1">&#8226;</span><span>{x}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* GUARANTEE */}
      <Section className="border-t border-[#171717]">
        <Container size="md">
          <div className="relative overflow-hidden rounded-3xl border border-[#262626] p-10 text-center md:p-14" style={{ background: "radial-gradient(120% 120% at 50% 0%, rgba(255,20,147,0.10) 0%, rgba(10,10,10,0) 60%)" }}>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#FF1493]">The guarantee</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-snug md:text-3xl">
              You walk out of Activation with AI installed and running on your
              business, or PRISM keeps working at no additional cost until you do.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[#A3A3A3]">
              Your website live. Your automation working. Your first systems
              running. The promise is tied to installed and working, which is the
              part we control.
            </p>
          </div>
        </Container>
      </Section>

      {/* CREDIBILITY */}
      <Section className="border-t border-[#171717]">
        <Container size="lg">
          <div className="grid items-center gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-full max-w-[280px]">
              <div className="overflow-hidden rounded-2xl border border-[#1f1f1f]">
                <Image src="/images/jeff-bullock-portrait.jpg" alt="Dr. Jeff Bullock, PharmD" width={560} height={700} className="h-full w-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                You install it with Dr. Jeff and the PRISM team
              </h2>
              <p className="mt-5 text-lg text-[#A3A3A3]">
                Dr. Jeff Bullock (PharmD) and PRISM have delivered AI systems that
                run live inside real businesses. Activation puts that team directly
                into your environment for the install, so the systems are built
                right and you have a partner who has done it before.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {["Built with you, not for a slide deck", "Production systems, not demos", "A partner, not a vendor"].map((chip) => (
                  <span key={chip} className="rounded-full border border-[#262626] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[#A3A3A3]">{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PRICE + FINAL CTA */}
      <Section className="border-t border-[#171717]">
        <Container size="md">
          <div className="relative overflow-hidden rounded-3xl border border-[#262626] bg-[#111111] p-10 text-center md:p-14">
            <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-[320px] w-[640px] -translate-x-1/2 opacity-20 blur-[100px]" style={{ background: SPECTRUM }} />
            <div className="relative">
              <h2 className="text-3xl font-extrabold md:text-4xl">
                Get AI installed in your business
              </h2>
              <div className="mt-6 flex items-end justify-center gap-2">
                <span className="text-5xl font-extrabold md:text-6xl">$1,500</span>
              </div>
              <p className="mt-3 text-[#A3A3A3]">
                Three sessions, the full build, and the guarantee.
              </p>
              <p className="mt-2 font-medium text-[#F5F5F4]">
                Or split it: $750 today, $750 at week two. Work starts on the first payment.
              </p>
              <div className="mt-8">
                <CTAPair />
              </div>
              <p className="mt-5 text-sm text-[#737373]">
                Prefer to do it in person? In-person Activation is $2,000. Ask us on the audit call.
              </p>
              <p className="mt-3 text-sm font-medium text-[#FF6FB5]">
                PRISM takes a limited number of new Activations each month, because every one gets real install time.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-[#171717]">
        <Container size="md">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">Questions</h2>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-[#171717]">
            {[
              { q: "What is the free audit?", a: "A live working session where we grade your business 0 to 10 and show you exactly what your Activation would build. No pressure. You leave with clarity even if you never buy." },
              { q: "Can I split the payment?", a: "Yes. $750 to start and $750 at week two. We begin the moment the first payment clears." },
              { q: "Is this a course or coaching?", a: "Neither. It is a done-with-you install. Across three working sessions we build the real systems with you, in your business." },
              { q: "Do I need to be technical?", a: "No. You bring your business. We bring the build. The whole reason Activation works for non-technical owners is that PRISM installs and configures it for you." },
              { q: "How fast do I see something working?", a: "Your website is drafted by the end of week one, and Activation is built around real revenue inside 90 days." },
              { q: "What happens after Activation?", a: "Many owners move into Core, our ongoing AI partnership, once they feel what is possible. There is no obligation. Activation stands on its own." },
              { q: "What if it is not working when we finish?", a: "Then PRISM keeps working at no additional cost until it is installed and running. That is the guarantee." },
            ].map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-lg font-bold">{f.q}</h3>
                <p className="mt-2 text-[#A3A3A3]">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <CTAPair />
          </div>
        </Container>
      </Section>

      {/* Minimal footer */}
      <footer className="border-t border-[#171717] py-10">
        <Container size="lg">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#737373] sm:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/images/prism-logo.png" alt="PRISM AI" width={22} height={22} />
              <span>PRISM AI Consultants</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="/" className="transition-colors hover:text-[#F5F5F4]">Main site</a>
              <a href="/privacy" className="transition-colors hover:text-[#F5F5F4]">Privacy</a>
              <a href={CALENDLY_URL} className="transition-colors hover:text-[#F5F5F4]">Book your audit</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
