"use client";

import { useState } from "react";

interface EmailCaptureFormProps {
  eventSlug: string;
}

export function EmailCaptureForm({ eventSlug }: EmailCaptureFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/capture-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, eventSlug }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <p className="text-lg font-semibold text-accent">
          You&apos;re all set!
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Check your inbox for the session resources.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="capture-name"
          className="block text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          id="capture-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-1 block w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>
      <div>
        <label
          htmlFor="capture-email"
          className="block text-sm font-medium text-foreground"
        >
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="capture-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-1 block w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {status === "submitting" ? "Sending..." : "Get Session Resources"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
