import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PlaybookForm } from "./playbook-form";

export const metadata: Metadata = {
  title:
    "The AI Agent Ops Playbook: 9 Root Causes That Break AI Automation | PRISM AI Consultants",
  description:
    "Free playbook from running 34 AI agents in production for 44 days. 127 incidents logged. 9 root causes identified. Every fix documented. Download the PDF.",
  keywords: [
    "AI agent ops",
    "AI automation failures",
    "AI agent production",
    "LLM ops",
    "AI agent monitoring",
    "multi-agent systems",
    "AI ops playbook",
  ],
  openGraph: {
    title: "The AI Agent Ops Playbook: 9 Root Causes That Break AI Automation",
    description:
      "127 incidents. 34 agents. 44 days. What actually breaks in production AI and how to fix it.",
  },
};

const stats = [
  { number: "127", label: "Incidents Logged" },
  { number: "34", label: "Agents in Fleet" },
  { number: "383", label: "Sessions Mined" },
  { number: "44", label: "Days in Production" },
];

const rootCauses = [
  {
    number: "1",
    title: "Deployment Drift",
    description: "Your dev machine says it works. Your server disagrees.",
  },
  {
    number: "2",
    title: "Missing Guard Rails",
    description:
      "The agent did exactly what you told it to. Two hundred times.",
  },
  {
    number: "3",
    title: "Configuration Drift",
    description: "Hardcoded values that silently change on every rebuild.",
  },
  {
    number: "4",
    title: "Incomplete Migration",
    description: "You thought you migrated everything. You did not.",
  },
  {
    number: "5",
    title: "Feature Not Wired",
    description: "Built it, tested it, never connected it to the pipeline.",
  },
  {
    number: "6",
    title: "Logic Too Broad",
    description: "Your filter caught the good stuff too.",
  },
  {
    number: "7",
    title: "Wrong Execution Order",
    description: "Step 2 ran before Step 1 finished.",
  },
  {
    number: "8",
    title: "Silent Failure",
    description: "It broke a month ago. Nobody noticed.",
  },
  {
    number: "9",
    title: "Process Failure",
    description: "Had the answer. Did not look.",
  },
];

export default function OpsPlaybookPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
              Free Playbook
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-100 mb-6 leading-tight">
              The AI Agent Ops Playbook
            </h1>
            <p className="text-xl text-stone-300 mb-2">
              9 Root Causes That Break AI Automation
            </p>
            <p className="text-lg text-stone-400 mb-8">
              (And How to Fix Them)
            </p>
            <p className="text-stone-400 max-w-2xl mx-auto mb-10">
              We ran 34 AI agents in production for 44 days and logged every
              failure. This playbook is what we learned. Every root cause cost us
              real time, real money, or real embarrassment.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-neutral-900 border border-neutral-800 rounded-lg p-4"
                >
                  <div className="text-3xl font-bold text-purple-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-stone-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section className="pb-16">
        <Container>
          <div className="max-w-md mx-auto">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
              <h2 className="text-xl font-semibold text-stone-100 mb-2 text-center">
                Download the Playbook
              </h2>
              <p className="text-sm text-stone-400 mb-6 text-center">
                14-page PDF with all 9 root causes, fix recipes, and real
                examples.
              </p>
              <PlaybookForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Root Causes Preview */}
      <Section className="pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-100 mb-8 text-center">
              What You Will Learn
            </h2>
            <div className="grid gap-4">
              {rootCauses.map((cause) => (
                <div
                  key={cause.number}
                  className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm font-bold">
                    {cause.number}
                  </div>
                  <div>
                    <h3 className="text-stone-100 font-semibold">
                      {cause.title}
                    </h3>
                    <p className="text-sm text-stone-400 mt-1">
                      {cause.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section className="pb-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-stone-400 italic">
              &quot;Most AI agent content is written by people who deployed one
              bot last Tuesday. This is a field manual from someone running 34
              agents in production across email triage, session recaps, CRM
              sync, content generation, and security monitoring for a real
              business with real clients.&quot;
            </p>
            <p className="text-stone-500 text-sm mt-4">
              Also available as an open source field guide on{" "}
              <a
                href="https://github.com/PRISM-AI-Consultants/ai-agent-ops-field-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section className="pb-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-semibold text-stone-100 mb-4">
              About PRISM AI Consultants
            </h2>
            <p className="text-stone-400">
              PRISM is your AI business partner. We build and operate production
              AI systems for businesses that need more than a chatbot. Strategy
              sessions with Dr. Jeff Bullock. Execution by our team. Powered by
              a fleet of 34 autonomous agents.
            </p>
            <a
              href="https://calendly.com/prismaiconsultants/introductory-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors"
            >
              Book an Introductory Call
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
