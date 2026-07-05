import type { NavLink, SocialLink, ContactChannel } from "@/types";

export const profile = {
    name: "Azan Wasty",
    role: "Software Engineer / Data Scientist",
    University: "FAST NUCES",
    location: "Lahore, Pakistan",
    summary:
        "Second-year Data Science student and full-stack developer. Currently interning at Oriental Nippon Develpoment.",
    longBio:
        "I build full-stack products end to end and have deployed accurate ML models. Most of my personal work centers on ML , Manangement Systems , Community Driven Apps. I try to build stuff that people and most importantly I'd like to use.",
};

export const navLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
    { label: "GitHub", href: "https://github.com/azan-wasty", icon: "github" },
    { label: "Email", href: "mailto:wastyazan@gmail.com", icon: "mail" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/azan-wasty", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/azansmh", icon: "instagram" },

];

export const contactChannels: ContactChannel[] = [
    {
        label: "Email",
        value: "wastyazan@gmail.com",
        href: "mailto:wastyazan@gmail.com",
    },
    {
        label: "GitHub",
        value: "github.com/azan-wasty",
        href: "https://github.com/azan-wasty",
    },
    {
        label: "Discord",
        value: "citrusmongus",
        href: "",
    },

];
