"use client";

import { useState } from "react";

const PDF_URL =
  "https://github.com/PRISM-AI-Consultants/ai-agent-ops-field-guide/raw/main/assets/lead-magnet-9-root-causes.pdf";

export function PlaybookForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/capture-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          eventSlug: "ops-playbook",
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");

      // Trigger PDF download
      window.open(PDF_URL, "_blank");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center">
        <div className="text-2xl text-purple-400 mb-3">Got it.</div>
        <p className="text-stone-300 mb-4">
          Your download should have started. If not, click below.
        </p>
        <a
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors"
        >
          Download the Playbook (PDF)
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm text-stone-400 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Dr. Jane Smith"
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-purple-500 transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm text-stone-400 mb-1"
        >
          Email <span className="text-purple-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@company.com"
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-purple-500 transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting" || !email}
        className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-neutral-700 disabled:text-stone-500 text-white font-medium rounded-lg transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Get the Playbook"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Try again or email info@prismaiconsultants.com.
        </p>
      )}
      <p className="text-xs text-stone-500 text-center">
        No spam. Just the playbook.
      </p>
    </form>
  );
}
