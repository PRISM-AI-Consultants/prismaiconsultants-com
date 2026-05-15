import type { PricingTier, PremiumAddOn } from "@/lib/types";

const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";

export const pricingTiers: PricingTier[] = [
  {
    name: "Momentum Sprint",
    price: "$4,500",
    priceNote: "over 90 days",
    description: "The accelerator.",
    features: [
      "High-touch strategy sessions",
      "Multiple AI systems built and deployed",
      "Hands-on implementation support",
      "90-day transformation roadmap",
    ],
    cta: "Start Your Sprint",
    ctaUrl: CALENDLY_URL,
  },
  {
    name: "AI Business Partnership",
    price: "Tailored",
    priceNote: "book a conversation",
    description: "Your AI business partner.",
    highlighted: true,
    features: [
      "Weekly strategy sessions with Dr. Jeff",
      "Continuous AI system builds",
      "Dedicated execution team",
      "Unlimited team access",
      "Quarterly board-level AI roadmap",
    ],
    cta: "Book a 30-Min Conversation",
    ctaUrl: CALENDLY_URL,
  },
];

export const premiumAddOns: PremiumAddOn[] = [
  {
    name: "Workshops",
    priceRange: "$15,000",
    description: "Team and organizational AI training.",
  },
  {
    name: "Speaking Engagements",
    priceRange: "$20,000",
    description: "Keynotes and breakout sessions.",
  },
  {
    name: "Enterprise & Custom Builds",
    priceRange: "Tailored",
    description: "Full-stack AI solutions for complex organizations. Custom scoping, dedicated teams.",
  },
];
