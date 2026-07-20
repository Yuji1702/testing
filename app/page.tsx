import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Online Health Consultant for Holistic Healing",
  description:
    "Book Ayurvedic-Unani online consultations with Dr. Zahida Sadaf for PCOS, thyroid, diabetes, hormonal balance, and skin wellness.",
  alternates: {
    canonical: "/",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.drzahidasadaf.com/#homepage",
  url: "https://www.drzahidasadaf.com",
  name: "Dr. Zahida Sadaf | Home",
  description: "Online Ayurvedic-Unani consultations for holistic root-cause healing.",
  mainEntity: { "@id": "https://www.drzahidasadaf.com/#physician" },
};

const principles = [
  "Holistic mind–body–soul alignment",
  "Natural therapies with diet and lifestyle correction",
  "Safe herbal medicines with no side effects",
  "Root-cause treatment for complete healing",
  "Prevention-focused wellness guidance",
  "2,500-year-old traditional wisdom",
  "Individualized care and global support",
];

const services = [
  {
    title: "PCOS / PCOD Relief",
    description:
      "Restore hormonal harmony with personalized Unani formulations, anti-inflammatory nutrition, and detox therapies that balance cycles naturally.",
  },
  {
    title: "Thyroid Balance",
    description:
      "Support thyroid function through gut-healing herbs, targeted minerals, yoga breathwork, and stress resilience coaching.",
  },
  {
    title: "Diabetes Care",
    description:
      "Stabilize blood sugar with metabolic reset plans combining organic herbs, mindful movement, and sustainable lifestyle changes.",
  },
  {
    title: "Hormonal Wellness",
    description:
      "Address adrenal fatigue, fertility concerns, and mood swings with individualized herbal tonics, Hijama, and restorative routines.",
  },
  {
    title: "Skin Healing",
    description:
      "Nurture radiant skin by treating the root cause of acne, eczema, and pigmentation through detoxification, cupping, and herbal therapies.",
  },
  {
    title: "Holistic Detox & Immunity",
    description:
      "Strengthen digestion and immunity with Hijama (cupping), leech therapy, therapeutic oil baths, and mindful meditation guidance.",
  },
];

const testimonials = [
  {
    quote:
      "Within two months my PCOS symptoms calmed, my cycle returned, and I felt lighter thanks to Dr. Sadaf’s compassionate guidance.",
    author: "Ayesha, India",
  },
  {
    quote:
      "Her Unani detox plan balanced my thyroid without harsh medication and the follow-up support kept me accountable.",
    author: "Hiba, Canada",
  },
  {
    quote:
      "The personalized herbs and diet plan reduced my blood sugar spikes and improved my sleep in just six weeks.",
    author: "Rashid, UAE",
  },
];

/**
 * Home page presenting key value propositions, services, and social proof for quick orientation.
 */
export default function HomePage() {
  return (
    <div className="page-shell pb-16">
      <Script id="home-schema" type="application/ld+json">
        {JSON.stringify(homeSchema)}
      </Script>
      <section className="relative grid gap-12 pt-24 pb-16 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] lg:items-center lg:gap-20">
        <div className="animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtext">
            Your Online Health Consultant
          </p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-heading sm:text-6xl leading-[1.15]">
            Holistic Ayurvedic-Unani care that heals the root cause
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground">
            Dr. Zahida Sadaf blends classical Unani wisdom with modern gut health
            research to reverse PCOS/PCOD, thyroid issues, diabetes, hormonal
            imbalances, and chronic skin problems. Healing is her service—not a
            business—and every consultation begins with deep listening.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/consultation"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-background shadow-lg transition-all duration-300 hover:shadow-luxury active:scale-95"
            >
              Book Consultation (Starting at $80)
            </Link>
            <Link
              href="/about"
              className="rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm ring-1 ring-border transition-all duration-300 hover:bg-background hover:shadow-md active:scale-95"
            >
              Meet Dr. Sadaf
            </Link>
          </div>
          <dl className="mt-16 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-surface p-5 border border-border transition-colors hover:bg-background">
              <dt className="text-xs font-medium uppercase tracking-wider text-subtext">Initial Consultation</dt>
              <dd className="mt-2 text-xl font-semibold text-heading">45–60 minutes</dd>
            </div>
            <div className="rounded-xl bg-surface p-5 border border-border transition-colors hover:bg-background">
              <dt className="text-xs font-medium uppercase tracking-wider text-subtext">Follow-up Care</dt>
              <dd className="mt-2 text-xl font-semibold text-heading">Monthly plans</dd>
            </div>
            <div className="rounded-xl bg-surface p-5 border border-border transition-colors hover:bg-background">
              <dt className="text-xs font-medium uppercase tracking-wider text-subtext">Global Support</dt>
              <dd className="mt-2 text-xl font-semibold text-heading">Consults worldwide</dd>
            </div>
          </dl>
        </div>
        <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-4 -z-10 rounded-full bg-surface/50 blur-3xl" />
          <div className="relative p-2 rounded-full border-8 border-border shadow-2xl">
            <Image
              src="/dr-zahida-sadaf-portrait.jpg"
              alt="Illustration of Dr. Zahida Sadaf offering holistic Ayurvedic-Unani consultation"
              width={520}
              height={520}
              className="w-full max-w-xs rounded-full drop-shadow-2xl sm:max-w-sm"
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 22rem, 16rem"
              priority
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="why-choose-us" className="mt-12">
        <div className="rounded-xl bg-surface p-8 border border-border shadow-sm sm:p-10">
          <h2 id="why-choose-us" className="text-3xl font-semibold text-heading">
            Why choose Dr. Sadaf?
          </h2>
          <p className="mt-4 max-w-3xl text-foreground">
            Discover holistic regimens that combine organic herbal medicines, diet therapy,
            cupping (Hijama), leech therapy, yoga, meditation, and therapeutic oil baths to
            restore harmony in the body’s systems.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 rounded-xl bg-background p-4 text-sm text-foreground border border-border"
              >
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-secondary" aria-hidden="true" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="our-services" className="mt-24">
        <div className="flex flex-col gap-8">
          <div className="max-w-3xl">
            <h2 id="our-services" className="text-3xl font-semibold text-heading">
              Our services for chronic wellness
            </h2>
            <p className="mt-4 text-foreground">
              Personalized care plans include pure Unani formulations, diet therapy, lifestyle
              correction, personal assistance, medical report analysis, and regular follow-up.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col justify-between rounded-xl bg-surface p-6 border border-border transition-all duration-300 hover:bg-background hover:shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-semibold text-heading">{service.title}</h3>
                  <p className="mt-3 text-sm text-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/consultation"
                    className="text-sm font-semibold text-foreground underline-offset-4 transition-colors duration-300 hover:text-accent"
                    aria-label={`Book a consultation to learn more about ${service.title}`}
                  >
                    Book your personalized plan
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="testimonials" className="mt-24">
        <div className="rounded-xl bg-primary px-8 py-12 text-background shadow-lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="testimonials" className="text-3xl font-semibold text-background">
              Stories of renewed balance
            </h2>
            <p className="mt-3 text-subtext">
              Real people. Real results. Personalized care that feels like family.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-xl bg-white/5 p-6 text-left border border-white/10"
              >
                <blockquote className="text-sm leading-6 text-background">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-subtext">
                  {testimonial.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
