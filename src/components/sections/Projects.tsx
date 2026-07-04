"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RotatableWheel } from "./RotatableWheel";
import { projects } from "@/lib/data/projects";


export function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  // Bumping this remounts the background layer, which re-triggers its CSS
  // animation (a plain `key` change is the standard way to replay a CSS
  // keyframe animation in React without any JS animation library).
  const [transitionKey, setTransitionKey] = useState(0);

  const handleActiveProjectChange = (project: Project) => {
    if (project.id === activeProject.id) return;
    setActiveProject(project);
    setTransitionKey((k) => k + 1);
  };

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24">
      {/* Full-section background image — this is the whole point: the
          picture fills the entire Projects section, not just the wheel
          cards, and glitch-cuts to the next project's image on switch. */}
      <div className="absolute inset-0 -z-10">
        {/* Opaque base first — only visible where no image exists yet */}
        <div className="absolute inset-0 bg-void-raised" />


        {/* Translucent scrim on top so text stays legible over any image */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <SectionHeading index="03" title="Projects" subtitle="interactive core" inverted />
          <div className="mt-8">
            <RotatableWheel onActiveProjectChange={handleActiveProjectChange} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}