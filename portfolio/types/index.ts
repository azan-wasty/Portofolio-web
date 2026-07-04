export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  /** Path under /public, e.g. "/projects/loghorizon.jpg". Falls back to a
   * gradient when omitted — drop your own images into public/projects/. */
  image?: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "external";
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}