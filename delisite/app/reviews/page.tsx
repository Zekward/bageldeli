import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Bebas_Neue } from "next/font/google";
import { Star, Quote, PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What the neighborhood is saying about Mount Sinai Bagel & Deli.",
};

// TODO: replace with real Google review link
const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=REPLACE_ME";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const REVIEWS = [
  {
    name: "Sarah M.",
    detail: "Regular since day one",
    quote:
      "Best bagels on the North Shore, hands down. The staff knows my order before I even reach the counter.",
    stars: 5,
  },
  {
    name: "Danny R.",
    detail: "Everything bagel devotee",
    quote:
      "Fresh, fast, and friendly. The egg-and-cheese on an everything bagel is my daily ritual now.",
    stars: 5,
  },
  {
    name: "Priya K.",
    detail: "Office breakfast, catered",
    quote:
      "Catered our office breakfast and everyone raved. Generous portions and everything was still warm.",
    stars: 5,
  },
  {
    name: "Mike T.",
    detail: "Weekend coffee crowd",
    quote:
      "A real neighborhood spot. Great coffee, great people, and bagels that taste like they should.",
    stars: 5,
  },
  {
    name: "Elena V.",
    detail: "Lox lover",
    quote:
      "The lox spread is unreal — piled high on a hand-rolled bagel. This is my new Sunday tradition with the kids.",
    stars: 5,
  },
  {
    name: "Carlos D.",
    detail: "Early riser",
    quote:
      "In and out before my 7 a.m. shift with the freshest coffee around. They never miss, rain or shine.",
    stars: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "fill-brand-gold text-brand-gold"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <PageHero
        eyebrow="KIND WORDS"
        title="REVIEWS"
        subtitle="what our regulars say"
        description="Loved by locals across Mount Sinai — here's what the neighborhood has to say."
      >
        <Button asChild variant="brandCoral" size="lg" className="rounded-full">
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
            <PenLine className="h-4 w-4" />
            Leave a Review
          </a>
        </Button>
      </PageHero>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="relative flex flex-col rounded-3xl border border-brand-cream bg-brand-cream/20 p-8"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-coral/25" />
              <Stars count={review.stars} />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-foreground/80">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold text-brand">
                  {review.name}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {review.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-brand-cream/25 px-6 py-12 text-center">
          <h2
            className={`${bebasNeue.className} text-4xl tracking-wide text-brand`}
          >
            Come taste for yourself
          </h2>
          <p className="max-w-md text-muted-foreground">
            Browse the menu, then stop by and see why the neighborhood keeps
            coming back for more.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Button asChild variant="brand" size="lg" className="rounded-full">
              <Link href="/online-menu">See our menu</Link>
            </Button>
            <Button
              asChild
              variant="brandOutline"
              size="lg"
              className="rounded-full"
            >
              <Link href="/find-us">Visit us</Link>
            </Button>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
