import Link from "next/link";

/**
 * Global footer with quick contact details, service highlights, and social links.
 */
export function SiteFooter() {
  return (
    <footer className="bg-earth-950 text-earth-100">
      <div className="page-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Dr. Zahida Sadaf</h2>
          <p className="mt-3 text-sm leading-6 text-earth-100">
            Trusted Ayurvedic-Unani physician delivering holistic, root-cause healing
            plans with safe herbal medicines for families across the globe.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-earth-50">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link className="hover:text-white" href="/services">
                Conditions We Treat
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/consultation">
                Consultation Process
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/about">
                About Dr. Sadaf
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-earth-50">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a className="hover:text-white" href="tel:+917667265892">
                +91 76672 65892
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="mailto:care@drzahidasadaf.com">
                care@drzahidasadaf.com
              </a>
            </li>
            <li>Hyderabad, Telangana, India</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-earth-50">
            Connect
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                className="hover:text-white"
                href="https://wa.me/917667265892"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                className="hover:text-white"
                href="https://www.instagram.com/drzahidasadaf/?utm_source=website"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="hover:text-white"
                href="https://www.facebook.com/zahida.sadaf.31?utm_source=website"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="hover:text-white"
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
      <div className="border-t border-earth-800 bg-earth-950/80">
        <p className="page-shell py-4 text-xs text-earth-200">
          Healing is a sacred service. Every consultation is delivered with compassion,
          integrity, and respect for your unique wellness journey.
        </p>
      </div>
    </footer>
  );
}
