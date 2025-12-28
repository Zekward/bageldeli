import { Fraunces } from "next/font/google";
import { SiteHeader } from "@/components/ui/site-header";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["900"],
});

export default function Home() {
  return (
    <div className="min-h-screen relative text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bagel.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10">
        <SiteHeader />
        <main className="min-h-screen flex flex-col items-center justify-center w-full px-3 py-6">
          <h1 className={`${fraunces.className} font-black leading-tight mb-4 text-white
            [text-shadow:2px_2px_0_#000] text-center 
            md:text-left text-5xl 
            sm:text-6xl md:text-7xl mx-auto md:mx-0
          `}>
            MOUNT SINAI 
            <br />
            BAGEL & DELI
          </h1>
        </main>
      </div>
    </div>
  );
}

