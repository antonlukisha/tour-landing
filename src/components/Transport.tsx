import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n/types";

type TransportProps = {
  dict: Dictionary;
};

export default function Transport({ dict }: TransportProps) {
  return (
    <section id="transport" className="bg-forest py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="section-label text-gold-light">{dict.transport.label}</p>
              <div className="gold-line gold-line-animate my-4" />
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                {dict.transport.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                {dict.transport.description}
              </p>
              <ul className="mt-8 space-y-4">
                {dict.transport.perks.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-light">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src="/images/van-open-door.jpg"
                  alt={dict.transport.vanOpenAlt}
                  fill
                  className="image-zoom object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/van-side.jpg"
                  alt={dict.transport.vanSideAlt}
                  fill
                  className="image-zoom object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/van-front.jpg"
                  alt={dict.transport.vanFrontAlt}
                  fill
                  className="image-zoom object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
