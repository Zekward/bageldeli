"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { Montserrat } from "next/font/google"; 

const bebasNeue = Bebas_Neue({
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
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);
    
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 transition-opacity duration-300">
            <div className={`relative h-[22rem] w-[90%] max-w-[40rem] rounded-3xl bg-white overflow-hidden shadow-2xl ${visible ? "opacity-100" : "opacity-0"}`}>
                {/* Background Image */}
                <Image
                src="/pop-up/bagel-background.png"
                alt="Popup background"
                fill
                className="object-cover"
                priority
                />`


                {/* Close Button */}
                <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
                aria-label="Close"
                >
                ✕
                </button>

                <div
                    className={`relative z-10 flex h-full w-full flex-col items-center justify-center gap-6
                        px-6 text-center transition-opacity duration-300
                        ${visible ? "opacity-100" : "opacity-0"}`}
                    >
                    <h1 className={`${bebasNeue.className} text-4xl sm:text-6xl font-semibold text-[#70260a]`}>
                        CHECK OUT OUR MENUS
                    </h1>
                

                    {/* MENU CTA BUTTON */}
                    <a
                        href="/online-menu"
                        className="rounded-full bg-[#160600] px-8 py-3 text-sm font-medium
                        tracking-wide text-white transition hover:bg-zinc-700"
                    >
                        VIEW MENUS
                    </a>

                    <p className={`${montserrat.className} mt-4 text-base sm:text-lg font-medium text-[#160600]`}>
                        FREE DELIVERY ON ORDERS OVER $20!!!
                    </p>
                </div>

                
                
            </div>
        </div>
    )
}