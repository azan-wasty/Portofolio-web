import { SectionHeading } from "@/components/ui/SectionHeading";
import NeonButton from "@/components/ui/NeonButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { contactChannels } from "@/lib/data/profile";
import { CyberSocials } from "@/components/ui/CyberSocials";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <CyberSocials />

      <div className="mx-auto max-w-6xl text-display">
        <ScrollReveal>
          <SectionHeading index="05" title="Contact" subtitle="Open a channel" />

          <p className="mb-8 max-w-xl leading-relaxed text-text-dim text-lg">
            Reach out about internships, collaborations, or anything you&apos;d
            like to build. Response time: usually under a day.
          </p>

          <div className="mb-10 flex flex-col gap-3 font-mono text-lg">
            {contactChannels.map((channel) =>
              channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-3 text-text-dim transition-colors hover:text-signal-red text-lg"
                >
                  <span className="text-signal-cyan font-mono">{channel.label}</span>
                  {channel.value}
                </a>
              ) : (
                <div
                  key={channel.label}
                  className="flex items-center gap-3 text-text-dim text-lg"
                >
                  <span className="text-signal-cyan font-mono">{channel.label}</span>
                  {channel.value}
                </div>
              )
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}