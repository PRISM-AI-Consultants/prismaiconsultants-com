import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title:
    "AI Consulting & Systems Architecture in the Lehigh Valley | PRISM AI Consultants",
  description:
    "PRISM AI Consultants provides AI consulting, AI automation, and AI systems architecture for businesses in Allentown, Bethlehem, Easton, and the Lehigh Valley. Production AI systems built by a local team.",
  keywords: [
    "AI consultant Allentown",
    "Lehigh Valley AI",
    "AI automation Pennsylvania",
    "AI consulting Bethlehem",
    "AI consulting Easton",
    "AI systems architect Lehigh Valley",
    "AI agent development Allentown",
    "business AI Lehigh Valley",
    "AI consultant Pennsylvania",
    "Allentown AI automation",
    "Lehigh Valley technology consultant",
    "AI implementation Lehigh Valley",
  ],
  openGraph: {
    title:
      "AI Consulting & Systems Architecture in the Lehigh Valley | PRISM AI Consultants",
    description:
      "Production AI systems for Lehigh Valley businesses. 34 autonomous agents built. $350K-$700K+ in systems delivered. Based in Allentown, PA.",
  },
};

const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";
const AGENT_INTAKE_URL = "https://agent-intake.prismaiconsultants.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PRISM AI Consultants",
  description:
    "AI systems architecture and implementation serving the Lehigh Valley. We build production AI agents, dashboards, automations, and integrations for businesses across Allentown, Bethlehem, Easton, and the Greater Lehigh Valley.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Allentown",
    addressRegion: "PA",
    postalCode: "18101",
    addressCountry: "US",
  },
  telephone: "+18774182507",
  email: "info@prismaiconsultants.com",
  url: "https://prismaiconsultants.com/lehigh-valley-ai-consulting",
  areaServed: [
    "Allentown",
    "Bethlehem",
    "Easton",
    "Lehigh Valley",
    "Pennsylvania",
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Jeff Bullock",
  },
  priceRange: "$2,500 - $25,000+/month",
};

const reasons = [
  {
    icon: "\u{1F3E0}",
    title: "Built by a Lehigh Valley Native",
    description:
      "Dr. Jeff Bullock, PharmD, is based in Allentown and has deep roots in the Lehigh Valley community. When you work with PRISM, you work with someone who understands the local business landscape.",
  },
  {
    icon: "\u{2699}\uFE0F",
    title: "Production Systems, Not Slide Decks",
    description:
      "34 autonomous agents built. $350K-$700K+ in AI systems delivered. Every engagement produces working software that runs in your business, not a PDF with recommendations.",
  },
  {
    icon: "\u{1F4B0}",
    title: "Transparent Pricing",
    description:
      "From our Momentum Sprint to Scale retainers and enterprise custom builds, our pricing is published publicly. No hidden fees, no discovery phases that never end.",
  },
  {
    icon: "\u{1F91D}",
    title: "Community Investment",
    description:
      "Active in LVEDC, AABLC, BNI Allentown, and local Chamber events. PRISM is invested in the Lehigh Valley business community, not just passing through.",
  },
];

const services = [
  {
    name: "AI Agents and Automation",
    description:
      "Custom AI agents that handle research, outreach, reporting, and operational tasks autonomously.",
  },
  {
    name: "Custom Dashboards and Analytics",
    description:
      "Real-time performance dashboards that give you visibility into what matters most.",
  },
  {
    name: "CRM and Workflow Automation",
    description:
      "Integrations with Zoho, Google Workspace, and your existing tools to eliminate manual work.",
  },
  {
    name: "AI-Powered Customer Service",
    description:
      "Intelligent systems that handle customer inquiries, route requests, and provide instant responses.",
  },
  {
    name: "Data Pipeline Automation",
    description:
      "Automated data collection, processing, and analysis that turns raw information into actionable insights.",
  },
];

const successStories = [
  {
    title: "Allentown School District",
    description:
      "Built a financial performance dashboard that provides real-time visibility into district operations.",
  },
  {
    title: "LVEDC Collaboration",
    description:
      "Partnered with the Lehigh Valley Economic Development Corporation on AI strategy for regional economic growth.",
  },
  {
    title: "Local Chamber Speaking",
    description:
      "Regular speaker at Lehigh Valley business events, training professionals on practical AI adoption.",
  },
  {
    title: "Regional BNI Chapters",
    description:
      "Active member and AI resource for BNI chapters across the Allentown and Lehigh Valley region.",
  },
];

export default function LehighValleyAIConsultingPage() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Hero */}
      <Section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container size="lg">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="text-foreground">
                AI Consulting &amp; Systems Architecture
              </span>
              <br />
              <span className="text-accent">in the Lehigh Valley</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              PRISM AI Consultants builds production AI systems for businesses
              across Allentown, Bethlehem, Easton, and the Greater Lehigh
              Valley. Real agents. Real dashboards. Real results.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Book a Strategy Call
              </a>
              <a
                href={AGENT_INTAKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-transparent px-6 text-base font-medium text-foreground transition-colors hover:bg-muted hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Tell Us What Agent You Need
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Local Businesses Choose PRISM */}
      <Section className="bg-muted/30 border-y border-border">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Why Local Businesses Choose PRISM
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              We are not a remote agency parachuting into your market. We live
              and work here.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-[var(--radius-lg)] border border-border bg-card p-6"
              >
                {index === 0 ? (
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-3">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/images/jeff-bullock-portrait.jpg"
                        alt="Dr. Jeff Bullock, Lehigh Valley native and AI Systems Architect"
                        width={100}
                        height={100}
                        className="rounded-full border-2 border-accent/30 object-cover w-20 h-20"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-3 text-3xl" aria-hidden="true">
                      {reason.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {reason.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What We Build for Lehigh Valley Businesses */}
      <Section>
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              What We Build for Lehigh Valley Businesses
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Every system we deliver runs in production. These are not proofs of
              concept.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-[var(--radius-lg)] border border-border bg-card p-6"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-accent font-medium transition-colors hover:text-accent/80"
            >
              See Our Full Portfolio
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Lehigh Valley Success Stories */}
      <Section className="bg-muted/30 border-y border-border">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Lehigh Valley Success Stories
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Real results for real businesses in the Lehigh Valley region.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {successStories.map((story) => (
              <div
                key={story.title}
                className="rounded-[var(--radius-lg)] border border-border bg-card p-6"
              >
                <h3 className="text-lg font-bold text-accent">
                  {story.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Serving the Greater Lehigh Valley */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Serving the Greater Lehigh Valley
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              PRISM AI Consultants proudly serves businesses in Allentown,
              Bethlehem, Easton, Nazareth, Whitehall, Emmaus, Macungie, and
              throughout the Lehigh Valley region. We also work with clients
              across Pennsylvania and nationwide.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Whether you are a solo practitioner in downtown Allentown or a
              growing operation across the Lehigh Valley, PRISM delivers AI
              systems scaled to your needs and budget.
            </p>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="border-t border-border bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Ready to Build Your AI System?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Book a strategy call to discuss what AI can do for your Lehigh
              Valley business. No pitch decks. Just a real conversation about
              your operations and where AI fits.
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
                href={AGENT_INTAKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-transparent px-6 text-base font-medium text-foreground transition-colors hover:bg-muted hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Tell Us What Agent You Need
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
