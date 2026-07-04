"use client";

import { useEffect, useRef, useState, TouchEvent } from "react";
import { projects } from "@/lib/data/projects";
import { SkillChip } from "@/components/ui/SkillChip";
import { NeonButton } from "@/components/ui/NeonButton";


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

  // Scaled the radius outwards to handle the much wider chip sizes perfectly
  const radius = Math.round(340 / Math.tan(Math.PI / totalItems));

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
    const currentRot = startRotation.current + deltaX * 0.12; // Smoothed down drag sensitivity for large items
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
    const currentRot = startRotation.current + deltaX * 0.18;
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
    <div className="relative flex flex-col items-center justify-center py-6 select-none w-full">
      {/* Extended background decorative rings out wider */}
      <div className="pointer-events-none absolute h-[580px] w-[580px] rounded-full border border-dashed border-signal-red/10 flex items-center justify-center animate-spin [animation-duration:160s] z-0">
        <div className="h-[500px] w-[500px] rounded-full border border-signal-yellow/5 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full border border-void-line/40" />
        </div>
      </div>

      <div className="absolute top-2 font-mono text-[10px] text-signal-red/50 uppercase tracking-widest flex gap-8 z-10">
        <span>DEG: {Math.round(rotation % 360)}°</span>
        <span>
          INDEX: {activeIndex + 1}/{totalItems}
        </span>
        <span>SYSTEM: {isGlitching ? "GLITCH" : "RUNNING"}</span>
      </div>

      {/* Expanded view container bounds: max-w-[850px] h-[440px] */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        className="relative flex h-[440px] w-full max-w-[850px] cursor-grab items-center justify-center active:cursor-grabbing [perspective:1200px] z-10 overflow-hidden"
      >
        {/* Massive Card Base Layout: w-[560px] h-[340px] */}
        <div
          className="relative h-[340px] w-[560px] transition-transform duration-500 ease-out"
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
                className={`absolute inset-0 transition-all duration-300 backface-hidden p-[2px] ${isCurrent && isGlitching ? "wheel-glitch" : ""}`}
                style={{
                  transform: `rotateY(${i * theta}deg) translateZ(${radius}px)`,
                  opacity: isCurrent ? 1 : 0.2, // Drop inactive cards further into the shadows
                  backgroundColor: isCurrent ? "var(--color-signal-yellow)" : "var(--color-void-line)",
                  /* Expanded the clip corner cut size to 35px to match the scale */
                  clipPath: "polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)",
                  filter: isCurrent ? "drop-shadow(0px 0px 20px rgba(252, 238, 10, 0.35))" : "none",
                }}
              >
                {/* The Inner Image Layer */}
                <div
                  className="relative h-full w-full bg-void-raised overflow-hidden"
                  style={{
                    clipPath: "polygon(34px 0, 100% 0, 100% calc(100% - 34px), calc(100% - 34px) 100%, 0 100%, 0 34px)",
                    backgroundImage: project.image ? `url(${project.image})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Subtle clean cinematic darken layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />

                  {/* Internal layout scales cleanly inside the large card frame */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-signal-yellow bg-black/70 px-3 py-1 border border-signal-yellow/30 tracking-widest">
                        NODE // {project.id.slice(0, 4).toUpperCase()}
                      </span>
                      <span className="font-mono text-sm font-bold text-white/50 bg-black/60 px-2 py-0.5">
                        [ 0{i + 1} ]
                      </span>
                    </div>

                    <div className="max-w-md">
                      <h3 className="font-display text-2xl tracking-wide text-white uppercase [text-shadow:0_3px_6px_rgba(0,0,0,0.9)]">
                        {project.title}
                      </h3>
                      <p className="mt-2 font-mono text-xs text-signal-yellow uppercase tracking-wider bg-black/60 px-2 py-1 inline-block border-l-2 border-signal-yellow">
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wheel Navigation Controls */}
      <div className="mt-4 flex items-center gap-6 z-10">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center bg-void-raised text-signal-yellow font-mono text-sm active:bg-void transition-colors"
          style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)", backgroundColor: "var(--color-void-line)" }}
          aria-label="Previous Project"
        >
          <span className="flex h-[36px] w-[36px] items-center justify-center bg-void-raised hover:bg-void" style={{ clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)" }}>
            &lt;
          </span>
        </button>

        <div className="flex h-1 w-48 bg-void-line relative overflow-hidden" style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}>
          <div
            className="h-full bg-signal-yellow transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / totalItems) * 100}%` }}
          />
        </div>

        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center bg-void-raised text-signal-yellow font-mono text-sm active:bg-void transition-colors"
          style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)", backgroundColor: "var(--color-void-line)" }}
          aria-label="Next Project"
        >
          <span className="flex h-[36px] w-[36px] items-center justify-center bg-void-raised hover:bg-void" style={{ clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)" }}>
            &gt;
          </span>
        </button>
      </div>

      {/* Details Box below the wheel */}
      <div className={`mt-8 w-full max-w-2xl self-center bg-void-raised/95 p-[1px] relative z-10 transition-all duration-300 ${isGlitching ? "wheel-glitch" : ""}`} style={{ backgroundColor: "var(--color-signal-yellow)", clipPath: "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)" }}>
        <div className="h-full w-full bg-void-raised p-6" style={{ clipPath: "polygon(29px 0, 100% 0, 100% calc(100% - 29px), calc(100% - 29px) 100%, 0 100%, 0 29px)" }}>
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
    </div>
  );
}