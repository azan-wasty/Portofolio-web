"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, profile } from "@/lib/data/profile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-void-line bg-void/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="font-display text-sm tracking-[0.2em] text-signal-cyan"
          onClick={() => setIsMenuOpen(false)}
        >
          {profile.name.toUpperCase()}
        </Link>

        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-wider text-text-dim sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-signal-magenta"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-void-line sm:hidden"
        >
          <span
            className={`h-px w-5 bg-signal-cyan transition-transform ${
              isMenuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-signal-cyan transition-transform ${
              isMenuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {isMenuOpen && (
        <ul className="flex flex-col gap-4 border-t border-void-line px-6 py-6 font-mono text-sm uppercase tracking-wider text-text-dim sm:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="transition-colors hover:text-signal-magenta"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
