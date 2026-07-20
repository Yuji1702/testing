"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/consultation", label: "Consultation" },
  { href: "/contact", label: "Contact" },
];

const MOBILE_MENU_TRANSITION_MS = 400;

/**
 * Primary site navigation.
 * Desktop design preserved exactly.
 * Mobile navigation rebuilt from scratch as a full-screen overlay.
 */
export function SiteHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      const threshold = 10;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (diff > threshold) {
        setIsVisible(false);
      } else if (diff < -threshold) {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
  const original = document.body.style.overflow;

  document.body.style.overflow = isMenuOpen ? "hidden" : "";

  return () => {
    document.body.style.overflow = original;
  };
}, [isMenuOpen]);
  
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkBaseClasses =
    "rounded-full px-4 py-2 text-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const closeMenu = () => setIsMenuOpen(false);

  return (
  <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto pointer-events-auto">
        <div className={`
          flex items-center justify-between gap-6 rounded-full transition-all duration-300 ease-in-out
          ${isScrolled
            ? "border-earth-200/60 bg-earth-50/80 p-2 pl-4 backdrop-blur-xl shadow-lg shadow-black/5"
            : "border-transparent bg-transparent p-2 pl-4 shadow-none"
          }
        `}>
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Dr. Zahida Sadaf Logo"
                width={40}
                height={40}
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold tracking-tight text-earth-950">
                  Dr. Zahida Sadaf
                </span>
                <span className="text-[10px] uppercase tracking-wider text-earth-700 font-medium">
                  Holistic Healing
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu toggle — rendered outside the header so it always
          stays on top of the full-screen overlay and is never hidden
          behind it. */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((v) => !v)}
        className="fixed top-5 right-5 z-[110] inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/70 backdrop-blur transition-all duration-300 hover:bg-surface md:hidden"
      >
        <span className="relative h-5 w-5">
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-5 bg-current transition-all duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-5 bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-5 bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </span>
      </button>

      {/* ========================= */}
      {/* MOBILE NAVIGATION */}
      {/* ========================= */}
      {shouldRenderMenu && (
        <div
          id="mobile-navigation"
          className={`fixed inset-0 z-[100] md:hidden flex flex-col transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-background/98 backdrop-blur-2xl" />

          {/* Decorative gradient */}
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-accent/10 via-primary/5 to-transparent" />

          {/* Content */}
          <div className="relative flex h-full flex-col px-8 pt-16 pb-10">
            <nav aria-label="Mobile Navigation">
              <ul className="space-y-2">
                {navigationLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <li
                      key={link.href}
                      className={`transition-all duration-500 ease-out ${
                        isMenuOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                      style={{
                        transitionDelay: isMenuOpen ? `${index * 70}ms` : "0ms",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/consultation"
              className="hidden md:inline-flex rounded-full bg-earth-800 px-5 py-2 text-xs font-semibold text-earth-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-earth-700 hover:shadow-lg active:scale-95"
            >
              Book Consultation
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-earth-200 bg-white/50 text-earth-800 transition hover:bg-earth-100 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <Link
                href="/consultation"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-base font-semibold text-primary shadow-xl transition-all duration-300 hover:bg-hover-accent active:scale-[0.98]"
              >
                Book Consultation
              </Link>

              <p className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-subtext">
                Holistic Healing
              </p>
            </div>
          </div>
        </div>
            </div>
    </header>

    {/* Mobile Menu Overlay */}
    <div
  role="dialog"
  aria-modal="true"
  aria-label="Mobile navigation"
  className={`fixed inset-0 z-[100] flex flex-col bg-earth-50/95 backdrop-blur-lg transition-all duration-300 ${
    isMenuOpen
      ? "opacity-100 visible pointer-events-auto"
      : "opacity-0 invisible pointer-events-none"
  }`}
  id="primary-navigation"
>
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6">

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-earth-200 bg-white text-earth-800"
          aria-label="Close navigation"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav aria-label="Mobile">
          <ul className="flex flex-col items-center gap-7">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg transition-colors ${
                    isActive(link.href)
                      ? "font-semibold text-earth-950"
                      : "text-earth-700 hover:text-earth-950"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/consultation"
          onClick={() => setIsMenuOpen(false)}
          className="mt-10 rounded-full bg-earth-800 px-7 py-3 text-sm font-semibold text-earth-50 transition hover:-translate-y-0.5 hover:bg-earth-700 hover:shadow-lg"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  </>
);
}
