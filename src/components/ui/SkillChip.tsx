interface SkillChipProps {
  label: string;
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <span className="inline-flex items-center rounded-sm border border-neutral-700 bg-neutral-900 px-3 py-1 font-mono text-xs text-neutral-300 transition-colors hover:border-signal-cyan hover:text-signal-cyan">
      {label}
    </span>
  );
}
