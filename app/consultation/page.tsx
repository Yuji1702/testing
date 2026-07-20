import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Consultation & Booking",
  description:
    "Book an Ayurvedic-Unani consultation with Dr. Zahida Sadaf. Review the step-by-step process, pricing, and intake form to begin your healing journey.",
  alternates: {
    canonical: "/consultation",
  },
};

const consultationSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://testing-five-zeta-93.vercel.app/consultation/#webpage",
  url: "https://testing-five-zeta-93.vercel.app/consultation",
  name: "Consultation & Booking | Dr. Zahida Sadaf",
  description: "Step-by-step guide to booking an Ayurvedic-Unani consultation with Dr. Zahida Sadaf.",
  mainEntity: { "@id": "https://testing-five-zeta-93.vercel.app/#physician" },
};

const consultationBreadcrumbSchema = {
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
      name: "Consultation",
      item: "https://testing-five-zeta-93.vercel.app/consultation",
    },
  ],
};

const steps = [
  {
    title: "Say hello on WhatsApp",
    description: "Start by sending a message to +91 76672 65892 to introduce yourself and share urgent concerns.",
  },
  {
    title: "Complete the wellness questionnaire",
    description: "Receive a secure form covering lifestyle, digestion, sleep, and current medications to tailor your plan.",
  },
  {
    title: "Confirm consultation with payment",
    description:
      "Submit the consultation fee for your region, share the receipt on WhatsApp, and receive confirmation within 12 hours.",
  },
  {
    title: "Attend your 45–60 minute session",
    description:
      "Connect via phone (15–30 minutes) or video call for skin concerns. Discuss lab reports, symptoms, and goals.",
  },
  {
    title: "Receive your personalized regimen",
    description:
      "Within 24 hours, receive a custom protocol with herbal medicines, diet therapy, detox practices, and daily rituals.",
  },
  {
    title: "Enjoy 1-month follow-up support",
    description:
      "Send updates anytime. Follow-up review at four weeks ensures your plan evolves with your progress. Membership options are available for long-term care.",
  },
];

const pricing = [
  { region: "India", amount: "₹700" },
  { region: "Canada", amount: "80 CAD" },
  { region: "United States", amount: "100 USD" },
  { region: "United Kingdom", amount: "60 GBP" },
  { region: "Australia", amount: "60 AUD" },
];

/**
 * Consultation page detailing the booking process, pricing, and intake form.
 */
export default function ConsultationPage() {
  return (
    <div className="page-shell pb-16">
      <Script id="consultation-schema" type="application/ld+json">
        {JSON.stringify(consultationSchema)}
      </Script>
      <Script id="consultation-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(consultationBreadcrumbSchema)}
      </Script>
      <section className="pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-heading">Begin your consultation</h1>
          <p className="mt-6 text-lg text-subtext">
            Consultations start at $80 and are valid for 15 days, giving you time to integrate
            your personalized plan. Dr. Zahida Sadaf believes healing is a sacred service, so
            every step is transparent, compassionate, and designed around your lifestyle.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-xl bg-surface/90 p-8 shadow-sm ring-1 ring-border sm:p-10" aria-labelledby="process">
        <div className="max-w-3xl">
          <h2 id="process" className="text-3xl font-semibold text-heading">
            Step-by-step booking process
          </h2>
          <p className="mt-4 text-subtext">
            From first message to ongoing mentorship, here’s how we co-create your healing plan.
          </p>
        </div>
        {/* Steps align into two columns on medium screens and breathe further on desktops */}
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3" aria-label="Consultation steps">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 rounded-xl bg-background/80 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-background">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
              <p className="text-sm text-subtext">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <div className="max-w-3xl rounded-xl bg-surface/90 p-8 shadow-sm ring-1 ring-border sm:p-10">
          <h2 className="text-3xl font-semibold text-heading">Consultation investment</h2>
          <p className="mt-4 text-subtext">
            Choose the currency that matches your location. Membership bundles with additional
            follow-ups and herbal refills are available on request.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border text-sm">
                <thead className="bg-primary text-left text-xs font-semibold uppercase tracking-wide text-background">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Region
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Consultation fee
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-surface/60">
                  {pricing.map((price) => (
                    <tr key={price.region}>
                      <td className="px-4 py-3 font-medium text-primary">{price.region}</td>
                      <td className="px-4 py-3 text-foreground">{price.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-subtext">
            <p>
              After payment, share the receipt on WhatsApp for scheduling. Secure online payment
              integrations are coming soon—meanwhile, bank transfer and UPI details will be
              provided via chat.
            </p>
            <p>
              <strong className="font-semibold text-primary">WhatsApp support:</strong>{" "}
              <a className="underline" href="https://wa.me/917667265892" target="_blank" rel="noreferrer">
                https://wa.me/917667265892
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
