import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { profile } from "@/lib/data/profile";
import { CyberSocials } from "@/components/ui/CyberSocials";
export function About() {
  return (
    <section id="about" className="border-b border-void-line px-6 py-16 sm:py-24">
      <CyberSocials />
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading index="02" title="About" subtitle="Who I am" />

          <div className="grid gap-10 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <p className="text-lg leading-relaxed text-text-dim">
                {profile.longBio}
              </p>
            </div>
            <dl className="space-y-4 border-l border-void-line pl-6 font-mono text-lg">
              <div>
                <dt className="text-signal-yellow">Location</dt>
                <dd className="text-text-dim">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-signal-yellow">Focus</dt>
                <dd className="text-text-dim">Full-stack + Data Science</dd>
              </div>
              <div>
                <dt className="text-signal-yellow">Status</dt>
                <dd className="text-text-dim">Currently interning — Oriental Nippon Development </dd>
              </div>
            </dl>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}