"use client";

import { useState, useEffect } from "react";
import type { Locale } from "../../../i18n-config";

type Dict = {
  logo: string;
  tagline: string;
  nav_services: string;
  nav_team: string;
  nav_technology: string;
  nav_insurance: string;
  nav_contact: string;
  cta: string;
  lang_toggle: string;
};

type Props = {
  dict: Dict;
  locale: Locale;
};

const NAV_LINKS = [
  { key: "nav_services", href: "#servicos", section: "servicos" },
  { key: "nav_team", href: "#equipa", section: "equipa" },
  { key: "nav_technology", href: "#tecnologia", section: "tecnologia" },
  { key: "nav_insurance", href: "#seguros", section: "seguros" },
  { key: "nav_contact", href: "#contacto", section: "contacto" },
] as const;

export default function Navbar({ dict, locale }: Props) {
  const otherLocale = locale === "pt" ? "en" : "pt";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Add shadow after scrolling past top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight nav link for the section in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.section)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href={`/${locale}`} className="flex items-center gap-2 shrink-0">
            <span
              className="text-xl text-teal-700"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {dict.logo}
            </span>
            <span className="hidden sm:block text-xs text-gray-400 border-l border-gray-200 pl-2 ml-1">
              {dict.tagline}
            </span>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`transition-colors ${
                  activeSection === link.section
                    ? "text-teal-600 font-medium"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                {dict[link.key]}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href={`/${otherLocale}`}
              className="hidden sm:block text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              {dict.lang_toggle}
            </a>
            {/* CTA hidden on mobile — BookingBar handles it */}
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              {dict.cta}
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            >
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-200 origin-center ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-200 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-6 pt-3">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-sm border-b border-gray-100 last:border-0 transition-colors ${
                  activeSection === link.section
                    ? "text-teal-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                {dict[link.key]}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between">
            <a
              href={`/${otherLocale}`}
              className="text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              {dict.lang_toggle}
            </a>
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              {dict.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
