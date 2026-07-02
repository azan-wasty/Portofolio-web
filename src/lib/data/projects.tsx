import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "loghorizon",
        title: "LogHorizon",
        tagline: "Full-stack media discovery & community tracking platform",
        description:
            "A full-stack platform for tracking anime, manga, and TV/movie taste across a community. Ingests live metadata from multiple sources and scores recommendations with a weighted engine.",
        stack: ["React", "Express", "Prisma", "PostgreSQL", "Supabase", "Three.js"],
        highlights: [
            "Weighted recommendation engine (genre, mood, theme scoring)",
            "Multi-source ingestion pipeline with dedup + smart-skip cursors",
            "15-achievement gamification system with role-based admin approval",
            "WebGL/GLSL shader backgrounds and face-detection features",
        ],
        repoUrl: "https://github.com/azan-wasty/LogHorizon",
        featured: true,
        image: "/projects/loghorizon.png",
    },
    {
        id: "social-graph",
        title: "Taste Graph",
        tagline: "Social graph + ML recommendation engine (in progress)",
        description:
            "A recommendation system built around shared taste in anime, manga, TV, and film. Ports LogHorizon's weighted engine as a cold-start layer, then adds collaborative filtering on top as the graph grows.",
        stack: ["React", "FastAPI", "Node", "PostgreSQL", "SVD"],
        highlights: [
            "Cold-start layer ported from LogHorizon's weighted scoring",
            "Collaborative filtering (SVD) layered on top as user data accumulates",
            "Live metadata from AniList, MangaDex, and TMDB APIs",
        ],
        featured: true,
        image: "/projects/taste-graph.png",
    },
    {
        id: "fumble",
        title: "Fumble",
        tagline: "Sports facility booking & management system",
        description:
            "A booking platform for sports facilities with authenticated scheduling, conflict detection, and role-based access for admins and members.",
        stack: ["MSSQL", "JWT", "Node"],
        highlights: [
            "Booking conflict detection at the database layer",
            "JWT-based auth with role-based access control",
        ],
        featured: false,
        image: "/projects/fumble.png",
    },
    {
        id: "parkinsons-ml",
        title: "Parkinson's Detection Pipeline",
        tagline: "Acoustic-feature ML pipeline for early screening",
        description:
            "A machine learning pipeline trained on the UCI Parkinson's dataset, using voice acoustic features to screen for early indicators. Tuned for recall given the medical screening context.",
        stack: ["Python", "scikit-learn", "Streamlit"],
        highlights: [
            "Random Forest + Logistic Regression with GridSearchCV tuning",
            "~95%+ ROC-AUC on held-out data",
            "Deployed as an interactive Streamlit app",
        ],
        featured: true,
        image: "/projects/parkinsons-ml.png",
    },
    {
        id: "pacman-cpp",
        title: "Pac-Man",
        tagline: "C++ / SFML arcade clone with a real OOP architecture",
        description:
            "A from-scratch Pac-Man clone built to demonstrate solid object-oriented design: abstract base classes, runtime polymorphism, and a proper finite state machine, not just a rendering loop.",
        stack: ["C++", "SFML"],
        highlights: [
            "Runtime polymorphism via a vector of Ghost base-class pointers",
            "Finite state machine via a GameState enum class",
            "Manual memory management, no leaks under Valgrind",
        ],
        featured: false,
        image: "/projects/pacman-cpp.png",
    },
];