/**
 * SINGLE SOURCE OF TRUTH for Founder to Builder Cohort 2.
 *
 * Why this file exists: on 2026-08-28 the early bird deadline was extended from
 * Aug 28 to Sep 4, and the date was already baked into two rendered video reels,
 * the Eventbrite listing, and a GHL broadcast. The reels went stale the same day
 * and nobody noticed for five days. Anything on this site that states a date, a
 * price, a seat count, or a deadline reads it from here. Change it once.
 */

export const WORKSHOP = {
  name: "Founder to Builder",
  cohort: "Cohort 2",
  dates: "September 22 and 23, 2026",
  daysOfWeek: "Tuesday and Wednesday",
  hours: "9:00 AM to 1:00 PM ET",
  hoursShort: "9 to 1",
  venue: "Fusion Workplaces",
  venueAddress: "1275 Glenlivet Drive, Suite 100, Allentown, PA 18106",
  city: "Allentown, PA",
  seatsInPerson: 12,
  seatsVirtual: 25,
  eventbrite:
    "https://www.eventbrite.com/e/founder-to-builder-a-prism-two-day-workshop-cohort-2-tickets-1997981895634",
  refundThrough: "Tuesday, September 8",
} as const;

export const PRICING = {
  earlyBirdEnds: "Friday, September 4",
  earlyBirdEndsShort: "September 4",
  /** ISO for the countdown. End of day Sept 4 Eastern. */
  earlyBirdEndsISO: "2026-09-04T23:59:59-04:00",
  inPersonEarly: 1500,
  inPersonStandard: 2000,
  virtualEarly: 750,
  virtualStandard: 1000,
} as const;

/**
 * ⛔ VERBATIM from the approved Cohort 2 listing spec
 * (Google Doc 1NSoSIzzZq2WiOcaMYv3CQIxpe1gW7HrB4zFVE_xUtJ0).
 * Do not reword. This is a promise we have to keep.
 */
export const GUARANTEE =
  "Attend both days, do the work, and you walk out with a working system. Or our team finishes it with you, free.";

/**
 * The value stack, itemized, from the same approved spec. Jeff's standing rule
 * is never show the price naked, always anchor it against this.
 */
export const VALUE_STACK: { item: string; value: number }[] = [
  { item: "Two-day live build intensive", value: 5000 },
  { item: "Your live website", value: 3500 },
  { item: "Marketing asset suite", value: 2500 },
  { item: "Customer-getting automation and system", value: 2000 },
  { item: "Your private 1-on-1 install call", value: 1500 },
  { item: "90-day system review", value: 1000 },
  { item: "PRISM prompt and workflow library", value: 500 },
];
export const VALUE_TOTAL = VALUE_STACK.reduce((n, r) => n + r.value, 0); // 16000

/**
 * The pre-workshop install call. This is the thing that makes two mornings
 * enough, and it was buried as a single bullet until 2026-08-29.
 *
 * Source: INSTALL_CALL_SOP.md + workshop_founder_to_builder_2026-06.
 * ⛔ Everything here is what the team actually does on that call. Do not add
 * to this list without checking the SOP.
 */
export const INSTALL_CALL = [
  "Claude Code and Cowork installed and working on your machine",
  "Your domain and hosting sorted, with SSH access wired up",
  "Your accounts connected so Day 1 starts on your business, not on setup",
  "We ask what you actually want built, so we arrive already knowing",
];

export type InfoSession = {
  id: string;
  label: string;
  dateLine: string;
  timeLine: string;
  altZone: string;
  note: string;
};

export const INFO_SESSIONS: InfoSession[] = [
  {
    id: "sep3",
    label: "Thursday, September 3",
    dateLine: "Thu, Sep 3",
    timeLine: "7:00 PM ET",
    altZone: "4:00 PM Pacific",
    note: "The night before early pricing ends.",
  },
  {
    id: "sep12",
    label: "Saturday, September 12",
    dateLine: "Sat, Sep 12",
    timeLine: "10:00 AM ET",
    altZone: "7:00 AM Pacific",
    note: "Saturday, for owners who cannot get away midweek.",
  },
];

/**
 * Every clip below is public on YouTube AND cleared in the consent registry
 * (~/prism/consent-registry). Verified 2026-08-28.
 *
 * DO NOT add a person to this list without running:
 *   python3 ~/prism/consent-registry/check.py "Name"
 *
 * Currently NOT cleared and therefore absent by design:
 *   Ashley Szmania (no reply), Kweku Grant-Acquah (declined, revisit after Oct 1),
 *   Carter McKinney (conditional, owed a recut), Samantha Bowling (permanently out).
 */
export type Proof = {
  youtubeId: string;
  person: string;
  role: string;
  built: string;
  quote?: string;
};

/**
 * Hero video. The Cohort 2 builders reel, cut from the July cohort.
 *
 * ⛔ This is the v2 render. The v1 reels are stale: their endcard says the early
 * bird ends August 28, which stopped being true on 2026-08-28. If you ever swap
 * this id, check the endcard of whatever you swap in against PRICING above.
 */
export const HERO_VIDEO = {
  youtubeId: "ZODvv1E_MD4",
  title: "Founder to Builder: what people actually built in two mornings",
};

/** The shorter proof cut. Same endcard, same rules. */
export const PROOF_REEL = {
  youtubeId: "-6jOm-ZZUlg",
  title: "Founder to Builder Cohort 2: September 22 and 23, Allentown",
};

export const BUILD_PROOF: Proof[] = [
  {
    youtubeId: "Wj-ZagcZsZk",
    person: "Chris Levant",
    role: "RestoPros of Lehigh Valley",
    built:
      "Built a water damage risk quiz for his restoration company, live, and took it himself on screen before the block ended.",
  },
  {
    youtubeId: "h2nSmKyLuc0",
    person: "Dan Garrett",
    role: "Lehigh Valley",
    built:
      "Had never built a website before this workshop. Left with one live on his own domain.",
  },
  {
    youtubeId: "PvxwiUDFtbg",
    person: "Kwame Lewis",
    role: "TaskRipple",
    built:
      "Built a tool that routes job information from field technicians to back office staff.",
  },
  {
    youtubeId: "4Xw1ehiZcOc",
    person: "Chris Levant",
    role: "RestoPros of Lehigh Valley",
    built: "The site he deployed during the two days, running live.",
  },
];

export const VOICES: Proof[] = [
  {
    youtubeId: "x_f85YCrc6U",
    person: "Will Brown",
    role: "The Grown Man Standard",
    built: "",
    quote:
      "I will say this experience has been mind-blowing... being in a room, being able to really touch everything and put it together.",
  },
  {
    youtubeId: "ZaV_Vb4-CZk",
    person: "Darrell Bell",
    role: "Black Wall Street On This Day",
    built: "",
    quote:
      "It lets me do what I... was actually geared... geared to do. Be in the driver's seat.",
  },
  {
    youtubeId: "kk7ayjZ1DnY",
    person: "Dan Garrett",
    role: "Lehigh Valley",
    built: "",
    quote:
      "I haven't been to something like this in a lot of years, and I like the people that I've met here, and I really appreciate the time we've spent.",
  },
];
