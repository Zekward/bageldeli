import Image from "next/image";
import { SiteHeader } from "@/components/ui/site-header";

export default function AboutPage()  {
    return (
        <section className="w-full bg-white">
            <SiteHeader />
            <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col-reverse md:flex-row">

                {/* LEFT: Image */}
                <div className="relative h-[300px] w-full md:h-auto md:w-1/2">
                <Image
                    src="/about-us/bagel-cafe-image.png" // replace with your image path
                    alt="Mount Sinai Bagel Deli"
                    fill
                    className="object-cover"
                    priority
                />
                </div>

                {/* RIGHT: Text */}
               <div className="flex w-full items-center px-6 py-12 md:w-1/2 md:px-16">
                    <div className="max-w-md space-y-6">
                        
                        <h2 className="text-3xl font-semibold tracking-tight">
                        Our Story: Where Every Breakfast Tastes Like Home
                        </h2>

                        <p className="text-lg leading-relaxed text-muted-foreground">
                        After many breakfasts where something was missing—the authentic flavor,
                        the warmth, and the personal touch—we decided to create our own space.
                        That’s how Mt. Sinai Bagel & Deli was born: a place where breakfast doesn’t
                        just feed you; it starts your day with joy.
                        </p>

                        <ul className="space-y-3 text-base text-muted-foreground">
                        <li>• Freshly baked bagels and breads, prepared daily</li>
                        <li>• Vibrant salads made with crisp, organic vegetables</li>
                        <li>• Made-to-order dishes, prepared exactly the way you like them</li>
                        <li>• Comforting coffee that warms you from the very first sip</li>
                        </ul>

                        <p className="text-lg leading-relaxed text-muted-foreground">
                        Every detail has been chosen with love because this place is more than just
                        a business—it’s our home. We’re proud to serve our community, providing a
                        cozy corner of peace and flavor every single day.
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
}