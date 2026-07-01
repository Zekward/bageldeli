// Single source of truth for the store's public details.
// Everything user-facing (name, address, phone, hours, and the derived Google
// Maps URLs) lives here so the value can't drift between the find-us page, the
// footer, and the catering page.
//
// TODO: replace with the real store details / social handles.

export type StoreHours = {
  /** Full day label, e.g. "Monday – Friday". */
  day: string;
  /** Abbreviated day label, e.g. "Mon – Fri". */
  dayShort: string;
  /** Opening hours for that day, e.g. "6:00 AM – 4:00 PM". */
  hours: string;
};

export type StoreAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
  /** Human-readable, single-line address as shown on the site. */
  formatted: string;
};

export type StoreGeo = {
  lat: number;
  lng: number;
};

export type StorePhone = {
  /** Formatted for display, e.g. "(631) 000-0000". */
  display: string;
  /** `tel:` href with digits only, e.g. "tel:+16310000000". */
  href: string;
};

export type StoreEmail = {
  /** Formatted for display, e.g. "hello@mountsinaibageldeli.com". */
  display: string;
  /** `mailto:` href, e.g. "mailto:hello@mountsinaibageldeli.com". */
  href: string;
};

const name = "Mount Sinai Bagel & Deli";

/** Canonical public URL of the site. */
const url = "https://mountsinaibageldeli.com";

const address: StoreAddress = {
  // TODO: confirm real street address with owner
  street: "123 Example Ave",
  city: "Mount Sinai",
  state: "NY",
  zip: "11766",
  formatted: "Mount Sinai, NY 11766",
};

// TODO: confirm real coordinates with owner (leave undefined until known).
const geo: StoreGeo | undefined = undefined;

const phone: StorePhone = {
  // TODO: confirm real phone with owner
  display: "(631) 000-0000",
  href: "tel:+16310000000",
};

const email: StoreEmail = {
  // TODO: confirm real email with owner
  display: "hello@mountsinaibageldeli.com",
  href: "mailto:hello@mountsinaibageldeli.com",
};

const hours: StoreHours[] = [
  { day: "Monday – Friday", dayShort: "Mon – Fri", hours: "6:00 AM – 4:00 PM" },
  { day: "Saturday", dayShort: "Saturday", hours: "6:00 AM – 4:00 PM" },
  { day: "Sunday", dayShort: "Sunday", hours: "6:00 AM – 2:00 PM" },
];

const social = {
  // TODO: confirm real social handles with owner
  instagram: "https://instagram.com/mountsinaibageldeli",
  // TODO: confirm real social handles with owner
  facebook: "https://facebook.com/mountsinaibageldeli",
};

// Google Maps URLs derived from the name + address so they always agree.
const mapQuery = encodeURIComponent(`${name}, ${address.formatted}`);

/** Embeddable map (used in an <iframe src>). */
const mapsEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&output=embed`;
/** Turn-by-turn directions to the store. */
const directionsSrc = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
/** A regular Google Maps search link for the store. */
const mapsLinkSrc = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export const STORE = {
  name,
  url,
  address,
  geo,
  phone,
  email,
  hours,
  social,
  mapsEmbedSrc,
  directionsSrc,
  mapsLinkSrc,
} as const;
