import { notFound } from "next/navigation";
import { isLocale, prefixedLocales } from "@/i18n/config";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (
    !isLocale(locale) ||
    locale === "en" ||
    !prefixedLocales.includes(locale as (typeof prefixedLocales)[number])
  ) {
    notFound();
  }

  return children;
}
