import { SectionHeading } from "@/components/ui/SectionHeading";
import { NeonButton } from "@/components/ui/NeonButton";
import { contactChannels } from "@/lib/data/profile";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" title="Contact" subtitle="open a channel" />

        <p className="mb-8 max-w-xl text-sm leading-relaxed text-text-dim">
          Reach out about internships, collaborations, or anything you&apos;d
          like to build. Response time: usually under a day.
        </p>

        <div className="mb-10 flex flex-col gap-3 font-mono text-sm">
          {contactChannels.map((channel) => (
            <a
              key={channel.href}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex items-center gap-3 text-text-dim transition-colors hover:text-signal-cyan"
            >
              <span className="text-signal-magenta">{channel.label}</span>
              {channel.value}
            </a>
          ))}
        </div>

        <NeonButton href="mailto:wastyazan@gmail.com" variant="magenta">
          Send a Message
        </NeonButton>
      </div>
    </section>
  );
}
