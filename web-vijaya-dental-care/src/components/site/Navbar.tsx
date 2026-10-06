import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import Logo from "./Logo";
import { CLINIC } from "@/lib/clinic";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Treatments", id: "treatments" },
  { label: "Doctors", id: "doctors" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b hairline bg-[#061C27]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <a href="#home" aria-label="Vijaya Dental Care home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative text-sm font-semibold text-muted-foreground transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-aqua-gradient after:transition-all hover:text-white hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CLINIC.phoneLinks[0]}
            className="flex h-10 w-10 items-center justify-center rounded-full border hairline text-aqua-light transition-colors hover:bg-white/5"
            aria-label={`Call ${CLINIC.phones[0]}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="bg-aqua-gradient rounded-full px-5 py-2.5 text-sm font-bold text-[#062830] shadow-lg shadow-aqua/25 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border hairline text-white lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile" className="container flex flex-col gap-1 pb-6 pt-2 lg:hidden">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-white/10 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-aqua-gradient mt-3 rounded-full px-5 py-3 text-center text-sm font-bold text-[#062830]"
          >
            Book Appointment
          </a>
        </nav>
      )}
    </header>
  );
}
