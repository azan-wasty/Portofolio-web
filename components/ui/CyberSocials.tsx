"use client";

import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, DiscordIcon } from "./BrandIcons";
import { socialLinks } from "@/lib/data/profile";

const getIcon = (iconName: string) => {
    switch (iconName) {
        case "github": return GithubIcon;
        case "instagram": return InstagramIcon;
        case "linkedin": return LinkedinIcon;
        case "mail": return MailIcon;
        case "discord": return DiscordIcon;
        default: return GithubIcon;
    }
};

export function CyberSocials() {
    return (
        <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-6 lg:flex">
            {/* The Yellow Container with the clipped corner */}
            <div
                className="flex flex-col items-center gap-6 bg-[var(--color-signal-yellow)] p-4 transition-all duration-300 hover:scale-105"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)"
                }}
            >
                {socialLinks.map((social) => {
                    const Icon = getIcon(social.icon);
                    return (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative text-black transition-colors hover:text-black/70"
                            aria-label={social.label}
                        >
                            <Icon size={24} />

                        {/* Tooltip that appears on hover */}
                        <span className="absolute left-full top-1/2 ml-4 hidden -translate-y-1/2 whitespace-nowrap bg-black px-2 py-1 text-xs font-bold text-[var(--color-signal-yellow)] group-hover:block">
                            {social.label}
                        </span>
                        </a>
                    );
                })}
            </div>

            {/* Decorative vertical line below the block */}
            <div className="h-24 w-px bg-[var(--color-signal-yellow)]/50" />
        </div >
    );
}