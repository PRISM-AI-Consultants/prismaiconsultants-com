import type { SpeakingEvent } from "@/lib/types";

export const speakingEvents: SpeakingEvent[] = [
  {
    slug: "ifel-apr2",
    name: "AI Readiness Series: Research Using AI",
    organization: "IFEL / Verizon Small Business Digital Ready",
    date: "April 2, 2026",
    location: "Virtual",
    description:
      "Thank you for attending the AI Readiness Series on Research Using AI. This session covered practical strategies for using AI tools to conduct market research, competitive analysis, and customer discovery. Below you will find the resources referenced during the presentation, including templates, tool recommendations, and follow-up materials to help you put what you learned into action.",
    resources: [
      "AI Research Toolkit (PDF)",
      "Market Research Prompt Templates",
      "Competitive Analysis Framework",
      "Book a follow-up strategy session: https://calendly.com/prismaiconsultants/introductory-call",
    ],
  },
  {
    slug: "sepa-shrm-sept",
    name: "AI Systems for HR Professionals",
    organization: "SEPA SHRM",
    date: "September 17, 2026",
    location: "Philadelphia Area",
    description:
      "Keynote presentation for the Southeastern Pennsylvania Society for Human Resource Management on building AI systems that enhance HR operations. This session will cover the Jevons Paradox of AI, why automation increases demand for human professionals rather than replacing them, and practical AI implementations for recruiting, onboarding, performance management, and employee engagement. Attendees will see live demonstrations of production AI systems and leave with a framework for evaluating AI readiness in their organizations.",
  },
];
