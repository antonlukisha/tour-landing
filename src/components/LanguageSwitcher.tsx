"use client";

import { useMemo, useRef, useState } from "react";
import {Locale, localeCodes} from "@/i18n/config";
import { getLocalePath, locales } from "@/i18n/config";
import FlagIcon from "@/components/FlagIcon";
import type {Dictionary} from "@/i18n/types";

type LanguageSwitcherProps = {
    dict: Dictionary;
    locale: Locale;
    compact?: boolean;
    light?: boolean;
};

const ITEM_WIDTH = 44;

export default function LanguageSwitcher({ dict, locale, compact, light = true }: LanguageSwitcherProps) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(() =>
        Math.max(locales.indexOf(locale), 0)
    );
    const trackRef = useRef<HTMLDivElement>(null);

    const activeLocale = useMemo(() => locales[activeIndex], [activeIndex]);

    function shift(delta: number) {
        setActiveIndex((prev) => (prev + delta + locales.length) % locales.length);
    }

    function handleOpen() {
        setActiveIndex(Math.max(locales.indexOf(locale), 0));
        setOpen((v) => !v);
    }

    return (
        <div className="relative">
            <button
                type="button"
                onClick={handleOpen}
                className={`flex items-center gap-1.5 rounded-xl border p-2 text-sm font-semibold transition hover:border-gold hover:text-gold ${
                    light && !compact
                        ? "border-white/30 text-white/90"
                        : "border-stone/40 text-stone-dark"
                }`}
                aria-expanded={open}
                aria-haspopup="listbox"
            >
                <FlagIcon locale={localeCodes[locale]} />
            </button>

            {open && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />

                    <div
                        className="absolute right-0 z-50 mt-2 origin-top-right animate-[popIn_0.15s_ease-out] rounded-2xl border border-stone/30 bg-cream p-2 shadow-lg"
                        role="listbox"
                    >
                        <div className="flex items-center gap-1">
                            <button
                                type="button"
                                onClick={() => shift(-1)}
                                className="flex h-8 w-6 shrink-0 items-center justify-center rounded-lg text-stone-dark/60 transition hover:bg-gold/10 hover:text-gold"
                                aria-label="Предыдущий язык"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <div className="relative h-11 w-[110px] overflow-hidden">
                                <div
                                    ref={trackRef}
                                    className="absolute top-0 flex h-11 items-center transition-transform duration-300 ease-out"
                                    style={{
                                        transform: `translateX(${
                                            110 / 2 - ITEM_WIDTH / 2 - activeIndex * ITEM_WIDTH
                                        }px)`,
                                    }}
                                >
                                    {locales.map((loc, i) => {
                                        const distance = Math.abs(i - activeIndex);
                                        return (
                                            <a
                                                key={loc}
                                                href={getLocalePath(loc)}
                                                onClick={(e) => {
                                                if (i !== activeIndex) {
                                                    e.preventDefault();
                                                    setActiveIndex(i);
                                                } else {
                                                    setOpen(false);
                                                }
                                            }}
                                            style={{ width: ITEM_WIDTH }}
                                            className={`flex shrink-0 items-center justify-center transition-all duration-300 ${
                                                distance === 0
                                                    ? "scale-110 opacity-100"
                                                    : "scale-75 opacity-40 hover:opacity-70"
                                            }`}
                                            title={localeCodes[loc]}
                                                >
                                                <FlagIcon locale={localeCodes[loc]} />
                                        </a>
                                        );
                                    })}
                                </div>

                                <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-cream to-transparent" />
                                <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-cream to-transparent" />
                            </div>

                            <button
                                type="button"
                                onClick={() => shift(1)}
                                className="flex h-8 w-6 shrink-0 items-center justify-center rounded-lg text-stone-dark/60 transition hover:bg-gold/10 hover:text-gold"
                                aria-label="Следующий язык"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-1 text-center text-xs font-medium text-stone-dark/70">
                            {activeLocale && dict.lang[activeLocale]}
                        </div>
                    </div>
                </>
            )}

            <style jsx global>{`
                @keyframes popIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(-4px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}