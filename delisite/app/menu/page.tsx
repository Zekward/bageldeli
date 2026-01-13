import Image from "next/image";
import { SiteHeader } from "@/components/ui/site-header";

const menuImages = [
    "/menu/menu1.png",
    "/menu/menu2.png",
    "/menu/menu3.png",
    "/menu/menu4.png",
];

export default function MenuPage() {
    return (
        <div className="min-h-screen bg-[#230c09] text-white">
            <SiteHeader />
            {/* Content wrapper */}
            <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-3xl bg-white">
                {menuImages.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt={`Menu page ${i + 1}`}
                    width={1200}
                    height={1600}
                    priority={i === 0}
                    className="w-full h-auto"
                />
                ))}
            </div>
        </div>
    );

}