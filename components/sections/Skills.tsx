import { Code2, Database, GraduationCap, LayoutTemplate, Server, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillChip } from "@/components/ui/SkillChip";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skillGroups } from "@/lib/data/skills";
import { CyberSocials } from "@/components/ui/CyberSocials";

const GROUP_ICONS: Record<string, typeof Code2> = {
  "programming-languages": Code2,
  frontend: LayoutTemplate,
  backend: Server,
  data: Database,
  tools: Wrench,
  coursework: GraduationCap,
};

const ACCENT_TEXT: Record<"yellow" | "red" | "cyan", string> = {
  yellow: "text-signal-yellow",
  red: "text-signal-red",
  cyan: "text-signal-cyan",
};

const ACCENT_BORDER: Record<"yellow" | "red" | "cyan", string> = {
  yellow: "border-signal-yellow/30 group-hover:border-signal-yellow",
  red: "border-signal-red/30 group-hover:border-signal-red",
  cyan: "border-signal-cyan/30 group-hover:border-signal-cyan",
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-16 sm:py-24">
      <CyberSocials />
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading index="02" title="Skills" subtitle="Loaded Modules" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = GROUP_ICONS[group.id] ?? Code2;
              const accent = group.accent ?? "cyan";

              return (
                <div
                  key={group.id || index}
                  className={`group relative border border-neutral-800 bg-[#050505] p-6 transition-colors hover:border-neutral-700 ${group.id === "coursework" ? "lg:col-span-2" : ""
                    }`}
                >
                  {/* Tech Hardware Corner Brackets, color-coded per module */}
                  <div className={`absolute -left-[1px] -top-[1px] h-3 w-3 border-l-2 border-t-2 transition-colors ${ACCENT_BORDER[accent]}`} />
                  <div className={`absolute -bottom-[1px] -right-[1px] h-3 w-3 border-b-2 border-r-2 transition-colors ${ACCENT_BORDER[accent]}`} />

                  {/* Cyberpunk Module Header */}
                  <div className="mb-5 flex items-end justify-between border-b border-neutral-800 pb-2">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className={ACCENT_TEXT[accent]} />
                      <h3 className={`font-mono text-sm font-bold uppercase tracking-widest ${ACCENT_TEXT[accent]}`}>
                        {group.label}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-neutral-600">
                      MOD_{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Skill Grid */}
                  <div className="flex flex-wrap gap-2.5 ">
                    {group.skills.map((skill) => (
                      <SkillChip key={skill} label={skill} accent={accent} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}