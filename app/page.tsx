"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

const ResumeViewer = dynamic(() => import("@/components/ResumeViewer"), {
  ssr: false,
  loading: () => <div className="h-[75vh] w-full rounded-lg bg-muted animate-pulse" aria-busy="true" />,
})

function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38
        0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
        0-.53.63-.01 1.08.58 1.23.82.72 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
        0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 018 4.73c.68.003 1.37.092 2.01.27
        1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
        0 1.07-.01 1.93-.01 2.19 0 .21.15.45.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  )
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.39v6.35zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z"
      />
    </svg>
  )
}

export default function HomePage() {
  return (
    <div id="home">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-5xl">Parth Bhosle</h1>
            <p className="text-pretty text-muted-foreground md:text-lg">Full Stack Developer — Next.js | MERN</p>
            <p className="text-pretty leading-relaxed text-sm md:text-base">
              I build robust, performant web apps with modern stacks: Next.js, TypeScript, Prisma, PostgreSQL, and
              MongoDB. I care deeply about elegant UX, accessibility, and clean architecture.
            </p>
            <p className="text-pretty leading-relaxed text-sm md:text-base">
            I&apos;m a full stack engineer focused on building fast, accessible, and maintainable web apps. My experience
            spans Next.js, React, Node.js, PostgreSQL, Prisma, MongoDB, and modern tooling. I enjoy designing clean
            architectures, optimizing performance, and shipping thoughtful UX with smooth motion.
          </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Parth2684"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground"
          >
            <IconGitHub className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/parth-bhosle-46a078271"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground"
          >
            <IconLinkedIn className="h-6 w-6" />
          </Link>
          <a href="mailto:bhosle6006@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
            <Mail />
          </a>
          <Link href="#resume"> <File className="size-5 text-muted-foreground hover:text-foreground" /> </Link>

        </div>
              
            
            </div>
            

            <div className="pt-6">
              <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground md:text-sm">
                <li className="rounded-md bg-muted px-3 py-1">TypeScript</li>
                <li className="rounded-md bg-muted px-3 py-1">Next.js</li>
                <li className="rounded-md bg-muted px-3 py-1">MERN</li>
                <li className="rounded-md bg-muted px-3 py-1">PostgreSQL</li>
                <li className="rounded-md bg-muted px-3 py-1">Prisma</li>
                <li className="rounded-md bg-muted px-3 py-1">Framer Motion</li>
                <li className="rounded-md bg-muted px-3 py-1">Zustand</li>
                <li className="rounded-md bg-muted px-3 py-1">Tailwind CSS</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border bg-card p-2 sm:p-6 shadow-sm"
            aria-hidden="true"
          >
            <div className="w-fit p-0.5 sm:p-2 shadow-xl flex justify-center rounded-lg bg-muted">
              <a
                href="https://github-readme-stats.vercel.app/api?username=Parth2684&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=radical&locale=en&hide_border=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://github-readme-stats.vercel.app/api?username=Parth2684&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=radical&locale=en&hide_border=false"
                  height="180"
                  alt="GitHub stats"
                  className="cursor-pointer"
                />
              </a>
            </div>

            <div className="w-fit p-0.5 sm:p-2 shadow-xl flex justify-center items-center mt-2 rounded-lg bg-muted">
              <a
                href="https://github-readme-stats.vercel.app/api/top-langs?username=Parth2684&locale=en&hide_title=false&layout=compact&card_width=600&langs_count=7&theme=radical&hide_border=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=Parth2684&locale=en&hide_title=false&layout=compact&card_width=600&langs_count=7&theme=radical&hide_border=false"
                  height="180"
                  alt="Top languages"
                  className="cursor-pointer"
                />
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 md:py-16">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Selected work featuring performance-minded builds, strong UX, and production-ready architectures.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 md:py-16">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Skills</h2>
          
          <div className="mt-5 grid gap-3 text-sm md:grid-cols-3">
            <ul className="space-y-1">
              <li className="rounded-md bg-muted px-3 py-2">JavaScript / TypeScript</li>
              <li className="rounded-md bg-muted px-3 py-2">GCP/AWS</li>
              <li className="rounded-md bg-muted px-3 py-2">Docker</li>
            </ul>
            <ul className="space-y-1">
              <li className="rounded-md bg-muted px-3 py-2">React / Next.js</li>
              <li className="rounded-md bg-muted px-3 py-2">Node.js / Express</li>
              <li className="rounded-md bg-muted px-3 py-2">Framer Motion / Zustand</li>
            </ul>
            <ul className="space-y-1">
              <li className="rounded-md bg-muted px-3 py-2">PostgreSQL / Prisma / pgvector</li>
              <li className="rounded-md bg-muted px-3 py-2">MongoDB</li>
              <li className="rounded-md bg-muted px-3 py-2">Git / Postman</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Resume */}
      <section id="resume" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 md:py-16">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Resume</h2>
            <Button asChild variant="secondary" className="rounded-md">
              <a href="/Resume.pdf" download aria-label="Download resume PDF">
                Download PDF
              </a>
            </Button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Embedded preview below. For the best experience, download the PDF.
          </p>
          <div className="mt-6">
            <ResumeViewer />
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 md:py-16">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            I&apos;m available for new opportunities. Let&apos;s build something excellent.
          </p>

          <ContactForm />
        </motion.div>
      </section>
    </div>
  )
}

import * as React from "react"
import { File, Mail } from "lucide-react"

function ContactForm() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [errors, setErrors] = React.useState<{ name?: string; email?: string; message?: string }>({})

  function validate() {
    const next: typeof errors = {}
    if (!name.trim()) next.name = "Please enter your name"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email"
    if (message.trim().length < 10) next.message = "Message should be at least 10 characters"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    window.location.href = `mailto:bhosle6006@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-xl border bg-card p-6 shadow-sm" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" className="rounded-md">
          Send Message
        </Button>
        <a
          href="mailto:bhosle6006@gmail.com"
          className="text-sm text-primary underline underline-offset-4"
          aria-label="Contact by email"
        >
          Or email directly
        </a>
      </div>
    </form>
  )
}
