import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillChip } from "@/components/ui/SkillChip";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skillGroups } from "@/lib/data/skills";
import { CyberSocials } from "@/components/ui/CyberSocials";
export function Skills() {
  return (
    <section id="skills" className="px-6 py-16 sm:py-24">
      <CyberSocials />
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading index="02" title="Skills" subtitle="Loaded Modules" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => (
              <div
                key={group.id || index}
                className="group relative border border-neutral-800 bg-[#050505] p-6 transition-colors hover:border-neutral-700"
              >
                {/* Tech Hardware Corner Brackets */}
                <div className="absolute -left-[1px] -top-[1px] h-3 w-3 border-l-2 border-t-2 border-signal-yellow/30 transition-colors group-hover:border-signal-yellow" />
                <div className="absolute -bottom-[1px] -right-[1px] h-3 w-3 border-b-2 border-r-2 border-signal-yellow/30 transition-colors group-hover:border-signal-yellow" />

                {/* Cyberpunk Module Header */}
                <div className="mb-5 flex items-end justify-between border-b border-neutral-800 pb-2">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-signal-yellow">
                    {group.label}
                  </h3>
                  <span className="font-mono text-[10px] tracking-widest text-neutral-600">
                    MOD_{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Skill Grid */}
                <div className="flex flex-wrap gap-2.5 ">
                  {group.skills.map((skill) => (
                    <SkillChip key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}