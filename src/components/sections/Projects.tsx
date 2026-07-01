import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatableWheel } from "./RotatableWheel";

export function Projects() {
  return (
    <section id="projects" className="bg-void-raised px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title="Projects" subtitle="interactive core" inverted />
        <div className="mt-8">
          <RotatableWheel />
        </div>
      </div>
    </section>
  );
}
