export type TourId =
  | "tatev"
  | "garni-geghard"
  | "dilijan"
  | "nature"
  | "culture"
  | "custom";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    tours: string;
    transport: string;
    gallery: string;
    contact: string;
    book: string;
    menu: string;
    country: string;
  };
  hero: {
    label: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    book: string;
    routes: string;
    statExperience: string;
    statRoutes: string;
    statSeats: string;
    imageAlt: string;
  };
  guide: {
    label: string;
    title: string;
    role: string;
    greeting: string;
    quote: string;
    write: string;
    photoAlt: string;
  };
  tours: {
    label: string;
    title: string;
    subtitle: string;
    items: Record<
      TourId,
      { title: string; description: string; duration: string }
    >;
  };
  features: {
    label: string;
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  transport: {
    label: string;
    title: string;
    description: string;
    perks: string[];
    vanOpenAlt: string;
    vanSideAlt: string;
    vanFrontAlt: string;
  };
  gallery: {
    label: string;
    title: string;
    subtitle: string;
    alts: Record<string, string>;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    whatsappHint: string;
    callHint: string;
    quote: string;
    imageAlt: string;
  };
  footer: {
    rights: string;
    location: string;
  };
};
