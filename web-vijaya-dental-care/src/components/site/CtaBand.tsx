import Reveal from "./Reveal";
import { CLINIC } from "@/lib/clinic";

interface CtaBandProps {
  /** Hide the default hero CTA and show this compact band instead. */
  compact?: boolean;
}

/** "Ready for your best smile?" appointment band in the aqua gradient. */
export default function CtaBand({ compact = false }: CtaBandProps) {
  return (
    <section className="container pb-20 md:pb-28">
      <Reveal>
        <div className="bg-aqua-gradient relative overflow-hidden rounded-[28px] px-8 py-12 text-center shadow-2xl shadow-aqua/20 md:px-16 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              background:
                "radial-gradient(600px 300px at 15% 0%, rgba(255,255,255,0.55), transparent 60%), radial-gradient(500px 280px at 90% 100%, rgba(6,40,48,0.25), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <h2
            className={`relative mx-auto max-w-2xl font-extrabold tracking-tight text-[#062830] ${
              compact ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"
            }`}
          >
            Ready for your best smile?
          </h2>
          <p className="relative mt-3 text-base font-semibold text-[#0A3A42] md:text-lg">
            {CLINIC.phones.join("  ·  ")}
          </p>
          <a
            href="#contact"
            className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-[#062830] px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Book Appointment
          </a>
        </div>
      </Reveal>
    </section>
  );
}
