import { Bebas_Neue } from "next/font/google";
import { MenuSectionBox } from "./menu-box";
import { MenuEntry } from "./menu-entry";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

type MenuItem = {
  title: string;
  price?: number;
  description?: string;
};

type MenuSectionProps = {
  title: string;
  color: string;
  items: MenuItem[];
};

// Owns the section's inner presentation: the Bebas Neue, section-colored title,
// the coral accent divider beneath it, and the spacing of the item list.
// The surrounding card/frame is owned by MenuSectionBox.
export function MenuSection({ title, color, items }: MenuSectionProps) {
  return (
    <MenuSectionBox color={color}>
      <h2
        style={{ color }}
        className={`${bebasNeue.className} text-3xl uppercase tracking-wide leading-none`}
      >
        {title}
      </h2>

      {/* Coral accent divider separating the section title from its items */}
      <span
        aria-hidden
        className="mt-3 mb-5 block h-1 w-12 rounded-full bg-brand-coral"
      />

      <div className="space-y-5">
        {items.map((item) => (
          <MenuEntry
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </MenuSectionBox>
  );
}
