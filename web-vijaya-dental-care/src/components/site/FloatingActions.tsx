import { MessageCircle, Phone } from "lucide-react";

import { CLINIC, whatsappLink } from "@/lib/clinic";

export default function FloatingActions() {
  return (
    <nav aria-label="Quick contact" className="fixed bottom-4 right-4 z-[60] flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={whatsappLink("Hello Vijaya Dental Care, I would like to book an appointment.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Vijaya Dental Care on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#15945e] text-white shadow-xl shadow-black/30 transition-transform hover:scale-105 hover:bg-[#117f50] sm:h-14 sm:w-14 lg:hidden"
      >
        <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden="true">
          <MessageCircle className="absolute h-6 w-6" />
          <Phone className="relative h-3 w-3" />
        </span>
      </a>
      <a
        href={CLINIC.phoneLinks[0]}
        aria-label={`Call Vijaya Dental Care at ${CLINIC.phones[0]}`}
        title={`Call ${CLINIC.phones[0]}`}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[#0c5369] text-white shadow-xl shadow-black/30 transition-transform hover:scale-105 hover:bg-[#0d647d] sm:h-14 sm:w-14"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
    </nav>
  );
}
