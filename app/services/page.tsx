import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore holistic Ayurvedic-Unani services for PCOS, thyroid issues, diabetes, hormonal imbalance, and skin concerns by Dr. Zahida Sadaf.",
  alternates: {
    canonical: "/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://testing-five-zeta-93.vercel.app/services/#webpage",
  url: "https://testing-five-zeta-93.vercel.app/services",
  name: "Holistic Services | Dr. Zahida Sadaf",
  description: "A comprehensive list of Ayurvedic-Unani treatments for chronic wellness.",
  mainEntity: { "@id": "https://testing-five-zeta-93.vercel.app/#physician" },
};

const servicesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://testing-five-zeta-93.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://testing-five-zeta-93.vercel.app/services",
    },
  ],
};

const serviceCards = [
  {
    title: "PCOS / PCOD Care",
    description:
      "Detoxify, balance insulin, and regulate cycles with customized herbal medicines, mindful nutrition, and womb-healing therapies.",
  },
  {
    title: "Thyroid & Metabolism",
    description:
      "Support thyroid hormones through targeted botanicals, stress modulation, and gut restoration strategies.",
  },
  {
    title: "Diabetes Lifestyle Reset",
    description:
      "Stabilize blood sugar, improve energy, and protect organs with Unani tonics, hijama, and sustainable lifestyle upgrades.",
  },
  {
    title: "Hormonal Harmony",
    description:
      "Address PMS, fertility, menopause, and adrenal fatigue with endocrine-supportive herbs and restorative yoga-meditation routines.",
  },
  {
    title: "Radiant Skin Programs",
    description:
      "Heal acne, eczema, psoriasis, and pigmentation from the inside out through detoxification, leech therapy, and nutrient-rich skincare guidance.",
  },
  {
    title: "Holistic Detox & Immunity",
    description:
      "Rejuvenate digestion and immunity with cupping, therapeutic oil baths, breathwork, and advanced gut-healing nutrition.",
  },
];

/**
 * Services page displaying treatment categories with quick links to book a consultation.
 */
export default function ServicesPage() {
  return (
    <div className="page-shell pb-16">
      <Script id="services-schema" type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </Script>
      <Script id="services-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(servicesBreadcrumbSchema)}
      </Script>
      <section className="pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-earth-950">Holistic services tailored to you</h1>
          <p className="mt-6 text-lg text-earth-700">
            Each service combines pure Unani formulations, diet therapy, lifestyle correction,
            personal assistance, medical report analysis, and regular follow-up so you feel
            supported every step of the way.
          </p>
        </div>
        {/* Responsive grid auto-expands to three columns on widescreen displays */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col justify-between rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-earth-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <h2 className="text-2xl font-semibold text-earth-900">{card.title}</h2>
                <p className="mt-3 text-sm text-earth-700">{card.description}</p>
              </div>
              <div className="mt-6">
                <Link
                  href="/consultation"
                  className="inline-flex items-center text-sm font-semibold text-earth-800 underline-offset-4 hover:underline"
                  aria-label={`Schedule a consultation about ${card.title}`}
                >
                  Book consultation
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
