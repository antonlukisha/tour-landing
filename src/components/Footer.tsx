import type { Dictionary } from "@/i18n/types";

type FooterProps = {
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="border-t border-stone/40 bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-display text-lg font-semibold">
          {dict.guide.name}<span className="text-gold"> · </span>
          {dict.nav.country}
        </p>
        <p className="text-sm text-stone-dark/60">
          © {new Date().getFullYear()} {dict.footer.rights}
        </p>
        <p className="text-sm text-stone-dark/60">{dict.footer.location}</p>
      </div>
    </footer>
  );
}
