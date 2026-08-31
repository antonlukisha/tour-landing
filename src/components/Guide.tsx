import Image from "next/image";
import Reveal from "@/components/Reveal";
import { gevorgPhoto } from "@/lib/content";
import type { Dictionary } from "@/i18n/types";

type GuideProps = {
  dict: Dictionary;
};

export default function Guide({ dict }: GuideProps) {
  return (
    <section id="about" className="armenian-pattern py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-10 md:gap-12">
            <div className="relative shrink-0">
              <div className="group relative h-52 w-44 overflow-hidden rounded-2xl shadow-xl ring-2 ring-gold/20 transition-shadow duration-500 hover:shadow-2xl hover:ring-gold/40 sm:h-60 sm:w-48 md:h-64 md:w-52">
                <Image
                  src={gevorgPhoto}
                  alt={dict.guide.photoAlt}
                  fill
                  className="image-zoom object-cover object-top"
                  sizes="(max-width: 640px) 176px, 208px"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="section-label">{dict.guide.label}</p>
              <div className="gold-line gold-line-animate my-4" />
              <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                {dict.guide.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-gold">{dict.guide.role}</p>
              <p className="mt-6 text-lg leading-relaxed text-stone-dark/90">
                {dict.guide.greeting}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <blockquote className="mt-10 w-full rounded-2xl border border-gold/30 bg-cream p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:mt-12 md:p-8">
            <p className="font-display text-lg leading-relaxed italic text-foreground md:text-xl">
              {dict.guide.quote}
            </p>
            <footer className="mt-4 text-sm font-medium text-gold">— {dict.guide.name}</footer>
          </blockquote>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-6 flex justify-center md:mt-8">
            <a
              href="#contact"
              className="btn-glow inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold-light"
            >
              {dict.guide.write}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
