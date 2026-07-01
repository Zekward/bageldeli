import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { CheckCircle2, MapPin, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

export default function FreeBagelCard() {
    return (
        <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-coral/15">
                <CheckCircle2 className="h-8 w-8 text-brand" aria-hidden="true" />
            </div>

            <h1
                className={`${bebasNeue.className} text-4xl tracking-wide text-brand sm:text-5xl`}
            >
                Free Bagel Unlocked!
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
                Show this screen at the register to claim your reward.
            </p>

            <div className="mt-6 rounded-xl border-2 border-dashed border-brand/40 bg-brand-cream/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-coral">
                    Show this at the register
                </p>
                <p
                    className={`${bebasNeue.className} mt-1 select-all text-3xl tracking-[0.15em] text-brand sm:text-4xl`}
                    aria-label="Redemption code: FREE BAGEL"
                >
                    FREE BAGEL
                </p>
                <p className="mt-2 text-xs font-medium text-muted-foreground">
                    Valid today only
                </p>
            </div>

            <Button variant="brand" className="mt-6 w-full" disabled>
                Ready to Redeem
            </Button>

            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
                <Link
                    href="/online-menu"
                    className="inline-flex items-center gap-1.5 font-medium text-brand underline-offset-4 hover:underline"
                >
                    <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
                    See our menu
                </Link>
                <span className="text-border" aria-hidden="true">
                    |
                </span>
                <Link
                    href="/find-us"
                    className="inline-flex items-center gap-1.5 font-medium text-brand underline-offset-4 hover:underline"
                >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Find us
                </Link>
            </div>
        </div>
    );
}
