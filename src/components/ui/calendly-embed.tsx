"use client";

import { cn } from "@/lib/utils";

interface CalendlyEmbedProps {
  url: string;
  className?: string;
}

export function CalendlyEmbed({ url, className }: CalendlyEmbedProps) {
  const separator = url.includes("?") ? "&" : "?";
  const styledUrl = `${url}${separator}background_color=0a0a0a&text_color=f5f5f4&primary_color=7c3aed`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-lg)] bg-background",
        className
      )}
    >
      <iframe
        src={styledUrl}
        title="Schedule a call"
        width="100%"
        style={{ minHeight: 650 }}
        frameBorder="0"
        className="w-full"
      />
    </div>
  );
}
