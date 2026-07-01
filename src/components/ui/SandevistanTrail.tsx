"use client";

import { useEffect, useRef } from "react";

interface MousePoint {
  x: number;
  y: number;
  time: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

export function SandevistanTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<MousePoint[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const lastMouseRef = useRef({ x: 0, y: 0 });
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

      // Calculate speed/velocity
      const dx = x - lastMouseRef.current.x;
      const dy = y - lastMouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      speedRef.current = Math.min(100, distance);

      lastMouseRef.current = { x, y };

      // Add to tracking points
      pointsRef.current.push({ x, y, time: now });

      // Generate spark particles if moving fast (Sandevistan charge)
      if (speedRef.current > 15) {
        const particleCount = Math.floor(speedRef.current / 8);
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push({
            x,
            y,
            vx: (Math.random() - 0.5) * (speedRef.current * 0.2),
            vy: (Math.random() - 0.5) * (speedRef.current * 0.2),
            size: Math.random() * 3 + 1,
            color: Math.random() > 0.4 ? "252, 238, 10" : "255, 46, 46", // yellow vs red
            life: 1,
            maxLife: Math.random() * 20 + 10,
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();

      // Prune old points (trail lifespan of ~350ms)
      pointsRef.current = pointsRef.current.filter(
        (p) => now - p.time < 350
      );

      const points = pointsRef.current;
      const isSandeActive = speedRef.current > 20;

      // Draw the Sandevistan Echoes / Afterimages
      if (points.length > 1) {
        // Draw trailing afterimage paths
        // We select key intervals to render distinct "ghosts"
        const ghostIntervals = isSandeActive ? [2, 5, 8, 12] : [3, 7];
        
        ghostIntervals.forEach((offset, idx) => {
          const pointIndex = points.length - 1 - offset;
          if (pointIndex >= 0) {
            const p = points[pointIndex];
            const age = now - p.time;
            const opacity = Math.max(0, 1 - age / 350) * 0.35;
            
            // Draw ghost triangle or holographic crosshair
            ctx.strokeStyle = idx % 2 === 0 ? "rgba(255, 46, 46, " + opacity + ")" : "rgba(252, 238, 10, " + opacity + ")";
            ctx.lineWidth = 1;
            
            // Draw tech-bracket cursor indicator
            ctx.beginPath();
            const size = 8 + idx * 3;
            // Draw brackets
            ctx.moveTo(p.x - size, p.y - size / 2);
            ctx.lineTo(p.x - size, p.y - size);
            ctx.lineTo(p.x - size / 2, p.y - size);
            
            ctx.moveTo(p.x + size, p.y - size / 2);
            ctx.lineTo(p.x + size, p.y - size);
            ctx.lineTo(p.x + size / 2, p.y - size);

            ctx.moveTo(p.x - size, p.y + size / 2);
            ctx.lineTo(p.x - size, p.y + size);
            ctx.lineTo(p.x - size / 2, p.y + size);

            ctx.moveTo(p.x + size, p.y + size / 2);
            ctx.lineTo(p.x + size, p.y + size);
            ctx.lineTo(p.x + size / 2, p.y + size);
            ctx.stroke();

            // Glitch effect: draw connecting tech lines between ghosts if moving fast
            if (isSandeActive && idx > 0) {
              const prevGhost = points[points.length - 1 - ghostIntervals[idx - 1]];
              if (prevGhost) {
                ctx.strokeStyle = `rgba(255, 46, 46, ${opacity * 0.2})`;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(prevGhost.x, prevGhost.y);
                ctx.stroke();
              }
            }
          }
        });

        // Draw standard trailing line connecting points
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = "rgba(252, 238, 10, 0.45)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw primary cursor target
      if (points.length > 0) {
        const current = points[points.length - 1];
        ctx.fillStyle = "#fcee0a";
        ctx.beginPath();
        ctx.arc(current.x, current.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Target dot rings
        ctx.strokeStyle = "#ff2e2e";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(current.x, current.y, 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Render and update particles (Sandevistan exhaust sparks)
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // tiny gravity
        p.life += 1;
        const opacity = Math.max(0, 1 - p.life / p.maxLife);
        
        ctx.fillStyle = `rgba(${p.color}, ${opacity})`;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        
        return p.life < p.maxLife;
      });

      // Decelerate speed tracking
      speedRef.current *= 0.95;

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
