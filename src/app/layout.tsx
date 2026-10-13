import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioContent } from "@/content/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abirrouag.com"),
  title: "Abir Rouag — Business Analyst & Data/BI | Portfolio",
  description:
    "IT engineering student and data/BI analyst. Power BI, SQL, Python, requirements & gap analysis. Open to Business Analyst internships worldwide.",
  keywords: [
    "Business Analyst",
    "Data Analyst",
    "BI Engineer",
    "Power BI",
    "SQL",
    "Python",
    "Gap Analysis",
    "Abir Rouag",
    "Sousse",
    "Tunisia",
    "AIESEC",
  ],
  authors: [{ name: "Abir Rouag" }],
  openGraph: {
    title: "Abir Rouag — Business Analyst & Data/BI Portfolio",
    description:
      "Telecom engineer turned data & business analyst. Interactive BI dashboard portfolio featuring real project metrics and career pipeline.",
    url: "https://abirrouag.com",
    siteName: "Abir Rouag Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abir Rouag - Insight Dashboard Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abir Rouag — Business Analyst & Data/BI Portfolio",
    description:
      "Telecom engineer turned data & business analyst. Interactive BI dashboard portfolio.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Person Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioContent.personal.name,
    jobTitle: portfolioContent.personal.roleTitle,
    description: portfolioContent.personal.heroSubtitle,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sousse",
      addressCountry: "Tunisia",
    },
    email: portfolioContent.personal.email,
    telephone: portfolioContent.personal.phone,
    sameAs: [
      portfolioContent.personal.githubUrl,
      portfolioContent.personal.linkedinUrl,
    ],
    knowsAbout: [
      "Business Analysis",
      "Power BI",
      "SQL",
      "PostgreSQL",
      "Python",
      "dbt",
      "Data Governance",
      "Internal Audit",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}
