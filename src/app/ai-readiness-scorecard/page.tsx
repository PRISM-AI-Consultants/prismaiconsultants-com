import type { Metadata } from "next";
import { ScorecardClient } from "./scorecard-client";

export const metadata: Metadata = {
  title: "AI Readiness Scorecard - Free Assessment",
  description:
    "5 questions. 2 minutes. Find out where AI can save you the most time and money. Free AI readiness assessment from PRISM AI Consultants.",
  openGraph: {
    title: "AI Readiness Scorecard",
    description:
      "Take the free AI Readiness Scorecard. 5 questions. 2 minutes. Find out where AI saves you the most.",
    images: [
      {
        url: "https://prismaiconsultants.com/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ScorecardPage() {
  return <ScorecardClient />;
}
