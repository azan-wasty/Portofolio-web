"use client";

import { useEffect, useRef } from "react";

// Local interfaces to ensure we don't break your existing types
interface SandeGhost {
  x: number;
  y: number;
  vx: number;
  vy: number;
  time: number;
  glitchSeed: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
  maxLife: number;
  size: number;
}

export function SandevistanTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const ghostsRef = useRef<SandeGhost[]>([]);
  const sparksRef = useRef<Spark[]>([]);

  const lastMouseRef = useRef({ x: 0, y: 0, time: 0 });
  const lastGhostDropRef = useRef({ x: 0, y: 0 });
  const speedRef = useRef(0);
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

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const x = e.clientX;
      const y = e.clientY;

      // Calculate true velocity
      const dt = now - lastMouseRef.current.time;
      const dx = x - lastMouseRef.current.x;
      const dy = y - lastMouseRef.current.y;

      // Avoid infinite speed on first frame
      const vx = dt > 0 ? (dx / dt) * 16 : 0;
      const vy = dt > 0 ? (dy / dt) * 16 : 0;

      const speed = Math.sqrt(vx * vx + vy * vy);
      speedRef.current = speed;

      lastMouseRef.current = { x, y, time: now };

      // SANDEVISTAN TRIGGER: Only drop ghosts if moving fast enough
      if (speed > 12) {
        const distFromLastGhost = Math.sqrt(
          Math.pow(x - lastGhostDropRef.current.x, 2) +
          Math.pow(y - lastGhostDropRef.current.y, 2)
        );

        // Drop a discrete afterimage every 35 pixels
        if (distFromLastGhost > 35) {
          ghostsRef.current.push({
            x,
            y,
            vx,
            vy,
            time: now,
            glitchSeed: Math.random()
          });
          lastGhostDropRef.current = { x, y };
        }

        // Generate sparks bursting in the OPPOSITE direction of movement
        if (Math.random() > 0.4) {
          sparksRef.current.push({
            x,
            y,
            vx: -vx * 0.2 + (Math.random() - 0.5) * 4,
            vy: -vy * 0.2 + (Math.random() - 0.5) * 4,
            size: Math.random() * 2 + 1,
            color: Math.random() > 0.5 ? "#fcee0a" : "#00ffff", // Yellow or Cyan
            life: 0,
            maxLife: Math.random() * 15 + 10,
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Helper to draw a sleek, angular Cyberpunk cursor shape
    const drawCursorShape = (context: CanvasRenderingContext2D, px: number, py: number) => {
      context.beginPath();
      context.moveTo(px, py);
      context.lineTo(px + 12, py + 12);
      context.lineTo(px + 5, py + 12);
      context.lineTo(px, py + 20);
      context.closePath();
      context.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();

      // 1. RENDER GHOSTS (The core Sandevistan effect)
      // Filter out ghosts older than 600ms
      ghostsRef.current = ghostsRef.current.filter(g => now - g.time < 600);

      ghostsRef.current.forEach((g) => {
        const age = now - g.time;
        const lifeProgress = age / 600;
        // Fade out exponentially for a snappier look
        const opacity = Math.pow(1 - lifeProgress, 2) * 0.8;

        // Chromatic Aberration: The faster you were moving, the further the colors split
        const splitFactor = 1.5;
        const splitX = g.vx * splitFactor * lifeProgress;
        const splitY = g.vy * splitFactor * lifeProgress;

        ctx.globalAlpha = opacity;

        // --- CYAN LAYER (Offset backwards) ---
        ctx.fillStyle = "#00ffff";
        drawCursorShape(ctx, g.x - splitX, g.y - splitY);

        // --- RED LAYER (Offset forwards) ---
        ctx.fillStyle = "#ff2e2e";
        drawCursorShape(ctx, g.x + splitX, g.y + splitY);

        // --- YELLOW LAYER (Center / Core) ---
        ctx.fillStyle = "#fcee0a";
        drawCursorShape(ctx, g.x, g.y);

        // --- HORIZONTAL GLITCH SLICES ---
        // Add random digital horizontal scanlines tearing through the ghost
        if (g.glitchSeed > 0.5) {
          ctx.fillStyle = g.glitchSeed > 0.75 ? "#00ffff" : "#fcee0a";
          ctx.globalAlpha = opacity * 0.5;
          const yOffset = (g.glitchSeed * 40) - 20;
          ctx.fillRect(g.x - 20, g.y + yOffset, 40, 2);
          ctx.fillRect(g.x - 30, g.y + yOffset + 5, 60, 1);
        }
      });

      // 2. RENDER SPARKS (Exhaust particles)
      ctx.globalAlpha = 1;
      sparksRef.current = sparksRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.9; // Friction
        p.vy *= 0.9;
        p.life += 1;

        const sparkOpacity = Math.max(0, 1 - p.life / p.maxLife);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = sparkOpacity;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        return p.life < p.maxLife;
      });

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
    />
  );
}