interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-b border-void-line pb-4">
      <span className="font-mono text-sm text-signal-magenta">{index}</span>
      <div>
        <h2 className="font-display text-2xl tracking-wide text-text-primary sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 font-mono text-sm text-text-dim">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
