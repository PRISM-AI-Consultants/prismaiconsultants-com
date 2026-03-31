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
      "PRISM AI Consultants - AI Systems Architecture for Business Leaders",
    template: "%s | PRISM AI Consultants",
  },
  description:
    "We build production AI systems for businesses. Agents, dashboards, automations, and integrations that run live. $350K-$700K+ in AI systems delivered. Based in Allentown, PA.",
  keywords: [
    "AI consultant",
    "AI consulting",
    "AI systems architect",
    "AI automation",
    "AI agents",
    "business AI",
    "Allentown AI",
    "Lehigh Valley AI",
    "Pennsylvania AI consultant",
    "AI implementation",
    "AI dashboard",
    "PRISM AI",
  ],
  icons: {
    icon: "/images/prism-logo.png",
    apple: "/images/prism-logo.png",
  },
  openGraph: {
    title: "PRISM AI Consultants",
    description:
      "AI Systems Architect. Business Partner. Builder. We build production AI systems that run live in your business.",
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
    title: "PRISM AI Consultants",
    description:
      "We build production AI systems for businesses. 34 autonomous agents. $350K-$700K+ in systems delivered.",
    images: ["https://prismaiconsultants.com/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PRISM AI Consultants",
  description:
    "AI systems architecture and implementation for business leaders. We build production AI systems including agents, dashboards, automations, and integrations.",
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
  founder: {
    "@type": "Person",
    name: "Dr. Jeff Bullock",
    jobTitle: "AI Systems Architect & CEO",
    url: "https://drjeffbullock.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/prism-ai-consultants",
    "https://www.skool.com/prism-ai-consultants",
  ],
  priceRange: "$2,500 - $25,000+/month",
  serviceType: [
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
