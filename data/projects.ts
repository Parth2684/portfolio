import type { Project } from "@/components/ProjectCard"

export const projects: Project[] = [
  {
    slug: "unicloud",
    title: "Unicloud",
    description:
      "A high-performance cloud transfer platform that enables direct Google Drive-to-Drive streaming transfers without local disk buffering. Built with Rust and Axum, it uses a Redis-backed distributed worker system with Tokio for background transfers and real-time progress updates via WebSockets. Features secure multi-account Google OAuth linking with AES-encrypted token storage, quota enforcement, and fault-tolerant retry logic for reliable large-file transfers.",
    links: {
      github: "https://github.com/Parth2684/unicloud",
      live: "https://unicloud.parthbhosle.com",
    },
    image: "/unicloud.png",
    tech: ["Rust", "Axum", "Redis", "PostgreSQL", "Next.js"]
  },
  {
    slug: "documind",
    title: "Documind",
    description: "A cross-platform document accessibility application built with Rust and Tauri that delivers OCR and offline text-to-speech across Windows, Linux, and macOS. Integrates multiple Gemini models for OCR and structured document extraction from PDFs and images, allowing users to optimize for speed, cost, or accuracy. Features multi-threaded Kokoro TTS generation for parallel audio synthesis, Stronghold-encrypted API credential storage, and an offline-first persistence layer.",
    image: "/documind.png",
    links: {
      live: "https://documind.parthbhosle.com",
      github: "https://github.com/Parth2684/documind-native",
    },
    tech: ["Rust", "Tauri", "React", "SQLx", "Gemini", "ONNX"]
  },
  {
    slug: "cacheupp",
    title: "CacheUpp",
    description: "A full-featured social platform with posts, comments, forums, real-time chat, friend management, and Google OAuth 2.0 authentication. Enhanced forum search with vector embeddings and pgvector for better accuracy, while using Zustand to manage frontend state efficiently. Includes role-based access control, an admin dashboard for content moderation, secure authentication with bcrypt hashing, and smooth UI transitions powered by Framer Motion.",
    image: "/cacheupp-project-screenshot.jpg",
    links: {
      live: "https://cacheupp.parthbhosle.com",
      github: "https://github.com/michael-020/CacheUp",
    },
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "pgvector"]
  },
  {
    slug: "quizzo",
    title: "Quizzo",
    description: "A full-stack quiz platform with scalable APIs built with Prisma ORM, supporting fully dynamic quiz creation and option management via UUIDs. Features transactional quiz submission handling, automatic scoring, and persistent answer storage with high accuracy through Zod schema validation. The responsive frontend uses Next.js and Framer Motion for smooth animations, with secure session handling and authentication flows.",
    image: "/quizzo-platform-screenshot.jpg",
    links: {
      live: "https://quizzo.parthbhosle.com",
      github: "https://github.com/Parth2684/quiz-app",
    },
    tech: ["TypeScript", "Next.js", "Next-Auth", "Prisma"]
  },
]
