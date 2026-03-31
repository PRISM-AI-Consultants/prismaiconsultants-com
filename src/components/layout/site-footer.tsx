import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/prism-ai-consultants",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@drjeffbullock",
  },
  {
    label: "Skool",
    href: "https://www.skool.com/prism-ai-consultants",
  },
  {
    label: "Agent World",
    href: "https://agents.prismaiconsultants.com",
  },
];

const linkGroups = [
  {
    title: "Services",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Results", href: "/results" },
    ],
  },
  {
    title: "Speaking",
    links: [
      { label: "Speaking", href: "/speaking" },
      { label: "Events", href: "/speaking#events" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-lg font-extrabold tracking-tight text-foreground"
            >
              PRISM AI Consultants
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              AI Systems Architect. Business Partner. Builder.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[var(--radius-md)] border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  {social.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-foreground">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-border py-8 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>&copy; {currentYear} PRISM AI Consultants. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:877-418-2507" className="transition-colors hover:text-foreground">
              877-418-2507
            </a>
            <span className="hidden md:inline">&middot;</span>
            <a
              href="mailto:info@prismaiconsultants.com"
              className="transition-colors hover:text-foreground"
            >
              info@prismaiconsultants.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
