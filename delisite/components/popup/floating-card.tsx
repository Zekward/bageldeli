"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { Lobster } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});


type FloatingCardProps = {
    onClose: () => void
}

export function FloatingCard({ onClose }: FloatingCardProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    // Move focus into the dialog on open, restore it to the previously
    // focused element on close.
    useEffect(() => {
        const previouslyFocused = document.activeElement as HTMLElement | null;
        closeButtonRef.current?.focus();
        return () => previouslyFocused?.focus?.();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key !== "Tab") {
                return;
            }

            const dialog = dialogRef.current;
            if (!dialog) {
                return;
            }

            const focusable = Array.from(
                dialog.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                )
            ).filter(
                (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true"
            );

            if (focusable.length === 0) {
                event.preventDefault();
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;

            if (event.shiftKey) {
                if (active === first || !dialog.contains(active)) {
                    event.preventDefault();
                    last.focus();
                }
            } else if (active === last || !dialog.contains(active)) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div data-print-hide className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 animate-in fade-in duration-300">
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Special offer"
                className="relative h-[22rem] w-[90%] max-w-[40rem] rounded-3xl bg-white overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            >
                {/* Background Image */}
                <Image
                src="/pop-up/bagel-background.png"
                alt="Popup background"
                fill
                className="object-cover"
                priority
                />


                {/* Close Button */}
                <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-500 shadow-sm transition hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70260a] focus-visible:ring-offset-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden="true"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Light scrim: just enough to keep text legible while letting the
                    bagel pattern read clearly through it. */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 z-[5] bg-[#fdf6ec]/45"
                />
                {/* Soft radial halo behind the copy so the headline stays crisp
                    over the busier parts of the pattern. */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 z-[6] bg-[radial-gradient(ellipse_at_center,rgba(253,246,236,0.85)_0%,rgba(253,246,236,0.35)_55%,transparent_80%)]"
                />

                <div
                    className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3
                        px-6 text-center"
                    >
                    {/* Lobster script accent */}
                    <p className={`${lobster.className} -mb-1 text-2xl sm:text-3xl text-[#e2603f] drop-shadow-sm`}>
                        Fresh deal!
                    </p>

                    <h1 className={`${bebasNeue.className} text-5xl leading-none sm:text-7xl tracking-wide text-[#70260a]`}>
                        CHECK OUT OUR MENUS
                    </h1>

                    {/* MENU CTA BUTTON */}
                    <Button
                        asChild
                        variant="brandCoral"
                        size="lg"
                        className="mt-2 rounded-full px-8 text-sm font-semibold tracking-wide uppercase"
                    >
                        <Link href="/online-menu">View Menus</Link>
                    </Button>

                    <p className={`${montserrat.className} mt-1 text-base sm:text-lg font-medium text-[#70260a]`}>
                        Free delivery on orders over $20!
                    </p>
                </div>

                
                
            </div>
        </div>
    )
}