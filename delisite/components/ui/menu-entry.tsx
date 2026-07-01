type MenuEntryProps = {
  title: string;
  description?: string;
  price?: number;
  badges?: string[]; // optional: vegetarian, nuts, etc later
};

export function MenuEntry({ title, description, price, badges }: MenuEntryProps) {
  return (
    <div className="space-y-1 py-0.5">
      {/* Title + Price Row */}
      <div className="flex items-baseline gap-2">
        <h3 className="font-semibold text-base uppercase tracking-wide text-brand text-balance">
          {title}
        </h3>

        {price !== undefined && (
          <>
            {/* Dotted leader fills the gap between name and price */}
            <span
              aria-hidden="true"
              className="min-w-4 flex-1 translate-y-[-0.15em] border-b border-dotted border-brand/25"
            />
            <span className="shrink-0 font-semibold text-base tabular-nums text-brand">
              ${price.toFixed(2)}
            </span>
          </>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="max-w-prose text-sm text-muted-foreground leading-snug">
          {description}
        </p>
      )}

      {/* Dietary / info badges (vegetarian, nuts, etc.) */}
      {badges && badges.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 pt-0.5">
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-full bg-brand-coral/15 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-brand"
            >
              {badge}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}