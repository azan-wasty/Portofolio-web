import Link from "next/link";
import { profile, socialLinks } from "@/lib/data/profile";
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, DiscordIcon } from "@/components/ui/BrandIcons";

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

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-void-line px-6 py-8 sm:py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 font-mono text-sm text-text-dim md:flex-row">
                <p className="text-center md:text-left">
                    © {year} {profile.name}
                </p>
                <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                    {socialLinks.map((link) => {
                        const Icon = getIcon(link.icon);
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    target={link.icon === "mail" ? undefined : "_blank"}
                                    rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                                    className="group flex items-center gap-2 transition-colors hover:text-signal-red"
                                >
                                    <Icon size={18} className="text-text-dim transition-colors group-hover:text-signal-yellow" />
                                    <span>{link.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
}