import Link from "next/link";

interface NeonButtonProps {
  href: string;
  /** Plain string only — this text also drives the glitch layer via
   * data-text, so JSX children aren't supported here. */
  children: string;
  variant?: "yellow" | "red";
  external?: boolean;
}

export function NeonButton({
  href,
  children,
  variant = "yellow",
  external = false,
}: NeonButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      data-text={children}
      className={`glitch-btn ${variant === "yellow" ? "glitch-btn-yellow" : "glitch-btn-red"}`}
    >
      {children}
    </Link>
  );
}