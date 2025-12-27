import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Fraunces } from "next/font/google";

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
        <header className="w-full border-b">
          <div className="mx-auto max-w-3xl px-3 py-3 flex items-center justify-between">
            <NavigationMenu className = "ml-auto font-semibold">
              <NavigationMenuList className="justify-end">
                <NavigationMenuItem>
                  <NavigationMenuLink href="#menu" className="px-3 py-2 text-sm">
                    Menu
                  </NavigationMenuLink>
                </NavigationMenuItem>


                <NavigationMenuItem>
                  <NavigationMenuLink href="#hours" className="px-3 py-2 text-sm">
                    Hours
                  </NavigationMenuLink>
                </NavigationMenuItem>


                <NavigationMenuItem>
                  <NavigationMenuLink href="#location" className="px-3 py-2 text-sm">
                    Location
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#vip" className="px-3 py-2 text-sm">
                    VIP
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#about-us" className="px-3 py-2 text-sm">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#contact" className="px-3 py-2 text-sm">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

        </header>




        <main className="min-h-screen flex flex-col items-center justify-center w-full px-3 py-6">
          <h1 className={`${fraunces.className} text-7xl font-black leading-tight mb-4 text-white
  [text-shadow:2px_2px_0_#000]`}>
            MOUNT SINAI 
            <br />
            BAGEL & DELI
          </h1>
        </main>
      </div>
    </div>








    
  );
}

