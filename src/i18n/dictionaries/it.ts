import type { Dictionary } from "../types";

const galleryAlts: Dictionary["gallery"]["alts"] = {
  "noravank.jpg": "Monastero di Noravank",
  "akdamar.jpg": "Isola di Akhtamar sul lago Van",
  "tatev-monastery.jpg": "Monastero di Tatev",
  "haghartsin-autumn.jpg": "Monastero di Haghartsin in autunno",
  "garni-temple.jpg": "Tempio di Garni",
  "symphony-of-stones.jpg": "Sinfonia delle pietre, gola di Garni",
  "dilijan-house.jpg": "Casa tradizionale a Dilijan",
  "mimino-dilijan.jpg": "Monumento a Mimino, Dilijan",
  "church-interior.jpg": "Interno di chiesa antica",
  "monastery-valley.jpg": "Monastero in valle montana",
  "mountain-stream.jpg": "Fiume di montagna e ponte",
  "waterfall-1.jpg": "Cascata in montagna",
  "waterfall-2.jpg": "Cascata dal sentiero",
  "gallery-1.jpg": "Panorama monti armeni",
  "gallery-2.jpg": "Paesaggio montano dell'Armenia",
  "gallery-3.jpg": "Strada di montagna",
  "gallery-4.jpg": "Vista sulla valle",
  "gallery-5.jpg": "Altipiano",
  "gallery-6.jpg": "Khor Virap e monte Ararat",
  "gallery-7.jpg": "Monastero in montagna",
  "gallery-8.jpg": "Monastero armeno",
  "gallery-9.jpg": "Monumento storico",
  "gallery-10.jpg": "Patrimonio culturale armeno",
  "gallery-12.jpg": "Tempio di Garni di notte",
  "gallery-13.jpg": "Tempio di Garni illuminato",
  "gallery-15.jpg": "Lago Sevan",
  "gallery-16.jpg": "Monastero di Khor Virap",
  "gallery-17.jpg": "Monumento a Dilijan",
  "gallery-18.jpg": "Natura armena",
  "gallery-19.jpg": "Vista montana",
  "gallery-20.jpg": "Paesaggio armeno",
  "gallery-21.jpg": "Luogo d'interesse",
};

export const it: Dictionary = {
  meta: {
    title: "Gevorg — Tour in Armenia",
    description:
      "Tour privati in Armenia con autista e guida Gevorg. Monasteri, montagne, storie e trasporto confortevole.",
  },
  nav: {
    about: "Su Gevorg",
    tours: "Itinerari",
    transport: "Trasporto",
    gallery: "Galleria",
    contact: "Contatti",
    book: "Prenota",
    menu: "Menu",
    country: "Armenia",
  },
  hero: {
    label: "Tour in Armenia",
    title: "Scopri l'Armenia",
    titleAccent: "con Gevorg",
    subtitle:
      "Un autista e guida che viaggia per il paese raccontando storie — di monasteri, montagne, persone e tradizioni di una terra antica.",
    book: "Prenota un viaggio",
    routes: "Vedi itinerari",
    statExperience: "anni di esperienza",
    statRoutes: "itinerari",
    statSeats: "posti nel van",
    imageAlt: "Chiesa di Akhtamar sul lago Van con montagne innevate",
  },
  guide: {
    label: "La vostra guida",
    title: "Conoscete Gevorg",
    role: "Autista e guida in Armenia",
    greeting:
      "Benvenuti! Sono nato in Armenia e ho passato la vita su queste strade. Conosco ogni monastero, ogni curva e ogni storia — dalle antiche leggende a ciò che raccontano solo i locali.",
    quote:
      "«Qui inserirete la vostra citazione — le parole con cui Gevorg accoglie gli ospiti.»",
    write: "Scrivi a Gevorg",
    photoAlt: "Gevorg — autista e guida in Armenia",
  },
  tours: {
    label: "Itinerari",
    title: "Dove andremo insieme",
    subtitle:
      "Destinazioni popolari o un percorso sui vostri interessi — lo pianifichiamo insieme.",
    items: {
      tatev: {
        title: "Tatev e sud Armenia",
        description:
          "Monastero sul bordo della scogliera, funivia Ali di Tatev e villaggi di montagna con antiche tradizioni.",
        duration: "1–2 giorni",
      },
      "garni-geghard": {
        title: "Garni e Geghard",
        description:
          "Tempio pagano del I secolo, Sinfonia delle pietre nella gola e monastero scavato nella roccia.",
        duration: "1 giorno",
      },
      dilijan: {
        title: "Dilijan e monasteri",
        description:
          "La «Svizzera armena»: foreste, architettura in legno e monasteri di Haghartsin e Goshavank.",
        duration: "1–2 giorni",
      },
      nature: {
        title: "Natura e cascate",
        description:
          "Fiumi di montagna, cascate, sentieri e luoghi che non troverete nelle guide.",
        duration: "1 giorno",
      },
      culture: {
        title: "Armenia culturale",
        description:
          "Khachkar, chiese antiche, cucina locale e storie tramandate di generazione in generazione.",
        duration: "su richiesta",
      },
      custom: {
        title: "Itinerario personalizzato",
        description:
          "Progetteremo un viaggio sui vostri interessi — da un giorno a una settimana in tutto il paese.",
        duration: "flessibile",
      },
    },
  },
  features: {
    label: "Perché con me",
    title: "Non solo un viaggio — un'esperienza",
    items: [
      {
        title: "Storie vive",
        description:
          "Non fatti secchi da Wikipedia, ma racconti di persone, tradizioni e luoghi che Gevorg conosce personalmente.",
      },
      {
        title: "Trasporto confortevole",
        description:
          "Minivan spazioso da 7–8 posti con aria condizionata — ideale per famiglia o piccolo gruppo.",
      },
      {
        title: "Itinerario flessibile",
        description:
          "Ci fermeremo dove volete: caffè con vista sulle montagne, mercato, monastero o cascata segreta.",
      },
      {
        title: "Guida locale",
        description:
          "Gevorg è nato e cresciuto in Armenia — conosce strade, stagioni e il momento migliore per ogni luogo.",
      },
    ],
  },
  transport: {
    label: "Trasporto",
    title: "Minivan confortevole",
    description:
      "Hyundai spazioso per 7–8 passeggeri con aria condizionata, sedili comodi e bagagliaio grande. Perfetto per famiglia, coppia o piccolo gruppo.",
    perks: [
      "7–8 posti + autista",
      "Aria condizionata e riscaldamento",
      "Bagagliaio grande",
      "Comfort su strade di montagna",
    ],
    vanOpenAlt: "Minivan con porta aperta",
    vanSideAlt: "Minivan laterale",
    vanFrontAlt: "Minivan frontale",
  },
  gallery: {
    label: "Galleria",
    title: "Momenti di viaggio",
    subtitle:
      "Monasteri, montagne, cascate e strade — cosa vi aspetta in Armenia.",
    alts: galleryAlts,
  },
  contact: {
    label: "Contatti",
    title: "Pronti a partire?",
    subtitle:
      "Scrivete o chiamate — discuteremo itinerario, date e numero di persone. Rispondiamo entro poche ore.",
    whatsappHint: "Risposta rapida",
    callHint: "Chiama",
    quote:
      "«Ogni strada in Armenia è una storia. Scriviamo la vostra.»",
    imageAlt: "Monastero di Tatev",
  },
  footer: {
    rights: "Tour in Armenia. Tutti i diritti riservati.",
    location: "Yerevan · Armenia",
  },
};
