import type { ReactNode } from "react";
import type { Project } from "@/types";

export interface ProjectCardProps {
    project: Project;
}

export interface MousePoint {
    x: number;
    y: number;
    time: number;
}

export interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    life: number;
    maxLife: number;
}

export interface SkillChipProps {
    label: string;
    accent?: "yellow" | "red" | "cyan";
}

export interface NeonButtonProps {
    href: string;
    children: string;
    variant?: "yellow" | "red";
    external?: boolean;
}

export interface GlitchTextProps {
    text: string;
    as?: "h1" | "h2" | "span";
    className?: string;
}

export interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export interface SectionHeadingProps {
    index: string;
    title: string;
    subtitle?: string;
    inverted?: boolean;
}