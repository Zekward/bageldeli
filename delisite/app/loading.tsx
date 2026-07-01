import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <div className="relative h-20 w-20">
        <span
          className="block h-full w-full animate-spin rounded-full border-[6px] border-brand-cream border-t-brand motion-reduce:animate-none"
          style={{ animationDuration: "1.1s" }}
        />
        <span className="absolute inset-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral/70" />
      </div>
      <p
        className={`${bebasNeue.className} text-2xl uppercase tracking-widest text-brand`}
      >
        Warming up the bagels…
      </p>
      <span className="sr-only">Loading, please wait.</span>
    </div>
  );
}
