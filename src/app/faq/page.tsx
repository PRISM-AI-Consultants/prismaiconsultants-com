import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | PRISM AI Consultants",
  description:
    "Answers to common questions about AI consulting, pricing, timelines, ROI, and how PRISM AI Consultants builds production AI systems for businesses. Learn about AI agents, automation, and implementation.",
  keywords: [
    "AI consulting FAQ",
    "AI consultant cost",
    "how much does AI consulting cost",
    "what does an AI consultant do",
    "AI implementation timeline",
    "AI ROI for business",
    "AI agents for small business",
    "AI systems architect",
    "PRISM AI Consultants questions",
  ],
  openGraph: {
    title: "Frequently Asked Questions | PRISM AI Consultants",
    description:
      "Get answers about AI consulting costs, timelines, ROI, and how PRISM builds production AI systems for businesses.",
  },
};

const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <PageHeader
        title="Frequently Asked Questions"
        description="Straight answers about AI consulting, pricing, timelines, and what it is like to work with PRISM."
      />

      {/* FAQ Accordion */}
      <Section>
        <Container size="md">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group rounded-[var(--radius-lg)] border border-border bg-card"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left font-bold text-foreground transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{item.question}</span>
                  <span
                    className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="border-t border-border px-6 py-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section className="border-t border-border bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              We are happy to answer anything not covered here. Reach out
              directly or book a strategy call to discuss your specific
              situation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Book a Strategy Call
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-transparent px-6 text-base font-medium text-foreground transition-colors hover:bg-muted hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
