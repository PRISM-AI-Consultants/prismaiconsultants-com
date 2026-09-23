import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  alternates: { canonical: "/card" },
  title: "Jeff Bullock, Pharm.D. | PRISM AI Consultants",
  description:
    "Save Jeff Bullock's contact, book 30 minutes, or take the AI readiness scorecard. PRISM AI Consultants, Allentown, PA.",
  // Landing page for the printed business card QR. Kept out of the index so a
  // thin utility page does not compete with the pages meant to rank.
  robots: { index: false, follow: true },
};

// PRISM Collaboration Session, 30 minutes. Verified against the Calendly API
// 2026-08-30. The card is printed with "Book 30 minutes" on it, so this link
// and that wording have to stay in sync.
const BOOKING_URL =
  "https://calendly.com/prismaiconsultants/prism-collaboration-session";

type Action = {
  href: string;
  label: string;
  detail?: string;
  tone: "accent" | "strong" | "quiet";
  external?: boolean;
  download?: boolean;
};

const actions: Action[] = [
  {
    href: "/jeff-bullock.vcf",
    label: "Save my contact",
    detail: "Adds straight to your phone",
    tone: "accent",
    download: true,
  },
  {
    href: BOOKING_URL,
    label: "Book 30 minutes",
    detail: "Pick a time that works",
    tone: "strong",
    external: true,
  },
  { href: "tel:+18774182507", label: "Call 877-418-2507", tone: "quiet" },
  {
    href: "mailto:info@prismaiconsultants.com",
    label: "Email us",
    detail: "info@prismaiconsultants.com",
    tone: "quiet",
  },
];

// globals.css sets an unlayered `a { color: inherit }`, which outranks every
// Tailwind text-* utility on the anchor itself. Colour goes on the inner span.
const toneStyles: Record<Action["tone"], { box: string; text: string }> = {
  accent: {
    box: "border-accent bg-accent hover:bg-accent/90",
    text: "text-accent-foreground",
  },
  strong: {
    box: "border-accent/50 bg-transparent hover:bg-muted hover:border-accent",
    text: "text-foreground",
  },
  quiet: {
    box: "border-border bg-transparent hover:bg-muted hover:border-accent/40",
    text: "text-foreground",
  },
};

export default function CardPage() {
  return (
    <Container size="sm" className="py-12 sm:py-16">
      <div className="mx-auto flex max-w-md flex-col gap-10">
        <header className="flex flex-col gap-4">
          {/* h1 size comes from globals.css, not a utility class. */}
          <h1>Jeff Bullock, Pharm.D.</h1>
          <p className="text-sm text-muted-foreground">
            Founder &amp; CEO, PRISM AI Consultants
          </p>
          <p className="text-lg font-medium text-foreground">
            Your AI business partner.
          </p>
        </header>

        <nav aria-label="Ways to connect" className="flex flex-col gap-3">
          {actions.map((action) => {
            const tone = toneStyles[action.tone];
            const className = `flex min-h-14 flex-col justify-center rounded-[var(--radius-md)] border px-5 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${tone.box}`;
            const inner = (
              <>
                <span className={`text-base font-semibold ${tone.text}`}>
                  {action.label}
                </span>
                {action.detail ? (
                  <span className={`text-xs opacity-70 ${tone.text}`}>
                    {action.detail}
                  </span>
                ) : null}
              </>
            );

            return (
              <a
                key={action.href}
                href={action.href}
                className={className}
                {...(action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(action.download ? { download: true } : {})}
              >
                {inner}
              </a>
            );
          })}
        </nav>

        <section className="flex flex-col gap-5 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Before we talk
          </p>
          <Link href="/ai-readiness-scorecard" className="group flex flex-col gap-1">
            <span className="text-base font-semibold text-foreground group-hover:text-accent">
              Take the AI readiness scorecard
            </span>
            <span className="text-sm text-muted-foreground">
              Where your business actually stands right now.
            </span>
          </Link>
          <Link href="/results" className="group flex flex-col gap-1">
            <span className="text-base font-semibold text-foreground group-hover:text-accent">
              See what we have built
            </span>
            <span className="text-sm text-muted-foreground">
              Real systems running in real businesses.
            </span>
          </Link>
        </section>

        <footer className="flex flex-col gap-1 border-t border-border pt-6 text-sm">
          <p className="text-muted-foreground">
            Allentown, PA. Serving the Lehigh Valley and clients nationwide.
          </p>
          <a href="https://prismaiconsultants.com" className="hover:underline">
            <span className="text-accent">prismaiconsultants.com</span>
          </a>
        </footer>
      </div>
    </Container>
  );
}
