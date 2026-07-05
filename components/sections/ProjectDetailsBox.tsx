import { SkillChip } from "@/components/ui/SkillChip";
import NeonButton from "@/components/ui/NeonButton";
import type { Project } from "@/types";

interface ProjectDetailsBoxProps {
  activeProject: Project;
  isGlitching: boolean;
}

export function ProjectDetailsBox({ activeProject, isGlitching }: ProjectDetailsBoxProps) {
  return (
    <div className={`mt-8 w-full max-w-2xl self-center bg-void-raised/95 p-[1px] relative z-10 transition-all duration-300 ${isGlitching ? "wheel-glitch" : ""}`} style={{ backgroundColor: "var(--color-signal-yellow)", clipPath: "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)" }}>
      <div className="h-full w-full bg-void-raised p-6" style={{ clipPath: "polygon(29px 0, 100% 0, 100% calc(100% - 29px), calc(100% - 29px) 100%, 0 100%, 0 29px)" }}>
        <header className="mb-4">
          <div className="flex items-center gap-3">
            <h4 className="font-signature text-2xl tracking-wider text-signal-yellow uppercase md:text-3xl">
              {activeProject.title}
            </h4>
            <span className="font-mono text-lg text-signal-red bg-signal-red/10 border border-signal-red/20 px-2 py-0.5">
              ACTIVE
            </span>
          </div>
          <p className="mt-2 font-mono text-base md:text-lg text-signal-yellow/90">
            {activeProject.tagline}
          </p>
        </header>

        <p className="mb-6 font-mono text-base md:text-lg leading-relaxed text-text-dim/90">
          {activeProject.description}
        </p>

        <h5 className="font-display text-xl uppercase tracking-widest text-signal-red mb-3">
          Project Highlights
        </h5>
        <ul className="mb-6 space-y-2 font-mono text-sm md:text-base text-text-dim/90">
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
            Repository
          </NeonButton>
        )}
      </div>
    </div>
  );
}
