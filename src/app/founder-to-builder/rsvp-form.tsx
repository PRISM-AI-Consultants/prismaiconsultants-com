"use client";

import { useState } from "react";
import { INFO_SESSIONS } from "./workshop-data";

const PINK = "#FF1493";

export function RsvpForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [session, setSession] = useState("sep3");
  const [attending, setAttending] = useState("in-person");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/f2b-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          company: fd.get("company"),
          question: fd.get("question"),
          website: fd.get("website"),
          session,
          attending,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setState("done");
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Email info@prismaiconsultants.com and we will get you on the list."
      );
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-[14px] border border-[#262626] bg-[#111] p-8">
        <p
          className="font-heading text-2xl font-bold text-[#F5F5F4]"
          style={{ letterSpacing: "-0.02em" }}
        >
          You are on the list.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#A3A3A3]">
          The Zoom link comes by email before the session. Bring the part of your week
          that eats the most time. That is what we will work on.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-[10px] border border-[#2A2A2A] bg-[#0D0D0D] px-4 py-3 text-[15px] text-[#F5F5F4] placeholder:text-[#5A5A5A] focus:border-[#FF1493]/60 focus:outline-none focus:ring-1 focus:ring-[#FF1493]/40";
  const legend =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A8A8A]";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <span className={legend}>Which session</span>
        <div className="grid gap-2 sm:grid-cols-2">
          {INFO_SESSIONS.map((s) => {
            const on = session === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSession(s.id)}
                aria-pressed={on}
                className={`rounded-[10px] border px-4 py-3 text-left transition-colors ${
                  on
                    ? "border-[#FF1493] bg-[#FF1493]/[0.07]"
                    : "border-[#2A2A2A] bg-[#0D0D0D] hover:border-[#3A3A3A]"
                }`}
              >
                <span className="block text-[15px] font-semibold text-[#F5F5F4]">
                  {s.dateLine}
                </span>
                <span className="block text-[13px] text-[#A3A3A3]">
                  {s.timeLine} <span className="text-[#6A6A6A]">/ {s.altZone}</span>
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setSession("either")}
          className={`mt-2 text-[13px] underline underline-offset-4 transition-colors ${
            session === "either" ? "text-[#FF1493]" : "text-[#8A8A8A] hover:text-[#C4C4C4]"
          }`}
        >
          Either one works, send me both links
        </button>
      </div>

      <div>
        <span className={legend}>The workshop itself</span>
        <div className="flex flex-wrap gap-2">
          {[
            { v: "in-person", l: "In the room, Allentown" },
            { v: "virtual", l: "Virtual" },
            { v: "undecided", l: "Not sure yet" },
          ].map((o) => {
            const on = attending === o.v;
            return (
              <button
                key={o.v}
                type="button"
                onClick={() => setAttending(o.v)}
                aria-pressed={on}
                className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                  on
                    ? "border-[#FF1493] bg-[#FF1493]/[0.07] text-[#F5F5F4]"
                    : "border-[#2A2A2A] text-[#A3A3A3] hover:border-[#3A3A3A]"
                }`}
              >
                {o.l}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="f2b-name" className={legend}>
            Name
          </label>
          <input id="f2b-name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="f2b-email" className={legend}>
            Email
          </label>
          <input
            id="f2b-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="f2b-company" className={legend}>
            Business <span className="normal-case tracking-normal text-[#5A5A5A]">optional</span>
          </label>
          <input id="f2b-company" name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="f2b-phone" className={legend}>
            Phone <span className="normal-case tracking-normal text-[#5A5A5A]">optional</span>
          </label>
          <input id="f2b-phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="f2b-question" className={legend}>
          What do you want answered on the call
        </label>
        <textarea
          id="f2b-question"
          name="question"
          rows={3}
          placeholder="Whatever is actually stopping you. We read these before the session."
          className={field}
        />
      </div>

      {/* honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="f2b-website">Leave this empty</label>
        <input id="f2b-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-[10px] px-7 text-base font-semibold text-white transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        style={{
          background: PINK,
          boxShadow: "0 0 40px rgba(255,20,147,0.32)",
        }}
      >
        {state === "sending" ? "Saving your seat..." : "Save my spot on the call"}
      </button>

      {state === "error" && (
        <p role="alert" className="text-[14px] text-[#FF8A8A]">
          {message}
        </p>
      )}

      <p className="text-[13px] leading-relaxed text-[#6A6A6A]">
        Free, about 45 minutes, and there is a real Q&amp;A at the end. We will not add you
        to anything you did not ask for.
      </p>
    </form>
  );
}
