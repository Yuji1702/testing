import Link from "next/link";

/**
 * Global footer with quick contact details, service highlights, and social links.
 * Implements the "Foundation of Trust" design pattern from Rooted Sovereignty.
 */
export function SiteFooter() {
  return (
    <footer className="bg-primary text-background">
      <div className="page-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-background">Dr. Zahida Sadaf</h2>
          <p className="text-sm leading-6 text-subtext">
            Trusted Ayurvedic-Unani physician delivering holistic, root-cause healing
            plans with safe herbal medicines for families across the globe.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-background">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link className="transition-colors duration-300 hover:text-accent" href="/services">
                Conditions We Treat
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-300 hover:text-accent" href="/consultation">
                Consultation Process
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-300 hover:text-accent" href="/about">
                About Dr. Sadaf
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-background">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-subtext">
            <li>
              <a className="transition-colors duration-300 hover:text-background" href="tel:+917667265892">
                +91 76672 65892
              </a>
            </li>
            <li>
              <a className="transition-colors duration-300 hover:text-background" href="mailto:care@drzahidasadaf.com">
                care@drzahidasadaf.com
              </a>
            </li>
            <li className="text-subtext">Hyderabad, Telangana, India</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-background">
            Connect
          </h3>
          <ul className="space-y-3 text-sm text-subtext">
            <li>
              <a
                className="transition-colors duration-300 hover:text-background"
                href="https://wa.me/917667265892"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-300 hover:text-background"
                href="https://www.instagram.com/drzahidasadaf/?utm_source=website"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-300 hover:text-background"
                href="https://www.facebook.com/zahida.sadaf.31?utm_source=website"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-300 hover:text-background"
                href="https://www.youtube.com/@dr.zahidasadaf4498?utm_source=website"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 bg-primary">
        <p className="page-shell py-6 text-xs text-subtext">
          Healing is a sacred service. Every consultation is delivered with compassion,
          integrity, and respect for your unique wellness journey.
        </p>
      </div>
    </footer>
  );
}
