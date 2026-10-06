import { useState } from "react";

import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";
import { GALLERY, GALLERY_FILTERS, type GalleryCategory } from "@/lib/clinic";

type Filter = "all" | GalleryCategory;

const pillClass = (active: boolean): string =>
  `rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
    active
      ? "bg-aqua-gradient text-[#062830] shadow-lg shadow-aqua/25"
      : "border hairline text-muted-foreground hover:bg-white/5 hover:text-white"
  }`;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");

  const items = GALLERY.filter((item) => filter === "all" || item.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside our"
        highlight="clinic"
        subtitle="A look at our clinic, equipment, treatments and the smiles we care for."
      />

      <section className="container pb-20 md:pb-28">
        <Reveal>
          <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Gallery filters">
            {GALLERY_FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                className={pillClass(filter === id)}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, index) => (
            <Reveal key={item.caption} delay={(index % 3) * 90} className="mb-5 break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-[20px] border hairline">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="img-zoom w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061C27]/90 to-transparent px-4 pb-3 pt-10 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand compact />
    </>
  );
}
