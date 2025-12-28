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

export function SiteHeader() {
    return (
        <header className="w-full border-b">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
                <div className="ml-auto hidden md:block">
                    <NavigationMenu className = " font-semibold">
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
            </div>
        </header>
    );
}