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
      className={`mb-8 flex items-baseline gap-2 border-b pb-3 sm:mb-12 sm:gap-4 sm:pb-4 ${inverted ? "border-neutral-700" : "border-text-primary/20"
        }`}
    >
      <span
        className={`shrink-0 font-mono text-xs sm:text-base ${inverted ? "text-signal-cyan" : "text-signal-red"
          }`}
      >
        {index}
      </span>

      <div className="min-w-0">
        {/* Replacing the <h2> with GlitchText */}
        <GlitchText
          text={title}
          as="h2"
          className={`cyber-heading font-signature text-3xl leading-tight tracking-wide break-words sm:text-5xl md:text-6xl lg:text-7xl ${inverted ? "text-signal-yellow" : "text-text-primary"
            }`}
        />

        {subtitle && (
          <p
            className={`mt-1 font-mono text-xs sm:text-sm ${inverted ? "text-neutral-500" : "text-text-dim"
              }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}