import Image from "next/image";
import Reveal from "@/components/Reveal";
import { tourImages, tourOrder } from "@/lib/content";
import type { Dictionary } from "@/i18n/types";

type ToursProps = {
  dict: Dictionary;
};

export default function Tours({ dict }: ToursProps) {
  return (
    <section id="tours" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label">{dict.tours.label}</p>
            <div className="gold-line gold-line-animate my-4" />
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              {dict.tours.title}
            </h2>
            <p className="mt-4 text-lg text-stone-dark/80">{dict.tours.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tourOrder.map((id, i) => {
            const tour = dict.tours.items[id];
            return (
              <Reveal key={id} delay={i * 80}>
                <article className="card-lift group overflow-hidden rounded-2xl bg-background shadow-md">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={tourImages[id]}
                      alt={tour.title}
                      fill
                      className="image-zoom object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {tour.duration}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold transition-colors duration-300 group-hover:text-gold">
                      {tour.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-dark/80">
                      {tour.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
