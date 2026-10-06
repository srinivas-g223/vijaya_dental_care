/**
 * Central content source for Vijaya Dental Care.
 * All clinic facts live here so pages stay declarative.
 */

export const CLINIC = {
  name: "Vijaya Dental Care",
  tagline: "Your Smile, Our Priority",
  phones: ["+91 94411 43909", "+91 99887 87111"] as const,
  phoneLinks: ["tel:+919441143909", "tel:+919988787111"] as const,
  whatsappNumber: "919441143909",
  address:
    "Flat 102, Ground Floor, Revanth Ganesh Enclave, Kurmannapalem, Visakhapatnam 530046",
  addressShort: "Kurmannapalem, Visakhapatnam",
  hours: "Open 365 days · 9:30 AM – 9:00 PM",
  hoursShort: "9:30 AM – 9:00 PM",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=83.0950%2C17.7000%2C83.1750%2C17.7700&layer=mapnik&marker=17.7336%2C83.1345",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Vijaya+Dental+Care+Kurmannapalem+Visakhapatnam",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const IMAGES = {
  reception:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/b86fd5da-4e24-42f1-be15-f160379a3d53.png",
  doctorChava:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/97806dac-ac73-4ec6-91ed-b7f8555eb5d3.png",
  doctorUppalapati:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/435b7ac5-3711-49fc-b8c4-7ed32dcd62a0.png",
  general:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/cf0cc21d-837d-499c-8a04-fee0201a872f.png",
  cosmetic:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/e8f2b655-0a88-40d2-bbcf-587966074956.png",
  ortho: "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/72ce6701-76d0-4825-bcc8-8b38d4ef30dd.png",
  cleaning:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/3c83f5cc-0627-4ad9-96c5-bd341606ca23.png",
  filling:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/9a22d8ff-7b1d-45b7-9e01-4aeab3ca1bf5.png",
  rootCanal:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/fca5e4e3-7a65-482b-a8ea-623a087ff32b.png",
  implants:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/9059bc40-81e5-4cd0-87ab-6f99f3a264db.png",
  kids: "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/cd25c386-b915-4c21-8d2b-201b7934172d.png",
  equipment:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/a443c4e0-2155-48a0-8b8a-a2904a1141d2.png",
  sterile:
    "https://9pfm8a8aquvjpku0j9vbs.rork.app/~assets/img/3ba8e4fa-5c32-473c-abd4-66b19ce3b35a.png",
} as const;

export interface Treatment {
  name: string;
  blurb: string;
  image: string;
}

export const TREATMENTS: Treatment[] = [
  {
    name: "General Dentistry",
    blurb: "Complete check-ups and everyday care for the whole family.",
    image: IMAGES.general,
  },
  {
    name: "Cosmetic Dentistry",
    blurb: "Smile makeovers, whitening and aesthetic corrections.",
    image: IMAGES.cosmetic,
  },
  {
    name: "Orthodontics",
    blurb: "Braces and aligners for beautifully aligned teeth.",
    image: IMAGES.ortho,
  },
  {
    name: "Teeth Cleaning",
    blurb: "Gentle ultrasonic scaling and polishing for healthy gums.",
    image: IMAGES.cleaning,
  },
  {
    name: "Tooth Filling",
    blurb: "Natural-looking, durable fillings done with precision.",
    image: IMAGES.filling,
  },
  {
    name: "Root Canal",
    blurb: "Painless, single-visit root canal treatments.",
    image: IMAGES.rootCanal,
  },
  {
    name: "Dental Implants",
    blurb: "Permanent, natural-feeling replacements for missing teeth.",
    image: IMAGES.implants,
  },
  {
    name: "Kids Dentistry",
    blurb: "Friendly, fear-free dental care for little smiles.",
    image: IMAGES.kids,
  },
];

export interface Doctor {
  name: string;
  degrees: string;
  specialities: string[];
  about: string;
  image: string;
}

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Chava Vijaya Lakshmi",
    degrees: "BDS, MIDA, FAGE",
    specialities: ["Aesthetic dentistry", "Root canals", "Dental laser", "Dental implants"],
    about:
      "With a passion for creating healthy and beautiful smiles, Dr. Chava Vijaya Lakshmi brings years of clinical experience and a gentle, patient-first approach to every treatment.",
    image: IMAGES.doctorChava,
  },
  {
    name: "Dr. Uppalapati V.V. Satyanarayana",
    degrees: "BDS, MDS",
    specialities: ["Conservative dentistry", "Micro endodontics"],
    about:
      "Dr. Uppalapati V.V. Satyanarayana is dedicated to providing comprehensive dental care with a focus on precision, comfort and long-term oral health for every patient.",
    image: IMAGES.doctorUppalapati,
  },
];

export interface Review {
  quote: string;
  name: string;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "Dr. Vijaya Lakshmi is superb. Soft spoken, caring and explains everything clearly before treating.",
    name: "Gloria Marilin",
  },
  {
    quote: "Excellent clinic. Highly recommended for painless root canal treatment.",
    name: "Dinakar Chowdary",
  },
  {
    quote: "Very happy with my smile correction. Gentle care and great results.",
    name: "Bharathi Maddipati",
  },
];

export type GalleryCategory = "clinic" | "equipment" | "treatments" | "smiles";

export interface GalleryItem {
  image: string;
  caption: string;
  category: GalleryCategory;
}

export const GALLERY: GalleryItem[] = [
  { image: IMAGES.reception, caption: "Reception & waiting lounge", category: "clinic" },
  { image: IMAGES.equipment, caption: "Modern operatory", category: "equipment" },
  { image: IMAGES.cosmetic, caption: "Smile makeover result", category: "smiles" },
  { image: IMAGES.general, caption: "Routine check-up", category: "treatments" },
  { image: IMAGES.sterile, caption: "Sterilisation bay", category: "equipment" },
  { image: IMAGES.ortho, caption: "Braces journey", category: "smiles" },
  { image: IMAGES.cleaning, caption: "Ultrasonic cleaning", category: "treatments" },
  { image: IMAGES.kids, caption: "Happy little patient", category: "smiles" },
  { image: IMAGES.rootCanal, caption: "Root canal treatment", category: "treatments" },
  { image: IMAGES.implants, caption: "Implant planning", category: "treatments" },
  { image: IMAGES.filling, caption: "Tooth filling", category: "treatments" },
  { image: IMAGES.doctorChava, caption: "Dr. Chava Vijaya Lakshmi", category: "clinic" },
];

export const GALLERY_FILTERS: Array<{ id: "all" | GalleryCategory; label: string }> = [
  { id: "all", label: "All" },
  { id: "clinic", label: "Clinic" },
  { id: "equipment", label: "Equipment" },
  { id: "treatments", label: "Treatments" },
  { id: "smiles", label: "Smiles" },
];

export const SOCIALS = [
  { label: "Facebook", href: "#", color: "bg-[#1877F2]" },
  { label: "Instagram", href: "#", color: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
  { label: "YouTube", href: "#", color: "bg-[#FF0000]" },
  { label: "WhatsApp", href: whatsappLink("Hello Vijaya Dental Care, I would like to book an appointment."), color: "bg-[#25D366]" },
] as const;
