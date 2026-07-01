"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";



const NAV_ITEMS = [
    { href: "/menu", label: "Menu" },
    { href: "/online-menu", label: "Order Online"},
    { href: "/catering", label: "Catering"},
    { href: "/discounts", label: "Discounts"},
    { href: "/reviews", label: "Reviews"},
    { href: "/find-us", label: "Find Us" }, /* find us includes location, hours, and contact */
    { href: "/about-us", label: "About Us" },
]

export function SiteHeader() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname === href

    return (
        <header className="w-full">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Mt. Sinai Bagel & Deli"
                        width={140}
                        height={40}
                        priority
                    />
                </Link>




                {/* larger screen nav bar */}
                <div className="ml-auto hidden md:block">
                    <NavigationMenu className = "font-semibold">
                        <NavigationMenuList className="justify-end">
                            {NAV_ITEMS.map((item) => {
                                const active = isActive(item.href)
                                return (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink asChild className="px-3 py-2 text-base">
                                        <Link
                                            href={item.href}
                                            aria-current={active ? "page" : undefined}
                                            className={
                                                active
                                                    ? "text-[#70260a] underline decoration-2 decoration-[#70260a] underline-offset-8"
                                                    : "text-muted-foreground hover:text-[#70260a]"
                                            }
                                        >
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                )
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* prominent CTA (desktop) */}
                <div className="ml-3 hidden md:block">
                    <Button asChild variant="brand">
                        <Link href="/online-menu">Order Online</Link>
                    </Button>
                </div>

                {/* hamburger menu: this opens for smaller screens: NEED TO WORK ON THIS SECTION  */}
                <div className="ml-auto md:hidden">
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
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
                            {NAV_ITEMS.map((item) => {
                            const active = isActive(item.href)
                            return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                aria-current={active ? "page" : undefined}
                                className={
                                    active
                                        ? "text-lg font-semibold text-[#70260a] underline decoration-2 decoration-[#70260a] underline-offset-8"
                                        : "text-lg font-semibold text-muted-foreground hover:text-[#70260a]"
                                }
                            >
                                {item.label}
                            </Link>
                            )
                            })}

                            <Button asChild variant="brand" className="mt-2 w-full">
                                <Link href="/online-menu" onClick={() => setMobileOpen(false)}>
                                    Order Online
                                </Link>
                            </Button>
                        </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}