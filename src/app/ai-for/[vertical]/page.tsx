import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { verticals, getVertical } from "@/data/verticals";

type PageProps = { params: Promise<{ vertical: string }> };

export function generateStaticParams() {
  return verticals.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { vertical } = await params;
  const v = getVertical(vertical);
  if (!v) return { title: "Not Found" };
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    alternates: { canonical: `/ai-for/${v.slug}` },
    openGraph: {
      title: v.metaTitle,
      description: v.metaDescription,
      url: `https://prismaiconsultants.com/ai-for/${v.slug}`,
      type: "website",
    },
  };
}

export default async function VerticalPage({ params }: PageProps) {
  const { vertical } = await params;
  const v = getVertical(vertical);
  if (!v) notFound();

  // FAQPage schema. Not an AI Overviews unlock (Google states no special schema
  // is required for that); it is here for rich results and entity clarity.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: v.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: v.metaTitle,
    description: v.metaDescription,
    serviceType: "AI Implementation",
    provider: { "@id": "https://prismaiconsultants.com/#organization" },
    areaServed: [
      { "@type": "State", name: "Pennsylvania" },
      { "@type": "Country", name: "United States" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://prismaiconsultants.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: v.title,
        item: `https://prismaiconsultants.com/ai-for/${v.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader title={v.h1} description={v.answer} />

      <Section>
        <Container>
          <div className="grid gap-8">
            {v.problems.map((p) => (
              <div key={p.heading}>
                <h2 className="text-2xl font-bold">{p.heading}</h2>
                <p className="mt-3 max-w-3xl">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold">What we have actually built</h2>
          <p className="mt-2 max-w-3xl opacity-80">
            Every system below is a real production build. Market values are what
            a firm would expect to pay to commission the system separately.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {v.proof.map((p) => (
              <Card key={p.what}>
                <CardHeader>
                  <h3 className="text-lg font-bold">{p.what}</h3>
                  {p.marketValue && (
                    <div className="mt-2">
                      <Badge>{p.marketValue}</Badge>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p>{p.detail}</p>
                  {p.quote && (
                    <blockquote className="mt-4 border-l-2 border-border pl-4 italic">
                      &ldquo;{p.quote}&rdquo;
                      {p.quoteAuthor && (
                        <footer className="mt-1 text-sm not-italic opacity-70">
                          {p.quoteAuthor}
                        </footer>
                      )}
                    </blockquote>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold">Common questions</h2>
          <div className="mt-6 grid gap-6">
            {v.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 max-w-3xl">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Talk to us
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border px-6 text-base font-medium transition-colors hover:border-accent/40 hover:bg-muted"
            >
              See everything we build
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
