"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, profile } from "@/lib/data/profile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-text-primary bg-void/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="font-display text-sm tracking-[0.2em] text-signal-red font-bold hover:text-void-raised transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {profile.name.toUpperCase()}
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-wider text-text-dim sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-signal-red relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-signal-red transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Cyberpunk HUD Launcher Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-label="Open cyberpunk interface drawer"
          className="flex h-10 px-3 items-center justify-center gap-2 border-2 border-text-primary text-text-primary hover:bg-void-raised hover:text-signal-yellow hover:border-void-raised transition-colors font-mono text-xs uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-red"></span>
          </span>
          MENU
        </button>
      </nav>

      {/* Slide-In Cyberpunk HUD Drawer Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-void-raised/85 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[420px] bg-void-raised border-l-4 border-signal-yellow p-8 shadow-2xl transition-transform duration-500 ease-out flex flex-col justify-between font-mono select-none ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Corner decorations */}
          <div className="absolute right-0 bottom-0 w-24 h-24 border-r border-b border-signal-cyan/20 pointer-events-none" />
          <div className="absolute left-0 top-0 w-24 h-24 border-l border-t border-signal-red/20 pointer-events-none" />
          
          <div>
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-neutral-700 pb-4 mb-8">
              <div className="flex flex-col">
                <span className="text-[10px] text-signal-red">SECURITY LAYER: EXT-05</span>
                <span className="font-display text-sm tracking-wider text-signal-yellow uppercase">
                  HUD NAVIGATION
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="h-8 w-8 flex items-center justify-center border border-neutral-700 hover:border-signal-red text-neutral-500 hover:text-signal-red transition-colors"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Menu Links */}
            <nav className="space-y-6">
              {navLinks.map((link, idx) => (
                <div key={link.href} className="group relative flex items-center">
                  <span className="text-signal-cyan text-xs mr-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    0{idx + 1}//
                  </span>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-2xl tracking-widest text-neutral-300 group-hover:text-signal-yellow transition-colors uppercase relative"
                  >
                    {link.label}
                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-signal-yellow group-hover:h-5 transition-all duration-200" />
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Diagnostics / System Status Widget */}
          <div className="border-t border-neutral-700 pt-6 mt-8 space-y-4">
            <h4 className="text-xs text-signal-cyan uppercase tracking-widest">
              SYSTEM DIAGNOSTICS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-500">
              <div className="flex justify-between border-b border-neutral-800 pb-1">
                <span>OS VERSION:</span>
                <span className="text-neutral-300">EDGERUN_V4.2</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-1">
                <span>COGNITIVE LINK:</span>
                <span className="text-signal-red font-bold">CONNECTED</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-1">
                <span>BUFFER RUN:</span>
                <span className="text-neutral-300">99.82%</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-1">
                <span>SANDEVISTAN:</span>
                <span className="text-signal-yellow">READY</span>
              </div>
            </div>
            <div className="bg-neutral-900 p-3 border border-neutral-800">
              <div className="text-[9px] text-signal-red flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-red animate-pulse" />
                <span>TERMINAL_DECRYPT: IN_PROGRESS</span>
              </div>
              <pre className="text-[8px] text-neutral-600 mt-2 overflow-hidden leading-tight">
                {"[SYSTEM] HOST IP: 127.0.0.1\n[SECURE] ENCRYPT_ALGO: RSA_4096\n[STATUS] MEM_DUMP_OK\n[USER] " + profile.name.toUpperCase().replace(" ", "_")}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
