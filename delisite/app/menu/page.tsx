import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { MousePointerClick, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Menu",
    description: "Browse the full Mount Sinai Bagel & Deli menu.",
};

const menuImages = [
    "/menu/menu1.png",
    "/menu/menu2.png",
    "/menu/menu3.png",
    "/menu/menu4.png",
];

export default function MenuPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader />

            <div className="mx-auto max-w-6xl px-6 py-12">
                <PageHero
                    eyebrow="THE MENU"
                    title="OUR MENU"
                    subtitle="fresh from the kitchen"
                    description="Bagels, breakfast, and deli favorites — freshly made every morning."
                />

                {/* Menu pages */}
                <div className="mx-auto mt-12 max-w-3xl space-y-8">
                    {menuImages.map((src, i) => (
                        <div
                            key={src}
                            className="overflow-hidden rounded-3xl border-2 border-brand-cream bg-white shadow-sm"
                        >
                            <Image
                                src={src}
                                alt={`Mount Sinai Bagel & Deli menu, page ${i + 1} of ${menuImages.length}`}
                                width={1200}
                                height={1600}
                                priority={i === 0}
                                sizes="(min-width: 768px) 768px, 100vw"
                                className="h-auto w-full"
                            />
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-brand-cream bg-brand-cream/20 p-8 text-center">
                    <p className="text-muted-foreground">
                        Prefer a clickable menu? Browse and search it item by item.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/online-menu"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-90"
                        >
                            <MousePointerClick className="h-4 w-4" />
                            View our online menu
                        </Link>
                        <Link
                            href="/find-us"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand px-6 py-3 text-base font-semibold text-brand transition hover:bg-brand hover:text-white"
                        >
                            <MapPin className="h-4 w-4" />
                            Find us & hours
                        </Link>
                    </div>
                </div>
            </div>

            <SiteFooter />
        </div>
    );
}
