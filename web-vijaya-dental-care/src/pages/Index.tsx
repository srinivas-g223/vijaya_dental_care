import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Phone, Star } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";
import { CLINIC, IMAGES } from "@/lib/clinic";

const HIGHLIGHTS = [
  {
    icon: CalendarCheck,
    title: "365 Days",
    line: "Open every day, 9:30 AM – 9:00 PM",
  },
  {
    icon: Star,
    title: "2 Doctors",
    line: "Experienced, gentle and caring",
  },
  {
    icon: Phone,
    title: "5/5",
    line: "Rated by our patients",
  },
] as const;

export default function Index() {
  return (
    <>
      {/* Hero — headline left, single clean photo right, nothing overlapping */}
      <section className="container grid items-center gap-12 pb-20 pt-32 md:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">
            Your Smile, Our Priority
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            Creating Vibrant Smiles for{" "}
            <span className="text-aqua-gradient">Healthy Lifestyles</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Gentle dental care in Visakhapatnam. {CLINIC.hours}.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="bg-aqua-gradient group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-[#062830] shadow-xl shadow-aqua/25 transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={CLINIC.phoneLinks[0]}
              className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-aqua-light" aria-hidden="true" />
              Call {CLINIC.phones[0]}
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="overflow-hidden rounded-[28px] border hairline shadow-2xl shadow-black/40">
            <img
              src={IMAGES.reception}
              alt="Modern reception and waiting lounge of Vijaya Dental Care"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
        </Reveal>
      </section>

      {/* Three calm highlights, thin dividers, no boxes */}
      <section aria-label="Clinic highlights" className="container pb-20 md:pb-28">
        <Reveal>
          <div className="grid gap-10 border-y hairline py-10 sm:grid-cols-3 sm:gap-0">
            {HIGHLIGHTS.map(({ icon: Icon, title, line }, index) => (
              <div
                key={title}
                className={`flex items-start gap-4 sm:flex-col sm:items-center sm:text-center ${
                  index > 0 ? "sm:border-l hairline" : ""
                }`}
              >
                <Icon className="mt-1 h-6 w-6 shrink-0 text-aqua-light sm:mb-3" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{line}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand compact />
    </>
  );
}
