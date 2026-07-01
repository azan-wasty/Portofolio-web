import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/lib/data/profile";

export function About() {
  return (
    <section id="about" className="border-b border-void-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="About" subtitle="who's running this process" />
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <p className="text-base leading-relaxed text-text-dim">
              {profile.longBio}
            </p>
          </div>
          <dl className="space-y-4 border-l border-void-line pl-6 font-mono text-sm">
            <div>
              <dt className="text-signal-yellow">Location</dt>
              <dd className="text-text-dim">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-signal-yellow">Focus</dt>
              <dd className="text-text-dim">Full-stack + recommendation systems</dd>
            </div>
            <div>
              <dt className="text-signal-yellow">Status</dt>
              <dd className="text-signal-red">Currently interning — Oriental Nippon Develpoment </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
