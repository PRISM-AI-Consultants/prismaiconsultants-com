"use client";

import { useState } from "react";
import Link from "next/link";

// Posts to prism-voice-live on the VPS, which records the consent (timestamp,
// exact wording version) and adds the contact to GHL tagged sms-opt-in.
// Carriers review THIS form for the A2P 10DLC campaign: the box must stay
// unchecked by default and consent must never be required to do business.
const OPTIN_URL = "https://voice.srv1030637.hstgr.cloud/live/optin";
export const CONSENT_VERSION = "2026-09-27";

export function SmsOptinForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(OPTIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          consent: data.consent === "on",
          consent_version: CONSENT_VERSION,
          page: window.location.href,
        }),
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
        <p className="text-lg font-semibold">You&apos;re all set.</p>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll text you about your inquiry. Reply STOP at any time to opt
          out, or HELP for help.
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
          name="phone"
          type="tel"
          required
          placeholder="Mobile number"
          autoComplete="tel"
          className={field}
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="Email (optional)"
        autoComplete="email"
        className={field}
      />
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 flex-none accent-[var(--accent)]"
        />
        <span>
          I agree to receive text messages from PRISM AI Consultants at the
          number above about my inquiry, including booking links, appointment
          confirmations and reminders. Message frequency varies. Message and
          data rates may apply. Reply STOP to opt out, HELP for help. Consent is
          not a condition of any purchase. See our{" "}
          <Link href="/sms" className="underline hover:text-foreground">
            SMS Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Text me"}
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
