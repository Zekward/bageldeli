"use client";
import { SiteHeader } from "@/components/ui/site-header";
import { useState } from "react";
import { UserPlus, Ticket, Store, ShieldCheck } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import { PageHero } from "@/components/ui/page-hero";
import DiscountForm from "@/components/discounts/discount-form";
import FreeBagelCard from "@/components/discounts/confirmation-card";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const STEPS = [
    { icon: UserPlus, title: "Sign up", text: "Add your name and contact info." },
    { icon: Ticket, title: "Get your code", text: "Your reward appears right away." },
    { icon: Store, title: "Redeem in store", text: "Show the screen to your cashier." },
];

export default function DiscountsPage() {
    const [claimed, setClaimed] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <SiteHeader />
            <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-deli-paper px-4 py-12">
                <div className="w-full max-w-md">
                    {!claimed ? (
                        <div>
                            <PageHero
                                eyebrow="FREE ON US"
                                title="FREE BAGEL"
                                subtitle="with cream cheese"
                                description="Sign up and grab a free bagel with cream cheese on your next visit — plus first dibs on future deals."
                            />

                            {/* Punch-card path: big Bebas numbers linked by a dashed tear */}
                            <div className="deli-ticket mt-6 p-5 sm:p-6">
                                <p className="deli-stamp text-xs">How it works</p>
                                <ol className="mt-4">
                                    {STEPS.map((step, i) => (
                                        <li key={step.title} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <span
                                                    className={`${bebasNeue.className} text-4xl leading-none tracking-tight text-brand-coral`}
                                                >
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>
                                                {i < STEPS.length - 1 && (
                                                    <span
                                                        aria-hidden
                                                        className="my-2 w-px flex-1 border-l-2 border-dashed border-brand-coral/35"
                                                    />
                                                )}
                                            </div>
                                            <div className="pb-6 last:pb-0">
                                                <div className="flex items-center gap-1.5">
                                                    <step.icon className="h-4 w-4 shrink-0 text-brand-coral" />
                                                    <span className="deli-stamp text-sm">
                                                        {step.title}
                                                    </span>
                                                </div>
                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    {step.text}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Order ticket: stamped header, perforated tear, then the form */}
                            <div className="deli-ticket mt-6 overflow-hidden">
                                <div className="bg-brand-coral/10 px-6 py-3 text-center">
                                    <p className="deli-stamp text-xs">
                                        Your details
                                    </p>
                                </div>
                                <div className="deli-perforation" />
                                <div className="p-6">
                                    <DiscountForm onSuccess={() => setClaimed(true)} />
                                </div>
                            </div>

                            <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                                <ShieldCheck className="h-3.5 w-3.5 text-brand-coral" />
                                No spam, ever. Just your reward and the occasional deal.
                            </p>
                        </div>
                    ) : (
                        <div className="deli-ticket overflow-hidden">
                            <div className="bg-brand-coral/10 px-6 py-3 text-center">
                                <p className="deli-stamp text-xs">Your reward is ready</p>
                            </div>
                            <div className="deli-perforation" />
                            <div className="p-6">
                                <FreeBagelCard />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
