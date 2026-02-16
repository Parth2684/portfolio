import type { Project } from "@/components/ProjectCard"

export const projects: Project[] = [
  {
    slug: "unicloud",
    title: "Unicloud",
    description:
      "High-performance cloud transfer platform built in Rust enabling direct Google Drive–to–Drive streaming without local disk buffering.",
    links: {
      github: "https://github.com/Parth2684/unicloud", // change if needed
      live: "https://unicloud.parthcodes.com", // or remove if not public yet
    },
    image: "/unicloud.png"
  }
,
  {
    slug: "cacheupp",
    title: "CacheUpp",
    description: "Feature-rich social platform with posts, likes, comments, real-time chat, friend system, and forums.",
    image: "/cacheupp-project-screenshot.jpg",
    links: {
      live: "https://cacheupp.com", // replace with your live URL
      github: "https://github.com/michael-020/CacheUp", // replace repo link
    },
  },
  {
    slug: "documind",
    title: "DocuMind",
    description: "OCR + TTS app converting PDFs/images into audio to reduce manual reading by ~70%.",
    image: "/documind-ocr-tts-screenshot.jpg",
    links: {
      live: "https://documind.parthcodes.com",
      github: "https://github.com/Parth2684",
    },
  },
  {
    slug: "quizzo",
    title: "Quizzo",
    description: "Full-stack quiz platform with secure auth, real-time leaderboard, and dynamic quiz creation.",
    image: "/quizzo-platform-screenshot.jpg",
    links: {
      live: "https://quizzo.parthcodes.com",
      github: "https://github.com/Parth2684",
    },
  },
  // {
  //   slug: "secondbrain",
  //   title: "SecondBrain",
  //   description: "Note-taking app inspired by Google Keep with smart link previews and clean MERN architecture.",
  //   image: "/secondbrain-notes-screenshot.jpg",
  //   links: {
  //     github: "https://github.com/Parth2684/SecondBrain",
  //   },
  // },
  // {
  //   slug: "task-manager",
  //   title: "Task-Manager",
  //   description: "Role-driven task system with Admin/Employee access, JWT security, and productivity insights.",
  //   image: "/task-manager-dashboard-screenshot.jpg",
  //   links: {
  //     github: "https://github.com/Parth2684/task-manager",
  //   },
  // },
]
