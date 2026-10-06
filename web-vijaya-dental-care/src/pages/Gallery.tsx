import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  GALLERY,
  GALLERY_FILTERS,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/clinic";

type Filter = "all" | GalleryCategory;

const pillClass = (active: boolean): string =>
  `rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
    active
      ? "bg-aqua-gradient text-[#062830] shadow-lg shadow-aqua/25"
      : "border hairline text-muted-foreground hover:bg-white/5 hover:text-white"
  }`;

function GalleryTile({
  item,
  onOpen,
  compact = false,
}: {
  item: GalleryItem;
  onOpen: () => void;
  compact?: boolean;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[20px] border hairline ${
        compact ? "aspect-[4/5]" : ""
      }`}
    >
      <button
        type="button"
        aria-label={`Open image: ${item.caption}`}
        className="relative block h-full w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua"
        onClick={onOpen}
      >
        <img
          src={item.image}
          alt={item.caption}
          className={`w-full object-cover ${compact ? "h-full" : "img-zoom"}`}
          loading="lazy"
        />
        <span
          className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061C27]/95 to-transparent font-bold text-white transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 ${
            compact
              ? "px-2 pb-2 pt-7 text-[10px] leading-tight"
              : "px-4 pb-3 pt-10 text-sm opacity-0"
          }`}
        >
          {item.caption}
        </span>
      </button>
    </figure>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const items = GALLERY.filter((item) => filter === "all" || item.category === filter);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  const navigate = useCallback(
    (direction: number) => {
      setActiveIndex((index) =>
        index === null ? null : (index + direction + items.length) % items.length,
      );
    },
    [items.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigate(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigate(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, navigate]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;

    if (startX === null || endX === undefined) return;
    const distance = endX - startX;
    if (Math.abs(distance) > 48) navigate(distance < 0 ? 1 : -1);
  };

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
                onClick={() => {
                  setFilter(id);
                  setActiveIndex(null);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          className="mx-[-1rem] mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Gallery images. Swipe sideways to view more."
        >
          {Array.from({ length: Math.ceil(items.length / 3) }, (_, slideIndex) => {
            const firstIndex = slideIndex * 3;
            return (
              <div
                key={slideIndex}
                className="grid w-full shrink-0 snap-start grid-cols-3 gap-2.5"
              >
                {items.slice(firstIndex, firstIndex + 3).map((item, offset) => (
                  <GalleryTile
                    key={item.caption}
                    item={item}
                    compact
                    onOpen={() => setActiveIndex(firstIndex + offset)}
                  />
                ))}
              </div>
            );
          })}
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground sm:hidden">
          Swipe sideways to browse all {items.length} images
        </p>

        <div className="mt-10 hidden columns-1 gap-5 sm:block sm:columns-2 lg:columns-3">
          {items.map((item, index) => (
            <Reveal key={item.caption} delay={(index % 3) * 90} className="mb-5 break-inside-avoid">
              <GalleryTile item={item} onOpen={() => setActiveIndex(index)} />
            </Reveal>
          ))}
        </div>
      </section>

      <Dialog
        open={activeItem !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent className="w-[min(96vw,1100px)] max-w-none gap-3 border-white/10 bg-[#061C27]/95 p-4 text-white sm:p-6">
          {activeItem && (
            <>
              <DialogTitle className="sr-only">{activeItem.caption}</DialogTitle>
              <DialogDescription className="sr-only">
                Image {(activeIndex ?? 0) + 1} of {items.length}. Use the left and right arrow
                keys or swipe to browse.
              </DialogDescription>
              <div
                className="relative flex min-h-48 items-center justify-center touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.caption}
                  className="max-h-[72vh] max-w-full rounded-xl object-contain"
                />
                {items.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/65 text-white shadow-lg transition hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua sm:left-4"
                      onClick={() => navigate(-1)}
                    >
                      <ChevronLeft aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/65 text-white shadow-lg transition hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua sm:right-4"
                      onClick={() => navigate(1)}
                    >
                      <ChevronRight aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>
              <p className="text-center text-sm font-semibold">{activeItem.caption}</p>
              <p className="text-center text-xs text-white/65">
                {(activeIndex ?? 0) + 1} / {items.length}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
