import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drzahidasadaf.com"),
  title: {
    default: "Dr. Zahida Sadaf | Ayurvedic-Unani Holistic Healing",
    template: "%s | Dr. Zahida Sadaf Ayurveda",
  },
  description:
    "Online Ayurvedic-Unani consultations with Dr. Zahida Sadaf for PCOS, hormonal balance, diabetes, thyroid and skin wellness.",
  keywords: [
    "Unani herbal remedies",
    "PCOS natural treatment",
    "online Ayurvedic consultation",
    "Hijama cupping therapy",
    "holistic gut health physician",
  ],
  authors: [{ name: "Dr. Zahida Sadaf", url: "https://drzahidasadaf.com/about" }],
  creator: "Dr. Zahida Sadaf",
  publisher: "Dr. Zahida Sadaf Ayurveda & Unani Wellness",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dr. Zahida Sadaf | Ayurvedic-Unani Holistic Healing",
    description:
      "Holistic Ayurvedic-Unani physician offering personalized detox, diet therapy, and herbal medicine for chronic lifestyle concerns.",
    url: "https://drzahidasadaf.com",
    siteName: "Dr. Zahida Sadaf Ayurveda",
    type: "website",
    images: [
      {
        url: "/dr-zahida-sadaf-portrait.jpg",
        width: 960,
        height: 1280,
        alt: "Dr. Zahida Sadaf - Ayurvedic-Unani Holistic Healing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Zahida Sadaf | Ayurvedic-Unani Holistic Healing",
    description:
      "Holistic Ayurvedic-Unani physician offering personalized detox, diet therapy, and herbal medicine for chronic lifestyle concerns.",
    images: ["/dr-zahida-sadaf-portrait.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://drzahidasadaf.com/#physician",
  name: "Dr. Zahida Sadaf Ayurveda & Unani Wellness",
  description:
    "Holistic Ayurvedic-Unani consultations for PCOS, hormonal imbalances, thyroid disorders, diabetes, and chronic skin concerns with safe herbal medicines.",
  url: "https://drzahidasadaf.com",
  telephone: "+91 76672 65892",
  priceRange: "₹700 - $100 USD",
  sameAs: [
    "https://wa.me/917667265892",
    "https://www.instagram.com/drzahidasadaf/?utm_source=website",
    "https://www.facebook.com/zahida.sadaf.31?utm_source=website",
    "https://www.youtube.com/@dr.zahidasadaf4498?utm_source=website",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Australia" },
  ],
  availableService: [
    { "@type": "MedicalTherapy", name: "PCOS / PCOD natural treatment" },
    { "@type": "MedicalTherapy", name: "Thyroid hormone balancing" },
    { "@type": "MedicalTherapy", name: "Diabetes metabolic reset" },
    { "@type": "MedicalTherapy", name: "Skin health revitalization" },
    { "@type": "MedicalTherapy", name: "Hijama cupping" },
    { "@type": "MedicalTherapy", name: "Leech therapy" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
};

/**
 * Root layout shared by the entire site.
 * Sets language attributes, renders consistent navigation and footer,
 * and injects JSON-LD structured data for rich search results.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-earth-50 font-sans text-earth-900 antialiased">
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-earth-900"
        >
          Skip to main content
        </a>
        <div className={`flex min-h-screen flex-col bg-gradient-to-b from-earth-50 via-earth-50 to-earth-100 ${jakartaSans.variable} ${playfairDisplay.variable}`}>
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
