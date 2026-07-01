import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";
import { Bebas_Neue } from "next/font/google";
import { Home, UtensilsCrossed, MapPin } from "lucide-react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-coral">
            Whoops
          </p>
          <h1
            className={`${bebasNeue.className} mt-2 text-7xl tracking-wide text-brand sm:text-8xl`}
          >
            404
          </h1>
          <h2
            className={`${bebasNeue.className} mt-1 text-4xl tracking-wide text-brand sm:text-5xl`}
          >
            Page Not Found
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Looks like this page went stale&hellip; but our bagels never do.
            Let&apos;s get you back to the good stuff.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/online-menu"
              className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-base font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              <UtensilsCrossed className="h-4 w-4" />
              View Menu
            </Link>
            <Link
              href="/find-us"
              className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-base font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              <MapPin className="h-4 w-4" />
              Find Us
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
