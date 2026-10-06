import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";

import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";
import { DOCTORS, IMAGES } from "@/lib/clinic";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Gentle Care",
    line: "Patient-first treatment, explained clearly at every step.",
    image: IMAGES.general,
  },
  {
    icon: Stethoscope,
    title: "Advanced Equipment",
    line: "Modern dental technology for precise, comfortable treatment.",
    image: IMAGES.equipment,
  },
  {
    icon: ShieldCheck,
    title: "Sterile Environment",
    line: "Strict sterilisation protocols for your complete safety.",
    image: IMAGES.sterile,
  },
] as const;

const STATS = [
  { value: "365", label: "Days open every year" },
  { value: "2", label: "Experienced doctors" },
  { value: "5/5", label: "Patient rating" },
] as const;

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Where comfort meets"
        highlight="expertise"
        subtitle="A modern dental home in Kurmannapalem, Visakhapatnam — built around gentle care, honest advice and healthy smiles."
      />

      <section className="container grid items-center gap-12 pb-20 lg:grid-cols-2 lg:pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] border hairline">
            <img
              src={IMAGES.reception}
              alt="Vijaya Dental Care reception area"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Your smile, our priority — every single day
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Vijaya Dental Care brings experienced doctors, advanced equipment and a strictly sterile
            environment together under one roof. We take time to listen, explain your options and
            make every visit calm and comfortable — from routine check-ups to complete smile
            makeovers.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Led by {DOCTORS[0].name} and {DOCTORS[1].name}, our clinic has earned a 5/5 rating from
            the families who trust us with their smiles.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t hairline pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold tracking-tight text-aqua-gradient md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section aria-label="Why patients choose us" className="container pb-20 md:pb-28">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Why patients choose us
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, line, image }, index) => (
            <Reveal key={title} delay={index * 120} className="h-full">
              <article className="surface-card group h-full overflow-hidden rounded-[24px]">
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="img-zoom aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-aqua-gradient flex h-10 w-10 items-center justify-center rounded-full text-[#062830]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-extrabold text-white">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{line}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container pb-20 md:pb-24">
        <Reveal>
          <div className="surface-card flex flex-col items-start justify-between gap-6 rounded-[24px] p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Meet the doctors behind the smiles
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Experienced hands, gentle care — {DOCTORS[0].degrees} · {DOCTORS[1].degrees}.
              </p>
            </div>
            <Link
              to="/doctors"
              className="group bg-aqua-gradient inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-[#062830] transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Meet Our Doctors
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBand compact />
    </>
  );
}
