

import { Lobster } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Button } from "@/components/ui/button";

import { ImageCard } from "@/components/ui/card"
import { MenuPopupController } from "@/components/controllers/menu-popup-controller";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const FEATURES = [
  {
    title: "FRESH BAGELS",
    body: "Baked in-house every morning, never frozen.",
  },
  {
    title: "BREAKFAST ALL DAY",
    body: "Egg sandwiches and classics served whenever you want.",
  },
  {
    title: "CATERING",
    body: "Platters and trays for meetings, parties, and events.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <SiteHeader />
      <div className="w-full px-6 sm:px-8 lg:px-10 mt-4">

        <ImageCard
          title="BOLD AND FRESH"
          subtitle="MADE WITH PASSION"
          image="/bagel.jpg"
          titleFontClass={bebasNeue.className}
          subtitleFontClass={lobster.className}
        />

        {/* Primary calls to action */}
        <section className="mx-auto max-w-5xl mt-8 sm:mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              asChild
              variant="brand"
              className="w-full sm:w-auto rounded-full px-8 py-3 h-auto text-lg font-semibold"
            >
              <Link href="/online-menu">Order Online</Link>
            </Button>
            <Button
              asChild
              variant="brandOutline"
              className="w-full sm:w-auto rounded-full border-2 px-8 py-3 h-auto text-lg font-semibold"
            >
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="w-full sm:w-auto rounded-full px-6 py-3 h-auto text-lg font-semibold text-brand no-underline hover:underline"
            >
              <Link href="/find-us">Find Us</Link>
            </Button>
          </div>
        </section>

        {/* Value-prop feature strip */}
        <section
          aria-label="What we offer"
          className="mx-auto max-w-5xl mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => (
            <div key={feature.title} className="text-center sm:text-left">
              <h2
                className={`${bebasNeue.className} text-brand text-3xl sm:text-4xl leading-none tracking-[0.02em]`}
              >
                {feature.title}
              </h2>
              <p className="mt-2 text-brand-gray text-base">{feature.body}</p>
            </div>
          ))}
        </section>

      </div>

      <MenuPopupController />

    </div>
  );
}

