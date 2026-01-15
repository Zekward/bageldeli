type MenuSectionBoxProps = {
  title: string;
  color: string;
  children?: React.ReactNode;
};

export function MenuSectionBox({ title, color, children }: MenuSectionBoxProps) {
  return (
    <div
      style={{ borderColor: color }}
      className="w-full rounded-3xl border-2 p-8 min-h-[220px] break-inside-avoid mb-8"
    >
      <h2
        style={{ color }}
        className="text-2xl font-bold mb-4 uppercase tracking-wide"
      >
        {title}
      </h2>

      {/* Placeholder content */}
      <div className="space-y-5">
        {children}
      </div>
    </div>
  );
}