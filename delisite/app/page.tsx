import { Fraunces } from "next/font/google";
import { SiteHeader } from "@/components/ui/site-header";
import Image from "next/image";
import { ImageCard } from "@/components/ui/card"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["900"],
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
        />
      
      </main>
      
    </div>
  );
}


