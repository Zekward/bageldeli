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

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const NAV_ITEMS = [
    { href: "#menu", label: "Menu" },
    { href: "#deals", label: "Catering and Deals"},
    { href: "#find-us", label: "Find Us" }, /* find us includes location, hours, and contact */ 
    { href: "#about-us", label: "About Us" },
    { href: "#vip", label: "VIP" },
]

export function SiteHeader() {
    return (
        <header className="w-full border-b">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">

                {/* larger screen nav bar */}
                <div className="ml-auto hidden md:block">
                    <NavigationMenu className = "font-semibold">
                        <NavigationMenuList className="justify-end">
                            {NAV_ITEMS.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink href={item.href} className="px-3 py-2 text-sm">
                                        {item.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* hamburger menu: this opens for smaller screens: NEED TO WORK ON THIS SECTION  */}
                <div className="ml-auto md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="Open menu">
                            <Menu className="h-5 w-5" />
                        </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[280px]">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>

                        <nav className="mt-6 flex flex-col gap-4">
                            {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-lg font-semibold"
                            >
                                {item.label}
                            </a>
                            ))}
                        </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}