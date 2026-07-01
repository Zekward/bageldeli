import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { STORE } from "@/lib/store";
import { Bebas_Neue } from "next/font/google";
import {
  UtensilsCrossed,
  Users,
  Sandwich,
  Coffee,
  Phone,
  Mail,
  CalendarClock,
  ClipboardList,
  PartyPopper,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Catering from Mount Sinai Bagel & Deli — bagel platters, sandwich trays, breakfast spreads, and coffee boxes for your next event.",
};

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const OFFERINGS = [
  {
    icon: Sandwich,
    name: "Bagel Platters",
    blurb:
      "Fresh-baked bagels sliced and ready, served with a spread of house cream cheeses, butter, and jam.",
    serves: "Serves 6–12",
  },
  {
    icon: Users,
    name: "Sandwich Trays",
    blurb:
      "An assortment of deli sandwiches and wraps with sides — perfect for lunch meetings, parties, and game days.",
    serves: "Serves 8–15",
  },
  {
    icon: UtensilsCrossed,
    name: "Breakfast Spreads",
    blurb:
      "Assorted bagels, egg sandwiches, and fresh fruit to fuel the whole team first thing in the morning.",
    serves: "Serves 10–20",
  },
  {
    icon: Coffee,
    name: "Coffee Boxes",
    blurb:
      "Fresh-brewed coffee to go, boxed with cups, lids, and all the fixings — keep everyone caffeinated.",
    serves: "Serves 8–12",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Tell us what you need",
    blurb:
      "Share your headcount, favorites, and any dietary notes — we'll help you build the perfect order.",
  },
  {
    icon: CalendarClock,
    title: "Pick your date & time",
    blurb:
      "We recommend at least 48 hours' notice for larger orders so everything is fresh and ready.",
  },
  {
    icon: PartyPopper,
    title: "We handle the rest",
    blurb:
      "Pick it up fresh from the shop and enjoy — you focus on the guests, we'll handle the food.",
  },
];

export default function CateringPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero */}
      <PageHero
        eyebrow="Catering"
        title="Feed the Whole Table"
        subtitle="let us feed your crowd"
        description="Office mornings, birthday brunches, game-day spreads — we'll put together something fresh and delicious for any group, any occasion."
      >
        <Button
          asChild
          variant="brand"
          className="h-auto rounded-full px-7 py-3 text-sm font-semibold"
        >
          <a href={STORE.phone.href}>
            <Phone className="h-4 w-4" />
            Call {STORE.phone.display}
          </a>
        </Button>
        <Button
          asChild
          variant="brandOutline"
          className="h-auto rounded-full px-7 py-3 text-sm font-semibold"
        >
          <a href={STORE.email.href}>
            <Mail className="h-4 w-4" />
            Email us
          </a>
        </Button>
        <Button
          asChild
          variant="brandOutline"
          className="h-auto rounded-full px-7 py-3 text-sm font-semibold"
        >
          <Link href="/online-menu">Browse the menu</Link>
        </Button>
      </PageHero>

      {/* Offerings */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2
          className={`${bebasNeue.className} text-center text-4xl tracking-wide text-brand`}
        >
          What We Cater
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          A few crowd-pleasers to start — tell us your headcount and we&apos;ll
          tailor the rest.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERINGS.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-3xl border border-brand-cream bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <span className="mb-5 inline-flex w-fit rounded-2xl bg-brand-coral/15 p-3">
                <item.icon className="h-7 w-7 text-brand-coral" />
              </span>
              <h3 className="text-xl font-bold text-brand-ink">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.blurb}
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-coral">
                {item.serves}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-cream/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2
            className={`${bebasNeue.className} text-center text-4xl tracking-wide text-brand`}
          >
            How It Works
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Ordering is simple — here&apos;s what to expect.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="rounded-3xl border border-brand-cream bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex rounded-2xl bg-brand-coral/15 p-3">
                    <step.icon className="h-6 w-6 text-brand-coral" />
                  </span>
                  <span
                    className={`${bebasNeue.className} text-3xl tracking-wide text-brand-coral/60`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-brand-ink">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-14 text-center">
          <h2
            className={`${bebasNeue.className} text-4xl tracking-wide text-white`}
          >
            Ready to plan your event?
          </h2>
          <p className="max-w-xl text-white/70">
            Give us a call with your date, headcount, and any favorites — we
            recommend 48 hours&apos; notice for larger orders.
          </p>
          <Button
            asChild
            variant="brand"
            className="mt-2 h-auto rounded-full bg-brand-coral px-7 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-coral/90"
          >
            <a href={STORE.phone.href}>
              <Phone className="h-4 w-4" />
              Call {STORE.phone.display}
            </a>
          </Button>
          <Button
            asChild
            variant="brandOutline"
            className="h-auto rounded-full border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-ink"
          >
            <a href={STORE.email.href}>
              <Mail className="h-4 w-4" />
              Email us
            </a>
          </Button>
          <Link
            href="/find-us"
            className="text-sm font-semibold text-white/70 underline-offset-4 transition hover:text-white hover:underline"
          >
            Find our hours &amp; location
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
