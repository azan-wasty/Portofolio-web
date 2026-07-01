import Link from "next/link";
import type { ReactNode } from "react";

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  variant?: "yellow" | "red" | "cyan";
  external?: boolean;
}

export function NeonButton({
  href,
  children,
  variant = "red",
  external = false,
}: NeonButtonProps) {
  const colorMap = {
    yellow:
      "border-text-primary text-text-primary hover:bg-text-primary hover:text-signal-yellow hover:shadow-[0_0_20px_rgba(8,8,10,0.5)]",
    red:
      "border-signal-red text-signal-red hover:bg-signal-red hover:text-void-raised hover:shadow-[0_0_20px_var(--color-signal-red)]",
    cyan:
      "border-signal-cyan text-signal-cyan hover:bg-signal-cyan hover:text-void-raised hover:shadow-[0_0_20px_var(--color-signal-cyan)]",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 border-2 px-5 py-2.5 font-mono text-sm uppercase tracking-wider transition-all duration-200 ${colorMap[variant]}`}
    >
      {children}
    </Link>
  );
}
