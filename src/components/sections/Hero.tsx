import { GlitchText } from "@/components/ui/GlitchText";
import { NeonButton } from "@/components/ui/NeonButton";
import { profile } from "@/lib/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="scanlines relative flex min-h-[90vh] flex-col justify-center border-b border-void-line px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 font-mono text-sm text-signal-yellow">
          {"// system boot — identity confirmed"}
        </p>

        <GlitchText
          text={profile.name}
          as="h1"
          className="font-display text-4xl uppercase leading-tight tracking-wide text-text-primary sm:text-6xl md:text-7xl"
        />

        <p className="mt-4 font-mono text-lg text-signal-red sm:text-xl">
          {profile.role}
        </p>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-dim sm:text-base">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <NeonButton href="#projects" variant="yellow">
            View Projects
          </NeonButton>
          <NeonButton href="#contact" variant="red">
            Get In Touch
          </NeonButton>
        </div>
      </div>
    </section>
  );
}
