/**
 * Vertical pillar pages.
 *
 * WHY THESE EXIST: measured 2026-08-12, PRISM is cited 0 of 6 on generic buyer
 * queries and 0 of 6 on vertical buyer queries in AI answer engines. "Small
 * business AI consultant" is a category PRISM cannot win against national
 * firms. "AI for an 8-attorney law firm" is one it can, because PRISM has
 * actually done that work.
 *
 * CONTENT RULES, non-negotiable:
 *  1. Every claim traces to a real build in src/data/portfolio.ts. No invented
 *     stats, no invented client results, no invented promises.
 *  2. Quotes are verbatim from portfolio.ts, which is already public on
 *     /portfolio, so they are consent-cleared. Do not add a quote that is not
 *     already published there.
 *  3. Answer-shaped: the question is the heading, the direct answer is the
 *     first two sentences. Engines extract the top of a section, so a buried
 *     answer loses the citation.
 *  4. Clients stay anonymous by role and industry, per the PII rule.
 *  5. No hour counts. No "PRISM platform" language. No em dashes.
 */

export type VerticalFaq = { q: string; a: string };

export type VerticalProof = {
  what: string;
  detail: string;
  marketValue?: string;
  quote?: string;
  quoteAuthor?: string;
};

export type Vertical = {
  slug: string;
  /** The buyer query this page is built to answer, verbatim from the tracker. */
  targetQuery: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** The direct answer. First two sentences carry the whole thing. */
  answer: string;
  problems: { heading: string; body: string }[];
  proof: VerticalProof[];
  faqs: VerticalFaq[];
};

export const verticals: Vertical[] = [
  {
    slug: "financial-advisors",
    targetQuery: "AI consultant for financial advisors",
    title: "Financial Advisory & Valuation",
    metaTitle: "AI for Financial Advisors, Valuation and Capital Advisory Firms",
    metaDescription:
      "PRISM builds and runs production AI systems inside financial advisory, business valuation, insurance, and capital advisory firms. Real builds, real numbers, based in Allentown PA.",
    h1: "AI for financial advisory, valuation, and capital advisory firms",
    answer:
      "Financial firms get the most out of AI when it is built into the work that already takes the longest: research, report preparation, client follow up, and training. PRISM builds those systems inside the firm, with the team, and then keeps them running. We have delivered six production systems across business valuation, financial advisory, insurance, and capital advisory, including a research agent that cut four to five hours out of every valuation report.",
    problems: [
      {
        heading: "What should a financial advisory firm automate with AI first?",
        body: "Start with the task your most expensive person repeats most often. In valuation work that is comparable transaction research, which is why the first system we built for a valuation firm was a research agent rather than a chatbot. In advisory work it is usually client-facing preparation and follow up. The test is simple: if a senior person does it every week and the output looks similar each time, it is a candidate.",
      },
      {
        heading: "Does AI create a compliance problem for a regulated firm?",
        body: "It creates a documentation problem, which is manageable, and a data problem, which has to be designed for from the start. The workable pattern is to keep the human as the reviewer of record, log what the system produced and what the human changed, and keep client data inside systems the firm already controls. Firms that treat AI as a drafting layer under human review clear this. Firms that let it speak to clients unsupervised do not.",
      },
      {
        heading: "Why do most AI projects at advisory firms stall?",
        body: "They stop at strategy. A deck names ten opportunities, nobody owns the build, and the firm is back where it started a quarter later. The systems that survive are the ones built with the team inside their real workflow, on their real data, so the people who have to use them were there when it was made.",
      },
    ],
    proof: [
      {
        what: "Business valuation research agent",
        detail:
          "Automates valuation report preparation by pulling comparable transactions, industry data, and financial benchmarks into structured research briefs.",
        marketValue: "$12,000-$20,000",
        quote:
          "This saves me 4-5 hours per report. It is the equivalent of a $12,000-$20,000 tool.",
        quoteAuthor: "Business Valuator",
      },
      {
        what: "Full CRM and AI business system, capital advisory firm",
        detail:
          "CRM configuration, AI lead scoring, automated follow up sequences, document generation, and pipeline management, built end to end.",
        marketValue: "$25,000-$40,000",
      },
      {
        what: "AI sales training engine, national insurance organization",
        detail:
          "AI-run training games and a 62-objection handling playbook used to train more than 200 agents in a single session.",
        marketValue: "$15,000-$25,000",
        quote:
          "I'm here to give a resounding positive review... nothing short of amazing.",
        quoteAuthor: "Senior Sales Leader, Financial Services",
      },
      {
        what: "Client decision-matrix application, advisory firm",
        detail:
          "A client-facing decision-matrix app plus analytics dashboards, in active use with the firm's internal coaching group. Whole-team adoption rather than one power user.",
        marketValue: "$15,000-$25,000",
      },
    ],
    faqs: [
      {
        q: "How long does it take to get an AI system running in a financial firm?",
        a: "Days rather than months for a single system. The valuation research agent and the law firm performance dashboard were both built and deployed in about two days. Larger programs like a full CRM and AI business system run longer because they touch more of the operation.",
      },
      {
        q: "Do we need a technical person on staff?",
        a: "No. PRISM builds the systems and trains your team to run them. The firms we work with are led by advisors, valuators, and partners, not engineers.",
      },
      {
        q: "What does it cost?",
        a: "Engagements generally run $4,500 to $20,000 depending on scope, and ongoing partnership starts at $2,500 per month. The systems above carry market values between $8,000 and $40,000 if a firm were to commission them separately.",
      },
      {
        q: "Where is PRISM based?",
        a: "Allentown, Pennsylvania. We work with firms across the Lehigh Valley and remotely nationwide.",
      },
    ],
  },
];

export function getVertical(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug);
}
