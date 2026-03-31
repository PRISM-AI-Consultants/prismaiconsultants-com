import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Build - Live AI Systems Portfolio",
  description:
    "Live production AI systems built and deployed by PRISM AI Consultants. AI agents, dashboards, automations, content systems, and more. 18 builds. $350K-$700K+ in market value.",
  keywords: [
    "AI portfolio",
    "AI systems examples",
    "AI agent examples",
    "AI dashboard",
    "AI automation portfolio",
    "production AI systems",
    "PRISM AI builds",
  ],
  openGraph: {
    title: "What We Build - Live AI Systems Portfolio",
    description:
      "Click any of these. They are running right now. 18 production AI systems built and deployed.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
