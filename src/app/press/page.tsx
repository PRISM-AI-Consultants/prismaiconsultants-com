import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  alternates: { canonical: "/press" },
  title: "Press & Recognition",
  description:
    "PRISM AI Consultants in the press. Named to the Lehigh Valley Business In the Lead list of top Minority Owned Businesses, 2026.",
};

// Third-party coverage only. Nothing self-published belongs on this page, and
// nothing goes here without a live URL that has been opened and verified.
// We link out rather than reproducing article text: LVB sells reprints, so
// copying the piece would be both infringement and duplicate content.
const coverage = [
  {
    outlet: "Lehigh Valley Business",
    kind: "Award",
    headline: "PRISM AI Consultants",
    program: "2026 In the Lead: Top Minority Owned Businesses",
    date: "July 27, 2026",
    url: "https://lvb.com/prism-ai-consultants/",
    summary:
      "Lehigh Valley Business named PRISM AI Consultants to its In the Lead list of top Minority Owned Businesses. Honorees are chosen by the publication's editorial leadership team. The profile covers how PRISM builds custom AI agents, automation, and training for businesses across the region.",
  },
  {
    outlet: "ValiantCEO",
    kind: "Interview",
    headline:
      "Closing the AI Implementation Gap: Jeffrey Bullock of PRISM AI Consultants on Turning Spend Into Revenue",
    program: null,
    date: null,
    url: "https://valiantceo.com/closing-the-ai-implementation-gap-jeffrey-bullock-of-prism-ai-consultants-on-turning-spend-into-revenue/",
    summary:
      "A long-form interview with Dr. Jeff Bullock on why most AI spending fails to reach production, and what changes when implementation is treated as the product rather than the advice.",
  },
  {
    outlet: "Made in the Lehigh Valley",
    kind: "Profile",
    headline: "PRISM AI Consultants",
    program: null,
    date: null,
    url: "https://madeinthelehighvalley.com/prismaiconsultants/",
    summary:
      "Regional business profile covering PRISM's work with Lehigh Valley companies.",
  },
];

export default function PressPage() {
  return (
    <>
      <PageHeader
        title="Press & Recognition"
        description="Where PRISM AI Consultants has been covered, and by whom."
      />

      <Section>
        <Container>
          <div className="grid gap-6">
            {coverage.map((item) => (
              <Card key={item.url}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>{item.kind}</Badge>
                    <span className="font-semibold">{item.outlet}</span>
                    {item.date && (
                      <span className="text-sm opacity-70">{item.date}</span>
                    )}
                  </div>
                  <h2 className="mt-3 text-xl font-bold">{item.headline}</h2>
                  {item.program && (
                    <p className="mt-1 text-sm font-medium opacity-80">
                      {item.program}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <p>{item.summary}</p>
                  <div className="mt-5">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] border border-border px-4 text-sm font-medium transition-colors hover:border-accent/40 hover:bg-muted"
                    >
                      Read it at {item.outlet}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-10 text-sm opacity-70">
            Media inquiries: info@prismaiconsultants.com
          </p>
        </Container>
      </Section>
    </>
  );
}
