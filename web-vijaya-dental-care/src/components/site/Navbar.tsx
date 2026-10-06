import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";

import Logo from "./Logo";
import { CLINIC } from "@/lib/clinic";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

const linkClass = ({ isActive }: { isActive: boolean }): string =>
  `relative text-sm font-semibold transition-colors duration-200 hover:text-white ${
    isActive ? "text-white" : "text-muted-foreground"
  }`;

const underlineClass = ({ isActive }: { isActive: boolean }): string =>
  `absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-aqua-gradient transition-all duration-300 ${
    isActive ? "w-full" : "w-0"
  }`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b hairline bg-[#061C27]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Link to="/" aria-label="Vijaya Dental Care home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {({ isActive }) => (
                <>
                  {link.label}
                  <span className={underlineClass({ isActive })} />
                </>
              )}
            </NavLink>
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
          <Link
            to="/contact"
            className="bg-aqua-gradient rounded-full px-5 py-2.5 text-sm font-bold text-[#062830] shadow-lg shadow-aqua/25 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Book Appointment
          </Link>
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
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                  isActive ? "bg-white/10 text-white" : "text-muted-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-aqua-gradient mt-3 rounded-full px-5 py-3 text-center text-sm font-bold text-[#062830]"
          >
            Book Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}
