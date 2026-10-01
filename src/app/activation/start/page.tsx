import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";

// Stripe Activation payment links redirect here after checkout (Activation v2,
// 2026-09-30): the client books Session 1 the same minute they pay.
// Never collect passwords on this page. Access is requested through a secure
// request from the account manager the same day.
const SESSION1_URL =
  "https://calendly.com/prismaiconsultants/prism-activation-session-1";

export const metadata: Metadata = {
  title: "You're in. Book your first session | PRISM Activation",
  description: "Book Session 1 of your PRISM Activation and get your access checklist.",
  robots: { index: false, follow: false },
};

const CHECKLIST = [
  { t: "Your email and calendar", d: "Gmail or Outlook, the account you run the business from." },
  { t: "Your phone line", d: "Who your carrier is, so we can forward missed calls to your AI receptionist." },
  { t: "Your website and domain", d: "Where it is hosted and where the domain is registered." },
  { t: "Your CRM or your books", d: "Whatever you run on: Follow Up Boss, QuickBooks, a spreadsheet. Its name is enough for now." },
  { t: "Social accounts", d: "Facebook and Instagram admin, plus your Google Business Profile." },
];

export default function ActivationStartPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F4]">
      <header className="border-b border-[#171717]">
        <Container size="lg">
          <div className="flex h-16 items-center">
            <a href="/" className="flex items-center gap-2 font-heading text-xl font-extrabold tracking-tight">
              <Image src="/images/prism-logo.png" alt="PRISM AI" width={30} height={30} />
              <span>PRISM</span>
            </a>
          </div>
        </Container>
      </header>

      <Container size="lg">
        <div className="py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#FF6A4D]">Step 1 of 2</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
            You&apos;re in. Book your first session now.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[#A3A3A3]">
            Pick a time in the next seven days. Session 1 is sixty minutes on
            Zoom: we capture how your business runs today, connect your AI to
            your accounts, and choose the one system we install for you.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
            <div className="overflow-hidden rounded-2xl border border-[#1f1f1f] bg-white">
              <iframe
                title="Book Session 1"
                src={`${SESSION1_URL}?hide_gdpr_banner=1&background_color=ffffff&primary_color=ff1493`}
                className="h-[720px] w-full"
                loading="lazy"
              />
            </div>

            <aside>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#FF6A4D]">Step 2 of 2</p>
              <h2 className="mt-3 text-2xl font-extrabold">Have these ready</h2>
              <p className="mt-3 text-[#A3A3A3]">
                Access is the only thing that ever slows an install down. Today
                your PRISM team sends you a secure access request. Please don&apos;t
                email passwords.
              </p>
              <ol className="mt-6 space-y-5">
                {CHECKLIST.map((c, i) => (
                  <li key={c.t} className="grid grid-cols-[28px_1fr] gap-3">
                    <span className="text-lg font-extrabold text-[#FF6A4D]">{i + 1}</span>
                    <div>
                      <div className="font-bold">{c.t}</div>
                      <div className="mt-1 text-sm text-[#A3A3A3]">{c.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-[#1f1f1f] pt-6 text-sm text-[#8a8a8a]">
                Your system is live by session three, or we keep working at no
                extra cost until it is.
              </p>
            </aside>
          </div>
        </div>
      </Container>
    </div>
  );
}
