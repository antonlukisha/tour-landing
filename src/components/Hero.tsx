import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

type HeroProps = {
  dict: Dictionary;
};

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt={dict.hero.imageAlt}
          fill
          priority
          className="animate-ken-burns object-cover object-[center_35%]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:pb-32">
        <div className="mb-6 animate-fade-up">
          <div className="inline-flex items-center gap-3 border-l-2 border-gold bg-black/50 px-4 py-2.5 backdrop-blur-sm">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-light md:text-xs">
              {dict.hero.label}
            </p>
          </div>
        </div>
        <h1 className="font-display max-w-3xl animate-fade-up animate-delay-150 text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
          {dict.hero.title}
          <br />
          <span className="text-gold-light">{dict.hero.titleAccent}</span>
        </h1>
        <p className="mt-6 max-w-xl animate-fade-up animate-delay-300 text-lg text-white/85 md:text-xl">
          {dict.hero.subtitle}
        </p>
        <div className="mt-10 flex animate-fade-up animate-delay-450 flex-wrap gap-4">
          <a
            href="#contact"
            className="btn-glow rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold-light"
          >
            {dict.hero.book}
          </a>
          <a
            href="#tours"
            className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            {dict.hero.routes}
          </a>
        </div>

        <div className="mt-16 flex animate-fade-up animate-delay-600 flex-wrap gap-8 border-t border-white/20 pt-8">
          {[
            { value: "10+", label: dict.hero.statExperience },
            { value: "100+", label: dict.hero.statRoutes },
            { value: "5–8", label: dict.hero.statSeats },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-gold-light">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
