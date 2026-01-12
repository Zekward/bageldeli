import { Fraunces } from "next/font/google";
import { SiteHeader } from "@/components/ui/site-header";
import Image from "next/image";

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
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Image
              src="/delilogo.jpg"
              alt="Mount Sinai Bagel Deli"
              width={800}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
           
        </main>
      </div>
    </div>
  );
}


