import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import { hy } from "./dictionaries/hy";
import { it } from "./dictionaries/it";
import { ru } from "./dictionaries/ru";
import { zh } from "./dictionaries/zh";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ru,
  hy,
  zh,
  de,
  it,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
