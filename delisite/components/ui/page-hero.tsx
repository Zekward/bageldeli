import Image from "next/image";
import { Lobster } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

type PageHeroProps = {
  /** Small uppercase kicker above the title (coral). */
  eyebrow?: string;
  /** Main display title, rendered in Bebas Neue. */
  title: string;
  /** Script accent line, rendered in Lobster. */
  subtitle?: string;
  /** Supporting line under the title. */
  description?: string;
  /** Optional background photo — switches to the cinematic overlay treatment. */
  image?: string;
  /** Alt text for the background image. */
  imageAlt?: string;
  /** Optional CTA row (buttons/links). */
  children?: React.ReactNode;
};

/**
 * Shared page hero that carries the front-page "vibe" onto inner pages:
 * a big Bebas Neue display title, a Lobster script accent, coral eyebrow,
 * and the warm brand palette. Two modes:
 *  - `image` set   → cinematic photo hero with dark overlay + cream text
 *  - no `image`    → warm cream band with brand-brown title + coral script
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  if (image) {
    return (
      <section className="px-2 sm:px-4">
        <div className="relative h-[46vh] min-h-[320px] md:h-[56vh] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-cream/90">
                {eyebrow}
              </p>
            )}
            <h1
              style={{ color: "#f4ebbe" }}
              className={`${bebasNeue.className} mt-2 text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] tracking-[0.02em]`}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{ color: "#f4ebbe" }}
                className={`${lobster.className} mt-1 text-[clamp(1.75rem,4vw,3.25rem)] leading-none`}
              >
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-4 max-w-2xl text-base text-brand-cream/90 sm:text-lg">
                {description}
              </p>
            )}
            {children && (
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                {children}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-2 sm:px-4">
      <div className="relative overflow-hidden rounded-2xl border border-brand-cream bg-[#fdf6ec] px-6 py-14 text-center sm:py-20">
        {/* On-theme bagel/bread line-art texture instead of a flat gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "url('/pop-up/bagel-background.png')",
            backgroundSize: "460px",
          }}
        />
        {/* Coral hairline along the bottom to anchor the band */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-brand-coral/70"
        />
        <div className="relative z-10">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-coral">
              {eyebrow}
            </p>
          )}
          <h1
            className={`${bebasNeue.className} mt-2 text-[clamp(3rem,8vw,6.5rem)] leading-[0.85] tracking-[0.02em] text-brand`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`${lobster.className} mt-1 text-[clamp(1.5rem,3.5vw,2.75rem)] leading-none text-brand-coral`}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-gray sm:text-lg">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
