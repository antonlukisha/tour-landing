import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import Tours from "@/components/Tours";
import Features from "@/components/Features";
import Transport from "@/components/Transport";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SetLang from "@/components/SetLang";

type HomePageProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function HomePage({ locale, dict }: HomePageProps) {
  return (
    <>
      <SetLang locale={locale} />
      <Header locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Guide dict={dict} />
        <Tours dict={dict} />
        <Features dict={dict} />
        <Transport dict={dict} />
        <Gallery dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
