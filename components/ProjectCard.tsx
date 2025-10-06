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
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="group rounded-xl border bg-card shadow-sm transition-colors hover:border-primary/40"
    >
      <div className="p-4">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority={false}
          />
        </div>

        <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex items-center gap-3">
          {project.links.live && (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline underline-offset-4"
            >
              Live Demo
            </Link>
          )}
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline underline-offset-4"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}
