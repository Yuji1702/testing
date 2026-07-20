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
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMenuOpen(false);
    }, 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  // Mount the mobile menu only while it's open or animating out. This keeps
  // it out of the DOM entirely when closed, instead of leaving a hidden
  // translated overlay sitting there.
  useEffect(() => {
    if (isMenuOpen) {
      const timeout = setTimeout(() => setShouldRenderMenu(true), 0);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => setShouldRenderMenu(false),
      MOBILE_MENU_TRANSITION_MS
    );

    return () => clearTimeout(timeout);
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
        className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none transition-all duration-300 ease-in-out ${
          isVisible && !isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 md:translate-y-0 md:opacity-100"
        } ${isMenuOpen ? "md:pointer-events-auto pointer-events-none" : ""}`}
      >
        <div className="max-w-screen-xl mx-auto pointer-events-auto">
          <div
            className={`
              flex items-center justify-between gap-3 md:gap-6 rounded-full transition-all duration-300 ease-in-out
              ${
                isScrolled
                  ? "border-border/60 bg-surface/70 py-2 px-3 md:pl-4 backdrop-blur-md shadow-sm"
                  : "border-transparent bg-transparent py-2 px-3 md:pl-4 shadow-none"
              }
            `}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/logo.png"
                  alt="Dr. Zahida Sadaf Logo"
                  width={40}
                  height={40}
                  className="h-11 w-11 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="min-w-0 flex flex-col leading-tight">
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-heading">
                    Dr. Zahida Sadaf
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-subtext font-medium">
                    Holistic Healing
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation (UNCHANGED) */}
            <nav
              aria-label="Primary"
              className="hidden md:flex items-center gap-1"
            >
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
                            ? "bg-primary text-background shadow-sm"
                            : "text-foreground hover:bg-surface"
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
                className="hidden md:inline-flex rounded-full bg-accent px-5 py-2 text-xs font-semibold text-primary shadow-sm transition-all duration-300 hover:bg-hover-accent hover:shadow-md active:scale-95"
              >
                Book Consultation
              </Link>
            </div>
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
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-300 border ${
                          active
                            ? "bg-accent/15 text-accent border-accent/30"
                            : "text-heading border-transparent hover:bg-surface"
                        }`}
                      >
                        <span>{link.label}</span>

                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              className={`mt-auto pb-safe transition-all duration-500 ease-out ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen
                  ? `${navigationLinks.length * 70 + 80}ms`
                  : "0ms",
              }}
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
      )}
    </>
  );
}
