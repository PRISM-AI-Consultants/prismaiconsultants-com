export interface PortfolioItem {
  id: string;
  name: string;
  client: string;
  category:
    | "ai-agents"
    | "dashboards"
    | "automations"
    | "content-systems"
    | "games"
    | "internal";
  description: string;
  stack: string;
  liveUrl?: string;
  marketValue: string;
  clientPaid: string;
  quote?: string;
  quoteAuthor?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  metric?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  ctaUrl: string;
  highlighted?: boolean;
}

export interface PremiumAddOn {
  name: string;
  priceRange: string;
  description: string;
}

export interface SpeakingTopic {
  title: string;
  description: string;
  audience: string;
}

export interface SpeakingEvent {
  slug: string;
  name: string;
  organization: string;
  date: string;
  location: string;
  description: string;
  resources?: string[];
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  featured?: boolean;
  coverImage?: string;
  readingTime: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
