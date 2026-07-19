import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Dr. Zahida Sadaf for Ayurvedic-Unani consultations via WhatsApp, phone, or email, and send a message using the contact form.",
  alternates: {
    canonical: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://testing-five-zeta-93.vercel.app/contact/#webpage",
  url: "https://testing-five-zeta-93.vercel.app/contact",
  name: "Contact | Dr. Zahida Sadaf",
  description: "Connect with Dr. Zahida Sadaf for appointments and inquiries.",
  mainEntity: { "@id": "https://testing-five-zeta-93.vercel.app/#physician" },
};

const contactBreadcrumbSchema = {
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
      name: "Contact",
      item: "https://testing-five-zeta-93.vercel.app/contact",
    },
  ],
};

/**
 * Contact page providing multiple touch points and a general inquiry form.
 */
export default function ContactPage() {
  return (
    <div className="page-shell pb-16">
      <Script id="contact-schema" type="application/ld+json">
        {JSON.stringify(contactSchema)}
      </Script>
      <Script id="contact-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(contactBreadcrumbSchema)}
      </Script>
      <section className="pt-16">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-earth-950">We're here to help</h1>
          <p className="text-lg text-earth-700">
            Reach out for appointments, speaking engagements, or collaborations. Our team
            responds within one business day and provides compassionate guidance throughout
            your healing journey.
          </p>
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-earth-100 sm:p-8">
            <h2 className="text-xl font-semibold text-earth-900">Contact details</h2>
            <ul className="mt-4 space-y-3 text-sm text-earth-700">
              <li>
                <strong className="text-earth-900">WhatsApp:</strong>{" "}
                <a className="underline" href="https://wa.me/917667265892" target="_blank" rel="noreferrer">
                  +91 76672 65892
                </a>
              </li>
              <li>
                <strong className="text-earth-900">Email:</strong>{" "}
                <a className="underline" href="mailto:care@drzahidasadaf.com">
                  care@drzahidasadaf.com
                </a>
              </li>
              <li>
                <strong className="text-earth-900">Clinic location:</strong> Hyderabad, Telangana, India
              </li>
              <li>
                <strong className="text-earth-900">Office hours:</strong> Monday – Saturday, 9:00 AM – 7:00 PM IST
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <Link className="rounded-full bg-earth-800 px-4 py-2 text-white shadow transition hover:bg-earth-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth-700 active:scale-[0.98]" href="/consultation">
                Book consultation
              </Link>
              <a
                className="rounded-full bg-earth-500 px-4 py-2 text-white shadow-sm ring-1 ring-earth-600/30 transition hover:bg-earth-600 hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth-600 active:scale-[0.98]"
                href="https://wa.me/917667265892"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-white/70 p-6 shadow-inner ring-1 ring-earth-100 sm:p-8">
            <h2 className="text-xl font-semibold text-earth-900">Connect on social media</h2>
            <ul className="mt-4 space-y-2 text-sm text-earth-700">
              <li>
                <a className="underline" href="https://www.instagram.com/drzahidasadaf/?utm_source=website" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.facebook.com/zahida.sadaf.31?utm_source=website" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.youtube.com/@dr.zahidasadaf4498?utm_source=website" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
