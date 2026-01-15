type MenuEntryProps = {
  title: string;
  description?: string;
  price?: number;
  badges?: string[]; // optional: vegetarian, nuts, etc later
};

export function MenuEntry({ title, description, price, badges }: MenuEntryProps) {
  return (
    <div className="space-y-1">
      {/* Title + Price Row */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base uppercase tracking-wide">
          {title}
        </h3>

        {price !== undefined && (
          <span className="font-semibold text-base">
            ${price.toFixed(2)}
          </span>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-muted-foreground leading-snug">
          {description}
        </p>
      )}
    </div>
  );
}