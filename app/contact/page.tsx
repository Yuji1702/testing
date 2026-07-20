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
  "@id": "https://www.drzahidasadaf.com/contact/#webpage",
  url: "https://www.drzahidasadaf.com/contact",
  name: "Contact | Dr. Zahida Sadaf",
  description: "Connect with Dr. Zahida Sadaf for appointments and inquiries.",
  mainEntity: { "@id": "https://www.drzahidasadaf.com/#physician" },
};

const contactBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.drzahidasadaf.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://www.drzahidasadaf.com/contact",
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
          <h1 className="text-4xl font-bold tracking-tight text-heading">We&apos;re here to help</h1>
          <p className="text-lg text-subtext">
            Reach out for appointments, speaking engagements, or collaborations. Our team
            responds within one business day and provides compassionate guidance throughout
            your healing journey.
          </p>
          <div className="rounded-xl bg-surface/90 p-6 shadow-sm ring-1 ring-border sm:p-8">
            <h2 className="text-xl font-semibold text-primary">Contact details</h2>
            <ul className="mt-4 space-y-3 text-sm text-subtext">
              <li>
                <strong className="text-primary">WhatsApp:</strong>{" "}
                <a className="underline" href="https://wa.me/917667265892" target="_blank" rel="noreferrer">
                  +91 76672 65892
                </a>
              </li>
              <li>
                <strong className="text-primary">Email:</strong>{" "}
                <a className="underline" href="mailto:care@drzahidasadaf.com">
                  care@drzahidasadaf.com
                </a>
              </li>
              <li>
                <strong className="text-primary">Clinic location:</strong> Hyderabad, Telangana, India
              </li>
              <li>
                <strong className="text-primary">Office hours:</strong> Monday – Saturday, 9:00 AM – 7:00 PM IST
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <Link className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-background shadow-lg transition-all duration-300 hover:shadow-luxury active:scale-95" href="/consultation">
                Book consultation
              </Link>
              <a
                className="rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-background shadow-sm ring-1 ring-border/30 transition-all duration-300 hover:bg-secondary/90 hover:shadow-md active:scale-95"
                href="https://wa.me/917667265892"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-xl bg-surface/70 p-6 shadow-inner ring-1 ring-border sm:p-8">
            <h2 className="text-xl font-semibold text-primary">Connect on social media</h2>
            <ul className="mt-4 space-y-2 text-sm text-subtext">
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
