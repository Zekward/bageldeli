// Emits schema.org structured data for the store as a JSON-LD <script>.
//
// Everything is derived from the single STORE source of truth so the markup
// can never drift from what the site actually shows. Fields that aren't yet
// filled in on STORE (e.g. an empty street) are simply skipped.

import { STORE, type StoreGeo } from "@/lib/store";

// Maps a full weekday name to its schema.org DayOfWeek value.
const DAY_TO_SCHEMA: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

const WEEK_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

/** Expands a day label ("Monday – Friday" or "Sunday") into schema.org days. */
function expandDays(label: string): string[] {
  const parts = label.split("–").map((p) => p.trim().toLowerCase());
  if (parts.length === 2) {
    const start = WEEK_ORDER.indexOf(parts[0]);
    const end = WEEK_ORDER.indexOf(parts[1]);
    if (start !== -1 && end !== -1 && start <= end) {
      return WEEK_ORDER.slice(start, end + 1).map((d) => DAY_TO_SCHEMA[d]);
    }
  }
  const single = DAY_TO_SCHEMA[parts[0]];
  return single ? [single] : [];
}

/** Converts "6:00 AM" into 24-hour "06:00", or null if it can't be parsed. */
function to24Hour(time: string): string | null {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  let hour = parseInt(match[1], 10);
  const minute = match[2];
  const meridiem = match[3].toUpperCase();
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

/** Builds an OpeningHoursSpecification array from STORE.hours. */
function buildOpeningHours() {
  return STORE.hours
    .map((entry) => {
      const [open, close] = entry.hours.split("–").map((h) => h.trim());
      const opens = open ? to24Hour(open) : null;
      const closes = close ? to24Hour(close) : null;
      const dayOfWeek = expandDays(entry.day);
      if (!opens || !closes || dayOfWeek.length === 0) return null;
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek,
        opens,
        closes,
      };
    })
    .filter((spec): spec is NonNullable<typeof spec> => spec !== null);
}

export default function LocalBusinessJsonLd() {
  const sameAs = Object.values(STORE.social).filter(Boolean);
  const openingHours = buildOpeningHours();

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: STORE.name,
    url: STORE.url,
    telephone: STORE.phone.display,
    email: STORE.email.display,
    address: {
      "@type": "PostalAddress",
      ...(STORE.address.street ? { streetAddress: STORE.address.street } : {}),
      addressLocality: STORE.address.city,
      addressRegion: STORE.address.state,
      postalCode: STORE.address.zip,
      addressCountry: "US",
    },
  };

  // Cast because `as const` narrows the (currently undefined) geo to `never`.
  const geo = STORE.geo as StoreGeo | undefined;
  if (geo) {
    jsonLd.geo = {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    };
  }

  if (openingHours.length > 0) {
    jsonLd.openingHoursSpecification = openingHours;
  }

  if (sameAs.length > 0) {
    jsonLd.sameAs = sameAs;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
