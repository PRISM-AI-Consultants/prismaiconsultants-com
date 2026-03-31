import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ===========================
      // www -> non-www redirect
      // ===========================
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.prismaiconsultants.com" }],
        destination: "https://prismaiconsultants.com/:path*",
        permanent: true,
      },

      // ===========================
      // Service pages -> /how-it-works
      // ===========================
      {
        source: "/services",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-consulting",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-consulting-services",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-transformation",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-integration",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-implementation",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-strategy",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-solutions",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-automation",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/consulting",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/what-we-do",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/book-online",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/service-page/:path*",
        destination: "/how-it-works",
        permanent: true,
      },

      // ===========================
      // Wix-specific service/pricing pages -> /how-it-works
      // ===========================
      {
        source: "/plans-pricing",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-coaching-strategy",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/gaps-to-growth",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/gap-ai-workshop",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/partner-workshop",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/creative-services",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/app-development",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ai-clone-avatar",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/ecap",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/mvp",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/check-out",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/check-out-page",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/check-out-now",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/es-check-out-page",
        destination: "/how-it-works",
        permanent: true,
      },

      // ===========================
      // Speaking pages -> /speaking
      // ===========================
      {
        source: "/speaking-engagements",
        destination: "/speaking",
        permanent: true,
      },
      {
        source: "/keynote",
        destination: "/speaking",
        permanent: true,
      },
      {
        source: "/workshops",
        destination: "/speaking",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/speaking",
        permanent: true,
      },

      {
        source: "/ai-speaking-engagements",
        destination: "/speaking",
        permanent: true,
      },
      {
        source: "/lehigh-valley-ai-expo",
        destination: "/speaking",
        permanent: true,
      },
      {
        source: "/ai-expo",
        destination: "/speaking",
        permanent: true,
      },

      // ===========================
      // Case studies -> /results
      // ===========================
      {
        source: "/case-studies",
        destination: "/results",
        permanent: true,
      },
      {
        source: "/case-studies/:path*",
        destination: "/results",
        permanent: true,
      },

      // ===========================
      // FAQ
      // ===========================
      {
        source: "/faq-s",
        destination: "/faq",
        permanent: true,
      },

      // ===========================
      // Research -> /resources
      // ===========================
      {
        source: "/research",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/ecap-research",
        destination: "/resources",
        permanent: true,
      },

      // ===========================
      // Game pages -> live URLs or /resources
      // ===========================
      {
        source: "/prism-game",
        destination: "https://game.srv1030637.hstgr.cloud",
        permanent: true,
      },
      {
        source: "/pharmageddon",
        destination: "https://game.srv1030637.hstgr.cloud",
        permanent: true,
      },
      {
        source: "/pharmageddon-game",
        destination: "https://game.srv1030637.hstgr.cloud",
        permanent: true,
      },
      {
        source: "/games",
        destination: "https://game.srv1030637.hstgr.cloud",
        permanent: true,
      },
      {
        source: "/games/:path*",
        destination: "https://game.srv1030637.hstgr.cloud",
        permanent: true,
      },
      {
        source: "/district-zero",
        destination: "https://game.srv1030637.hstgr.cloud",
        permanent: true,
      },
      {
        source: "/objection-blaster",
        destination: "https://game.srv1030637.hstgr.cloud",
        permanent: true,
      },
      {
        source: "/fliq-runner",
        destination: "https://game.srv1030637.hstgr.cloud",
        permanent: true,
      },

      // ===========================
      // Books
      // ===========================
      {
        source: "/a-prompt-s-tale",
        destination: "https://drjeffbullock.com/books/a-prompts-tale",
        permanent: true,
      },

      // ===========================
      // Product/category pages -> /resources
      // ===========================
      {
        source: "/product-page/:path*",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/youtube-video",
        destination: "/resources",
        permanent: true,
      },

      // ===========================
      // Members / Skool
      // ===========================
      {
        source: "/members",
        destination: "https://www.skool.com/prism-ai-consultants",
        permanent: true,
      },
      {
        source: "/prism-ai-family-skool",
        destination: "https://www.skool.com/prism-ai-consultants",
        permanent: true,
      },

      // ===========================
      // Misc pages
      // ===========================
      {
        source: "/prism-s-nipsey-hussle-proposal",
        destination: "/about",
        permanent: true,
      },

      // ===========================
      // Blog post redirects (Wix root-level -> /blog/slug)
      // ===========================
      {
        source: "/ai-driven-brand-storytelling-methods",
        destination: "/blog/ai-driven-brand-storytelling-methods",
        permanent: true,
      },
      {
        source:
          "/what-are-the-practical-applications-of-chatgpt-s-memory-in-business-settings",
        destination:
          "/blog/what-are-the-practical-applications-of-chatgpt-s-memory-in-business-settings",
        permanent: true,
      },
      {
        source:
          "/finding-the-best-ai-consultants-near-you-a-comprehensive-guide-to-transforming-your-business",
        destination:
          "/blog/finding-the-best-ai-consultants-near-you-a-comprehensive-guide-to-transforming-your-business",
        permanent: true,
      },
      {
        source:
          "/ai-transformation-for-startups-scaling-with-smart-automation-in-2025",
        destination:
          "/blog/ai-transformation-for-startups-scaling-with-smart-automation-in-2025",
        permanent: true,
      },
      {
        source:
          "/master-procrastination-through-ai-a-prism-success-story",
        destination:
          "/blog/master-procrastination-through-ai-a-prism-success-story",
        permanent: true,
      },
      {
        source: "/building-ai-email-workflows-for-small-business",
        destination:
          "/blog/building-ai-email-workflows-for-small-business",
        permanent: true,
      },
      {
        source:
          "/ai-mastery-your-competitive-edge-in-a-merit-based-world",
        destination:
          "/blog/ai-mastery-your-competitive-edge-in-a-merit-based-world",
        permanent: true,
      },
      {
        source: "/the-ultimate-guide-to-gamification-and-chatgpt",
        destination:
          "/blog/the-ultimate-guide-to-gamification-and-chatgpt",
        permanent: true,
      },
      {
        source:
          "/10-budget-friendly-ai-tools-every-small-business-should-try",
        destination:
          "/blog/10-budget-friendly-ai-tools-every-small-business-should-try",
        permanent: true,
      },
      {
        source:
          "/scaling-customer-support-with-ai-2025-implementation-guide-roi-tips",
        destination:
          "/blog/scaling-customer-support-with-ai-2025-implementation-guide-roi-tips",
        permanent: true,
      },
      {
        source:
          "/ai-powered-ecg-analysis-a-game-changer-in-preventive-cardiology",
        destination:
          "/blog/ai-powered-ecg-analysis-a-game-changer-in-preventive-cardiology",
        permanent: true,
      },
      {
        source:
          "/top-ai-consulting-services-expert-artificial-intelligence-consultants",
        destination:
          "/blog/top-ai-consulting-services-expert-artificial-intelligence-consultants",
        permanent: true,
      },
      {
        source: "/ai-in-retail",
        destination: "/blog/ai-in-retail",
        permanent: true,
      },
      {
        source: "/ai-for-local-business",
        destination: "/blog/ai-for-local-business",
        permanent: true,
      },
      {
        source:
          "/empower-your-business-with-our-artificial-intelligence-consultancy-services",
        destination:
          "/blog/empower-your-business-with-our-artificial-intelligence-consultancy-services",
        permanent: true,
      },
      {
        source:
          "/how-ai-lead-scoring-works-the-technology-behind-the-magic",
        destination:
          "/blog/how-ai-lead-scoring-works-the-technology-behind-the-magic",
        permanent: true,
      },
      {
        source:
          "/wearable-ai-in-2025-the-complete-guide-to-business-transformation",
        destination:
          "/blog/wearable-ai-in-2025-the-complete-guide-to-business-transformation",
        permanent: true,
      },
      {
        source:
          "/adopting-generative-ai-key-strategies-for-business-success-in-2025",
        destination:
          "/blog/adopting-generative-ai-key-strategies-for-business-success-in-2025",
        permanent: true,
      },
      {
        source: "/ai-transformation-for-sales-teams",
        destination: "/blog/ai-transformation-for-sales-teams",
        permanent: true,
      },
      {
        source:
          "/ai-in-2025-a-practical-guide-for-entrepreneurs-and-high-achievers",
        destination:
          "/blog/ai-in-2025-a-practical-guide-for-entrepreneurs-and-high-achievers",
        permanent: true,
      },
      {
        source: "/chatgpt-memory-for-entrepreneurs",
        destination: "/blog/chatgpt-memory-for-entrepreneurs",
        permanent: true,
      },
      {
        source: "/ai-agents-for-workflow-automation",
        destination: "/blog/ai-agents-for-workflow-automation",
        permanent: true,
      },
      {
        source:
          "/compound-growth-how-to-achieve-more-without-multitasking",
        destination:
          "/blog/compound-growth-how-to-achieve-more-without-multitasking",
        permanent: true,
      },
      {
        source:
          "/how-ai-transformation-programs-improve-supply-chain-efficiency-in-2025",
        destination:
          "/blog/how-ai-transformation-programs-improve-supply-chain-efficiency-in-2025",
        permanent: true,
      },
      {
        source: "/ai-for-smbs",
        destination: "/blog/ai-for-smbs",
        permanent: true,
      },
      {
        source:
          "/unlocking-growth-how-to-use-ai-for-small-business-success",
        destination:
          "/blog/unlocking-growth-how-to-use-ai-for-small-business-success",
        permanent: true,
      },
      {
        source:
          "/how-ai-powers-local-business-growth-2025-success-guide",
        destination:
          "/blog/how-ai-powers-local-business-growth-2025-success-guide",
        permanent: true,
      },
      {
        source: "/ai-driven-sales-process-automation",
        destination: "/blog/ai-driven-sales-process-automation",
        permanent: true,
      },
      {
        source:
          "/unlock-your-business-potential-with-prism-ai-consulting-services",
        destination:
          "/blog/unlock-your-business-potential-with-prism-ai-consulting-services",
        permanent: true,
      },
      {
        source:
          "/the-role-of-ai-in-digital-transformation-what-businesses-need-to-know",
        destination:
          "/blog/the-role-of-ai-in-digital-transformation-what-businesses-need-to-know",
        permanent: true,
      },
      {
        source:
          "/unlocking-potential-how-ai-integration-consulting-transforms-your-business-for-the-future",
        destination:
          "/blog/unlocking-potential-how-ai-integration-consulting-transforms-your-business-for-the-future",
        permanent: true,
      },
      {
        source:
          "/why-every-executive-needs-an-ai-transformation-strategy-in-2025",
        destination:
          "/blog/why-every-executive-needs-an-ai-transformation-strategy-in-2025",
        permanent: true,
      },
      {
        source:
          "/automating-operational-tasks-with-ai-a-comprehensive-guide",
        destination:
          "/blog/automating-operational-tasks-with-ai-a-comprehensive-guide",
        permanent: true,
      },
      {
        source:
          "/metaai-personas-revolutionizing-digital-engagement",
        destination:
          "/blog/metaai-personas-revolutionizing-digital-engagement",
        permanent: true,
      },
      {
        source: "/ai-powered-lead-scoring-models",
        destination: "/blog/ai-powered-lead-scoring-models",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
