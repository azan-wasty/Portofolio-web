import type { NavLink, SocialLink, ContactChannel } from "@/types";

export const profile = {
  name: "Azan Wasty",
  role: "Software Engineer / Data Science",
  location: "Lahore, Pakistan",
  summary:
    "Second-year Data Science student and full-stack developer. Currently interning on Educura, an LMS product built on React, Node, and PostgreSQL. Building systems that learn what people actually like.",
  longBio:
    "I build full-stack products end to end — from a Postgres schema to a shipped UI. Most of my personal work centers on recommendation systems: scoring engines, ingestion pipelines, and the kind of small architectural decisions (state machines, polymorphism, dedup cursors) that keep a codebase honest as it grows.",
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
];
