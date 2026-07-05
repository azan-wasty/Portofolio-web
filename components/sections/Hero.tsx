import { GlitchText } from "@/components/ui/GlitchText";
import NeonButton from "@/components/ui/NeonButton";
import { profile } from "@/lib/data/profile";
import { CyberSocials } from "@/components/ui/CyberSocials";

export function Hero() {
  return (
    <section
      id="home"
      className="scanlines relative flex min-h-[90svh] flex-col justify-center px-6 sm:px-10 md:px-16"
    >
      {/* 2. Add the Socials sidebar here */}
      <CyberSocials />

      <div className="mx-auto w-full max-w-6xl">
        <GlitchText
          text={profile.name}
          as="h1"
          className="cyber-heading font-signature text-4xl uppercase leading-tight tracking-wide text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <p className="mt-6 font-display text-xl text-signal-red sm:text-2xl md:text-3xl">
          {profile.role}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim/90 sm:text-lg md:text-xl">
          {profile.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 font-display sm:mt-10">
          <NeonButton href="#projects" variant="red">
            Projects
          </NeonButton>
          <NeonButton href="#contact" variant="yellow">
            Contact
          </NeonButton>
        </div>
      </div>
    </section>
  );
}