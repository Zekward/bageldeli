import Link from "next/link";
import Image from "next/image";
import { Lobster } from "next/font/google";
import { STORE } from "@/lib/store";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

// Warm script accent to match the home hero subtitle — used sparingly on the
// footer tagline only, never on body/nav/contact text (legibility).
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/online-menu", label: "Order Online" },
  { href: "/catering", label: "Catering" },
  { href: "/discounts", label: "Discounts" },
  { href: "/reviews", label: "Reviews" },
  { href: "/find-us", label: "Find Us" },
  { href: "/about-us", label: "About Us" },
];

// Shared affordance for footer text links: smooth transition to the coral
// accent, an underline on hover/focus, and a keyboard-visible focus ring.
const FOOTER_LINK =
  "rounded-sm underline-offset-4 transition-colors duration-200 hover:text-brand-coral hover:underline focus-visible:text-brand-coral focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-4 border-brand-cream bg-brand-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Image
            src="/logo.png"
            alt="Mt. Sinai Bagel & Deli"
            width={150}
            height={44}
            className="brightness-0 invert"
          />
          <p
            className={`${lobster.className} text-2xl leading-tight text-brand-cream`}
          >
            Fresh from the neighborhood
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            Fresh-baked bagels, warm coffee, and a neighborhood you can call
            home. Made with passion every single morning.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              href={STORE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/20 p-2 transition-colors duration-200 hover:border-brand-coral hover:text-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={STORE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/20 p-2 transition-colors duration-200 hover:border-brand-coral hover:text-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-coral">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={FOOTER_LINK}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-coral">
            <Clock className="h-4 w-4" /> Hours
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            {STORE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.dayShort}</span>
                <span className="tabular-nums">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-coral">
            Visit
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-coral" />
              <a
                href={STORE.mapsLinkSrc}
                target="_blank"
                rel="noopener noreferrer"
                className={FOOTER_LINK}
              >
                {STORE.address.formatted}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-coral" />
              <a href={STORE.phone.href} className={FOOTER_LINK}>
                {STORE.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-coral" />
              <a href={STORE.email.href} className={FOOTER_LINK}>
                {STORE.email.display}
              </a>
            </li>
          </ul>
          <Link
            href="/find-us"
            className="mt-5 inline-block rounded-full bg-brand-coral px-5 py-2 text-sm font-semibold text-brand-ink transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
          >
            Get Directions
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Mount Sinai Bagel &amp; Deli. All rights
        reserved.
      </div>
    </footer>
  );
}
