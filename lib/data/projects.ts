import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "loghorizon",
        title: "LogHorizon",
        tagline: "Full-stack cross-media content discovery platform (Void Codex UI)",
        description:
            "A cross-media content management and discovery platform for Anime, Manga, Movies, and TV, built around a personalized recommendation engine and a premium dark-mode design system called the Void Codex. Automates metadata ingestion from Jikan (MyAnimeList) and TMDB.",
        stack: ["React", "Vite", "Express", "Prisma", "PostgreSQL", "Supabase", "Three.js", "Tailwind CSS"],
        highlights: [
            "Weighted recommendation engine scored on Genre, Mood, and Theme preference vectors",
            "Automated Jikan + TMDB ingestion pipeline for Anime/Manga/Movie/TV metadata",
            "Community layer: watch parties, Discord syndication, and a 15-achievement system",
            "Three.js/WebGL/OGL animated backgrounds (Hyperspeed, GridScan, Radar)",
        ],
        repoUrl: "https://github.com/azan-wasty/LogHorizon",
        featured: true,
        image: "/projects/image.png",
    },
    {
        id: "nightcityco",
        title: "Cyberpunk themed Portfolio",
        tagline: "Cyberpunk Edgerunners-inspired personal portfolio",
        description:
            "A personal portfolio site built as an internship task, styled after Cyberpunk Edgerunners with a hazard-yellow/red/cyan palette over a void-black base. Data-driven content, a 3D rotating project carousel, and a canvas-based ambient background give it a distinct, game-like feel over a templated design.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        highlights: [
            "RotatableWheel: a 3D cylinder carousel for Projects with CSS glitch-cut transitions",
            "CyberGrid: canvas-based ambient background with 140 floating, repositioning rectangles",
            "NeonButton with a clip-path slice glitch hover animation, supporting both Link and onClick modes",
            "Self-hosted Cyberpunk.ttf headings + Blender Pro body/display via next/font/local, fully data-driven from src/lib/data/",
        ],
        repoUrl: "https://github.com/azan-wasty/Portofolio-web",
        featured: true,
        image: "/projects/cyberpunk-web.png",
    },
    {
        id: "fumble",
        title: "Fumble",
        tagline: "Full-stack sports league & tournament management platform",
        description:
            "A web platform for running sports leagues end-to-end: tournament scheduling and match organization, squad and player-transfer management, and real-time player statistics, with role-based access for Admins, Organizers, Captains, and Players.",
        stack: ["React", "Vite", "Node.js", "Express", "SQL Server", "JWT"],
        highlights: [
            "Role-based access control across Admin/Organizer/Captain/Player roles",
            "Full tournament lifecycle: scheduling, match organization, live score updates",
            "Real-time player stats (goals, assists, yellow/red cards, ratings) and an admin dashboard",
        ],
        repoUrl: "https://github.com/azan-wasty/Fumble",
        featured: false,
        image: "/projects/fumble.png",
    },
    {
        id: "parkinsons-ml",
        title: "Parkinson's Detection Pipeline",
        tagline: "Acoustic-feature ML pipeline for early screening",
        description:
            "An end-to-end pipeline (WAV recording → Praat/librosa acoustic feature extraction → ML prediction → Streamlit UI) trained on the UCI Parkinson's dataset, using voice biomarkers to screen for early indicators. Tuned for recall given the medical screening context.",
        stack: ["Python", "scikit-learn", "Streamlit", "librosa", "Praat"],
        highlights: [
            "Random Forest + Logistic Regression with GridSearchCV tuning (~91% ROC-AUC)",
            "22 acoustic biomarkers extracted automatically via Praat + librosa",
            "Streamlit app with voice-upload and manual-entry modes plus downloadable CSV reports",
        ],
        repoUrl: "https://github.com/azan-wasty/Parkinsons-Diagnosis-at-Initial-Stages-using-Vocal-Data",
        featured: true,
    },
    {
        id: "pacman-cpp",
        title: "Pac-Man",
        tagline: "C++ / SFML arcade clone with a real OOP architecture",
        description:
            "A from-scratch Pac-Man clone built to demonstrate solid object-oriented design: abstract base classes, runtime polymorphism, and a proper finite state machine, not just a rendering loop.",
        stack: ["C++", "SFML"],
        highlights: [
            "8 distinct ghost AI types (Teleporter, Rage, Ambusher, Phantom, Time Stop, Ring, and more)",
            "Power-pellet super mode, life system, and persistent high scores",
            "Custom level format driven by a character-map maze layout",
        ],
        featured: false,
        repoUrl: "https://github.com/azan-wasty/PacmanGame",
        image: "/projects/pacman.png",
    },
];