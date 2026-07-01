"use client";

import { useEffect, useState } from "react";
import { AlertCircle, ArrowUp, Info } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";
import { MenuSection } from "@/components/ui/menu-box-section"
import { ComingSoon } from "@/components/ui/coming-soon"
import { breakfastClassic } from "@/components/menu-items/breakfast/classic";
import { breakfastSandwiches } from "@/components/menu-items/breakfast/sandwiches";
import { breakfastPlatters } from "@/components/menu-items/breakfast/platters";
import { breakfastGrilledCheeses } from "@/components/menu-items/breakfast/grilled-cheese";
import { breakfastSweetTooth } from "@/components/menu-items/breakfast/sweet-tooth";
import { breakfastOmelettes } from "@/components/menu-items/breakfast/omelettes";
import { breakfastCombos } from "@/components/menu-items/breakfast/combos";
import { lunchAvocadoToast } from "@/components/menu-items/lunch/avocado-toast";
import { lunchChickenCutlet } from "@/components/menu-items/lunch/chicken-cutlet";
import { lunchWraps } from "@/components/menu-items/lunch/wraps";
import { lunchSandwiches } from "@/components/menu-items/lunch/sandwiches";
import { lunchSalads } from "@/components/menu-items/lunch/salads";
import { lunchBlt } from "@/components/menu-items/lunch/blt";

const TABS = ["Breakfast", "Lunch", "Catering", "Bagels"] as const;

const TAB_COLORS = {
    Breakfast: "#f67e7d",
    Lunch: "#91818a",
    Catering: "#fbaf00",
    Bagels: "#160600",
} as const;

type MenuItem = { title: string; price?: number; description?: string };
type Section = { id: string; title: string; items: MenuItem[] };

// Section metadata drives both the in-page jump nav and the rendered
// sections, so anchors and titles stay in sync. Item data is untouched.
const BREAKFAST_SECTIONS: Section[] = [
    { id: "breakfast-classic", title: "Classic", items: breakfastClassic },
    { id: "breakfast-sandwiches", title: "Breakfast Sandwiches", items: breakfastSandwiches },
    { id: "breakfast-platters", title: "Platters", items: breakfastPlatters },
    { id: "breakfast-grilled-cheese", title: "Grilled Cheeses", items: breakfastGrilledCheeses },
    { id: "breakfast-sweet-tooth", title: "Pancakes/French Toast", items: breakfastSweetTooth },
    { id: "breakfast-omelettes", title: "Omelettes", items: breakfastOmelettes },
    { id: "breakfast-combos", title: "Breakfast Combos", items: breakfastCombos },
];

const LUNCH_SECTIONS: Section[] = [
    { id: "lunch-avocado-toast", title: "Avocado Toast", items: lunchAvocadoToast },
    { id: "lunch-cutlet-club", title: "The Cutlet Club", items: lunchChickenCutlet },
    { id: "lunch-wraps", title: "Chicken Wraps", items: lunchWraps },
    { id: "lunch-sandwiches", title: "Deli Sandwiches", items: lunchSandwiches },
    { id: "lunch-salads", title: "Salads", items: lunchSalads },
    { id: "lunch-blt", title: "BLTs", items: lunchBlt },
];

function prefersReducedMotion() {
    return (
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    );
}

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
    });
}

export default function MenuPage() {
    const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Breakfast");
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [showBackToTop, setShowBackToTop] = useState(false);

    const sections: Section[] =
        activeTab === "Breakfast"
            ? BREAKFAST_SECTIONS
            : activeTab === "Lunch"
                ? LUNCH_SECTIONS
                : [];

    const selectTab = (tab: (typeof TABS)[number]) => {
        setActiveTab(tab);
    };

    // Scroll-spy: highlight the section nearest the top of the viewport as the
    // user scrolls. Re-runs per tab so the observed elements stay in sync.
    useEffect(() => {
        setActiveSection(null);
        if (sections.length === 0) return;
        if (typeof window === "undefined" || !("IntersectionObserver" in window))
            return;

        const visible = new Map<string, number>();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        visible.set(entry.target.id, entry.boundingClientRect.top);
                    } else {
                        visible.delete(entry.target.id);
                    }
                }
                if (visible.size > 0) {
                    const [topmost] = [...visible.entries()].sort(
                        (a, b) => a[1] - b[1],
                    );
                    setActiveSection(topmost[0]);
                }
            },
            // Bias the active zone just below the sticky navs.
            { rootMargin: "-160px 0px -60% 0px", threshold: 0 },
        );

        const observed = sections
            .map((section) => document.getElementById(section.id))
            .filter((el): el is HTMLElement => el !== null);
        observed.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    // Sections are derived from the active tab, so the tab is the real trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab]);

    // Reveal the back-to-top button once the page is scrolled a screenful down.
    useEffect(() => {
        if (typeof window === "undefined") return;

        const onScroll = () => setShowBackToTop(window.scrollY > 600);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
    };

    return (
        <div className="min-h-screen bg-white">
            <SiteHeader />

            {/* Shared page hero — carries the front-page vibe (band mode) */}
            <PageHero
                eyebrow="ORDER ONLINE"
                title="OUR MENU"
                subtitle="fresh from the kitchen"
                description="Freshly made breakfast, lunch, and more — pick a category to explore."
            />

            {/* Content wrapper */}
            <div className="px-6 pb-10 pt-5">

                {/* Allergy note — relocated below the hero */}
                <p className="mx-auto mb-4 flex max-w-md items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0 text-brand-coral" aria-hidden="true" />
                    Have a food allergy? Please let our staff know before ordering.
                </p>

                {/* Category nav — sticks to the top so it stays reachable on long menus */}
                <div data-print-hide className="sticky top-0 z-30 -mx-6 mb-8 border-b border-brand-cream bg-white/90 px-6 py-3 backdrop-blur">
                    <div
                        role="tablist"
                        aria-label="Menu categories"
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {TABS.map((tab) => {
                            const isActive = activeTab === tab;

                            return (
                            <button
                                key={tab}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => selectTab(tab)}
                                style={{
                                backgroundColor: isActive ? TAB_COLORS[tab] : "white",
                                borderColor: isActive ? TAB_COLORS[tab] : "#d4d4d4",
                                color: isActive
                                    ? tab === "Catering"
                                    ? "#000"
                                    : "#fff"
                                    : "#000",
                                }}
                                className={`rounded-full border px-6 py-2.5 text-sm font-semibold transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                                    isActive ? "scale-105 shadow-md" : "hover:border-brand"
                                }`}
                            >
                                {tab.toUpperCase()}
                            </button>
                            );
                        })}
                    </div>
                </div>

                {/* Jump-to-section nav for the longer meal menus */}
                {sections.length > 0 && (
                    <nav
                        data-print-hide
                        aria-label={`Jump to ${activeTab.toLowerCase()} section`}
                        className="mx-auto mb-10 max-w-6xl"
                    >
                        <ul className="flex flex-wrap justify-center gap-2">
                            {sections.map((section) => {
                                const isActive = activeSection === section.id;

                                return (
                                <li key={section.id}>
                                    <button
                                        type="button"
                                        onClick={() => scrollToSection(section.id)}
                                        aria-current={isActive ? "true" : undefined}
                                        style={{
                                            color: isActive ? "#fff" : TAB_COLORS[activeTab],
                                            backgroundColor: isActive ? TAB_COLORS[activeTab] : undefined,
                                            borderColor: isActive ? TAB_COLORS[activeTab] : undefined,
                                        }}
                                        className={`rounded-full border border-brand-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                                            isActive
                                                ? "shadow-sm"
                                                : "bg-brand-cream/30 hover:bg-brand-cream/60"
                                        }`}
                                    >
                                        {section.title}
                                    </button>
                                </li>
                                );
                            })}
                        </ul>
                    </nav>
                )}

                {/* Content Area */}
                <div
                    className={`mx-auto max-w-6xl gap-8 ${
                        sections.length > 0 ? "columns-1 lg:columns-2" : ""
                    }`}
                >
                    {sections.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className="scroll-mt-28 break-inside-avoid"
                        >
                            <MenuSection
                                title={section.title}
                                color={TAB_COLORS[activeTab]}
                                items={section.items}
                            />
                        </section>
                    ))}

                    {activeTab === "Catering" && (
                        <ComingSoon
                            title="Catering Menu Coming Soon"
                            message="Planning an event? We cater breakfast spreads, sandwich platters, and bagel bundles. Give us a call and we'll put together something perfect."
                            color={TAB_COLORS.Catering}
                        />
                    )}
                    {activeTab === "Bagels" && (
                        <ComingSoon
                            title="Bagel Varieties Coming Soon"
                            message="Our full lineup of fresh-baked bagels and house cream cheeses is on its way. Stop by to see today's batch."
                            color={TAB_COLORS.Bagels}
                        />
                    )}

                </div>

                <p className="mx-auto mt-10 flex max-w-md items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                    <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    Prices and availability subject to change.
                </p>

            </div>

            {/* Floating back-to-top — sits clear of the sticky category nav */}
            <button
                type="button"
                data-print-hide
                onClick={scrollToTop}
                aria-label="Back to top"
                style={{ backgroundColor: TAB_COLORS[activeTab] }}
                className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                    showBackToTop
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                }`}
            >
                <ArrowUp className="h-5 w-5" aria-hidden="true" />
            </button>

            <SiteFooter />
        </div>
    );

}
