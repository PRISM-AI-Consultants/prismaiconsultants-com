import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prismaiconsultants.com"),
  title: {
    default:
      "PRISM AI Consultants - AI Implementation for Business Leaders",
    template: "%s | PRISM AI Consultants",
  },
  description:
    "We don't just talk about AI. We implement it. PRISM installs AI inside your business, builds the systems with you, and makes them run. $350K-$700K+ in estimated system value delivered. Based in Allentown, PA.",
  keywords: [
    "AI implementation",
    "AI implementation partner",
    "AI implementation consultant",
    "AI implementation services",
    "AI consultant",
    "AI consulting",
    "AI automation",
    "AI agents",
    "business AI",
    "Allentown AI",
    "Lehigh Valley AI",
    "Pennsylvania AI implementation",
    "PRISM AI",
  ],
  icons: {
    icon: "/images/prism-logo.png",
    apple: "/images/prism-logo.png",
  },
  openGraph: {
    title: "PRISM AI Consultants, AI Implementation Partner",
    description:
      "We don't just talk about AI. We implement it. PRISM installs, builds, and runs production AI systems live in your business.",
    type: "website",
    siteName: "PRISM AI Consultants",
    locale: "en_US",
    images: [
      {
        url: "https://prismaiconsultants.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Jeff Bullock - AI Systems Architect & Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRISM AI Consultants, AI Implementation Partner",
    description:
      "We implement AI inside your business. Install it, build it, run it. $350K-$700K+ in estimated system value delivered. 750+ coaching sessions.",
    images: ["https://prismaiconsultants.com/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Entity IDs. These make the graph resolvable: the Organization and the Person
// are distinct nodes that reference each other, so an engine can tell that
// "Dr. Jeff Bullock" and "PRISM AI Consultants" are related but not identical.
const ORG_ID = "https://prismaiconsultants.com/#organization";
const PERSON_ID = "https://drjeffbullock.com/#person";

// Every URL below was loaded and verified before being added. Do not add a
// sameAs you have not opened. Source of truth for Jeff's identity is the
// ledger at ~/prism/transcript-intelligence/src/aeo_entity.py.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Dr. Jeff Bullock",
  givenName: "Jeff",
  familyName: "Bullock",
  honorificSuffix: "PharmD",
  jobTitle: "AI Systems Architect & CEO",
  url: "https://drjeffbullock.com",
  // Direct fix for the entity collision: "Dr. Jeff Bullock" currently resolves
  // to physicians in AI answers. State plainly that he is not one.
  disambiguatingDescription:
    "Dr. Jeff Bullock is a Doctor of Pharmacy (PharmD) and AI systems architect, not a physician. He does not practice medicine. He is the founder of PRISM AI Consultants in Allentown, Pennsylvania.",
  worksFor: { "@id": ORG_ID },
  sameAs: [
    "https://drjeffbullock.com",
    "https://www.linkedin.com/in/jeffrey-bullock-pharmd",
    "https://www.youtube.com/@drjeffbullock",
    "https://substack.com/@drjeffbullock",
    "https://www.amazon.com/stores/Dr.-Jeff-Bullock/author/B0H7TCDNGS",
    "https://open.spotify.com/album/1iOSi2A5g4LUjSkvniwl4u",
    "https://valiantceo.com/closing-the-ai-implementation-gap-jeffrey-bullock-of-prism-ai-consultants-on-turning-spend-into-revenue/",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "PRISM AI Consultants",
  description:
    "AI implementation for business leaders. PRISM installs, builds, and runs production AI systems including agents, dashboards, automations, and integrations inside your business.",
  url: "https://prismaiconsultants.com",
  telephone: "+18774182507",
  email: "info@prismaiconsultants.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Allentown",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Allentown" },
    { "@type": "City", name: "Bethlehem" },
    { "@type": "City", name: "Easton" },
    { "@type": "State", name: "Pennsylvania" },
  ],
  founder: { "@id": PERSON_ID },
  sameAs: [
    "https://www.linkedin.com/company/prism-ai-consultants",
    "https://www.skool.com/prism-ai-consultants",
    "https://www.instagram.com/prismaiconsultant/",
    "https://madeinthelehighvalley.com/prismaiconsultants/",
    "https://web.lehighvalleychamber.org/Consulting-Services-Training/PRISM-AI-Consultants-17842",
    "https://www.alignable.com/allentown-pa/prism-ai-consultants",
    "https://www.bizapedia.com/pa/prism-ai-consultants-llc.html",
  ],
  // Third-party editorial recognition. Selected by Lehigh Valley Business's
  // editorial leadership team, announced 2026-07-27. This is an AWARD, not a
  // paid feature or a self-submitted listing, which is why it belongs in
  // schema: it is machine-readable validation from a source that is not us.
  award: "Named to the Lehigh Valley Business In the Lead list of top Minority Owned Businesses (2026)",
  subjectOf: {
    "@type": "NewsArticle",
    headline: "PRISM AI Consultants",
    url: "https://lvb.com/prism-ai-consultants/",
    datePublished: "2026-07-27",
    publisher: { "@type": "Organization", name: "Lehigh Valley Business" },
  },
  priceRange: "$4,500 - $20,000",
  serviceType: [
    "AI Implementation",
    "AI Consulting",
    "AI Systems Architecture",
    "AI Automation",
    "AI Agent Development",
    "Dashboard Development",
    "Business Process Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} antialiased`}
      >
        <SiteNav />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
