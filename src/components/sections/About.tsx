import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/lib/data/profile";

export function About() {
  return (
    <section id="about" className="bg-void-raised px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="About" subtitle="who's running this process" inverted />
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <p className="text-base leading-relaxed text-neutral-400">
              {profile.longBio}
            </p>
          </div>
          <dl className="space-y-4 border-l border-neutral-700 pl-6 font-mono text-sm">
            <div>
              <dt className="text-signal-cyan">Location</dt>
              <dd className="text-neutral-400">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-signal-cyan">Focus</dt>
              <dd className="text-neutral-400">Full-stack + recommendation systems</dd>
            </div>
            <div>
              <dt className="text-signal-cyan">Status</dt>
              <dd className="text-signal-red">Currently interning — Educura (LMS)</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
