import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

// Activation v2 (2026-09-30). Self-serve: proof first (call the demo line), then buy,
// then Session 1 is booked on /activation/start the same minute. Built from the
// 90-day Activation audit: clients pay for the three sessions, and proof closes.
// Stripe links verified live 2026-09-08 (activation_stripe_link.md). Never use
// 4gMbJ2grK5KP7WNbXF5AQ0J here: its checkout reads "AI group strategy session".
const STRIPE_URL = "https://buy.stripe.com/aFa3cwdfy7SX2Ct4vd5AQ19";
const STRIPE_SPLIT_URL = "https://buy.stripe.com/4gMcN64J21uz7WN4vd5AQ1j";
const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";
const DEMO_TEL = "tel:+16102980516";
const DEMO_DISPLAY = "(610) 298-0516";

const SPECTRUM =
  "linear-gradient(135deg, #0099FF 0%, #00C2D1 28%, #FF4D8D 58%, #FFB347 82%, #FF4D2A 100%)";

export const metadata: Metadata = {
  title: "PRISM Activation | Run Your Business With AI in Three Sessions",
  description:
    "PRISM installs your AI front office and AI back office, and teaches you to run both, in three working sessions. Everything we promise is live by session three, or we keep working until it is. Starts the day you join. $1,500.",
  alternates: { canonical: "/activation" },
  openGraph: {
    title: "PRISM Activation: your AI front office and back office, installed in three sessions",
    description:
      "Learn to run your business with AI on your own work. We install one system and prove it moved. Starts today. $1,500.",
    url: "https://prismaiconsultants.com/activation",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function CTA({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center h-12 px-7 text-base font-semibold rounded-[10px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1493] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";
  const styles =
    variant === "primary"
      ? "text-white shadow-[0_0_40px_rgba(255,20,147,0.30)] hover:-translate-y-0.5"
      : "border border-[#2a2a2a] text-[#F5F5F4] hover:border-[#FF1493]/50 hover:bg-white/[0.03]";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
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

function CTAPair() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <CTA href={STRIPE_URL}>Start today for $1,500</CTA>
      <CTA href={DEMO_TEL} variant="ghost">
        Hear it first: call {DEMO_DISPLAY}
      </CTA>
    </div>
  );
}

const PILLARS = [
  {
    word: "Capture",
    color: "#0DACBD",
    line: "Get your business into the AI.",
    items: [
      "A notetaker on every call, in person and on the phone",
      "Your notes, documents and spreadsheets",
      "An AI front office that answers every call you miss",
    ],
  },
  {
    word: "Connect",
    color: "#BE71B8",
    line: "Hook it to the tools you already use.",
    items: [
      "Email, calendar and drive",
      "Your meeting notes, so it remembers every conversation",
      "Your CRM or your books, whatever you run on",
    ],
  },
  {
    word: "Direct",
    color: "#FC7C17",
    line: "Learn to actually use it.",
    items: [
      "Think of AI as a team of experts, and ask harder questions",
      "The five steps to a prompt that works",
      "Talk to it instead of typing",
    ],
  },
];

const SESSIONS = [
  {
    n: "01",
    t: "Capture and Connect",
    d: "We write down where your business stands today, connect your AI to your real accounts, and pick the one system we install for you.",
  },
  {
    n: "02",
    t: "Direct",
    d: "Your hands, your real work. You learn to prompt and talk to it, use it on two live jobs, and your system goes live.",
  },
  {
    n: "03",
    t: "Prove it",
    d: "You run it on your own, on a job we have never seen. Your number from session one goes next to today's.",
  },
];

// Every person here is CLEARED in the consent registry (checked 2026-09-30) and every
// video was confirmed embeddable via YouTube oEmbed the same day.
const LEAD_VIDEO = { id: "D98lM6UZGD8", who: "Ryan Shepherd", what: "Did we deliver? Her Activation, in her words." };
const VIDEOS = [
  { id: "qRvjRX7TliE", who: "Dr. Will Brown", what: "Client testimonial" },
  { id: "EtgQkByad_I", who: "Paula and Bill Harris", what: "Financial advisory, the whole team on AI" },
  { id: "i18jie5evzY", who: "Aaron Kromer", what: "Real estate, lead conversion" },
  { id: "aUIm-y6Wb6M", who: "Michael Olaiya", what: "Real estate, operations" },
  { id: "daB575Eu954", who: "Andrea Mosley", what: "Grant funding, faster" },
];

const OFFICES = [
  {
    tag: "Handles your customers",
    name: "Your AI front office",
    color: "#0DACBD",
    items: [
      "Answers every call in plain conversation, day and night, and gets callers booked",
      "A website built to book calls and capture leads, live on your own domain",
      "Every caller and lead logged in your CRM, with a summary to your team",
    ],
    proves: "Calls answered that used to hit voicemail",
  },
  {
    tag: "Handles your paperwork",
    name: "Your AI back office",
    color: "#FC7C17",
    items: [
      "Connected to your books or your CRM, so you can ask where you stand any day",
      "Agents on a schedule doing the routine work: the Monday money report, follow-ups, quotes, invoice reminders",
      "In real estate: who is hot, who you haven't called, and a reply drafted for each one",
    ],
    proves: "Hours back, and revenue against your goal",
  },
];

export default function ActivationPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F4]">
      <header className="border-b border-[#171717]">
        <Container size="lg">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-heading text-xl font-extrabold tracking-tight">
              <Image src="/images/prism-logo.png" alt="PRISM AI" width={30} height={30} />
              <span>PRISM</span>
            </a>
            <a href={DEMO_TEL} className="text-sm font-semibold text-[#FF6FB5] transition-colors hover:text-[#FF1493]">
              Call {DEMO_DISPLAY}
            </a>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 opacity-[0.20] blur-[110px]" style={{ background: SPECTRUM }} />
        <Container size="lg" className="relative">
          <div className="mx-auto max-w-3xl py-20 text-center md:py-28">
            <span className="inline-flex items-center rounded-full border border-[#262626] bg-white/[0.03] px-3 py-1 text-xs font-medium text-[#A3A3A3]">
              Starts the day you join
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight md:text-6xl">
              Your AI front office and back office.
              <br />
              <span style={{ color: "#FF6A4D" }}>Installed in three sessions.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A3A3A3] md:text-xl">
              Your front office handles your customers. Your back office handles
              your paperwork. We install both, then teach you to run them on your
              own real work. Live by session three, guaranteed.
            </p>
            <div className="mt-9">
              <CTAPair />
            </div>
            <p className="mt-5 text-sm text-[#8a8a8a]">
              Call the number and our AI front office answers as if it were your
              business. That is the system you get.
            </p>
          </div>
        </Container>
      </section>

      {/* HEAR IT FIRST */}
      <section className="border-y border-[#171717] bg-[#0d0d0d]">
        <Container size="lg">
          <div className="grid items-center gap-8 py-12 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#FF1493]">Try it before you buy</p>
              <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
                Call {DEMO_DISPLAY}. Tell it what your business does.
              </h2>
              <p className="mt-3 max-w-2xl text-[#A3A3A3]">
                For a minute or two it answers as your front office would. It
                doesn&apos;t take the human out of the loop. It takes the
                voicemail out.
              </p>
            </div>
            <CTA href={DEMO_TEL}>Call now</CTA>
          </div>
        </Container>
      </section>

      {/* WHAT THE AI FRONT OFFICE DOES */}
      <Section className="border-b border-[#171717]">
        <Container size="lg">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#FF1493]">What you get installed</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">This isn&apos;t a chatbot. It&apos;s an AI front office.</h2>
            <p className="mt-4 text-[#A3A3A3]">
              A chatbot reads from a script. Your AI front office is connected to
              your business, so it can actually do the work.
            </p>
          </div>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Talks like a person", d: "Plain conversation. No \"press 1.\" Callers ask what they want, how they want." },
              { t: "Knows your business", d: "Your services, hours, prices and policies, from a fact sheet we build with you and keep current." },
              { t: "Captures every caller", d: "Name, what they need and how urgent it is, straight into your CRM with a summary." },
              { t: "Gets them booked", d: "Sends your booking link and confirms the details, so the next step is already set." },
              { t: "Hands off to your people", d: "Tells your team who to call back first, with the whole conversation in hand." },
              { t: "Gets better every week", d: "Every call is reviewed and the lessons go back in, so it sharpens with use." },
            ].map((c) => (
              <div key={c.t} className="border-t border-[#262626] pt-5">
                <dt className="text-lg font-bold">{c.t}</dt>
                <dd className="mt-2 text-[#A3A3A3]">{c.d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-[#8a8a8a]">The same assistant can live on your website too, so visitors can talk or type to it.</p>
        </Container>
      </Section>

      {/* SEE IT WORK: real clients, on camera */}
      <Section className="border-b border-[#171717]">
        <Container size="lg">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#FF1493]">See it work</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Don&apos;t take our word for it. Take theirs.</h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <figure>
              <div className="aspect-video overflow-hidden rounded-2xl border border-[#1f1f1f] bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${LEAD_VIDEO.id}?rel=0`}
                  title={`${LEAD_VIDEO.who}: ${LEAD_VIDEO.what}`}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </div>
              <figcaption className="mt-3">
                <span className="font-bold">{LEAD_VIDEO.who}</span>
                <span className="text-[#A3A3A3]"> · {LEAD_VIDEO.what}</span>
              </figcaption>
            </figure>
            <ul className="grid grid-cols-2 gap-4">
              {VIDEOS.map((v) => (
                <li key={v.id}>
                  <a href={`https://youtu.be/${v.id}`} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-[#1f1f1f] bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                        alt={`${v.who} testimonial`}
                        className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                        loading="lazy"
                      />
                      <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(135deg, #FF1493 0%, #FF4D2A 100%)" }}>
                        <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden><path d="M0 0l14 8-14 8z" fill="currentColor" /></svg>
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-bold">{v.who}</div>
                    <div className="text-xs text-[#8a8a8a]">{v.what}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* FRAMEWORK */}
      <Section className="border-b border-[#171717]">
        <Container size="lg">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#A3A3A3]">How we teach it</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Capture. Connect. Direct.</h2>
            <p className="mt-4 text-[#A3A3A3]">
              Most people use AI like an assistant that is decent with emails. We
              set it up the way it actually works, in this order.
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
            {PILLARS.map((p, i) => (
              <div key={p.word} className={`md:px-8 ${i > 0 ? "md:border-l md:border-[#1f1f1f]" : "md:pl-0"}`}>
                <h3 className="text-3xl font-extrabold" style={{ color: p.color }}>{p.word}</h3>
                <p className="mt-3 text-lg font-semibold">{p.line}</p>
                <ul className="mt-5 space-y-3 text-[#A3A3A3]">
                  {p.items.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-[11px] h-[3px] w-3 shrink-0" style={{ background: p.color }} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SESSIONS */}
      <Section className="border-b border-[#171717]">
        <Container size="lg">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">Three working sessions. About three weeks.</h2>
            <p className="mt-4 text-[#A3A3A3]">
              One hour each, on Zoom, with your consultant. You drive. The team
              builds between sessions.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {SESSIONS.map((s) => (
              <li key={s.n} className="border-t-2 border-[#262626] pt-6">
                <div className="text-sm font-bold tracking-widest text-[#FF6A4D]">SESSION {s.n}</div>
                <h3 className="mt-2 text-xl font-bold">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-[#A3A3A3]">{s.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* THE TWO OFFICES */}
      <Section className="border-b border-[#171717]">
        <Container size="lg">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">What we install for you</h2>
            <p className="mt-4 text-[#A3A3A3]">Two systems, set up for your business, and each one keeps its own score.</p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {OFFICES.map((o) => (
              <div key={o.name} className="border-t-2 pt-6" style={{ borderColor: o.color }}>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: o.color }}>{o.tag}</div>
                <h3 className="mt-2 text-2xl font-extrabold">{o.name}</h3>
                <ul className="mt-5 space-y-3 text-[#A3A3A3]">
                  {o.items.map((x) => (
                    <li key={x} className="flex gap-3"><span className="mt-[11px] h-[3px] w-3 shrink-0" style={{ background: o.color }} /><span>{x}</span></li>
                  ))}
                </ul>
                <p className="mt-6 text-sm"><span className="block text-xs font-bold uppercase tracking-widest text-[#6b6b6b]">It proves</span><span className="font-semibold">{o.proves}</span></p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#8a8a8a]">
            Human answering services commonly run $250 to $395 a month. Your AI
            front office is included free for the first 30 days.
          </p>
        </Container>
      </Section>

      {/* PROOF */}
      <Section className="border-b border-[#171717]">
        <Container size="lg">
          <div className="grid gap-10 md:grid-cols-2">
            <figure>
              <blockquote className="text-2xl font-bold leading-snug md:text-3xl">
                &ldquo;I&apos;ve learned things in these three sessions that are
                going to change the way I do business.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-[#8a8a8a]">Ryan Shepherd, after her third session</figcaption>
            </figure>
            <figure>
              <blockquote className="text-2xl font-bold leading-snug md:text-3xl">
                &ldquo;It&apos;s gonna be my go-to on how I solve most issues going
                forward, for sure.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-[#8a8a8a]">Chris Levant, RestoPros of Lehigh Valley</figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      {/* GUARANTEE */}
      <Section className="border-b border-[#171717]">
        <Container size="md">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#FF1493]">The guarantee</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-snug md:text-4xl">
              The Live-or-Free Guarantee
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[#A3A3A3]">
              If everything we promised isn&apos;t live on your own number and
              accounts by session three, we keep working at no extra cost until it
              is. All we ask is that you show up to your three sessions and give us
              access in your first three days.
            </p>
          </div>
        </Container>
      </Section>

      {/* PRICE */}
      <Section>
        <Container size="md">
          <div className="relative overflow-hidden rounded-3xl border border-[#262626] bg-[#111111] p-10 text-center md:p-14">
            <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-[320px] w-[640px] -translate-x-1/2 opacity-20 blur-[100px]" style={{ background: SPECTRUM }} />
            <div className="relative">
              <h2 className="text-3xl font-extrabold md:text-4xl">Start today</h2>
              <div className="mt-6 text-5xl font-extrabold md:text-6xl">$1,500</div>
              <p className="mt-3 text-[#A3A3A3]">
                Three sessions, your AI front office and back office, 30 days of
                the front office included, and the Live-or-Free Guarantee.
              </p>
              <p className="mt-2 text-[#A3A3A3]">
                Right after checkout you pick your first session. It happens within
                a week.
              </p>
              <div className="mt-8"><CTAPair /></div>
              <p className="mt-6 text-sm text-[#8a8a8a]">
                Prefer two payments?{" "}
                <a href={STRIPE_SPLIT_URL} className="font-semibold text-[#FF6FB5] underline underline-offset-2">$750 today, $750 in four weeks</a>
                . Running a larger company?{" "}
                <a href={CALENDLY_URL} className="font-semibold text-[#FF6FB5] underline underline-offset-2">Book a call</a>.
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
              { q: "When does it start?", a: "The day you join. After checkout you book your first session on the next screen and we send your access checklist right away." },
              { q: "Is this a course?", a: "No. It is three working sessions on your own business, with your hands on the keyboard, plus a system our team installs between sessions." },
              { q: "Do I need to be technical?", a: "No. If you can talk, you can do this. One of the three lessons is literally to talk to the AI instead of typing." },
              { q: "Will it replace my staff?", a: "It will change their job. Your AI front office can take the routine calls: questions, bookings, messages, follow-ups. That frees your front desk to become your customer experience person, taking care of the people standing in front of them. And any caller who wants a person gets one." },
              { q: "What happens after the three sessions?", a: "You keep everything we built. Many owners continue with PRISM as their ongoing AI partner. There is no obligation." },
              { q: "What if it isn't live by session three?", a: "That is the Live-or-Free Guarantee. We keep working at no extra cost until everything we promised is live. All we ask is that you show up to your three sessions and give us access in your first three days." },
            ].map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-lg font-bold">{f.q}</h3>
                <p className="mt-2 text-[#A3A3A3]">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <footer className="border-t border-[#171717] py-10">
        <Container size="lg">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#737373] sm:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/images/prism-logo.png" alt="PRISM AI" width={22} height={22} />
              <span>PRISM AI Consultants</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="/" className="hover:text-[#F5F5F4]">Main site</a>
              <a href="/privacy" className="hover:text-[#F5F5F4]">Privacy</a>
              <a href={CALENDLY_URL} className="hover:text-[#F5F5F4]">Book a call</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
