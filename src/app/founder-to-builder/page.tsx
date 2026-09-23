import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { RsvpForm } from "./rsvp-form";
import {
  WORKSHOP,
  PRICING,
  INFO_SESSIONS,
  BUILD_PROOF,
  VOICES,
  HERO_VIDEO,
  GUARANTEE,
  VALUE_STACK,
  VALUE_TOTAL,
  INSTALL_CALL,
} from "./workshop-data";

const PINK = "#FF1493";
const SPECTRUM =
  "linear-gradient(90deg, #0099FF 0%, #00C2D1 28%, #FF4D8D 58%, #FFB347 82%, #FF4D2A 100%)";

export const metadata: Metadata = {
  title: `Founder to Builder ${WORKSHOP.cohort} | ${WORKSHOP.dates} | Allentown PA`,
  description: `Two mornings, ${WORKSHOP.hoursShort}. Non technical business owners build their own website, business asset and automations live, on their own business. ${WORKSHOP.seatsInPerson} seats in the room at ${WORKSHOP.venue} Allentown, ${WORKSHOP.seatsVirtual} virtual.`,
  alternates: { canonical: "/founder-to-builder" },
  openGraph: {
    title: `Founder to Builder ${WORKSHOP.cohort}: ${WORKSHOP.dates}`,
    description:
      "You leave with the thing built, not with notes about building it. Two mornings in Allentown or live virtual.",
    url: "https://prismaiconsultants.com/founder-to-builder",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function Rule() {
  return <div aria-hidden className="h-[3px] w-16 rounded-full" style={{ background: SPECTRUM }} />;
}

function Video({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[12px] border border-[#242424] bg-black">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: PINK }}>
      {children}
    </span>
  );
}

export default function FounderToBuilderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: `${WORKSHOP.name} ${WORKSHOP.cohort}`,
    startDate: "2026-09-22T09:00:00-04:00",
    endDate: "2026-09-23T13:00:00-04:00",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: [
      {
        "@type": "Place",
        name: WORKSHOP.venue,
        address: WORKSHOP.venueAddress,
      },
      { "@type": "VirtualLocation", url: WORKSHOP.eventbrite },
    ],
    organizer: {
      "@type": "Organization",
      name: "PRISM AI Consultants",
      url: "https://prismaiconsultants.com",
    },
    offers: [
      {
        "@type": "Offer",
        name: "In person",
        price: PRICING.inPersonEarly,
        priceCurrency: "USD",
        url: WORKSHOP.eventbrite,
        availability: "https://schema.org/InStock",
        validThrough: PRICING.earlyBirdEndsISO,
      },
      {
        "@type": "Offer",
        name: "Virtual",
        price: PRICING.virtualEarly,
        priceCurrency: "USD",
        url: WORKSHOP.eventbrite,
        availability: "https://schema.org/InStock",
        validThrough: PRICING.earlyBirdEndsISO,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A0A0A]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-32 -top-40 h-[40rem] w-[40rem] rounded-full opacity-40 blur-[130px]"
            style={{ background: "radial-gradient(circle, rgba(255,20,147,0.30), transparent 62%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0A0A0A]" />
        </div>

        <Container size="xl" className="relative">
          <div className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>
                {WORKSHOP.cohort} · {WORKSHOP.city}
              </Eyebrow>

              <h1
                className="mt-5 font-heading text-[clamp(2.6rem,6.2vw,4.6rem)] font-extrabold leading-[0.94] text-[#F5F5F4]"
                style={{ letterSpacing: "-0.035em" }}
              >
                You leave with
                <br />
                the thing built.
              </h1>

              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#B8B8B8]">
                Not notes about building it. Two mornings, {WORKSHOP.hoursShort}, working on your
                own business with a coach at your elbow. People walk in using AI for email and walk
                out with a live site, a working business asset, and a system that keeps running
                after they go home.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#info-session"
                  className="inline-flex h-12 items-center justify-center rounded-[10px] px-7 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                  style={{ background: PINK, boxShadow: "0 0 44px rgba(255,20,147,0.35)" }}
                >
                  Come to a free info session
                </a>
                <a
                  href={WORKSHOP.eventbrite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-[10px] border border-[#2C2C2C] px-7 text-base font-medium text-[#E8E8E8] transition-colors hover:border-[#454545] hover:bg-white/[0.03]"
                >
                  Register for the workshop
                </a>
              </div>

              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 border-t border-[#1E1E1E] pt-7 sm:grid-cols-3">
                {[
                  ["When", `${WORKSHOP.daysOfWeek}\nSept 22 and 23`],
                  ["Hours", `${WORKSHOP.hours}\nboth days`],
                  ["Where", `${WORKSHOP.venue}\nAllentown, or virtual`],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E6E6E]">
                      {k}
                    </dt>
                    <dd className="mt-1.5 whitespace-pre-line text-[14px] leading-snug text-[#DADADA]">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <Video id={HERO_VIDEO.youtubeId} title={HERO_VIDEO.title} />
              <p className="mt-4 text-[14px] leading-relaxed text-[#8E8E8E]">
                <span className="font-semibold text-[#DADADA]">
                  This is not a promo. This is the room.
                </span>{" "}
                Filmed at the July cohort in Allentown. Every person in it is a real attendee who
                gave written permission to appear.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── THE TWO MORNINGS ─────────────────────────────────────────────── */}
      <section className="border-t border-[#1A1A1A] bg-[#0A0A0A]">
        <Container size="xl">
          <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Rule />
              <h2
                className="mt-5 font-heading text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.06] text-[#F5F5F4]"
                style={{ letterSpacing: "-0.025em" }}
              >
                Two mornings.
                <br />
                You keep your afternoons.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[#A3A3A3]">
                It runs {WORKSHOP.daysOfWeek}, {WORKSHOP.hoursShort}. Not a weekend. You are back at
                your desk by two both days, and you are not giving up time with your family to be
                there.
              </p>
            </div>

            <ol className="space-y-10">
              {[
                {
                  n: "Day 1",
                  h: "Ship your first site, then ship your business.",
                  b: "Everyone builds the same thing first, on rails, so nobody gets left behind. Then you turn to your own business, your own data, your own customers, with a coach next to you. You show what is live before you leave.",
                  out: "A working website live on your own domain, plus a real asset built for your business.",
                },
                {
                  n: "Day 2",
                  h: "Wire it into something that runs without you.",
                  b: "Fix what broke overnight. Do the same build again on a new asset to prove you own the motion. Then wire the automations: capture a lead, follow up without you touching it, and run the whole thing against a business you have never seen before, cold.",
                  out: "Automations that catch and follow up on customers, marketing assets, and every login, file and domain in your own name.",
                },
              ].map((d) => (
                <li key={d.n} className="border-l-2 border-[#242424] pl-6 sm:pl-8">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.28em]"
                    style={{ color: PINK }}
                  >
                    {d.n}
                  </span>
                  <h3
                    className="mt-3 font-heading text-[clamp(1.35rem,2.3vw,1.7rem)] font-bold leading-tight text-[#F0F0F0]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {d.h}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#A3A3A3]">{d.b}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#DADADA]">
                    <span className="text-[#6E6E6E]">You leave with </span>
                    {d.out}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── THE INSTALL CALL + GUARANTEE ─────────────────────────────────── */}
      <section className="border-t border-[#1A1A1A] bg-[#0A0A0A]">
        <Container size="xl">
          <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>Before you ever walk in</Eyebrow>
              <h2
                className="mt-5 font-heading text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.06] text-[#F5F5F4]"
                style={{ letterSpacing: "-0.025em" }}
              >
                We set your machine up for you, one on one.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#A3A3A3]">
                This is the part that makes two mornings enough. Before the workshop you get a
                private call with our team and we do the setup with you, not at you. Nobody spends
                Day 1 installing things or hunting for a password.
              </p>

              <ul className="mt-8 space-y-4">
                {INSTALL_CALL.map((line) => (
                  <li key={line} className="flex gap-4 border-t border-[#1E1E1E] pt-4">
                    <span
                      aria-hidden
                      className="mt-2 h-[3px] w-8 shrink-0 rounded-full"
                      style={{ background: SPECTRUM }}
                    />
                    <span className="text-[15px] leading-relaxed text-[#DADADA]">{line}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-[#DADADA]">
                By the time you sit down on the 22nd, we already know what you want built. That is
                why the room moves as fast as it does.
              </p>
            </div>

            <div className="lg:pt-12">
              <div
                className="rounded-[18px] border p-8 sm:p-10"
                style={{ borderColor: "rgba(255,20,147,0.35)", background: "rgba(255,20,147,0.04)" }}
              >
                <Eyebrow>The Builder Guarantee</Eyebrow>
                <p
                  className="mt-5 font-heading text-[clamp(1.35rem,2.4vw,1.8rem)] font-bold leading-[1.3] text-[#F5F5F4]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {GUARANTEE}
                </p>
                <p className="mt-6 text-[15px] leading-relaxed text-[#A3A3A3]">
                  And if you change your mind entirely, there is a full refund through{" "}
                  {WORKSHOP.refundThrough}. After that your payment carries as full credit toward
                  Cohort 3. You are not stuck either way.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── RECEIPTS ─────────────────────────────────────────────────────── */}
      <section className="border-t border-[#1A1A1A] bg-[#0C0C0C]">
        <Container size="xl">
          <div className="py-16 md:py-20">
            <Rule />
            <h2
              className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.06] text-[#F5F5F4]"
              style={{ letterSpacing: "-0.025em" }}
            >
              Every claim on this page is a video of a named person.
            </h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[#A3A3A3]">
              These are from the July cohort. Real businesses, real screens, filmed in the room.
              Every person here gave written permission to use their name and their face.
            </p>

            <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {BUILD_PROOF.map((p) => (
                <figure key={p.youtubeId}>
                  <Video id={p.youtubeId} title={`${p.person} at Founder to Builder`} />
                  <figcaption className="mt-4">
                    <span className="font-heading text-[17px] font-bold text-[#F0F0F0]">
                      {p.person}
                    </span>
                    <span className="ml-2 text-[14px] text-[#7A7A7A]">{p.role}</span>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#A3A3A3]">{p.built}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── VOICES ───────────────────────────────────────────────────────── */}
      <section className="border-t border-[#1A1A1A] bg-[#0A0A0A]">
        <Container size="xl">
          <div className="py-16 md:py-20">
            <div className="grid gap-8 lg:grid-cols-3">
              {VOICES.map((v) => (
                <figure key={v.youtubeId} className="flex flex-col">
                  <blockquote
                    className="font-heading text-[19px] font-semibold leading-[1.4] text-[#EDEDED]"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    &ldquo;{v.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 mb-5">
                    <span className="text-[15px] font-semibold text-[#DADADA]">{v.person}</span>
                    <span className="ml-2 text-[14px] text-[#6E6E6E]">{v.role}</span>
                  </figcaption>
                  <div className="mt-auto">
                    <Video id={v.youtubeId} title={`${v.person} on Founder to Builder`} />
                  </div>
                </figure>
              ))}
            </div>

            <figure className="mt-14 max-w-3xl border-l-2 pl-6 sm:pl-8" style={{ borderColor: PINK }}>
              <blockquote
                className="font-heading text-[clamp(1.2rem,2.1vw,1.5rem)] font-semibold leading-[1.45] text-[#F0F0F0]"
                style={{ letterSpacing: "-0.02em" }}
              >
                &ldquo;I had an amazing experience the last two days. My immediate takeaways are to
                enhance the website and set up SEO and to add financial and operational dashboards
                to help with oversight.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[14px] text-[#8E8E8E]">
                Chris Levant, written in the chat on his way out of Day 2. Nobody asked him for it.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ── INFO SESSION ─────────────────────────────────────────────────── */}
      <section id="info-session" className="scroll-mt-20 border-t border-[#1A1A1A] bg-[#0C0C0C]">
        <Container size="xl">
          <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Rule />
              <h2
                className="mt-5 font-heading text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.06] text-[#F5F5F4]"
                style={{ letterSpacing: "-0.025em" }}
              >
                Not sure yet? Come ask.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[#A3A3A3]">
                Two free sessions before the workshop. Dr. Jeff builds something live on a real
                business, walks the two days, and then it is open questions until they run out. No
                pitch deck, and you can leave whenever you want.
              </p>

              <ul className="mt-8 space-y-4">
                {INFO_SESSIONS.map((s) => (
                  <li key={s.id} className="flex gap-4 border-t border-[#1E1E1E] pt-4">
                    <span
                      className="mt-2 h-[3px] w-8 shrink-0 rounded-full"
                      style={{ background: SPECTRUM }}
                    />
                    <div>
                      <p className="text-[16px] font-semibold text-[#E8E8E8]">
                        {s.label}, {s.timeLine}
                      </p>
                      <p className="mt-1 text-[14px] text-[#8E8E8E]">
                        {s.altZone}. {s.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[16px] border border-[#242424] bg-[#0F0F0F] p-6 sm:p-8">
              <RsvpForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="border-t border-[#1A1A1A] bg-[#0A0A0A]">
        <Container size="xl">
          <div className="py-16 md:py-20">
            <Rule />
            <h2
              className="mt-5 font-heading text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.06] text-[#F5F5F4]"
              style={{ letterSpacing: "-0.025em" }}
            >
              {WORKSHOP.seatsInPerson} seats in the room.{" "}
              <span className="text-[#6E6E6E]">{WORKSHOP.seatsVirtual} virtual.</span>
            </h2>
            <p className="mt-4 text-[16px] text-[#A3A3A3]">
              Early pricing holds through {PRICING.earlyBirdEnds}.
            </p>

            {/* Value stack. Never show the price naked. */}
            <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="rounded-[16px] border border-[#242424] bg-[#101010] p-7 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E6E6E]">
                  What this costs to buy separately
                </p>
                <dl className="mt-5 space-y-3">
                  {VALUE_STACK.map((r) => (
                    <div key={r.item} className="flex items-baseline justify-between gap-4">
                      <dt className="text-[14px] leading-snug text-[#A3A3A3]">{r.item}</dt>
                      <dd className="shrink-0 text-[14px] font-semibold tabular-nums text-[#DADADA]">
                        ${r.value.toLocaleString()}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-[#242424] pt-4">
                  <span className="text-[15px] font-semibold text-[#F0F0F0]">Total value</span>
                  <span
                    className="font-heading text-[26px] font-extrabold tabular-nums text-[#F5F5F4]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    ${VALUE_TOTAL.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-[16px] leading-relaxed text-[#A3A3A3] lg:pt-2">
                That is what it would cost to hire each of these out one at a time, and most owners
                never get around to any of them. You are not buying a seat in a class. You are
                buying the week where the website, the marketing assets and the follow-up system
                all actually get built, on your business, with someone sitting next to you.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  tier: "In the room",
                  where: `${WORKSHOP.venue}, Allentown`,
                  early: PRICING.inPersonEarly,
                  standard: PRICING.inPersonStandard,
                  seats: WORKSHOP.seatsInPerson,
                  lead: true,
                },
                {
                  tier: "Live virtual",
                  where: "From anywhere, same two mornings",
                  early: PRICING.virtualEarly,
                  standard: PRICING.virtualStandard,
                  seats: WORKSHOP.seatsVirtual,
                  lead: false,
                },
              ].map((t) => (
                <div
                  key={t.tier}
                  className={`rounded-[16px] border p-7 sm:p-8 ${
                    t.lead ? "border-[#FF1493]/40 bg-[#FF1493]/[0.04]" : "border-[#242424] bg-[#101010]"
                  }`}
                >
                  <p className="font-heading text-[20px] font-bold text-[#F0F0F0]">{t.tier}</p>
                  <p className="mt-1 text-[14px] text-[#8E8E8E]">{t.where}</p>
                  <p className="mt-6 flex items-baseline gap-3">
                    <span
                      className="font-heading text-[44px] font-extrabold leading-none text-[#F5F5F4]"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      ${t.early.toLocaleString()}
                    </span>
                    <span className="text-[16px] text-[#6E6E6E] line-through">
                      ${t.standard.toLocaleString()}
                    </span>
                  </p>
                  <p className="mt-2 text-[13px] text-[#8E8E8E]">
                    Through {PRICING.earlyBirdEndsShort}. Then ${t.standard.toLocaleString()}.{" "}
                    {t.seats} seats.
                  </p>
                </div>
              ))}
            </div>

            <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "A setup call before you arrive",
                  "One on one with our team so Day 1 starts on your business, not on installing things.",
                ],
                [
                  "Lunch both days",
                  "For everyone in the room. You are there through the middle of the day.",
                ],
                [
                  "30 days after",
                  "Access to keep going once the two mornings are over and something breaks.",
                ],
                [
                  "Full refund through Sept 8",
                  `After that your payment carries as full credit toward Cohort 3.`,
                ],
              ].map(([h, b]) => (
                <li key={h} className="border-t border-[#1E1E1E] pt-4">
                  <p className="text-[15px] font-semibold text-[#DADADA]">{h}</p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#8E8E8E]">{b}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WORKSHOP.eventbrite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[10px] px-7 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: PINK, boxShadow: "0 0 44px rgba(255,20,147,0.35)" }}
              >
                Take a seat
              </a>
              <a
                href="#info-session"
                className="inline-flex h-12 items-center justify-center rounded-[10px] border border-[#2C2C2C] px-7 text-base font-medium text-[#E8E8E8] transition-colors hover:border-[#454545] hover:bg-white/[0.03]"
              >
                Or come to a free session first
              </a>
            </div>

            <p className="mt-8 max-w-2xl text-[14px] leading-relaxed text-[#6E6E6E]">
              {WORKSHOP.venue}, {WORKSHOP.venueAddress}. Questions, or want to send a few people
              from one company:{" "}
              <a
                href="mailto:info@prismaiconsultants.com"
                className="text-[#A3A3A3] underline underline-offset-4 hover:text-[#F5F5F4]"
              >
                info@prismaiconsultants.com
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
