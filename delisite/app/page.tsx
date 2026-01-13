import { Fraunces } from "next/font/google";
import { Lobster } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { SiteHeader } from "@/components/ui/site-header";
import Image from "next/image";
import { ImageCard } from "@/components/ui/card"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["900"],
});

const lobster = Lobster({
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-lobster",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export default function Home() {
  return (
    <div className="relative">
      <SiteHeader />
      <main className="w-full px-6 sm:px-8 lg:px-10 mt-4">
        
        <ImageCard
          title="BOLD AND FRESH"
          subtitle="MADE WITH PASSION"
          image="/bagel.jpg"
          titleClassName="font-script"
          subtitleClassName="font-montserrat uppercase"
          titleFontClass={bebasNeue.className}
          subtitleFontClass={lobster.className}
        />
      
      </main>
      
    </div>
  );
}


