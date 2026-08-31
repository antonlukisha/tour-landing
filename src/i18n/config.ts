export const locales = ["en", "ru", "hy", "zh", "de", "it"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const prefixedLocales = ["ru", "hy", "zh", "de", "it"] as const;

export const localeCodes: Record<Locale, string> = {
  en: "en",
  ru: "ru",
  hy: "hy",
  zh: "zh",
  de: "de",
  it: "it",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}
