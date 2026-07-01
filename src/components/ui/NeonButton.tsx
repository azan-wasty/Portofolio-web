import Link from "next/link";
import type { ReactNode } from "react";

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  variant?: "yellow" | "red";
  external?: boolean;
}

export function NeonButton({
  href,
  children,
  variant = "yellow",
  external = false,
}: NeonButtonProps) {
  const colorClass =
    variant === "yellow"
      ? "border-signal-yellow text-signal-yellow hover:bg-signal-yellow hover:text-void hover:shadow-[0_0_20px_var(--color-signal-yellow)]"
      : "border-signal-red text-signal-red hover:bg-signal-red hover:text-void hover:shadow-[0_0_20px_var(--color-signal-red)]";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 border px-5 py-2.5 font-mono text-sm uppercase tracking-wider transition-all duration-200 ${colorClass}`}
    >
      {children}
    </Link>
  );
}
