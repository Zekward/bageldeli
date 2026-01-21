"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/ui/site-header";
import { MenuSectionBox } from "@/components/ui/menu-box";
import { MenuSection } from "@/components/ui/menu-box-section"
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



export default function MenuPage() {
    const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Breakfast");



    return (
        <div className="min-h-screen">
            <SiteHeader />
            {/* Content wrapper */}
            <div className="min-h-screen bg-white px-6 py-10">
                
                {/* Button Row */}
                <div className="flex flex-col gap-4 mb-10 sm:flex-row sm:flex-wrap sm:justify-center">
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab;

                        return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                            backgroundColor: isActive ? TAB_COLORS[tab] : "white",
                            borderColor: isActive ? TAB_COLORS[tab] : "#000",
                            color: isActive
                                ? tab === "Catering"
                                ? "#000"
                                : "#fff"
                                : "#000",
                            }}
                            className="px-6 py-2 rounded-full border text-sm font-semibold transition hover:opacity-90"
                        >
                            {tab.toUpperCase()}
                        </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="max-w-6xl mx-auto columns-1 lg:columns-2 gap-8">
                    {activeTab === "Breakfast" && (
                        <>
                        <MenuSection title="Classic" color={TAB_COLORS.Breakfast} items={breakfastClassic}/> 
                        <MenuSection title="Breakfast Sandwiches" color={TAB_COLORS.Breakfast} items={breakfastSandwiches}/>
                        <MenuSection title="Platters" color={TAB_COLORS.Breakfast} items={breakfastPlatters} />
                        <MenuSection title="Grilled Cheeses" color={TAB_COLORS.Breakfast} items={breakfastGrilledCheeses} />
                        <MenuSection title="Pancakes/French Toast" color={TAB_COLORS.Breakfast} items={breakfastSweetTooth} />
                        <MenuSection title="Omelettes" color={TAB_COLORS.Breakfast} items={breakfastOmelettes} />
                        <MenuSection title="Breakfast Combos" color={TAB_COLORS.Breakfast} items={breakfastCombos} />
                        </>
                    )}
                    {activeTab === "Lunch" && (
                        <>
                        <MenuSection title="Avocado Toast" color={TAB_COLORS.Lunch} items={lunchAvocadoToast}/>
                        <MenuSection title="The Cutlet Club" color={TAB_COLORS.Lunch} items={lunchChickenCutlet}/>
                        <MenuSection title="Chicken Wraps" color={TAB_COLORS.Lunch} items={lunchWraps}/>
                        <MenuSection title="Deli Sandwiches" color={TAB_COLORS.Lunch} items={lunchSandwiches}/>
                        <MenuSection title="Salads" color={TAB_COLORS.Lunch} items={lunchSalads}/>
                        <MenuSection title="BLTs" color={TAB_COLORS.Lunch} items={lunchBlt}/>
                        </>
                    )}
                    {activeTab === "Catering" && (
                        <>
                        <MenuSectionBox title="Holiday Bundle" color={TAB_COLORS.Catering} />
                        <MenuSectionBox title="New Years Bundle" color={TAB_COLORS.Catering} />
                        <MenuSectionBox title="Deal 1" color={TAB_COLORS.Catering} />
                        <MenuSectionBox title="Deal 2" color={TAB_COLORS.Catering} />
                        </>
                    )}
                    {activeTab === "Bagels" && (
                        <MenuSectionBox title="Favorites" color={TAB_COLORS.Bagels} />
                    )}
                    
                </div>

            </div>
        </div>
    );

}