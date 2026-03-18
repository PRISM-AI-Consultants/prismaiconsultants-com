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
    name: "Core",
    price: "$2,500",
    priceNote: "/month",
    description: "Your AI business partner.",
    highlighted: true,
    features: [
      "Weekly strategy sessions with Dr. Jeff",
      "Continuous AI system builds",
      "Dedicated execution team",
      "Unlimited team access",
      "Monthly progress reviews",
    ],
    cta: "Join as Core Partner",
    ctaUrl: CALENDLY_URL,
  },
  {
    name: "Scale",
    price: "$5,000",
    priceNote: "/month",
    description: "Maximum velocity.",
    features: [
      "Everything in Core",
      "Accelerated parallel builds",
      "Complex multi-system projects",
      "Priority support and faster delivery",
      "Strategic roadmap with quarterly reviews",
    ],
    cta: "Scale With Us",
    ctaUrl: CALENDLY_URL,
  },
];

export const premiumAddOns: PremiumAddOn[] = [
  {
    name: "Workshops",
    priceRange: "$7,500-$15,000",
    description: "Team and organizational AI training.",
  },
  {
    name: "Speaking Engagements",
    priceRange: "$10,000-$20,000",
    description: "Keynotes and breakout sessions.",
  },
  {
    name: "Team Transformation",
    priceRange: "$12,500-$30,000+",
    description: "Multi-department AI rollouts.",
  },
  {
    name: "Enterprise & Custom Builds",
    priceRange: "$25,000+",
    description: "Full-stack AI solutions for complex organizations. Custom scoping, dedicated teams.",
  },
];
