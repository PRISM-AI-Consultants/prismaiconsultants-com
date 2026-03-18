"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { PortfolioCard } from "@/components/content/portfolio-card";
import { portfolioItems } from "@/data/portfolio";

// Metadata must be exported from a separate file or layout for client components.
// SEO is handled via the layout template: "What We Build | PRISM AI Consultants"
// For full control, create a portfolio/layout.tsx with generateMetadata.

const categories = [
  { key: "all", label: "All" },
  { key: "ai-agents", label: "AI Agents" },
  { key: "dashboards", label: "Dashboards & Apps" },
  { key: "automations", label: "Automations & Integrations" },
  { key: "content-systems", label: "Content Systems" },
  { key: "games", label: "Games & Interactive" },
  { key: "internal", label: "Internal Systems" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filtered =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader
        title="What We Build"
        description="Live production systems. Click them. This is what we build."
      />

      {/* Category Filter */}
      <Section className="py-8 md:py-10">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeCategory === cat.key
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio Grid */}
      <Section className="pt-0">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <PortfolioCard
                key={item.id}
                name={item.name}
                client={item.client}
                description={item.description}
                category={item.category}
                liveUrl={item.liveUrl}
                marketValue={item.marketValue}
                clientPaid={item.clientPaid}
                quote={item.quote}
                quoteAuthor={item.quoteAuthor}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">
              No items in this category yet.
            </p>
          )}
        </Container>
      </Section>

      {/* Aggregate Stats */}
      <Section className="border-t border-border bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              The Numbers
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              13 client-facing builds. 5 internal platforms.
              $350,000 to $700,000+ in market value.
              Internal cost: near zero.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-accent md:text-4xl">
                  18
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Total Builds
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-accent md:text-4xl">
                  13
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Client-Facing
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-accent md:text-4xl">
                  5
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Internal Platforms
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-accent md:text-4xl">
                  2-5x
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Avg. Client ROI
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Want Something Like This?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Tell us the problem. We will build the system.
            </p>
            <div className="mt-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
