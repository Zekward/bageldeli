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
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl ">
            <Image
              src="/delilogo.png"
              alt="Mount Sinai Bagel Deli"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
           
        </main>
      </div>
    </div>
  );
}


