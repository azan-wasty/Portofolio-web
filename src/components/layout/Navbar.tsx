"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, profile } from "@/lib/data/profile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* TOP BAR: Background changed to Black (#000000) and border changed to Yellow (#fcee0a) */
    <header className="sticky top-0 z-50 border-b-2 border-[#fcee0a] bg-[#000000]">
      <nav className="mx-auto flex max-w-6xl items-center justify-start gap-10 px-6 py-4">
        {/* Menu Button: Flipped to yellow text/border, fills with yellow on hover */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-label="Open cyberpunk interface drawer"
          className="flex h-10 px-3 items-center justify-center gap-2 border-2 border-[#fcee0a] text-[#fcee0a] hover:bg-[#fcee0a] hover:text-[#000000] transition-colors font-mono text-xs uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-red"></span>
          </span>
          MENU
        </button>

        {/* Logo/Name Link: Text changed from black to yellow */}
        <Link
          href="#home"
          className="font-signature text-base tracking-[0.2em] text-[#fcee0a] hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {profile.name.toUpperCase()}
        </Link>

        {/* Desktop Nav Links: Text changed from black to yellow */}
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-wider text-[#fcee0a] sm:flex ml-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-white relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-signal-red transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-void-raised/85 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* SIDEBAR DRAWER: Kept Black with Yellow accents */}
        <div
          className={`absolute left-0 top-0 h-full w-full max-w-[420px] bg-[#000000] border-r-4 border-[#fcee0a] p-8 shadow-2xl transition-transform duration-500 ease-out flex flex-col justify-between font-mono select-none ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute left-0 bottom-0 w-24 h-24 border-l border-b border-[#fcee0a]/10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 h-24 border-r border-t border-signal-red/40 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-[#fcee0a]/20 pb-4 mb-8">
              <div className="flex flex-col">
                <span className="text-[10px] text-signal-red font-bold">SECURITY LAYER: EXT-05</span>
                <span className="font-display text-sm tracking-wider text-[#fcee0a] uppercase">
                  HUD NAVIGATION
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="h-8 w-8 flex items-center justify-center border border-[#fcee0a]/40 hover:border-signal-red text-[#fcee0a] hover:text-signal-red transition-colors"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="game-menu-item flex flex-col">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative flex items-center gap-4 px-2 py-4 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcee0a]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 z-0 origin-left -skew-x-12 scale-x-0 bg-[#fcee0a] transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                  <span className="relative z-10 shrink-0 font-mono text-xs text-signal-red opacity-70 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:text-[#000000] group-focus-visible:text-[#000000]">
                    {`0${idx + 1}//`}
                  </span>
                  <span className="relative z-10 origin-left font-signature text-2xl tracking-wide text-[#fcee0a] uppercase transition-all duration-200 group-hover:scale-110 group-hover:text-[#000000] group-focus-visible:scale-110 group-focus-visible:text-[#000000]">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-[#fcee0a]/20 pt-6 mt-8 space-y-4">
            <h4 className="text-xs text-[#fcee0a]/80 uppercase tracking-widest font-bold">
              SYSTEM DIAGNOSTICS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-[#fcee0a]/60">
              <div className="flex justify-between border-b border-[#fcee0a]/10 pb-1">
                <span>OS VERSION:</span>
                <span className="text-[#fcee0a] font-bold">EDGERUN_V4.2</span>
              </div>
              <div className="flex justify-between border-b border-[#fcee0a]/10 pb-1">
                <span>COGNITIVE LINK:</span>
                <span className="text-signal-red font-bold">CONNECTED</span>
              </div>
              <div className="flex justify-between border-b border-[#fcee0a]/10 pb-1">
                <span>BUFFER RUN:</span>
                <span className="text-[#fcee0a] font-bold">99.82%</span>
              </div>
              <div className="flex justify-between border-b border-[#fcee0a]/10 pb-1">
                <span>SANDEVISTAN:</span>
                <span className="text-[#fcee0a] font-bold">READY</span>
              </div>
            </div>
            <div className="bg-[#fcee0a]/5 p-3 border border-[#fcee0a]/10">
              <div className="text-[9px] text-signal-red flex items-center gap-2 font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-red animate-pulse" />
                <span>TERMINAL_DECRYPT: IN_PROGRESS</span>
              </div>
              <pre className="text-[8px] text-[#fcee0a]/70 mt-2 overflow-hidden leading-tight">
                {"[SYSTEM] HOST IP: 127.0.0.1\n[SECURE] ENCRYPT_ALGO: RSA_4096\n[STATUS] MEM_DUMP_OK\n[USER] " + profile.name.toUpperCase().replace(" ", "_")}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}