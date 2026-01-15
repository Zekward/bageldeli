"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/ui/site-header";

const TABS = ["Breakfast", "Lunch", "Catering", "Bagels"] as const;

export default function MenuPage() {
    const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Breakfast");



    return (
        <div className="min-h-screen">
            <SiteHeader />
            {/* Content wrapper */}
            <div className="min-h-screen bg-white px-6 py-10">
                
                {/* Button Row */}
                <div className="flex flex-wrap gap-4 justify-center mb-10">
                    {TABS.map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full border text-sm font-semibold transition
                        ${
                            activeTab === tab
                            ? "bg-yellow-400 border-yellow-400 text-black"
                            : "bg-white border-black text-black hover:bg-gray-100"
                        }`}
                    >
                        {tab.toUpperCase()}
                    </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-4xl mx-auto rounded-2xl border border-yellow-400 p-10 text-center text-4xl font-bold">
                    {activeTab === "Breakfast" && <div>1</div>}
                    {activeTab === "Lunch" && <div>2</div>}
                    {activeTab === "Catering" && <div>3</div>}
                    {activeTab === "Bagels" && <div>4</div>}
                </div>

            </div>
        </div>
    );

}