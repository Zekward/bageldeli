import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { STORE } from "@/lib/store";
import { Bebas_Neue } from "next/font/google";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Mount Sinai Bagel & Deli, your family-owned neighborhood spot for fresh-baked bagels, made-to-order breakfast and deli sandwiches, and warm coffee. Get to know the story behind the counter.",
  keywords: [
    "Mount Sinai Bagel & Deli",
    "about us",
    "family-owned deli",
    "neighborhood bagel shop",
    "fresh-baked bagels",
    "breakfast sandwiches",
    "deli sandwiches",
    "local coffee shop",
  ],
  openGraph: {
    title: "About Mount Sinai Bagel & Deli",
    description:
      "The story behind our family-owned neighborhood bagel & deli — fresh-baked bagels, made-to-order sandwiches, and warm coffee served with a smile.",
  },
  twitter: {
    title: "About Mount Sinai Bagel & Deli",
    description:
      "The story behind our family-owned neighborhood bagel & deli — fresh-baked bagels, made-to-order sandwiches, and warm coffee served with a smile.",
  },
};

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const STATS = [
  { value: "Daily", label: "Fresh-baked bagels" },
  { value: "Made", label: "To order, your way" },
  { value: "Local", label: "Rooted in the community" },
];

export default function AboutPage() {
  return (
    <section className="w-full bg-white">
      <SiteHeader />

      <PageHero
        eyebrow="Our Story"
        title="About Us"
        subtitle="fresh, local, made with love"
        image="/about-us/bagel-cafe-image.png"
        imageAlt={`Inside ${STORE.name} — bagel and coffee counter`}
      />

      {/* Story */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
              After many breakfasts where something was missing—the authentic
              flavor, the warmth, and the personal touch—we decided to create
              our own space. That&apos;s how Mt. Sinai Bagel &amp; Deli was
              born: a place where breakfast doesn&apos;t just feed you; it
              starts your day with joy.
            </p>

            <ul className="list-disc space-y-3 pl-5 text-base text-muted-foreground marker:text-brand-coral">
              <li>Freshly baked bagels and breads, prepared daily</li>
              <li>Vibrant salads made with crisp, organic vegetables</li>
              <li>Made-to-order dishes, prepared exactly the way you like them</li>
              <li>Comforting coffee that warms you from the very first sip</li>
            </ul>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Every detail has been chosen with love because this place is more
              than just a business—it&apos;s our home. We&apos;re proud to serve
              our community, providing a cozy corner of peace and flavor every
              single day.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="brand" className="h-auto rounded-full px-6 py-2.5 text-sm font-semibold">
                <Link href="/online-menu">See our menu</Link>
              </Button>
              <Button asChild variant="brandOutline" className="h-auto rounded-full px-6 py-2.5 text-sm font-semibold">
                <Link href="/find-us">Visit us</Link>
              </Button>
            </div>
          </div>
        </div>

      {/* Stats strip */}
      <div className="border-y border-brand-cream bg-brand-cream/25">
        <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-brand-cream sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p
                className={`${bebasNeue.className} text-4xl tracking-wide text-brand`}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </section>
  );
}
