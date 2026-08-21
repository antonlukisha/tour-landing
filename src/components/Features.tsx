import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n/types";

const icons = [
  (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
];

const iconMotion = [
  "feature-icon-book",
  "feature-icon-transport",
  "feature-icon-map",
  "feature-icon-pin",
];

type FeaturesProps = {
  dict: Dictionary;
};

export default function Features({ dict }: FeaturesProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="section-label">{dict.features.label}</p>
            <div className="gold-line gold-line-animate mx-auto my-4" />
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              {dict.features.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.features.items.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 100}>
              <div className="card-lift group h-full rounded-2xl border border-stone/60 bg-cream p-8 hover:border-gold/40">
                <div className={`feature-icon mb-5 text-gold ${iconMotion[i]}`}>
                  {icons[i]}
                </div>
                <h3 className="text-lg font-semibold leading-snug">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-dark/80">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
