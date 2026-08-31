import type { Dictionary } from "../types";

const galleryAlts: Dictionary["gallery"]["alts"] = {
  "gallery-58.jpg": "Noravank Monastery",
  "gallery-70.jpg": "Tatev Monastery",
  "gallery-41.jpg": "Vardenyats highland pass",
  "gallery-61.jpg": "Roman baths in Garni",
  "gallery-52.jpg": "Crosses on the mountain near Geghard cave monastery",
  "gallery-50.jpg": "Symphony of Stones",
  "gallery-44.jpg": "Areni",
  "gallery-60.jpg": "Khachkars at Noravank Monastery",
  "gallery-63.jpg": "View of Ararat and Khor Virap Monastery",
  "gallery-39.jpg": "Dog sleeping in the grass",
  "gallery-47.jpg": "Azat Reservoir",
  "gallery-54.jpg": "Flowers on the Cascade in Yerevan",
  "gallery-42.jpg": "Selim Caravanserai",
  "gallery-31.jpg": "Yerevan graffiti",
  "gallery-1.jpg": "Haghartsin Monastery",
  "gallery-2.jpg": "Dungeon of Khor Virap Monastery",
  "gallery-46.jpg": "Areni vineyards",
  "gallery-35.jpg": "Cascade in Yerevan",
  "gallery-29.jpg": "Mountains of the Geghama Highlands",
  "gallery-74.jpg": "Lake Sevan",
  "gallery-7.jpg": "Monastery in the mountains",
  "gallery-8.jpg": "Armenian monastery",
  "gallery-9.jpg": "Historic landmark",
  "gallery-36.jpg": "Sevanavank Monastery (dome)",
  "gallery-26.jpg": "Dilijan mountains",
  "gallery-13.jpg": "Garni Temple under floodlights",
  "gallery-56.jpg": "Geghard Monastery (interior)",
  "gallery-34.jpg": "Garni mountains",
  "gallery-17.jpg": "Mimino monument in Dilijan",
  "gallery-23.jpg": "Areni mountains",
  "gallery-57.jpg": "Walls of Geghard Monastery",
  "gallery-73.jpg": "Dilijan mountains",
  "gallery-21.jpg": "Foothills of Ararat",
};

export const en: Dictionary = {
  meta: {
    title: "Gevorg — Tours in Armenia",
    description:
      "Private tours across Armenia with driver and guide Gevorg. Monasteries, mountains, stories, and comfortable transport.",
  },
  lang: {
    en: "english",
    ru: "russian",
    hy: "armenian",
    zh: "chinese",
    de: "german",
    it: "italian",
  },
  nav: {
    about: "About Gevorg",
    tours: "Routes",
    transport: "Transport",
    gallery: "Gallery",
    contact: "Contact",
    book: "Book a tour",
    menu: "Menu",
    country: "Armenia",
  },
  hero: {
    label: "Tours in Armenia",
    title: "Discover Armenia",
    titleAccent: "with Gevorg",
    subtitle:
      "A driver and guide who travels the country and tells stories — of monasteries, mountains, people, and the traditions of an ancient land.",
    book: "Book a trip",
    routes: "View routes",
    statExperience: "years of experience",
    statRoutes: "routes",
    statSeats: "seats in the van",
    imageAlt: "Akhtamar Church on Lake Van with snow-capped mountains",
  },
  guide: {
    name: "Gevorg",
    label: "Your guide",
    title: "Meet Gevorg",
    role: "Driver and guide in Armenia",
    greeting:
      "Welcome! I was born in Armenia and have spent my life on these roads. I know every monastery, every turn, and every story — from ancient legends to what only locals will tell you.",
    quote:
      "«Your quote will go here — add the words Gevorg uses to welcome his guests.»",
    write: "Message Gevorg",
    photoAlt: "Gevorg — driver and guide in Armenia",
  },
  tours: {
    label: "Routes",
    title: "Where we'll go together",
    subtitle:
      "Popular destinations or a route tailored to your interests — we'll plan it together.",
    items: {
      tatev: {
        title: "Tatev and southern Armenia",
        description:
          "A cliff-edge monastery, the Wings of Tatev cable car, and mountain villages with ancient traditions.",
        duration: "1–2 days",
      },
      "garni-geghard": {
        title: "Garni and Geghard",
        description:
          "A 1st-century pagan temple, the Symphony of Stones gorge, and a monastery carved into the rock.",
        duration: "1 day",
      },
      dilijan: {
        title: "Dilijan and monasteries",
        description:
          "The Armenian Switzerland: forests, wooden architecture, and the Haghartsin and Goshavank monasteries.",
        duration: "1–2 days",
      },
      nature: {
        title: "Nature and waterfalls",
        description:
          "Mountain rivers, waterfalls, trails, and places you won't find in guidebooks.",
        duration: "1 day",
      },
      culture: {
        title: "Cultural Armenia",
        description:
          "Khachkars, ancient churches, local cuisine, and stories passed down through generations.",
        duration: "on request",
      },
      custom: {
        title: "Custom itinerary",
        description:
          "We'll design a trip around your interests — from one day to a week-long journey across the country.",
        duration: "flexible",
      },
    },
  },
  features: {
    label: "Why travel with me",
    title: "Not just a ride — an experience",
    items: [
      {
        title: "Living stories",
        description:
          "Not dry facts from Wikipedia, but tales of people, traditions, and places Gevorg knows personally.",
      },
      {
        title: "Comfortable transport",
        description:
          "A spacious 5–8 seat minivan with air conditioning — ideal for a family or small group.",
      },
      {
        title: "Flexible route",
        description:
          "We'll stop wherever you like: coffee with a mountain view, a market, a monastery, or a secret waterfall.",
      },
      {
        title: "Local guide",
        description:
          "Gevorg was born and raised in Armenia — he knows the roads, seasons, and the best time for every place.",
      },
    ],
  },
  transport: {
    label: "Transport",
    title: "Comfortable minivan",
    description:
      "A spacious Hyundai for 5–8 passengers with air conditioning, comfortable seats, and a large trunk. Perfect for a family, couple, or small group of friends.",
    perks: [
      "5–8 seats + driver",
      "Air conditioning and heating",
      "Large trunk for luggage",
      "Comfort on mountain roads",
    ],
    vanOpenAlt: "Minivan with open door — ready for the journey",
    vanSideAlt: "Minivan side view",
    vanFrontAlt: "Minivan front view",
  },
  gallery: {
    label: "Gallery",
    title: "Moments from the road",
    subtitle:
      "Monasteries, mountains, waterfalls, and roads — what awaits you in Armenia.",
    alts: galleryAlts,
  },
  contact: {
    label: "Contact",
    title: "Ready to go?",
    subtitle:
      "Write or call — we'll discuss the route, dates, and group size. We reply within a few hours.",
    whatsappHint: "Quick reply",
    callHint: "Call",
    quote: "«Every road in Armenia is a story. Let's write yours.»",
    imageAlt: "Tatev Monastery",
  },
  footer: {
    rights: "Tours in Armenia. All rights reserved.",
    location: "Yerevan · Armenia",
  },
};
