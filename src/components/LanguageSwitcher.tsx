"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { getLocalePath, localeNames, locales } from "@/i18n/config";
import FlagIcon from "@/components/FlagIcon";

type LanguageSwitcherProps = {
  locale: Locale;
  compact?: boolean;
  light?: boolean;
};

export default function LanguageSwitcher({ locale, compact, light = true }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-xl border p-2 text-sm font-semibold transition hover:border-gold hover:text-gold ${
            light && !compact
                ? "border-white/30 text-white/90"
                : "border-stone/40 text-stone-dark"
        }`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
          <FlagIcon locale={locale} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <ul
            role="listbox"
            className="absolute right-0 z-50 mt-2 overflow-hidden rounded-xl border border-stone/30 bg-cream py-1 shadow-lg"
          >
            {locales.map((loc) => (
              <li key={loc}>
                <a
                  href={getLocalePath(loc)}
                  className={`flex items-center gap-2 px-2 py-2 text-sm transition hover:bg-gold/10 hover:text-gold ${
                      loc === locale ? "font-semibold text-gold" : "text-stone-dark"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <FlagIcon locale={loc} />
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
