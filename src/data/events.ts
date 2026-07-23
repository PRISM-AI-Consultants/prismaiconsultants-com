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
  // Removed 2026-07-22: "sepa-shrm-sept" advertised a Sept 17, 2026 SEPA SHRM HR Legal Summit
  // keynote that was never confirmed. Jeff was evaluated (3/9 committee call) but it did not
  // convert; the relationship pivoted to a confirmed UNPAID monthly chapter meeting on Jan 19, 2027.
  // Do not re-add a Sept 17 event. A Jan 19, 2027 resources page can be built closer to that date.
];
