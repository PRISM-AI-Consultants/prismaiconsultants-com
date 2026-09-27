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
  shrmKeynotes: "2",
  recentStages: "15",
  coachingSessions: "750+",
  upcoming: "4",
};

export const upcomingEvents = [
  { name: "High Center Nonprofit: Turning Data into Storytelling for Fundraising", date: "October 7, 2026", location: "Lancaster, PA" },
  { name: "ALCA Mid-Atlantic 2026, General Session", date: "November 9, 2026", location: "Falls Church, VA" },
  { name: "McKinney Media Headshot Happy Hour", date: "November 19, 2026", location: "The Swiftwater, PA" },
  { name: "SEPA SHRM Chapter Meeting", date: "January 19, 2027", location: "Southeastern PA" },
];

export const pastEvents: SpeakingEvent[] = [
  {
    slug: "pa-shrm-2026-opening-keynote",
    name: "PA SHRM 2026 Annual Conference, Opening Keynote",
    organization: "Pennsylvania State Council of SHRM",
    date: "September 11, 2026",
    location: "Wyndham Lancaster Resort, Lancaster, PA",
    description:
      "AI That Actually Works. Volunteers brought real HR problems to the stage and watched them get solved with AI live. The full keynote is on YouTube.",
  },
  {
    slug: "high-center-kl2-2026",
    name: "KL2 Peer Group",
    organization: "The High Center (Elizabethtown College)",
    date: "August 25, 2026",
    location: "Allentown, PA",
    description:
      "Workshop on putting AI to work for a peer group of business leaders.",
  },
  {
    slug: "ideas-to-income-summit-2026",
    name: "Ideas to Income Summit: Build It Live With AI",
    organization: "Ideas to Income Summit",
    date: "August 19, 2026",
    location: "Virtual",
    description:
      "Summit session building an AI-powered offer live.",
  },
  {
    slug: "aarei-club-2026",
    name: "Guest Expert Speaker",
    organization: "Allentown Area Real Estate Investors Club",
    date: "June 17, 2026",
    location: "Allentown, PA",
    description:
      "Live AI demonstration for real estate investors.",
  },
  {
    slug: "delta-and-ai-2026",
    name: "Delta and AI Panel",
    organization: "Delta Sigma Theta, Collin County Alumni Chapter",
    date: "May 4, 2026",
    location: "Virtual",
    description:
      "Panelist on AI for May Week.",
  },
  {
    slug: "lv-business-summit-2026",
    name: "Lehigh Valley Business Summit: AI in Action",
    organization: "Greater Lehigh Valley Chamber of Commerce",
    date: "April 30, 2026",
    location: "DeSales University, Center Valley, PA",
    description:
      "Panelist on the AI in Action panel.",
  },
  {
    slug: "zoellner-ai-arts-2026",
    name: "AI in Arts and Culture",
    organization: "Zoellner Arts Center, Lehigh University",
    date: "April 28, 2026",
    location: "Bethlehem, PA",
    description:
      "Talk and panel for arts and culture executives.",
  },
  {
    slug: "aablc-roi-masterclass-2026",
    name: "ROI from AI Masterclass",
    organization: "AABLC, Greater Lehigh Valley Chamber",
    date: "March 20, 2026",
    location: "Virtual",
    description:
      "Virtual masterclass on getting a return from AI.",
  },
  {
    slug: "asd-career-symposium-2026",
    name: "College and Career Symposium",
    organization: "Allentown School District",
    date: "March 10, 2026",
    location: "Muhlenberg College, Allentown, PA",
    description:
      "Panelist introducing students to AI careers and the future of work.",
  },
  {
    slug: "ifel-ai-readiness-2026",
    name: "AI Readiness Series",
    organization: "IFEL / Verizon",
    date: "January to April 2026",
    location: "Virtual",
    description:
      "Webinars on AI for content, storytelling, and research for small business owners.",
  },
  {
    slug: "executive-forum-2025",
    name: "Beyond the Buzz: Real AI for Real Business",
    organization: "Executive Forum of the Lehigh Valley",
    date: "November 19, 2025",
    location: "DeSales University, Center Valley, PA",
    description:
      "Presenter at the Executive Forum Signature Event.",
  },
  {
    slug: "lehigh-mba-2025",
    name: "MBA AI Workshop",
    organization: "Lehigh University",
    date: "October 13, 2025",
    location: "Bethlehem, PA",
    description:
      "Hands-on AI workshop for MBA students.",
  },
  {
    slug: "pa-shrm-2025",
    name: "PA SHRM 2025 State Conference, Opening Keynote",
    organization: "Pennsylvania State Council of SHRM",
    date: "September 12, 2025",
    location: "The Penn Stater, State College, PA",
    description:
      "Friday opening keynote on AI strategies for HR productivity.",
  },
  {
    slug: "faulkner-automotive-2025",
    name: "AI Training",
    organization: "Faulkner Automotive Group",
    date: "May 21, 2025",
    location: "Downingtown, PA",
    description:
      "Hands-on AI workshop for dealership leaders.",
  },
  {
    slug: "ckv-hr-2025",
    name: "AI Strategies for HR Leaders",
    organization: "Central Keystone Valley HR Professionals",
    date: "January 15, 2025",
    location: "Virtual",
    description:
      "Talk for a regional group of HR professionals.",
  },
];
