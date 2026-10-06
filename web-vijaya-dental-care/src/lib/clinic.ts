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
    "Flat no: 102, ground floor, Revanth ganesh enclave, Kurmannapalem, Visakhapatnam, 530046. Landmark: Behind dominos, Claurus Diagnostics.",
  addressShort: "Kurmannapalem, Visakhapatnam",
  hours: "Open 365 days · 9:30 AM – 9:00 PM",
  hoursShort: "9:30 AM – 9:00 PM",
  mapEmbed:
    "https://maps.google.com/maps?q=17.6916047%2C83.1671684&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=17.6916047%2C83.1671684",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const IMAGES = {
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
  galleryBraces: "/gallery-braces-smile.jpg",
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
    name: "Dr. Uppalapati V.V. Satyanarayana",
    degrees: "BDS, MDS",
    specialities: ["Conservative dentistry", "Micro endodontics"],
    about:
      "Dr. Uppalapati V.V. Satyanarayana is a conservative dentist and micro-endodontist with a Master's in Dental Surgery. He provides comprehensive care across advanced dental procedures, including complex restorative and cosmetic treatments. As a dental college faculty member and professor, he stays current with developments in dentistry and helps patients understand their treatment options.",
    image: "/doctor-uppalapati.png",
  },
  {
    name: "Dr. Chava Vijaya Lakshmi",
    degrees: "BDS, MIDA, FAGE",
    specialities: ["Aesthetic dentistry", "Root canals", "Dental laser", "Dental implants"],
    about:
      "Dr. Chava Vijaya Lakshmi is a dentist with a Bachelor's in Dental Surgery, a member of the Indian Dental Association and a Fellow of the Academy of General Education. Her clinical interests include aesthetic dentistry, root canal treatment, dental laser procedures and implants. She is committed to continuing education and compassionate, up-to-date patient care.",
    image: "/doctor-chava.png",
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
  { image: IMAGES.galleryBraces, caption: "Braces smile close-up", category: "smiles" },
  { image: "/gallery-consultation-room.jpg", caption: "Consultation room", category: "clinic" },
  { image: "/gallery-waiting-room.jpg", caption: "Patient waiting area", category: "clinic" },
  { image: "/gallery-treatment-room.jpg", caption: "Dental treatment room", category: "equipment" },
  { image: "/gallery-anniversary-offer.png", caption: "Clinic anniversary information", category: "clinic" },
  { image: "/gallery-services-offer.png", caption: "Dental services information", category: "treatments" },
  { image: "/gallery-smile-result.png", caption: "Smile comparison image", category: "smiles" },
  { image: "/gallery-smile-story.png", caption: "Smile care information", category: "smiles" },
  { image: "/gallery-gum-treatment.png", caption: "Gum care comparison image", category: "smiles" },
  { image: "/gallery-smile-transformation.png", caption: "Smile transformation information", category: "smiles" },
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
