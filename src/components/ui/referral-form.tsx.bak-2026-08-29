"use client";

import { useState } from "react";

export function ReferralForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-[var(--radius-md)] border border-accent/40 bg-accent/5 p-6">
        <p className="text-lg font-semibold">Got it. Thank you.</p>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll reach out to your referral and keep you posted. When they
          become a client, you earn 10% of what they pay us for a year. We&apos;ll
          send the one-page agreement with your first check, nothing to sign now.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          autoComplete="name"
          className={field}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          autoComplete="email"
          className={field}
        />
      </div>
      <input
        name="phone"
        placeholder="Your phone (optional)"
        autoComplete="tel"
        className={field}
      />
      <textarea
        name="referring"
        rows={3}
        placeholder="Who are you referring? Business name and how to reach them. Optional, you can also just tell us to get in touch and we'll take it from there."
        className={field}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send referral"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Email us at info@prismaiconsultants.com and
          we&apos;ll sort it.
        </p>
      )}
    </form>
  );
}
