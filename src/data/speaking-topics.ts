import type { SpeakingTopic, SpeakingEvent } from "@/lib/types";

export const speakingTopics: SpeakingTopic[] = [
  {
    title: "AI That Actually Works (Signature Keynote)",
    description:
      "The PA SHRM 2026 opening keynote. Volunteers bring a real problem from their job to the stage, and Dr. Jeff solves it with AI in front of the room. Open enrollment questions, pay benchmarking, the work that eats a week. The audience watches it get done, not described.",
    audience: "HR leaders, association conferences, leadership teams",
  },
  {
    title: "AI Systems Architecture for Teams",
    description:
      "How to build production AI systems that run your business, not just demos. Covers the difference between proof-of-concept AI and real operational systems, with live demonstrations of working business infrastructure.",
    audience: "Business leaders, executives, operations teams",
  },
  {
    title: "AI for Pharmacy Operations",
    description:
      "From manual processes to AI-powered workflows in pharmacy. Practical strategies for integrating AI into clinical decision support, literature review, inventory management, and patient communication.",
    audience: "PharmD professionals, healthcare administrators",
  },
  {
    title: "AI Storytelling and Content Creation",
    description:
      "Using AI to tell your brand story across every medium. From written content to music, video, and interactive experiences, learn how AI amplifies creative output without replacing the human voice.",
    audience: "Marketing teams, content creators, small business owners",
  },
  {
    title: "The Jevons Paradox of AI",
    description:
      "Why AI increases demand for humans, not replaces them. Drawing from economics and real implementation data, this talk reframes the AI workforce conversation around augmentation, capacity expansion, and the growing need for human judgment.",
    audience: "HR professionals, workforce development, policy makers",
  },
];

export const speakingStats = {
  eventsDelivered: "15+",
  audiencesTrained: "200+",
  conversionRate: "25-30%",
  calendlyBookingsFromOneSession: "12",
};

export const pastEvents: SpeakingEvent[] = [
  {
    slug: "pa-shrm-2026-opening-keynote",
    name: "PA SHRM 2026 Annual Conference, Opening Keynote",
    organization: "Pennsylvania SHRM State Council",
    date: "September 11, 2026",
    location: "Wyndham Lancaster Resort, Lancaster, PA",
    description:
      "Opening keynote, AI That Actually Works, delivered to the full conference ballroom. Two HR volunteers brought real problems to the stage and watched them get solved live. Dr. Jeff's second year speaking at PA SHRM. The full keynote is on YouTube.",
  },
  {
    slug: "lehigh-valley-business-summit-2026",
    name: "Lehigh Valley Business Summit",
    organization: "Greater Lehigh Valley Chamber of Commerce",
    date: "April 30, 2026",
    location: "DeSales University, Center Valley, PA",
    description: "Keynote and panel on putting AI to work in regional businesses.",
  },
  {
    slug: "pa-shrm-2025",
    name: "PA SHRM 2025 Annual Conference",
    organization: "Pennsylvania SHRM State Council",
    date: "September 2025",
    location: "Pennsylvania",
    description: "Keynote on AI for HR leaders.",
  },
  {
    slug: "ifel-ask-the-expert-1",
    name: "IFEL Ask the Expert (Session 1)",
    organization: "IFEL / Verizon Small Business Digital Ready",
    date: "2025",
    location: "Virtual",
    description:
      "Interactive AI workshop for small business owners through the IFEL and Verizon Small Business Digital Ready program. Generated 12 Calendly bookings from 40 attendees, a 25-30% conversion rate. Attendees described being 'inspired beyond belief.'",
  },
  {
    slug: "ifel-ask-the-expert-2",
    name: "IFEL Ask the Expert (Session 2)",
    organization: "IFEL / Verizon Small Business Digital Ready",
    date: "2025",
    location: "Virtual",
    description:
      "Follow-up session expanding on AI implementation strategies for small businesses. Continued the high engagement pattern from the first session with practical, hands-on demonstrations.",
  },
  {
    slug: "lvedc-lunch-learn",
    name: "LVEDC Leadership Lunch & Learn",
    organization: "Lehigh Valley Economic Development Corporation",
    date: "2025",
    location: "Lehigh Valley, PA",
    description:
      "AI strategy presentation for LVEDC leadership team. Included a live build of a strategic plan for the Eli Lilly $3.5B investment opportunity, demonstrating real-time AI consulting capabilities.",
  },
  {
    slug: "bni-chapter-events",
    name: "BNI Chapter Events",
    organization: "BNI",
    date: "2025",
    location: "Lehigh Valley, PA",
    description:
      "Multiple presentations across BNI chapters demonstrating AI applications for small business owners. Focused on practical, immediately actionable AI strategies for referral-based businesses.",
  },
  {
    slug: "asd-career-symposium",
    name: "Allentown School District Career Symposium",
    organization: "Allentown School District",
    date: "2025",
    location: "Allentown, PA",
    description:
      "Career symposium presentation introducing high school students to AI careers and the future of work. Demonstrated live AI tools and discussed how students can prepare for an AI-augmented workforce.",
  },
  {
    slug: "aablc-virtual-events",
    name: "AABLC Virtual Events",
    organization: "African American Business Leadership Council",
    date: "2025",
    location: "Virtual",
    description:
      "Virtual presentations on AI adoption for minority-owned businesses. Covered practical AI tools, cost-effective implementation strategies, and how AI can level the playing field for underrepresented entrepreneurs.",
  },
  {
    slug: "chamber-technical-assistance",
    name: "Chamber Technical Assistance",
    organization: "Local Chamber of Commerce",
    date: "2025",
    location: "Lehigh Valley, PA",
    description:
      "Technical assistance sessions helping chamber members understand and implement AI tools. Provided hands-on guidance tailored to each business's specific needs and current technology stack.",
  },
];
