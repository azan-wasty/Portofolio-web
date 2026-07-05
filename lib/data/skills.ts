import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
    {
        id: "programming-languages",
        label: "Programming Languages",
        skills: ["Python", "TypeScript", "JavaScript", "C++", "C", "Assembly (x86)"],
    },
    {
        id: "frontend",
        label: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        id: "backend",
        label: "Backend",
        skills: ["Node.js", "Express", "Prisma", "REST APIs"],
    },
    {
        id: "data",
        label: "Data & ML",
        skills: ["Python", "Pandas", "Scikit-learn", "PostgreSQL", "MSSQL"],
    },
    {
        id: "tools",
        label: "Tools & Systems",
        skills: ["Git", "SFML", "Vercel", "Render", "Railway", "Netlify", "Supabase"],
    },
    {
        id: "coursework",
        label: " Relevant Coursework",
        skills: ["Programming Fundamentals", "Object Oriented Programming", "Data Structures & Algorithms", "Database Management Systems", "Data Science", "Software Engineering", "Operating Systems", "Computer Organization & Assembly Language"],
    },
];
