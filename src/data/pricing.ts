import type { PricingTier, PremiumAddOn } from "@/lib/types";

const CALENDLY_URL =
  "https://calendly.com/prismaiconsultants/introductory-call";

export const pricingTiers: PricingTier[] = [
  {
    name: "Core",
    price: "From $2,500",
    priceNote: "per month",
    description:
      "Your embedded AI partner. Weekly strategy, continuous builds, and a team that ships working software into your business every month.",
    features: [
      "Weekly strategy sessions with Dr. Jeff",
      "Continuous AI system builds",
      "Dedicated execution team",
      "Unlimited team access",
      "Quarterly AI roadmap",
    ],
    cta: "Book a 30-Min Conversation",
    ctaUrl: CALENDLY_URL,
  },
  {
    name: "Partner",
    price: "From $7,500",
    priceNote: "per month",
    description:
      "Everything in Core, plus board-level cadence, a dedicated multi-build team, and scaled rollout. One Partner's first build was a live attorney dashboard worth $15,000-$25,000, shipped in 2 days.",
    highlighted: true,
    features: [
      "Everything in Core",
      "Board-level quarterly strategy with Dr. Jeff",
      "Dedicated multi-build team (more velocity)",
      "Priority delivery and scaled rollout",
      "Executive and full-team enablement",
    ],
    cta: "Book a 30-Min Conversation",
    ctaUrl: CALENDLY_URL,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "scoped to the engagement",
    description:
      "Everything in Partner, plus custom scoping, compliance and infrastructure work, and multi-entity rollout. For banks, health systems, franchises, and complex organizations.",
    features: [
      "Everything in Partner",
      "Custom scoping and statements of work",
      "Compliance and infrastructure builds",
      "Multi-entity, multi-location rollout",
      "Dedicated delivery teams",
    ],
    cta: "Discuss Enterprise Needs",
    ctaUrl: CALENDLY_URL,
  },
];

export const premiumAddOns: PremiumAddOn[] = [
  {
    name: "Momentum Sprint",
    priceRange: "$4,500",
    description: "A 90-day accelerator to start: multiple AI systems built and deployed, plus a transformation roadmap.",
  },
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
];
