import { MenuSectionBox } from "./menu-box";
import { MenuEntry } from "./menu-entry";

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

export function MenuSection({ title, color, items }: MenuSectionProps) {
  return (
    <MenuSectionBox title={title} color={color}>
      {items.map((item) => (
        <MenuEntry
          key={item.title}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </MenuSectionBox>
  );
}