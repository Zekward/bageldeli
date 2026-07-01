"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { RotateCcw, Home } from "lucide-react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-12">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-coral">
          Oops
        </p>
        <h1
          className={`${bebasNeue.className} mt-2 text-5xl tracking-wide text-brand sm:text-6xl`}
        >
          Something went wrong
        </h1>
        <p className="mt-3 text-muted-foreground">
          We hit a snag while toasting things up. Give it another try, or head
          back home and grab a fresh bagel.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            <RotateCcw className="h-4 w-4" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-base font-semibold text-brand transition hover:bg-brand hover:text-white"
          >
            <Home className="h-4 w-4" />
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
