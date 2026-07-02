interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  inverted?: boolean;
}

export function SectionHeading({ index, title, subtitle, inverted = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 flex items-baseline gap-4 border-b pb-4 ${inverted ? "border-neutral-700" : "border-text-primary/20"}`}>
      <span className={`font-mono text-sm ${inverted ? "text-signal-cyan" : "text-signal-red"}`}>{index}</span>
      <div>
        <h2 className={`cyber-heading font-signature text-2xl tracking-wide sm:text-3xl ${inverted ? "text-signal-yellow" : "text-text-primary"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-1 font-mono text-sm ${inverted ? "text-neutral-500" : "text-text-dim"}`}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}