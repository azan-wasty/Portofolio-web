interface SkillChipProps {
  label: string;
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <span className="inline-flex items-center rounded-sm border border-void-line bg-void-raised px-3 py-1 font-mono text-xs text-text-dim transition-colors hover:border-signal-cyan hover:text-signal-cyan">
      {label}
    </span>
  );
}
