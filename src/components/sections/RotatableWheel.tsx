"use client";

import { useEffect, useRef, useState, TouchEvent } from "react";
import { projects } from "@/lib/data/projects";
import { SkillChip } from "@/components/ui/SkillChip";
import { NeonButton } from "@/components/ui/NeonButton";
import type { Project } from "@/types";

interface RotatableWheelProps {
  onActiveProjectChange?: (project: Project) => void;
}

export function RotatableWheel({ onActiveProjectChange }: RotatableWheelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const glitchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalItems = projects.length;
  const theta = 360 / totalItems;
  const radius = Math.round(180 / Math.tan(Math.PI / totalItems));

  const triggerGlitch = () => {
    if (glitchTimeout.current) clearTimeout(glitchTimeout.current);
    setIsGlitching(true);
    glitchTimeout.current = setTimeout(() => setIsGlitching(false), 260);
  };

  const goTo = (index: number) => {
    const normalized = ((index % totalItems) + totalItems) % totalItems;
    if (normalized === activeIndex) return;
    setActiveIndex(normalized);
    triggerGlitch();
  };

  const handleNext = () => {
    setRotation((r) => r - theta);
    goTo(activeIndex + 1);
  };

  const handlePrev = () => {
    setRotation((r) => r + theta);
    goTo(activeIndex - 1);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = rotation;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    const currentRot = startRotation.current + deltaX * 0.18;
    setRotation(currentRot);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const snappedIndex = Math.round(-rotation / theta) % totalItems;
    const normalizedIndex = (snappedIndex + totalItems) % totalItems;

    if (normalizedIndex !== activeIndex) {
      goTo(normalizedIndex);
    }

    setRotation(-snappedIndex * theta);
  };

  const handleTouchStart = (e: TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startRotation.current = rotation;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].clientX - startX.current;
    const currentRot = startRotation.current + deltaX * 0.25;
    setRotation(currentRot);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotation]);

  useEffect(() => {
    return () => {
      if (glitchTimeout.current) clearTimeout(glitchTimeout.current);
    };
  }, []);

  const activeProject = projects[activeIndex];

  // Tell the parent (Projects.tsx) which project is active so it can drive
  // the full-section background image. Fires on mount too.
  useEffect(() => {
    onActiveProjectChange?.(activeProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject]);

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > 5) {
      e.preventDefault();
      if (e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-12 select-none">
      <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full border border-dashed border-signal-red/20 flex items-center justify-center animate-spin [animation-duration:120s] z-0">
        <div className="h-[340px] w-[340px] rounded-full border border-signal-yellow/15 flex items-center justify-center">
          <div className="h-[280px] w-[280px] rounded-full border border-void-line" />
        </div>
      </div>

      <div className="absolute top-2 font-mono text-[10px] text-signal-red/50 uppercase tracking-widest flex gap-8 z-10">
        <span>DEG: {Math.round(rotation % 360)}°</span>
        <span>
          INDEX: {activeIndex + 1}/{totalItems}
        </span>
        <span>SYSTEM: {isGlitching ? "GLITCH" : "RUNNING"}</span>
      </div>

      <div
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        className="relative flex h-[300px] w-full max-w-[440px] cursor-grab items-center justify-center active:cursor-grabbing [perspective:1000px] z-10 overflow-hidden"
      >
        <div
          className="relative h-[220px] w-[300px] transition-transform duration-500 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`,
          }}
        >
          {projects.map((project, i) => {
            const isCurrent = i === activeIndex;
            return (
              <div
                key={project.id}
                className={`absolute inset-0 overflow-hidden border shadow-2xl transition-all duration-300 backface-hidden ${isCurrent && isGlitching ? "wheel-glitch" : ""
                  }`}
                style={{
                  transform: `rotateY(${i * theta}deg) translateZ(${radius}px)`,
                  borderColor: isCurrent
                    ? "var(--color-signal-yellow)"
                    : "var(--color-void-line)",
                  opacity: isCurrent ? 1 : 0.35,
                  boxShadow: isCurrent
                    ? "0 0 15px rgba(252, 238, 10, 0.15)"
                    : "none",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
                }}
              >
                <div className="relative z-10 flex h-full flex-col justify-between border border-white/15 p-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-signal-red">
                        ID-{project.id.slice(0, 4).toUpperCase()}
                      </span>
                      <span className="font-mono text-[10px] text-white/50">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display mt-2 text-md tracking-wider text-white uppercase truncate [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] text-signal-yellow line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/25 bg-black/30 px-1.5 py-0.5 font-mono text-[9px] text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-6 z-10">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center border border-void-line bg-void-raised text-signal-yellow hover:border-signal-yellow hover:text-signal-yellow font-mono text-sm active:bg-void"
          aria-label="Previous Project"
        >
          &lt;
        </button>

        <div className="flex h-1 w-32 bg-void-line relative">
          <div
            className="h-full bg-signal-yellow transition-all duration-300"
            style={{
              width: `${((activeIndex + 1) / totalItems) * 100}%`,
            }}
          />
        </div>

        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center border border-void-line bg-void-raised text-signal-yellow hover:border-signal-yellow hover:text-signal-yellow font-mono text-sm active:bg-void"
          aria-label="Next Project"
        >
          &gt;
        </button>
      </div>

      <div
        className={`mt-8 w-full max-w-2xl self-start border border-signal-yellow/20 bg-void-raised/95 p-6 relative z-10 transition-all duration-300 ${isGlitching ? "wheel-glitch" : ""
          }`}
      >
        <div className="absolute left-0 top-0 h-1 w-12 bg-signal-yellow" />
        <div className="absolute right-0 bottom-0 h-1 w-12 bg-signal-red" />

        <header className="mb-4">
          <div className="flex items-center gap-3">
            <h4 className="font-display text-xl tracking-wider text-signal-yellow uppercase">
              {activeProject.title}
            </h4>
            <span className="font-mono text-xs text-signal-red bg-signal-red/10 border border-signal-red/20 px-2 py-0.5">
              ACTIVE NODE
            </span>
          </div>
          <p className="mt-1 font-mono text-xs text-signal-yellow/70">
            {activeProject.tagline}
          </p>
        </header>

        <p className="mb-4 font-mono text-sm leading-relaxed text-signal-yellow/80">
          {activeProject.description}
        </p>

        <h5 className="font-display text-xs uppercase tracking-widest text-signal-red mb-2">
          Project Highlights
        </h5>
        <ul className="mb-5 space-y-1.5 font-mono text-xs text-signal-yellow/80">
          {activeProject.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="text-signal-yellow">›</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mb-6 flex flex-wrap gap-2">
          {activeProject.stack.map((tech) => (
            <SkillChip key={tech} label={tech} />
          ))}
        </div>

        {activeProject.repoUrl && (
          <NeonButton href={activeProject.repoUrl} variant="yellow" external>
            INITIALIZE REPO CONNECTION
          </NeonButton>
        )}
      </div>
    </div>
  );
}