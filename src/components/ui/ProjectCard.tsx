import type { Project } from "@/types";
import { SkillChip } from "./SkillChip";
import { NeonButton } from "./NeonButton";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col border border-void-line bg-void-raised p-6 transition-colors duration-200 hover:border-signal-yellow">
      <div className="absolute left-0 top-0 h-px w-0 bg-signal-yellow transition-all duration-300 group-hover:w-full" />

      <header className="mb-3">
        <h3 className="font-display text-lg tracking-wide text-text-primary">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-signal-red">
          {project.tagline}
        </p>
      </header>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-dim">
        {project.description}
      </p>

      <ul className="mb-4 space-y-1.5">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-xs leading-relaxed text-text-dim"
          >
            <span className="text-signal-yellow">›</span>
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <SkillChip key={tech} label={tech} />
        ))}
      </div>

      {project.repoUrl && (
        <NeonButton href={project.repoUrl} variant="red" external>
          View Repo
        </NeonButton>
      )}
    </article>
  );
}
