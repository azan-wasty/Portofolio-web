import type { GlitchTextProps } from "@/types/ui";

export function GlitchText({
  text,
  as = "h1",
  className = "",
}: GlitchTextProps) {
  const Tag = as;

  return (
    <Tag data-text={text} className={`glitch ${className}`}>
      {text}
    </Tag>
  );
}