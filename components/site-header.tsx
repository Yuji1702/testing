"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/consultation", label: "Consultation" },
  { href: "/contact", label: "Contact" },
];

/**
 * Primary site navigation.
 * Implements premium auto-hide behavior: hides on scroll down, reappears on scroll up.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      // Always show at the very top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Scroll Down: Hide
      else if (diff > 0) {
        setIsVisible(false);
      }
      // Scroll Up: Show
      else if (diff < 0) {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkBaseClasses =
    "rounded-full px-4 py-2 text-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth-800";

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const shouldShowHeader = isMenuOpen || isVisible;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 pt-2 pointer-events-none transition-transform duration-300 ease-in-out ${
        shouldShowHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto pointer-events-auto">
        <div className={`
          flex items-center justify-between gap-6 rounded-full transition-all duration-300 ease-in-out
          ${isScrolled
            ? "border-earth-200/60 bg-earth-50/70 p-2 pl-4 backdrop-blur-md shadow-sm"
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

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navigationLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`${linkBaseClasses} ${
                        active
                          ? "bg-earth-800 text-earth-50 shadow-sm"
                          : "text-earth-800 hover:bg-earth-100"
                      }`}
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
              className="hidden rounded-full bg-earth-800 px-5 py-2 text-xs font-semibold text-earth-50 shadow-sm transition-all duration-300 hover:bg-earth-700 hover:shadow-md active:scale-95 md:inline-flex"
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
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-earth-50/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        id="primary-navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex h-full flex-col items-center justify-center p-8 text-center">
          <nav aria-label="Mobile">
            <ul className="flex flex-col items-center gap-3 text-2xl font-medium">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-full px-8 py-4 transition-colors ${
                      isActive(link.href) ? "text-earth-950 font-bold" : "text-earth-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/consultation"
            className="mt-8 rounded-full bg-earth-800 px-8 py-4 text-base font-semibold text-earth-50 shadow-lg transition hover:bg-earth-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
