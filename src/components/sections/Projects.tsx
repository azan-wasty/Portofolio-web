import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-b border-void-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title="Projects" subtitle="deployed builds" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
