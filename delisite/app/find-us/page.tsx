import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { STORE } from "@/lib/store";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find Mount Sinai Bagel & Deli in Mount Sinai, NY 11766 — get directions, store hours, and our phone number. Fresh bagels are waiting, so stop by or call ahead.",
  keywords: [
    "Mount Sinai Bagel & Deli",
    "bagel deli near Mount Sinai",
    "bagel shop Mount Sinai NY",
    "directions",
    "store hours",
    "location",
    "phone number",
    "fresh bagels",
  ],
  openGraph: {
    title: "Find Mount Sinai Bagel & Deli",
    description:
      "Directions, hours, and phone number for Mount Sinai Bagel & Deli in Mount Sinai, NY 11766. Stop by, call ahead, or map your way over.",
  },
  twitter: {
    title: "Find Mount Sinai Bagel & Deli",
    description:
      "Directions, hours, and phone number for Mount Sinai Bagel & Deli in Mount Sinai, NY 11766. Stop by, call ahead, or map your way over.",
  },
};

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

/**
 * Which weekday indices (0 = Sunday) a store-hours label covers.
 * Handles ranges like "Monday – Friday" as well as single days.
 */
function activeWeekdays(dayLabel: string): Set<number> {
  const toIndex = (label: string) =>
    WEEKDAYS.findIndex((d) => d.toLowerCase() === label.toLowerCase());
  const parts = dayLabel.split(/[–—-]/).map((p) => p.trim());

  if (parts.length === 2) {
    const start = toIndex(parts[0]);
    const end = toIndex(parts[1]);
    if (start !== -1 && end !== -1) {
      const days = new Set<number>();
      for (let i = start; i !== end; i = (i + 1) % 7) days.add(i);
      days.add(end);
      return days;
    }
  }

  const single = toIndex(parts[0]);
  return single === -1 ? new Set<number>() : new Set([single]);
}

export default function FindUsPage() {
  // Computed at build/request time (server component), so "today" reflects the
  // server's clock rather than the visitor's.
  const todayIndex = new Date().getDay();

  return (
    <div className="min-h-screen bg-deli-paper">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <PageHero
          eyebrow="Come say hello"
          title="Find Us"
          subtitle="stop on by"
          description={`Fresh bagels are waiting in ${STORE.address.city}, ${STORE.address.state} — stop by, call ahead, or map your way over.`}
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Details — one cohesive deli ticket */}
          <div className="deli-ticket overflow-hidden">
            {/* Ticket header strip */}
            <div className="flex items-center justify-between gap-3 border-b-2 border-brand px-6 py-3">
              <span className="deli-stamp text-xs">Ticket No. 11766</span>
              <span
                className="text-brand-gold"
                style={{ fontFamily: "var(--font-lobster), cursive" }}
              >
                fresh daily
              </span>
            </div>

            <div className="px-6 py-6">
              {/* Location */}
              <section>
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-coral" />
                  <h2 className="deli-stamp text-sm">Location</h2>
                </div>
                <p className="mt-2 text-brand/80">{STORE.address.formatted}</p>
                <Button
                  asChild
                  variant="brand"
                  className="mt-4 h-auto rounded-full px-6 py-3 has-[>svg]:px-6 text-base font-semibold shadow-sm"
                >
                  <a
                    href={STORE.directionsSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </section>

              {/* Phone */}
              <section className="deli-perforation mt-6 pt-6">
                <div className="flex items-center gap-2.5">
                  <Phone className="h-5 w-5 shrink-0 text-brand-coral" />
                  <h2 className="deli-stamp text-sm">Phone</h2>
                </div>
                <p className="mt-2 text-brand/80">
                  Call ahead and we&apos;ll have it ready.
                </p>
                <Button
                  asChild
                  variant="brandOutline"
                  className="mt-4 h-auto rounded-full px-6 py-3 has-[>svg]:px-6 text-sm font-semibold"
                >
                  <a href={STORE.phone.href}>
                    <Phone className="h-4 w-4" />
                    {STORE.phone.display}
                  </a>
                </Button>
              </section>

              {/* Hours */}
              <section className="deli-perforation mt-6 pt-6">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-5 w-5 shrink-0 text-brand-coral" />
                  <h2 className="deli-stamp text-sm">Hours</h2>
                </div>
                <dl className="mt-3 space-y-1">
                  {STORE.hours.map((h) => {
                    const isToday = activeWeekdays(h.day).has(todayIndex);
                    return (
                      <div
                        key={h.day}
                        className={`flex items-baseline justify-between gap-6 rounded-md px-2 py-1.5 ${
                          isToday
                            ? "bg-brand-gold/15 font-semibold text-brand"
                            : "text-brand/70"
                        }`}
                      >
                        <dt className="flex items-center gap-2">
                          {h.day}
                          {isToday && (
                            <span className="rounded-full bg-brand-coral px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-white">
                              Today
                            </span>
                          )}
                        </dt>
                        <dd className="tabular-nums">{h.hours}</dd>
                      </div>
                    );
                  })}
                </dl>
              </section>
            </div>
          </div>

          {/* Map — framed like a taped photo */}
          <div className="md:sticky md:top-6 md:h-[calc(100%-1.5rem)]">
            <div className="deli-ticket h-full overflow-hidden p-2">
              <div className="h-full overflow-hidden rounded-lg border-2 border-brand/15">
                <iframe
                  title={`Map showing ${STORE.name} location`}
                  src={STORE.mapsEmbedSrc}
                  className="h-[360px] w-full border-0 md:h-full md:min-h-[520px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
