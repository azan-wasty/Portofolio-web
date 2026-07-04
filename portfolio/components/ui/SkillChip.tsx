import type { SkillChipProps } from "@/types/ui";

export function SkillChip({ label }: SkillChipProps) {
  return (
    <span className="group relative inline-flex cursor-default items-center gap-1.5 border border-neutral-800 bg-[#050505] px-3 py-1 font-mono text-xs text-neutral-400 transition-all hover:border-signal-cyan hover:bg-signal-cyan/5 hover:text-signal-cyan">
      {/* Decorative physical left edge */}
      <span className="absolute left-0 top-0 h-full w-0.5 bg-neutral-700 transition-colors group-hover:bg-signal-cyan" />

      {/* Terminal prompt symbol */}
      <span className="text-[10px] opacity-40 transition-opacity group-hover:animate-pulse group-hover:text-signal-cyan group-hover:opacity-100">
        {'>'}
      </span>

      <span className="uppercase tracking-wider">{label}</span>
    </span>
  );
}