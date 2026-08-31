import type { Dictionary } from "../types";

const galleryAlts: Dictionary["gallery"]["alts"] = {
  "gallery-58.jpg": "Kloster Norawank",
  "gallery-70.jpg": "Kloster Tatew",
  "gallery-41.jpg": "Hochgebirgspass Wardenjaz",
  "gallery-61.jpg": "Thermen (Bäder) in Garni",
  "gallery-52.jpg": "Kreuze am Berg beim Höhlenkloster Geghard",
  "gallery-50.jpg": "Symphonie der Steine",
  "gallery-44.jpg": "Areni",
  "gallery-60.jpg": "Chatschkare beim Kloster Norawank",
  "gallery-63.jpg": "Blick auf den Ararat und Kloster Chor Virap",
  "gallery-39.jpg": "Hund schläft im Gras",
  "gallery-47.jpg": "Azat-Stausee",
  "gallery-54.jpg": "Blumen an der Kaskade in Jerewan",
  "gallery-42.jpg": "Selim-Karawanserei",
  "gallery-31.jpg": "Graffiti in Jerewan",
  "gallery-1.jpg": "Kloster Haghartsin",
  "gallery-2.jpg": "Kerker des Klosters Chor Virap",
  "gallery-46.jpg": "Weinberge von Areni",
  "gallery-35.jpg": "Kaskade in Jerewan",
  "gallery-29.jpg": "Berge des Geghama-Hochlands",
  "gallery-74.jpg": "Sevansee",
  "gallery-7.jpg": "Kloster in den Bergen",
  "gallery-8.jpg": "Armenisches Kloster",
  "gallery-9.jpg": "Historisches Denkmal",
  "gallery-36.jpg": "Kloster Sewanawank (Kuppel)",
  "gallery-26.jpg": "Berge von Dilijan",
  "gallery-13.jpg": "Tempel von Garni im Scheinwerferlicht",
  "gallery-56.jpg": "Kloster Geghard (Innenraum)",
  "gallery-34.jpg": "Berge von Garni",
  "gallery-17.jpg": "Mimino-Denkmal in Dilijan",
  "gallery-23.jpg": "Berge von Areni",
  "gallery-57.jpg": "Mauern des Klosters Geghard",
  "gallery-73.jpg": "Berge von Dilijan",
  "gallery-21.jpg": "Fuß des Ararat",
};

export const de: Dictionary = {
  meta: {
    title: "Gevorg — Touren in Armenien",
    description:
      "Private Touren durch Armenien mit Fahrer und Reiseleiter Gevorg. Klöster, Berge, Geschichten und komfortabler Transport.",
  },
  lang: {
    en: "englisch",
    ru: "russisch",
    hy: "armenisch",
    zh: "chinesisch",
    de: "deutsch",
    it: "italienisch",
  },
  nav: {
    about: "Über Gevorg",
    tours: "Routen",
    transport: "Transport",
    gallery: "Galerie",
    contact: "Kontakt",
    book: "Buchen",
    menu: "Menü",
    country: "Armenien",
  },
  hero: {
    label: "Touren in Armenien",
    title: "Entdecken Sie Armenien",
    titleAccent: "mit Gevorg",
    subtitle:
      "Ein Fahrer und Reiseleiter, der durchs Land fährt und Geschichten erzählt — von Klöstern, Bergen, Menschen und den Traditionen eines alten Landes.",
    book: "Reise buchen",
    routes: "Routen ansehen",
    statExperience: "Jahre Erfahrung",
    statRoutes: "Routen",
    statSeats: "Sitze im Van",
    imageAlt: "Akhtamar-Kirche am Van-See mit schneebedeckten Bergen",
  },
  guide: {
    name: "Gevorg",
    label: "Ihr Reiseleiter",
    title: "Lernen Sie Gevorg kennen",
    role: "Fahrer und Reiseleiter in Armenien",
    greeting:
      "Willkommen! Ich wurde in Armenien geboren und bin mein Leben lang auf diesen Straßen unterwegs. Ich kenne jedes Kloster, jede Kurve und jede Geschichte — von alten Legenden bis zu dem, was nur Einheimische erzählen.",
    quote:
      "«Hier kommt Ihr Zitat — fügen Sie die Worte ein, mit denen Gevorg seine Gäste begrüßt.»",
    write: "Gevorg schreiben",
    photoAlt: "Gevorg — Fahrer und Reiseleiter in Armenien",
  },
  tours: {
    label: "Routen",
    title: "Wohin wir gemeinsam fahren",
    subtitle:
      "Beliebte Ziele oder eine Route nach Ihren Interessen — wir planen sie gemeinsam.",
    items: {
      tatev: {
        title: "Tatew und Südar Armenien",
        description:
          "Ein Kloster am Klippenrand, die Seilbahn „Flügel von Tatew“ und Bergdörfer mit alten Traditionen.",
        duration: "1–2 Tage",
      },
      "garni-geghard": {
        title: "Garni und Geghard",
        description:
          "Ein heidnischer Tempel aus dem 1. Jahrhundert, die Symphonie der Steine und ein in den Fels gehauenes Kloster.",
        duration: "1 Tag",
      },
      dilijan: {
        title: "Dilijan und Klöster",
        description:
          "Die „Schweiz Armeniens“: Wälder, Holzarchitektur und die Klöster Haghartsin und Goshavank.",
        duration: "1–2 Tage",
      },
      nature: {
        title: "Natur und Wasserfälle",
        description:
          "Bergflüsse, Wasserfälle, Wanderwege und Orte, die in Reiseführern nicht stehen.",
        duration: "1 Tag",
      },
      culture: {
        title: "Kulturelles Armenien",
        description:
          "Chatschkars, alte Kirchen, lokale Küche und Geschichten, die von Generation zu Generation weitergegeben werden.",
        duration: "auf Anfrage",
      },
      custom: {
        title: "Individuelle Route",
        description:
          "Wir gestalten eine Reise nach Ihren Interessen — von einem Tag bis zu einer Woche durchs ganze Land.",
        duration: "flexibel",
      },
    },
  },
  features: {
    label: "Warum mit mir",
    title: "Nicht nur eine Fahrt — ein Erlebnis",
    items: [
      {
        title: "Lebendige Geschichten",
        description:
          "Keine trockenen Wikipedia-Fakten, sondern Erzählungen über Menschen, Traditionen und Orte, die Gevorg persönlich kennt.",
      },
      {
        title: "Komfortabler Transport",
        description:
          "Ein geräumiger 5–8-Sitzer-Minivan mit Klimaanlage — ideal für Familie oder kleine Gruppe.",
      },
      {
        title: "Flexible Route",
        description:
          "Wir halten, wo Sie möchten: Kaffee mit Bergblick, Markt, Kloster oder ein geheimer Wasserfall.",
      },
      {
        title: "Lokaler Reiseleiter",
        description:
          "Gevorg ist in Armenien geboren und aufgewachsen — er kennt Straßen, Jahreszeiten und die beste Zeit für jeden Ort.",
      },
    ],
  },
  transport: {
    label: "Transport",
    title: "Komfortabler Minivan",
    description:
      "Ein geräumiger Hyundai für 5–8 Passagiere mit Klimaanlage, bequemen Sitzen und großem Kofferraum. Perfekt für Familie, Paar oder kleine Freundesgruppe.",
    perks: [
      "5–8 Sitze + Fahrer",
      "Klimaanlage und Heizung",
      "Großer Kofferraum",
      "Komfort auf Bergstraßen",
    ],
    vanOpenAlt: "Minivan mit offener Tür",
    vanSideAlt: "Minivan Seitenansicht",
    vanFrontAlt: "Minivan Frontansicht",
  },
  gallery: {
    label: "Galerie",
    title: "Momente unterwegs",
    subtitle:
      "Klöster, Berge, Wasserfälle und Straßen — was Sie in Armenien erwartet.",
    alts: galleryAlts,
  },
  contact: {
    label: "Kontakt",
    title: "Bereit aufzubrechen?",
    subtitle:
      "Schreiben oder anrufen — wir besprechen Route, Termine und Gruppengröße. Antwort innerhalb weniger Stunden.",
    whatsappHint: "Schnelle Antwort",
    callHint: "Anrufen",
    quote:
      "«Jede Straße in Armenien ist eine Geschichte. Lassen Sie uns Ihre schreiben.»",
    imageAlt: "Kloster Tatew",
  },
  footer: {
    rights: "Touren in Armenien. Alle Rechte vorbehalten.",
    location: "Jerewan · Armenien",
  },
};
