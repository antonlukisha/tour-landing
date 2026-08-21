import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Gevorg — Tours in Armenia",
  description:
    "Private tours across Armenia with driver and guide Gevorg. Monasteries, mountains, stories, and comfortable transport.",
};

export default function EnglishPage() {
  const dict = getDictionary("en");
  return <HomePage locale="en" dict={dict} />;
}
