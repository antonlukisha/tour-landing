import Image from "next/image";
import Reveal from "@/components/Reveal";
import { gallerySrcList } from "@/lib/content";
import type { Dictionary } from "@/i18n/types";

type GalleryProps = {
  dict: Dictionary;
};

export default function Gallery({ dict }: GalleryProps) {
  return (
    <section id="gallery" className="armenian-pattern py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="section-label">{dict.gallery.label}</p>
            <div className="gold-line gold-line-animate mx-auto my-4" />
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              {dict.gallery.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-dark/80">
              {dict.gallery.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {gallerySrcList.map((filename, i) => {
            const src = `/images/${filename}`;
            const alt = dict.gallery.alts[filename] ?? filename;
            return (
              <Reveal
                key={src}
                delay={(i % 4) * 60}
                className={
                  i === 0 || i === 7
                    ? "col-span-2 row-span-2 aspect-square"
                    : "aspect-[4/3]"
                }
              >
                <div className="group relative h-full overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="image-zoom object-cover"
                    sizes={
                      i === 0 || i === 7
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-medium text-white">{alt}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
