"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, profile } from "@/lib/data/profile";
import NeonButton from "@/components/ui/NeonButton";
export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Inside Navbar.tsx
    const getCleanHref = (href: string) => {
        // If it's a home link, scroll to top
        if (href === "#home" || href === "/") return "/#home";
        // Keep it as a hash link so it scrolls to the section on the same page
        return href;
    };

    return (
        <header className="sticky top-0 z-50 border-b-2 border-[#fcee0a] bg-[#000000]/70">
            {/* 
              Changed from max-w-6xl to w-full to allow edge-to-edge layout.
              Increased side padding slightly on larger screens (sm:px-6).
            */}
            <nav className="flex w-full items-center px-4 py-2 font-signature sm:px-6">

                {/* Menu Button: Anchored directly to the left corner */}
                <NeonButton
                    onClick={() => setIsMenuOpen(true)}
                    aria-expanded={isMenuOpen}
                    aria-label="Open cyberpunk interface drawer"
                    size="compact"
                    pulse
                >
                    MENU
                </NeonButton>


                {/* Desktop Nav Links: ml-auto pushes this entire block to the far right corner */}
                <ul className="ml-auto hidden gap-6 font-mono text-sm uppercase tracking-wider text-[#fcee0a] sm:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={getCleanHref(link.href)}
                                className="group relative py-1 transition-colors hover:text-white"
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
                className={`fixed inset-0 z-[100] bg-void-raised/85 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            >
                {/* SIDEBAR DRAWER */}
                <div
                    className={`absolute left-0 top-0 flex h-full w-full max-w-[320px] flex-col justify-between border-r-4 border-[#000000] bg-[#fcee0a] p-6 font-mono shadow-2xl transition-transform duration-500 ease-out select-none ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-16 border-b border-l border-[#000000]/10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 border-r border-t border-signal-red/40" />

                    <div>
                        <div className="mb-6 flex items-center justify-between border-b border-[#000000]/20 pb-3">
                            <div className="flex flex-col">
                                <span className="font-mono text-[10px] text-signal-red">SECURITY LAYER: EXT-05</span>
                                <span className="font-mono text-sm tracking-wider text-[#000000] uppercase">
                                    HUD NAVIGATION
                                </span>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="flex h-6 w-6 items-center justify-center border border-[#000000]/40 text-[#000000] transition-colors hover:border-signal-red hover:text-signal-red"
                                aria-label="Close menu"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Sidebar Drawer Navigation */}
                        <nav className="game-menu-item flex flex-col">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.href}
                                    href={getCleanHref(link.href)}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="group relative flex items-center gap-3 px-2 py-2.5 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000000]"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0 z-0 origin-left -skew-x-12 scale-x-0 bg-[#000000] transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                                    />
                                    <span className="relative z-10 shrink-0 font-mono text-xs text-signal-red opacity-70 transition-opacity duration-200 group-hover:text-[#fcee0a] group-hover:opacity-100 group-focus-visible:text-[#fcee0a] group-focus-visible:opacity-100">
                                        {`0${idx + 1}//`}
                                    </span>
                                    <span className="relative z-10 origin-left font-signature text-lg tracking-wide text-[#000000] uppercase transition-all duration-200 group-hover:scale-105 group-hover:text-[#fcee0a] group-focus-visible:scale-105 group-focus-visible:text-[#fcee0a]">
                                        {link.label}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Diagnostics Panel */}
                    <div className="mt-6 space-y-3 border-t border-[#000000]/20 pt-4">
                        <h4 className="font-mono text-sm tracking-wider text-[#000000] uppercase">
                            SYSTEM DIAGNOSTICS
                        </h4>
                        <div className="grid grid-cols-2 gap-2 font-mono text-[10px] tracking-wider text-[#000000]/60">
                            <div className="flex justify-between border-b border-[#000000]/10 pb-1">
                                <span>OS VER:</span>
                                <span className="font-display tracking-wider text-[#000000]">V4.2</span>
                            </div>
                            <div className="flex justify-between border-b border-[#000000]/10 pb-1">
                                <span>LINK:</span>
                                <span className="font-display tracking-wider text-signal-red">CONN</span>
                            </div>
                            <div className="flex justify-between border-b border-[#000000]/10 pb-1">
                                <span>BUFFER:</span>
                                <span className="font-display tracking-wider text-[#000000]">99.8%</span>
                            </div>
                            <div className="flex justify-between border-b border-[#000000]/10 pb-1">
                                <span>SANDE:</span>
                                <span className="font-display tracking-wider text-[#000000]">READY</span>
                            </div>
                        </div>
                        <div className="border border-[#000000]/10 bg-[#000000]/5 p-2">
                            <div className="flex items-center gap-2 font-display text-[10px] text-signal-red">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-red" />
                                <span>TERMINAL_DECRYPT: IN_PROGRESS</span>
                            </div>
                            <pre className="mt-1 overflow-hidden text-[10px] leading-tight text-[#000000]/70">
                                {"[SYS] IP: 127.0.0.1\n[SEC] RSA_4096\n[STAT] MEM_DUMP_OK\n[USR] " + profile.name.toUpperCase().replace(" ", "_")}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}