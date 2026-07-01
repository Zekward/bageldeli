import Link from "next/link";
import { Bebas_Neue, Lobster } from "next/font/google";
import { Croissant, MapPin } from "lucide-react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

type ComingSoonProps = {
  title: string;
  message: string;
  color: string;
};

export function ComingSoon({ title, message, color }: ComingSoonProps) {
  return (
    <div
      style={{ borderColor: color }}
      className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-3xl border-2 border-dashed p-8 text-center sm:p-10"
    >
      <span
        aria-hidden="true"
        style={{ backgroundColor: `${color}1a`, color }}
        className="flex h-16 w-16 items-center justify-center rounded-full"
      >
        <Croissant className="h-8 w-8" />
      </span>
      <p className={`${lobster.className} text-2xl text-brand-coral sm:text-3xl`}>
        worth the wait
      </p>
      <h2
        style={{ color }}
        className={`${bebasNeue.className} text-4xl uppercase tracking-wide sm:text-5xl`}
      >
        {title}
      </h2>
      <p className="max-w-md text-muted-foreground">{message}</p>
      <Link
        href="/find-us"
        style={{ backgroundColor: color }}
        className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold text-white transition hover:opacity-90"
      >
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Call or visit us
      </Link>
    </div>
  );
}
