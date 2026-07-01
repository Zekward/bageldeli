type MenuSectionBoxProps = {
  color: string;
  children?: React.ReactNode;
};

// Outer card/frame only: colored border, rounding, padding and page-break
// behavior. Everything inside (title, divider, items) is owned by MenuSection.
export function MenuSectionBox({ color, children }: MenuSectionBoxProps) {
  return (
    <div
      data-card
      style={{ borderColor: color }}
      className="w-full break-inside-avoid rounded-2xl border-2 p-6 sm:p-8 min-h-[220px] mb-8 shadow-sm"
    >
      {children}
    </div>
  );
}
