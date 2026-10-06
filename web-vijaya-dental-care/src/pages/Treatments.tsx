import { ArrowRight } from "lucide-react";

import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import { TREATMENTS } from "@/lib/clinic";

export default function Treatments() {
  return (
    <>
      <PageHeader
        eyebrow="Treatments"
        title="Complete dental care"
        highlight="under one roof"
        subtitle="From everyday check-ups to complete smile makeovers — gentle, precise treatment for every smile."
      />

      <section className="container pb-12 md:pb-14">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {TREATMENTS.map((treatment, index) => (
            <Reveal key={treatment.name} delay={(index % 4) * 100} className="h-full">
              <a
                href="#contact"
                className="surface-card group block h-full overflow-hidden rounded-[24px] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="img-zoom aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#061C27]/70 via-transparent to-transparent opacity-80"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-base font-extrabold tracking-tight text-white">
                      {treatment.name}
                    </h2>
                    <span
                      className="bg-aqua-gradient flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#062830] opacity-0 transition-all duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {treatment.blurb}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-7 text-center text-sm text-muted-foreground">
            Also offering gum treatment, wisdom tooth extractions, dentures and more — call{" "}
            <a href="tel:+919441143909" className="font-bold text-aqua-light hover:underline">
              +91 94411 43909
            </a>{" "}
            to ask about any treatment.
          </p>
        </Reveal>
      </section>
    </>
  );
}
