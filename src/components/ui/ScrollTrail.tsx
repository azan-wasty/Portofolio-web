"use client";

import { useEffect, useRef } from "react";

interface Streak {
  y: number;
  x: number;
  length: number;
  opacity: number;
  color: string;
}

/**
 * Renders horizontal motion streaks whose length and opacity scale with
 * scroll velocity — a "dash trail" effect. Purely canvas + scroll math,
 * no third-party imagery involved.
 */
export function ScrollTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streaksRef = useRef<Streak[]>([]);
  const lastScrollY = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;
      velocityRef.current = Math.max(
        -60,
        Math.min(60, velocityRef.current + delta * 0.5)
      );

      if (Math.abs(velocityRef.current) > 4) {
        const count = Math.min(3, Math.floor(Math.abs(velocityRef.current) / 8) + 1);
        for (let i = 0; i < count; i++) {
          streaksRef.current.push({
            y: Math.random() * canvas.height,
            x: Math.random() * canvas.width,
            length: Math.min(220, Math.abs(velocityRef.current) * 3),
            opacity: 0.5,
            color: Math.random() > 0.75 ? "255, 46, 46" : "252, 238, 10",
          });
        }
      }

      if (streaksRef.current.length > 60) {
        streaksRef.current = streaksRef.current.slice(-60);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      velocityRef.current *= 0.9;

      streaksRef.current = streaksRef.current.filter((streak) => {
        streak.opacity -= 0.02;
        if (streak.opacity <= 0) return false;

        ctx.strokeStyle = `rgba(${streak.color}, ${streak.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(streak.x, streak.y);
        ctx.lineTo(streak.x + streak.length, streak.y);
        ctx.stroke();
        return true;
      });

      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 mix-blend-screen"
    />
  );
}
