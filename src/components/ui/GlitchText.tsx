interface GlitchTextProps {
  text: string;
  as?: "h1" | "h2" | "span";
  className?: string;
}

export function GlitchText({ text, as = "h1", className = "" }: GlitchTextProps) {
  const Tag = as;
  return (
    <Tag data-text={text} className={`glitch ${className}`}>
      {text}
    </Tag>
  );
}
