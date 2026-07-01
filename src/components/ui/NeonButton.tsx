import Link from "next/link";
import type { ReactNode } from "react";

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  variant?: "cyan" | "magenta";
  external?: boolean;
}

export function NeonButton({
  href,
  children,
  variant = "cyan",
  external = false,
}: NeonButtonProps) {
  const colorClass =
    variant === "cyan"
      ? "border-signal-cyan text-signal-cyan hover:bg-signal-cyan hover:text-void hover:shadow-[0_0_20px_var(--color-signal-cyan)]"
      : "border-signal-magenta text-signal-magenta hover:bg-signal-magenta hover:text-void hover:shadow-[0_0_20px_var(--color-signal-magenta)]";

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
