export interface VideoTestimonial {
  id: string; // YouTube video id
  industry: string;
  caption: string;
}

// Curated client video testimonials, sourced from the Dr. Jeff Bullock / PRISM
// YouTube channel. Each id appears exactly once (no duplicates across pages).
export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "Wcnn2-b_iQQ",
    industry: "Financial Services",
    caption: "Professional and personal impact from a whole-team AI rollout.",
  },
  {
    id: "i18jie5evzY",
    industry: "Real Estate",
    caption: "How AI improved lead conversion for a real estate professional.",
  },
  {
    id: "tJztoA4Cjv4",
    industry: "Pediatric Dentistry",
    caption: "Why AI had universal appeal across the whole practice.",
  },
  {
    id: "EtgQkByad_I",
    industry: "Financial Advisory",
    caption: "A whole-team AI transformation, not just one power user.",
  },
  {
    id: "71DD-y04Y3U",
    industry: "Small Business",
    caption: "A working website built in about two hours.",
  },
  {
    id: "daB575Eu954",
    industry: "Entrepreneur",
    caption: "Faster, cleaner grant funding work with AI.",
  },
  {
    id: "FAFQGVH-NHA",
    industry: "Legal Practice",
    caption: "Practical AI tools for a working legal practice.",
  },
  {
    id: "rK1uJls5bzA",
    industry: "Higher Education",
    caption: "An interactive workshop that landed with the room.",
  },
  {
    id: "9fyMyOCLQZo",
    industry: "Executive Forum",
    caption: "What executive leaders took away from the session.",
  },
  {
    id: "elR2bFsu2lo",
    industry: "Marketing & PR",
    caption: "A content strategy the team can actually run.",
  },
  {
    id: "aUIm-y6Wb6M",
    industry: "Real Estate",
    caption: "High-ROI operations, rebuilt around AI.",
  },
  {
    id: "c-mkT74bbvk",
    industry: "Live Event",
    caption: "What attendees said after a live AI demo at the AI Expo.",
  },
];
