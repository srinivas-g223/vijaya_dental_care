import { Clock, MapPin, Phone } from "lucide-react";

import Logo from "./Logo";
import { CLINIC, SOCIALS } from "@/lib/clinic";

const FOOTER_LINKS = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Treatments", id: "treatments" },
  { label: "Doctors", id: "doctors" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t hairline bg-[#05151D]">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.4fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Gentle dental care in Visakhapatnam. {CLINIC.hours}.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`${social.color} rounded-full px-4 py-2 text-xs font-bold text-white transition-transform duration-200 hover:scale-105`}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-aqua-light">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-aqua-light">Visit Us</h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua-light" aria-hidden="true" />
              <span>{CLINIC.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-aqua-light" aria-hidden="true" />
              <span>Open 365 days, {CLINIC.hoursShort}</span>
            </li>
            <li>
              {CLINIC.phones.map((phone, index) => (
                <a
                  key={phone}
                  href={CLINIC.phoneLinks[index]}
                  className="flex items-center gap-3 py-0.5 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-aqua-light" aria-hidden="true" />
                  {phone}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Vijaya Dental Care. All rights reserved.</p>
          <p>{CLINIC.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
