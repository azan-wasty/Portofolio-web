import type { SectionHeadingProps } from "@/types/ui";
import { GlitchText } from "@/components/ui/GlitchText"; // Ensure this path is correct

export function SectionHeading({
  index,
  title,
  subtitle,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 flex items-baseline gap-4 border-b pb-4 ${inverted ? "border-neutral-700" : "border-text-primary/20"
        }`}
    >
      <span
        className={`font-mono text-base ${inverted ? "text-signal-cyan" : "text-signal-red"
          }`}
      >
        {index}
      </span>

      <div>
        {/* Replacing the <h2> with GlitchText */}
        <GlitchText
          text={title}
          as="h2"
          className={`cyber-heading font-signature text-6xl tracking-wide sm:text-7xl ${inverted ? "text-signal-yellow" : "text-text-primary"
            }`}
        />

        {subtitle && (
          <p
            className={`mt-1 font-mono text-sm ${inverted ? "text-neutral-500" : "text-text-dim"
              }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}