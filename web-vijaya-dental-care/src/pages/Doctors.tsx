import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import { DOCTORS } from "@/lib/clinic";

export default function Doctors() {
  return (
    <>
      <PageHeader
        eyebrow="Doctors"
        title="Meet our"
        highlight="doctors"
        subtitle="Experienced hands, gentle care — meet the specialists behind Vijaya Dental Care."
      />

      <section className="container pb-12 md:pb-14">
        <div className="grid gap-8 lg:grid-cols-2">
          {DOCTORS.map((doctor, index) => (
            <Reveal key={doctor.name} delay={index * 140} className="h-full">
              <article className="surface-card group flex h-full flex-col overflow-hidden rounded-[28px]">
                <div className="overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}`}
                    className="img-zoom aspect-[4/3] w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <h2 className="text-2xl font-extrabold tracking-tight text-white">
                    {doctor.name}
                  </h2>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wider text-aqua-light">
                    {doctor.degrees}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {doctor.specialities.map((speciality) => (
                      <span
                        key={speciality}
                        className="rounded-full border border-gold/40 px-3.5 py-1.5 text-xs font-bold text-gold"
                      >
                        {speciality}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {doctor.about}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
