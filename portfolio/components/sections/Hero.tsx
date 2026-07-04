import { GlitchText } from "@/components/ui/GlitchText";
import NeonButton from "@/components/ui/NeonButton";
import { profile } from "@/lib/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="scanlines relative flex min-h-[90vh] flex-col justify-center px-16"
    >
      <div className="mx-auto w-full max-w-6xl">

        <GlitchText
          text={profile.name}
          as="h1"
          className="cyber-heading font-signature text-5xl uppercase leading-tight tracking-wide text-text-primary sm:text-7xl md:text-8xl"
        />

        <p className="mt-6 font-mono text-sm text-signal-red sm:text-xl">
          {profile.role}
        </p>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-dim sm:text-xl">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <NeonButton href="/projects" variant="red">
            Projects
          </NeonButton>
          <NeonButton href="/contact" variant="yellow">
            Contact
          </NeonButton>
        </div>
      </div>
    </section>
  );
}