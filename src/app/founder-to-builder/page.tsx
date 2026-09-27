import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { RsvpForm } from "./rsvp-form";
import { BUILD_PROOF, VOICES, GUARANTEE, INSTALL_CALL } from "./workshop-data";

/**
 * ⛔ QUIET MODE since 2026-09-27. Cohort 2 (Sept 22 and 23) was cancelled and
 * Jeff approved taking the sales page down quietly: no dates, no prices, no
 * Eventbrite link, no announcement. The page keeps the proof and captures
 * interest for the next cohort through the same durable RSVP pipeline
 * (/api/f2b-rsvp, session "notify"). See COHORT_OPEN in workshop-data.ts for
 * how to bring the sales version back.
 */

const PINK = "#FF1493";
const SPECTRUM =
  "linear-gradient(90deg, #0099FF 0%, #00C2D1 28%, #FF4D8D 58%, #FFB347 82%, #FF4D2A 100%)";

export const metadata: Metadata = {
  title: "Founder to Builder | Next cohort coming | Allentown PA",
  description:
    "Two mornings. Non technical business owners build their own website, business asset and automations live, on their own business. The next cohort is being scheduled. Get notified.",
  alternates: { canonical: "/founder-to-builder" },
  openGraph: {
    title: "Founder to Builder: next cohort coming",
    description:
      "You leave with the thing built, not with notes about building it. Get notified when the next cohort is set.",
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
  return (
    <>
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
          <div className="max-w-3xl py-16 md:py-24">
            <Eyebrow>Founder to Builder · Allentown and virtual</Eyebrow>

            <h1
              className="mt-5 font-heading text-[clamp(2.6rem,6.2vw,4.6rem)] font-extrabold leading-[0.94] text-[#F5F5F4]"
              style={{ letterSpacing: "-0.035em" }}
            >
              You leave with
              <br />
              the thing built.
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#B8B8B8]">
              Not notes about building it. Two mornings working on your own business with a coach
              at your elbow. People walk in using AI for email and walk out with a live site, a
              working business asset, and a system that keeps running after they go home.
            </p>

            <p className="mt-6 max-w-xl text-[17px] font-semibold leading-relaxed text-[#F0F0F0]">
              Next cohort coming. Get notified.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#notify"
                className="inline-flex h-12 items-center justify-center rounded-[10px] px-7 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: PINK, boxShadow: "0 0 44px rgba(255,20,147,0.35)" }}
              >
                Get notified
              </a>
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
                Two weekday mornings. Not a weekend. You are back at your desk by the afternoon both
                days, and you are not giving up time with your family to be there.
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
                By the time you sit down on Day 1, we already know what you want built. That is why
                the room moves as fast as it does.
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

      {/* ── NOTIFY ───────────────────────────────────────────────────────── */}
      <section id="notify" className="scroll-mt-20 border-t border-[#1A1A1A] bg-[#0C0C0C]">
        <Container size="xl">
          <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Rule />
              <h2
                className="mt-5 font-heading text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.06] text-[#F5F5F4]"
                style={{ letterSpacing: "-0.025em" }}
              >
                Next cohort coming.
                <br />
                Get notified.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[#A3A3A3]">
                Leave your name and email and you will hear from us once, when the next dates are
                set. Questions before then:{" "}
                <a
                  href="mailto:info@prismaiconsultants.com"
                  className="text-[#DADADA] underline underline-offset-4 hover:text-[#F5F5F4]"
                >
                  info@prismaiconsultants.com
                </a>
                .
              </p>
            </div>

            <div className="rounded-[16px] border border-[#242424] bg-[#0F0F0F] p-6 sm:p-8">
              <RsvpForm mode="notify" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
