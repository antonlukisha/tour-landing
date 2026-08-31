"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { getLocalePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: dict.nav.about },
    { href: "#tours", label: dict.nav.tours },
    { href: "#transport", label: dict.nav.transport },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#contact", label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href={getLocalePath(locale)}
          className={`font-display text-xl font-semibold tracking-wide transition-colors ${
            scrolled || menuOpen ? "text-foreground" : "text-white"
          }`}
        >
          {dict.guide.name}
          <span className="ml-1 text-gold">·</span>
          <span className="ml-1 text-sm font-normal opacity-80">{dict.nav.country}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-stone-dark" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher dict={dict} locale={locale} light={!scrolled && !menuOpen} />
          <a
            href="#contact"
            className="btn-glow rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white hover:bg-gold-light"
          >
            {dict.nav.book}
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher dict={dict} locale={locale} compact />
          <button
            type="button"
            aria-label={dict.nav.menu}
            className={scrolled || menuOpen ? "text-foreground" : "text-white"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-stone/50 bg-cream px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-stone-dark hover:text-gold"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 block rounded-full bg-gold py-3 text-center font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            {dict.nav.book}
          </a>
        </nav>
      )}
    </header>
  );
}
