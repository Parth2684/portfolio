"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export type Project = {
  slug: string
  title: string
  description: string
  image: string
  links: {
    live?: string
    github?: string
  }
  tech?: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 350px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-75"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="relative -mt-16 p-6">
          <div className="flex flex-col gap-4">
            {/* Title and Links */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                {project.links.live && (
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-110 hover:shadow-xl"
                    aria-label="View live demo"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground shadow-lg transition-all hover:bg-foreground hover:text-background hover:scale-110"
                    aria-label="View GitHub repository"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52 0-.53.63-.01 1.08.58 1.23.82.72 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 018 4.73c.68.003 1.37.092 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.45.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            {project.tech && project.tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
