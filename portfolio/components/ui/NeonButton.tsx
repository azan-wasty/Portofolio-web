"use client";

import Link from "next/link";

interface BaseProps {
  children: string;
  variant?: "yellow" | "red";
  size?: "default" | "compact";
  /** Shows a small ping/pulse dot before the label — used by the Menu trigger. */
  pulse?: boolean;
}

interface LinkModeProps extends BaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
}

interface ButtonModeProps extends BaseProps {
  href?: never;
  external?: never;
  onClick: () => void;
  "aria-expanded"?: boolean;
  "aria-label"?: string;
}

type NeonButtonProps = LinkModeProps | ButtonModeProps;

function PulseDot() {
  return (
    <span className="glitch-btn-pulse" aria-hidden="true">
      <span className="glitch-btn-pulse-ping" />
      <span className="glitch-btn-pulse-dot" />
    </span>
  );
}

export default function NeonButton(props: NeonButtonProps) {
  const { children, variant = "yellow", size = "default", pulse = false } = props;
  const className = `glitch-btn glitch-btn-${variant}${size === "compact" ? " glitch-btn-compact" : ""
    }`;

  if ("onClick" in props && props.onClick) {
    return (
      <button
        type="button"
        onClick={props.onClick}
        aria-expanded={props["aria-expanded"]}
        aria-label={props["aria-label"]}
        data-text={children}
        className={className}
      >
        {pulse && <PulseDot />}
        {children}
      </button>
    );
  }

  return (
    <Link
      href={(props as LinkModeProps).href}
      target={(props as LinkModeProps).external ? "_blank" : undefined}
      rel={(props as LinkModeProps).external ? "noopener noreferrer" : undefined}
      data-text={children}
      className={className}
    >
      {pulse && <PulseDot />}
      {children}
    </Link>
  );
}