"use client";

/**
 * Fixed, full-viewport ambient background: a slowly animated circuit grid
 * plus a soft drifting glow. Pure CSS (no canvas/JS loop needed since
 * nothing here reacts to scroll or input) — cheap to keep running behind
 * everything.
 */
export function CyberGrid() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void"
        >
            {/* Base grid lines */}
            <div className="cyber-grid-lines absolute inset-0" />

            {/* Drifting radial glows, yellow + red, very low opacity */}
            <div className="cyber-glow-yellow absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full" />
            <div className="cyber-glow-red absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full" />

            {/* Fade the whole thing toward the edges so it never fights content */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-void)_75%)]" />
        </div>
    );
}
