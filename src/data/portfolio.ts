import type { PortfolioItem } from "@/lib/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "lcr-dashboard",
    name: "Law Firm Performance Dashboard",
    client: "Law Firm (8 Attorneys)",
    category: "dashboards",
    description:
      "Real-time attorney performance dashboard tracking KPIs across an 8-attorney firm. Pulls live data via API integration, visualizes caseload distribution, revenue attribution, and individual performance metrics. Built and deployed in 2 days.",
    stack: "Docker + API Integration",
    marketValue: "$15,000-$25,000",
    clientPaid: "Retainer client",
    quote: "Oh my God, holy moly... this is exactly what I wanted.",
    quoteAuthor: "Managing Partner",
    featured: true,
  },
  {
    id: "bmi-valuation-agent",
    name: "Business Valuation Research Agent",
    client: "Business Valuation Firm",
    category: "ai-agents",
    description:
      "AI research agent that automates business valuation report preparation. Pulls comparable transactions, industry data, and financial benchmarks to generate structured research briefs. Saves 4-5 hours per valuation report.",
    stack: "Python + AI + Web Scraping",
    marketValue: "$12,000-$20,000",
    clientPaid: "Project engagement",
    quote:
      "This saves me 4-5 hours per report. It is the equivalent of a $12,000-$20,000 tool.",
    quoteAuthor: "Business Valuator",
    featured: true,
  },
  {
    id: "pharmacy-literature-agent",
    name: "Clinical Literature Research Agent",
    client: "Healthcare Practice",
    category: "ai-agents",
    description:
      "AI agent that searches, summarizes, and synthesizes clinical literature for decision support. Enables practitioners to stay current on drug interactions, treatment protocols, and regulatory updates without hours of manual research.",
    stack: "Python + AI + PubMed Integration",
    marketValue: "$8,000-$12,000",
    clientPaid: "Project engagement",
  },
  {
    id: "lvedc-website-audit",
    name: "Economic Development Website Audit",
    client: "Regional Economic Development",
    category: "dashboards",
    description:
      "Comprehensive website audit dashboard analyzing SEO performance, content gaps, accessibility compliance, and competitive positioning for a regional economic development corporation.",
    stack: "Python + Web Analysis + Dashboard",
    marketValue: "$5,000-$8,000",
    clientPaid: "Project engagement",
  },
  {
    id: "strategic-plan-live",
    name: "Strategic Plan (Built Live)",
    client: "Regional Economic Development (CEO's Team)",
    category: "automations",
    description:
      "Built a complete strategic plan for positioning a region for a multi-billion dollar investment opportunity, live in front of the CEO's leadership team. Demonstrated real-time AI strategy development that would normally take weeks of consulting work.",
    stack: "AI Strategy + Live Build",
    marketValue: "$10,000-$15,000",
    clientPaid: "Project engagement",
  },
  {
    id: "partnership-playbook",
    name: "Partnership Development Playbook",
    client: "Faith-Based Organization",
    category: "content-systems",
    description:
      "Strategic partnership development playbook for a faith-based organization, including outreach templates, partnership tiers, engagement frameworks, and follow-up automation sequences.",
    stack: "AI Content Generation + Strategy",
    marketValue: "$5,000",
    clientPaid: "Retainer client",
    quote:
      "I'm just beyond impressed... the excellence that it spoke to.",
    quoteAuthor: "Organization Leader",
  },
  {
    id: "ai-advocacy-media",
    name: "AI-Produced Advocacy Media",
    client: "K-12 Advocacy Program",
    category: "content-systems",
    description:
      "AI-assisted media production for a K-12 advocacy campaign. Combined original music composition, lyric generation, and video production using AI tools to deliver a professional advocacy asset at a fraction of traditional production costs.",
    stack: "AI Music + Video Production",
    marketValue: "$3,000-$5,000",
    clientPaid: "Project engagement",
  },
  {
    id: "recovery-content-system",
    name: "Multi-Location Content System",
    client: "Healthcare Practice (3 businesses, 4 locations)",
    category: "content-systems",
    description:
      "Multi-location content management system generating consistent, compliant content across 3 healthcare businesses and 4 physical locations. Handles social media, blog posts, and patient education materials.",
    stack: "AI Content Pipeline + Multi-brand Management",
    marketValue: "$2,000-$3,000",
    clientPaid: "Project engagement",
  },
  {
    id: "offer-architecture-live",
    name: "Offer Architecture (Live Build)",
    client: "Operations Consultant",
    category: "automations",
    description:
      "Complete offer architecture and pricing strategy built live on LinkedIn, demonstrating real-time AI consulting capabilities. Restructured service tiers, pricing psychology, and sales page copy in a single session.",
    stack: "AI Strategy + Live Build",
    marketValue: "$2,500-$5,000",
    clientPaid: "Built live on LinkedIn",
    quote: "I'm converted.",
    quoteAuthor: "Operations Consultant",
  },
  {
    id: "tcas-business-system",
    name: "Full CRM + AI Business System",
    client: "Capital Advisory Firm",
    category: "automations",
    description:
      "End-to-end business system for a capital advisory firm including CRM configuration, AI-powered lead scoring, automated follow-up sequences, document generation, and pipeline management. Full operational backbone from CRM to close.",
    stack: "CRM + AI Automation + Custom Integrations",
    marketValue: "$25,000-$40,000",
    clientPaid: "Multi-phase engagement",
  },
  {
    id: "vida-lawyers-ai",
    name: "Immigration Law AI System",
    client: "Immigration Law Firm",
    category: "ai-agents",
    description:
      "AI-powered immigration law system featuring a consultation agent that cut initial consultation time from 90 minutes to 30 minutes. Handles intake screening, document checklist generation, and case eligibility assessment.",
    stack: "AI Agent + Legal Workflow Automation",
    marketValue: "$15,000-$25,000",
    clientPaid: "Project engagement",
  },
  {
    id: "transcript-intelligence",
    name: "PRISM Internal AI Platform",
    client: "PRISM Internal",
    category: "internal",
    description:
      "54 Python modules, 34 AI agents, 880+ transcripts processed. Powers the entire business. Automated pipeline for meeting intelligence, client insights, follow-up generation, sentiment analysis, and strategic recommendations.",
    stack: "Python + AI + Google Drive + Gmail + Docker",
    marketValue: "$200,000-$500,000",
    clientPaid: "Internal build",
  },
  {
    id: "agent-world",
    name: "Agent World Interactive Showcase",
    client: "PRISM Internal",
    category: "internal",
    description:
      "Interactive showcase of PRISM's AI agent ecosystem. Visitors can explore and interact with live demonstrations of the agents that power PRISM's operations, from meeting intelligence to client research.",
    stack: "Next.js + Python API + AI",
    liveUrl: "https://agents.prismaiconsultants.com",
    marketValue: "$15,000-$25,000",
    clientPaid: "Internal build",
  },
  {
    id: "game-portfolio",
    name: "Game Portfolio",
    client: "PRISM Internal",
    category: "games",
    description:
      "A growing library of fully deployed browser games showcasing AI-assisted game development. Pharmageddon, First Cut, The Breadman, District Zero, ReceptorDefense, Objection Blaster, and more.",
    stack: "JavaScript + HTML5 Canvas + Game Design + AI Art",
    liveUrl: "https://prismstudios.app",
    marketValue: "$75,000-$100,000",
    clientPaid: "Internal build",
  },
];
