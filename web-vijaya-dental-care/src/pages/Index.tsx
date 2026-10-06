import {
  ArrowRight,
  CalendarCheck,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  Star,
} from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { CLINIC, IMAGES } from "@/lib/clinic";
import About from "./About";
import Treatments from "./Treatments";
import Doctors from "./Doctors";
import Gallery from "./Gallery";
import Contact from "./Contact";

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

const HERO_FEATURES = [
  { icon: ShieldCheck, label: "Experienced dentists" },
  { icon: CalendarCheck, label: "Advanced technology" },
  { icon: Heart, label: "Gentle care" },
  { icon: Smile, label: "Healthy smiles" },
] as const;

export default function Index() {
  return (
    <>
      <section id="home" className="hero-banner scroll-mt-24">
        <img
          src="/hero-clinic.jpg"
          alt=""
          aria-hidden="true"
          className="hero-photo-desktop hidden lg:block"
          fetchPriority="high"
        />
        <div className="container relative z-10 py-24 lg:py-32">
          <Reveal>
            <div className="max-w-3xl lg:max-w-[620px]">
              <a
                href={CLINIC.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#082c3a]/40 px-3.5 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors hover:border-aqua-light/60 hover:bg-[#082c3a]/70"
              >
                <MapPin className="h-4 w-4 text-aqua-light" aria-hidden="true" />
                {CLINIC.addressShort}
              </a>
              <h1 className="mt-7 max-w-3xl text-[clamp(2.6rem,8vw,4.5rem)] font-extrabold leading-[1.04] tracking-tight text-white">
                Your oral health <span className="text-aqua-gradient">matters to us.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
                Creating vibrant smiles for healthy lifestyles with experienced doctors, advanced
                technology and considerate care.
              </p>
              <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contact"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-aqua-gradient px-6 py-3.5 text-sm font-extrabold text-[#073047] shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 sm:px-7"
                >
                  <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Book appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href={CLINIC.phoneLinks[0]}
                  className="hero-phone-button inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-white/40 bg-[#082c3a]/30 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 active:translate-y-0"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {CLINIC.phones[0]}
                </a>
              </div>
              <p className="mt-5 hidden text-sm font-medium text-white/65 lg:block">
                {CLINIC.hours} · Call or message us to book.
              </p>
              <ul className="mt-7 hidden flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-white/85 lg:flex">
                {HERO_FEATURES.map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4 text-aqua-light" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <img
          src="/hero-clinic-mobile.jpg"
          alt="Dentist in a modern clinic treatment room"
          className="hero-photo-stack"
          fetchPriority="high"
        />
        <ul aria-label="Clinic highlights" className="hero-features-mobile">
          {HERO_FEATURES.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon className="h-7 w-7 text-aqua-light" aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Three calm highlights, thin dividers, no boxes */}
      <section aria-label="Clinic highlights" className="container pb-20 pt-6 md:pb-28 md:pt-0">
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

      <div id="about" className="scroll-mt-24">
        <About />
      </div>
      <div id="treatments" className="scroll-mt-24">
        <Treatments />
      </div>
      <div id="doctors" className="scroll-mt-24">
        <Doctors />
      </div>
      <div id="gallery" className="scroll-mt-24">
        <Gallery />
      </div>
      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
    </>
  );
}
