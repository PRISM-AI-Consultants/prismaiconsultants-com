import type { Metadata } from "next";

// page.tsx is a client component ("use client") so it cannot export metadata.
// This layout supplies the title, description, and canonical for /portfolio.
export const metadata: Metadata = {
  alternates: { canonical: "/portfolio" },
  title: "What We Build - AI Agents, Dashboards & Automations",
  description:
    "Real production AI systems PRISM has built for clients: AI agents, dashboards and apps, automations and integrations, content systems, and interactive games.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
