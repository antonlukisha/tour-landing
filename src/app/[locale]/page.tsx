import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, prefixedLocales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import HomePage from "@/components/HomePage";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "zh" ? "zh_CN" : locale === "hy" ? "hy_AM" : locale,
      type: "website",
    },
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam) || localeParam === "en") {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return <HomePage locale={locale} dict={dict} />;
}
