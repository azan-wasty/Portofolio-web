"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/types";
import { useWheelGestures } from "@/hooks/useWheelGestures";
import { ProjectDetailsBox } from "./ProjectDetailsBox";
import { WheelControls } from "./WheelControls";

interface RotatableWheelProps {
  onActiveProjectChange?: (project: Project) => void;
}

export function RotatableWheel({ onActiveProjectChange }: RotatableWheelProps) {
  const totalItems = projects.length;

  const {
    activeIndex,
    rotation,
    isGlitching,
    handleNext,
    handlePrev,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    handleMouseUp,
    handleWheel,
  } = useWheelGestures({ totalItems });

  const containerRef = useRef<HTMLDivElement>(null);
  const theta = 360 / totalItems;

  const BASE_CARD_WIDTH = 560;
  const BASE_CARD_HEIGHT = 340;
  const BASE_WHEEL_HEIGHT = 440;
  const RADIUS_RATIO = 340 / (BASE_CARD_WIDTH / 2);
  const MIN_CARD_WIDTH = 260;

  const [containerWidth, setContainerWidth] = useState(BASE_CARD_WIDTH);

  const cardWidth = Math.max(
    MIN_CARD_WIDTH,
    Math.min(BASE_CARD_WIDTH, containerWidth - 24)
  );
  const cardHeight = cardWidth * (BASE_CARD_HEIGHT / BASE_CARD_WIDTH);
  const wheelHeight = cardHeight * (BASE_WHEEL_HEIGHT / BASE_CARD_HEIGHT);
  const radius = Math.round(
    ((cardWidth / 2) * RADIUS_RATIO) / Math.tan(Math.PI / totalItems)
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateWidth = () => setContainerWidth(node.offsetWidth);
    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(node);
    return () => resizeObserver.disconnect();
  }, []);

  const activeProject = projects[activeIndex];

  useEffect(() => {
    onActiveProjectChange?.(activeProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject]);

  return (
    <div className="relative flex flex-col items-center justify-center py-6 select-none w-full">
      <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-dashed border-signal-red/10 flex items-center justify-center animate-spin [animation-duration:160s] z-0 sm:h-[440px] sm:w-[440px] md:h-[580px] md:w-[580px]">
        <div className="h-[86%] w-[86%] rounded-full border border-signal-yellow/5 flex items-center justify-center">
          <div className="h-[69%] w-[69%] rounded-full border border-void-line/40" />
        </div>
      </div>

      <div className="absolute top-2 flex flex-wrap justify-center gap-x-3 gap-y-1 px-4 font-mono text-[8px] text-signal-yellow/80 uppercase tracking-widest z-10 sm:gap-x-8 sm:text-[12px]">
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
        style={{ height: wheelHeight }}
        className="relative flex w-full max-w-[850px] cursor-grab items-center justify-center active:cursor-grabbing [perspective:1200px] z-10 overflow-hidden"
      >
        <div
          className="relative transition-transform duration-500 ease-out"
          style={{
            width: cardWidth,
            height: cardHeight,
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
                  opacity: isCurrent ? 1 : 0.2,
                  backgroundColor: isCurrent ? "var(--color-signal-yellow)" : "var(--color-void-line)",
                  clipPath: "polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)",
                  filter: isCurrent ? "drop-shadow(0px 0px 20px rgba(252, 238, 10, 0.35))" : "none",
                }}
              >
                <div
                  className="relative h-full w-full bg-void-raised overflow-hidden"
                  style={{
                    clipPath: "polygon(34px 0, 100% 0, 100% calc(100% - 34px), calc(100% - 34px) 100%, 0 100%, 0 34px)",
                    backgroundImage: project.image ? `url(${project.image})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="relative z-10 flex h-full flex-col justify-between p-8">
                    <div className="flex items-center justify-between">

                      <span className="font-mono text-sm font-bold text-white/50 bg-black/60 px-2 py-0.5">
                        [ 0{i + 1} ]
                      </span>
                    </div>

                    <div className="max-w-sm">
                      <h3 className="mt-2 font-display text-base text-signal-yellow uppercase tracking-wider bg-black/60 px-2 py-1 inline-block border-l-2 border-signal-yellow">
                        {project.title}
                      </h3>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <WheelControls
        activeIndex={activeIndex}
        totalItems={totalItems}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />

      <ProjectDetailsBox activeProject={activeProject} isGlitching={isGlitching} />
    </div>
  );
}