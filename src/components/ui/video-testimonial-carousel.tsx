"use client";

import { useRef, useState } from "react";
import { videoTestimonials } from "@/data/video-testimonials";

export function VideoTestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState<string | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videoTestimonials.map((t) => (
          <div
            key={t.id}
            data-card
            className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[48%]"
          >
            <div className="relative overflow-hidden rounded-xl border border-border">
              <div className="aspect-video">
                {playing === t.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${t.id}?autoplay=1`}
                    title={`Client Testimonial: ${t.industry}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(t.id)}
                    aria-label={`Play ${t.industry} testimonial`}
                    className="group relative block h-full w-full"
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`}
                      alt={`${t.industry} client testimonial`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-background/20 transition-colors group-hover:bg-background/10">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform group-hover:scale-110">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold text-foreground">{t.industry}</p>
            <p className="text-xs text-muted-foreground">{t.caption}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="text-xs text-muted-foreground">Swipe for more</span>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="More testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
