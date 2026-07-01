import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express", "Prisma", "REST APIs"],
  },
  {
    id: "data",
    label: "Data & ML",
    skills: ["Python", "pandas", "scikit-learn", "PostgreSQL", "MSSQL"],
  },
  {
    id: "tools",
    label: "Tools & Systems",
    skills: ["Git", "C++", "SFML", "Vercel", "Supabase"],
  },
];
