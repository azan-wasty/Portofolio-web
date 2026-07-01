import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillChip } from "@/components/ui/SkillChip";
import { skillGroups } from "@/lib/data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Skills" subtitle="loaded modules" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.id} className="border-2 border-text-primary bg-void-raised p-5">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-signal-cyan">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillChip key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
