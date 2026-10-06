import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Clock, ExternalLink, MapPin, Phone, Send } from "lucide-react";

import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import { CLINIC, TREATMENTS, SOCIALS, whatsappLink } from "@/lib/clinic";

const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[+0-9][0-9\s-]{8,14}$/, "Enter a valid phone number"),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z.string().min(1, "Please choose a preferred date"),
  message: z.string().max(500, "Message is too long").optional(),
});

type AppointmentForm = z.infer<typeof appointmentSchema>;

const inputClass =
  "w-full rounded-2xl border hairline bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-aqua/60 focus:ring-2 focus:ring-aqua/30";

const errorClass = "mt-1.5 text-xs font-semibold text-red-300";

export default function Contact() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentForm>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { name: "", phone: "", treatment: "", date: "", message: "" },
  });

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = (values: AppointmentForm): void => {
    const summary = [
      "Hello Vijaya Dental Care, I would like to book an appointment.",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Treatment: ${values.treatment}`,
      `Preferred date: ${values.date}`,
      values.message ? `Note: ${values.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(summary), "_blank", "noopener");
    setSubmitted(true);
    reset();
    toast.success("Appointment request sent — we will confirm shortly.");
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book your"
        highlight="appointment"
        subtitle="Take the first step towards a healthier, brighter smile. Reach out or visit us in Kurmannapalem."
      />

      <section className="container grid gap-8 pb-20 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
        {/* Booking form */}
        <Reveal>
          <div className="surface-card rounded-[28px] p-7 md:p-9">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">Book Appointment</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Fill in your details — we confirm every request by phone.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-[20px] border border-aqua/30 bg-aqua/10 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-aqua-light" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-extrabold text-white">Request received</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Thank you! Our team will call you shortly to confirm your appointment.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 rounded-full border hairline px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/5"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form className="mt-7 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-white">
                    Full name <span className="text-aqua-light">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className={inputClass}
                    {...register("name")}
                  />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-white">
                    Phone number <span className="text-aqua-light">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    className={inputClass}
                    {...register("phone")}
                  />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                </div>

                <div>
                  <label htmlFor="treatment" className="mb-1.5 block text-sm font-bold text-white">
                    Preferred treatment <span className="text-aqua-light">*</span>
                  </label>
                  <select
                    id="treatment"
                    className={`${inputClass} appearance-none ${errors.treatment ? "text-white" : ""}`}
                    {...register("treatment")}
                  >
                    <option value="" className="bg-[#0F3A4A]">
                      Select a treatment
                    </option>
                    <option value="General consultation" className="bg-[#0F3A4A]">
                      General consultation
                    </option>
                    {TREATMENTS.map((treatment) => (
                      <option key={treatment.name} value={treatment.name} className="bg-[#0F3A4A]">
                        {treatment.name}
                      </option>
                    ))}
                  </select>
                  {errors.treatment && <p className={errorClass}>{errors.treatment.message}</p>}
                </div>

                <div>
                  <label htmlFor="date" className="mb-1.5 block text-sm font-bold text-white">
                    Preferred date <span className="text-aqua-light">*</span>
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={today}
                    className={`${inputClass} [color-scheme:dark]`}
                    {...register("date")}
                  />
                  {errors.date && <p className={errorClass}>{errors.date.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-white">
                    Message <span className="font-medium text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Anything we should know?"
                    className={`${inputClass} resize-none`}
                    {...register("message")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-aqua-gradient flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-[#062830] shadow-xl shadow-aqua/25 transition-transform duration-200 hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Request Appointment
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Your request opens in WhatsApp for the fastest confirmation.
                </p>
              </form>
            )}
          </div>
        </Reveal>

        {/* Info panel */}
        <Reveal delay={140} className="h-full">
          <div className="flex h-full flex-col gap-6">
            <div className="surface-card rounded-[28px] p-7 md:p-8">
              <h2 className="text-xl font-extrabold tracking-tight text-white">Get in Touch</h2>
              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex gap-4">
                  <span className="bg-aqua-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#062830]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="space-y-0.5">
                    {CLINIC.phones.map((phone, index) => (
                      <a
                        key={phone}
                        href={CLINIC.phoneLinks[index]}
                        className="block font-bold text-white transition-colors hover:text-aqua-light"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-aqua-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#062830]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="leading-relaxed text-muted-foreground">
                    {CLINIC.address}
                    <a
                      href={CLINIC.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 inline-flex items-center gap-1 font-bold text-aqua-light hover:underline"
                    >
                      Directions
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="bg-aqua-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#062830]">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="leading-relaxed text-muted-foreground">
                    Open 365 days
                    <br />
                    {CLINIC.hoursShort}
                  </p>
                </li>
              </ul>
            </div>

            <div className="surface-card flex-1 overflow-hidden rounded-[28px]">
              <iframe
                title="Map — Vijaya Dental Care, Kurmannapalem"
                src={CLINIC.mapEmbed}
                className="h-full min-h-[240px] w-full border-0"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-aqua-light">
                Follow Us
              </h3>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${social.color} rounded-full px-5 py-2.5 text-xs font-bold text-white transition-transform duration-200 hover:scale-105`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
