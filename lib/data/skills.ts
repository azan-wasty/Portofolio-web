import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
    {
        id: "programming-languages",
        label: "Programming Languages",
        skills: ["Python", "TypeScript", "JavaScript", "C++", "C", "Assembly (x86)"],
        accent: "yellow",
    },
    {
        id: "frontend",
        label: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        accent: "cyan",
    },
    {
        id: "backend",
        label: "Backend",
        skills: ["Node.js", "Express", "Prisma", "REST APIs", "Fast APIS", "SQLAlchemy", "Alembic"],
        accent: "red",
    },
    {
        id: "data",
        label: "Data & ML",
        skills: ["Python", "Pandas", "Scikit-learn", "PostgreSQL", "MSSQL"],
        accent: "yellow",
    },
    {
        id: "tools",
        label: "Tools & Systems",
        skills: ["Git", "SFML", "Vercel", "Render", "Railway", "Netlify", "Supabase", "Docker"],
        accent: "cyan",
    },
    {
        id: "coursework",
        label: "Relevant Coursework",
        skills: ["Programming Fundamentals", "Object Oriented Programming", "Data Structures & Algorithms", "Database Management Systems", "Data Science", "Software Engineering", "Operating Systems", "Computer Organization & Assembly Language"],
        accent: "red",
    },
];