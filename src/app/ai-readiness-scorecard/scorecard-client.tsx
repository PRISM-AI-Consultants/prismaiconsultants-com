"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  {
    id: 1,
    question: "How much time does your team spend on repetitive tasks weekly?",
    options: [
      { score: 1, label: "Under 5 hrs" },
      { score: 2, label: "5-10 hrs" },
      { score: 3, label: "10-20 hrs" },
      { score: 4, label: "20-40 hrs" },
      { score: 5, label: "Over 40 hrs" },
    ],
    insight:
      "Teams averaging 20+ hours on repetitive work typically reclaim 60-80% of that time within 90 days of AI deployment.",
  },
  {
    id: 2,
    question:
      "How many tools/platforms does your team use that don't talk to each other?",
    options: [
      { score: 1, label: "1-2 tools" },
      { score: 2, label: "3-4 tools" },
      { score: 3, label: "5-6 tools" },
      { score: 4, label: "7-9 tools" },
      { score: 5, label: "10+ tools" },
    ],
    insight:
      "Disconnected systems create data silos. AI integration layers eliminate copy-paste workflows and reduce errors by 90%.",
  },
  {
    id: 3,
    question: "How often do you make decisions without real-time data?",
    options: [
      { score: 1, label: "Rarely" },
      { score: 2, label: "Monthly" },
      { score: 3, label: "Weekly" },
      { score: 4, label: "Several/wk" },
      { score: 5, label: "Daily" },
    ],
    insight:
      "Real-time dashboards powered by AI surface the metrics that matter, so decisions happen in minutes, not meetings.",
  },
  {
    id: 4,
    question: "How long does it take to onboard a new client or project?",
    options: [
      { score: 1, label: "Under 1 day" },
      { score: 2, label: "1-3 days" },
      { score: 3, label: "3-7 days" },
      { score: 4, label: "1-2 weeks" },
      { score: 5, label: "Over 2 weeks" },
    ],
    insight:
      "Automated onboarding sequences reduce client ramp-up time by 70% and improve first-week satisfaction scores.",
  },
  {
    id: 5,
    question: "What percentage of your revenue comes from manual outreach?",
    options: [
      { score: 1, label: "Under 10%" },
      { score: 2, label: "10-25%" },
      { score: 3, label: "25-35%" },
      { score: 4, label: "35-50%" },
      { score: 5, label: "Over 50%" },
    ],
    insight:
      "AI-driven outreach systems generate 3-5x more qualified conversations than manual methods at a fraction of the cost.",
  },
];

const tiers = [
  {
    range: "5-10",
    name: "Early Stage",
    color: "text-green-400",
    borderColor: "border-green-400/30",
    headline: "You're early. That's a good thing.",
    description:
      "One well-placed AI system could save your team 10+ hours per week. You have the advantage of building smart from the start instead of retrofitting broken processes. A single automation sprint would put you ahead of 80% of businesses your size.",
    cta: "A Momentum Sprint would set the foundation.",
  },
  {
    range: "11-17",
    name: "Ready to Move",
    color: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    headline: "You're ready. The foundation is there.",
    description:
      "Your operations have enough complexity that AI will deliver immediate, measurable ROI. A Momentum Sprint would transform your operations in 90 days, connecting your tools, automating your outreach, and giving you dashboards that actually drive decisions.",
    cta: "A Momentum Sprint or Core retainer would accelerate everything.",
  },
  {
    range: "18-25",
    name: "Overdue",
    color: "text-red-400",
    borderColor: "border-red-400/30",
    headline: "You're overdue. Your competitors are already automating what you do manually.",
    description:
      "Every week without AI systems costs you revenue, time, and competitive position. The good news: the higher your score, the bigger the ROI when you deploy. PRISM builds the systems that turn operational chaos into a scalable machine.",
    cta: "Book a strategy call today. The ROI conversation will be eye-opening.",
  },
];

export function ScorecardClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const allAnswered = Object.keys(answers).length === questions.length;

  const handleSelect = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion((prev) => prev + 1), 300);
    }
  };

  const handleShowResults = () => {
    setShowEmailCapture(true);
  };

  const handleSubmitEmail = async () => {
    if (!email) return;
    setSubmitting(true);
    try {
      await fetch("/api/capture-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          eventSlug: "ai-readiness-scorecard",
          score: totalScore,
          answers,
        }),
      });
    } catch {
      // Continue even if capture fails
    }
    setSubmitting(false);
    setShowEmailCapture(false);
    setShowResults(true);
  };

  const getTier = () => {
    if (totalScore <= 10) return tiers[0];
    if (totalScore <= 17) return tiers[1];
    return tiers[2];
  };

  // Results view
  if (showResults) {
    const tier = getTier();
    return (
      <>
        <Section className="pt-24 pb-12 md:pt-32">
          <Container size="md">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Your AI Readiness Score
              </p>
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full border-4 border-accent bg-accent/10 mb-6">
                <span className="text-4xl font-extrabold text-accent">
                  {totalScore}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">out of 25</p>
            </div>

            <Card className={`border-2 ${tier.borderColor}`}>
              <CardContent className="p-8 md:p-12">
                <p className={`text-lg font-bold ${tier.color} mb-2`}>
                  {tier.name} ({tier.range})
                </p>
                <h2 className="text-2xl font-extrabold text-foreground mb-4">
                  {tier.headline}
                </h2>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                <p className="text-sm font-semibold text-accent mb-8">
                  {tier.cta}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://calendly.com/prismaiconsultants/introductory-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    Book a Free Strategy Call
                  </a>
                  <a
                    href="/downloads/ai-readiness-scorecard.pdf"
                    target="_blank"
                    className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border px-6 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Download Full Scorecard (PDF)
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Score breakdown */}
            <div className="mt-8 grid gap-3">
              {questions.map((q) => (
                <div
                  key={q.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3"
                >
                  <span className="text-sm text-muted-foreground">
                    {q.question}
                  </span>
                  <span className="text-sm font-bold text-accent ml-4">
                    {answers[q.id]}/5
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </>
    );
  }

  // Email capture gate
  if (showEmailCapture) {
    return (
      <Section className="pt-24 pb-12 md:pt-32">
        <Container size="sm">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Almost There
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Your score is ready.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Enter your email to see your results and get the full scorecard
              with personalized recommendations.
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <button
                  onClick={handleSubmitEmail}
                  disabled={!email || submitting}
                  className="w-full h-12 rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Loading..." : "See My Results"}
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  No spam. Just your scorecard and one follow-up with
                  recommendations.
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    );
  }

  // Quiz view
  const q = questions[currentQuestion];
  const progress = ((currentQuestion + (answers[q.id] ? 1 : 0)) / questions.length) * 100;

  return (
    <>
      <Section className="pt-24 pb-6 md:pt-32">
        <Container size="md">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              AI Readiness Scorecard
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              5 Questions. 2 Minutes.
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Find out where AI can save you the most time and money.
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-0">
        <Container size="md">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {q.id}
                </div>
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  {q.question}
                </h2>
              </div>

              <div className="grid grid-cols-5 gap-3 mb-8">
                {q.options.map((opt) => (
                  <button
                    key={opt.score}
                    onClick={() => handleSelect(q.id, opt.score)}
                    className={`flex flex-col items-center gap-2 rounded-[var(--radius-md)] border-2 p-4 transition-all ${
                      answers[q.id] === opt.score
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border hover:border-accent/40"
                    }`}
                  >
                    <span className="text-lg font-bold">{opt.score}</span>
                    <span className="text-xs text-muted-foreground text-center">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
                {q.insight}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setCurrentQuestion((p) => Math.max(0, p - 1))}
              disabled={currentQuestion === 0}
              className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={() =>
                  setCurrentQuestion((p) =>
                    Math.min(questions.length - 1, p + 1)
                  )
                }
                disabled={!answers[q.id]}
                className="text-sm font-medium text-accent hover:text-accent/80 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleShowResults}
                disabled={!allAnswered}
                className="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                See My Score
              </button>
            )}
          </div>

          {/* Question dots */}
          <div className="flex justify-center gap-2 mt-8 mb-12">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQuestion(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === currentQuestion
                    ? "bg-accent w-6"
                    : answers[questions[i].id]
                      ? "bg-accent/50"
                      : "bg-muted"
                }`}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
