"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/consultation", label: "Consultation" },
  { href: "/contact", label: "Contact" },
];

/**
 * Primary site navigation shared across all pages.
 * Includes brand identity, global navigation links, and the key booking CTA.
 * Adds an accessible mobile menu for smaller screens.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const linkBaseClasses =
    "rounded-full px-3 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  const navClassName = [
    "w-full flex-col gap-4 rounded-3xl bg-earth-800/80 px-4 py-4 md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0",
    isMenuOpen ? "flex" : "hidden md:flex",
  ].join(" ");

  return (
    <header className="bg-earth-800 text-white shadow-sm">
      <div className="page-shell py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex w-full items-center justify-between gap-3 md:w-auto">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Dr. Zahida Sadaf Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight">
                  Dr. Zahida Sadaf
                </span>
                <p className="text-sm text-earth-100">
                  Ayurvedic-Unani Physician &amp; Online Health Consultant
                </p>
              </div>
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-earth-500/60 text-earth-50 transition hover:bg-earth-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>

          {/* Tablet breakpoint (md) keeps links inline while mobile stays stacked */}
          <nav id="primary-navigation" aria-label="Primary" className={navClassName}>
            <ul className="flex flex-1 flex-col items-stretch gap-2 text-sm font-medium md:flex-row md:items-center md:gap-5">
              {navigationLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`${linkBaseClasses} ${active
                        ? "bg-earth-800 text-earth-100 md:bg-earth-800/70"
                        : "hover:bg-earth-800/70"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="md:hidden">
                <Link
                  href="/consultation"
                  className="block rounded-full bg-earth-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm ring-1 ring-earth-600/30 transition hover:bg-earth-600 hover:shadow active:scale-[0.98]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex md:items-center">
            <Link
              href="/consultation"
              className="rounded-full bg-earth-500 px-5 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-earth-600/30 transition hover:bg-earth-600 hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth-100 active:scale-[0.98]"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
