import type { SkillChipProps } from "@/types/ui";

const ACCENT_CLASSES: Record<
  NonNullable<SkillChipProps["accent"]>,
  { border: string; bg: string; text: string; bar: string }
> = {
  yellow: {
    border: "hover:border-signal-yellow",
    bg: "hover:bg-signal-yellow/5",
    text: "hover:text-signal-yellow",
    bar: "group-hover:bg-signal-yellow",
  },
  red: {
    border: "hover:border-signal-red",
    bg: "hover:bg-signal-red/5",
    text: "hover:text-signal-red",
    bar: "group-hover:bg-signal-red",
  },
  cyan: {
    border: "hover:border-signal-cyan",
    bg: "hover:bg-signal-cyan/5",
    text: "hover:text-signal-cyan",
    bar: "group-hover:bg-signal-cyan",
  },
};

export function SkillChip({ label, accent = "cyan" }: SkillChipProps) {
  const { border, bg, text, bar } = ACCENT_CLASSES[accent];

  return (
    <span
      className={`group relative inline-flex cursor-default items-center gap-1.5 border border-neutral-800 bg-[#050505] px-3 py-1 font-mono text-xs text-neutral-400 transition-all hover:-translate-y-0.5 ${border} ${bg} ${text}`}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%)",
      }}
    >
      {/* Decorative physical left edge */}
      <span
        className={`absolute left-0 top-0 h-full w-0.5 bg-neutral-700 transition-colors ${bar}`}
      />

      {/* Terminal prompt symbol */}
      <span className="text-[10px] opacity-40 transition-opacity group-hover:animate-pulse group-hover:opacity-100">
        {">"}
      </span>

      <span className="uppercase tracking-wider">{label}</span>
    </span>
  );
}