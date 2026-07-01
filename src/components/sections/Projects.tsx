import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatableWheel } from "./RotatableWheel";

export function Projects() {
  return (
    <section id="projects" className="border-b border-void-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title="Projects" subtitle="interactive core" />
        <div className="mt-8">
          <RotatableWheel />
        </div>
      </div>
    </section>
  );
}
