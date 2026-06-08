"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

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
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.39v6.35zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z"
      />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div id="home">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-pretty text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Parth Bhosle
              </h1>
              <p className="text-pretty text-lg md:text-xl text-muted-foreground font-medium">
                Software Engineer
              </p>
            </div>
            <p className="text-pretty leading-relaxed text-sm md:text-base text-muted-foreground/80">
              I build robust, performant web apps with modern stacks: Rust,
              Axum, Next.js, TypeScript, Prisma, PostgreSQL, and MongoDB. I care
              deeply about elegant UX, accessibility, and clean architecture.
            </p>
            <p className="text-pretty leading-relaxed text-sm md:text-base text-muted-foreground/80">
              I&apos;m a software engineer focused on building fast,
              accessible, and maintainable applications. My experience spans
              Rust, Next.js, React, Node.js, PostgreSQL, Prisma, MongoDB, and modern
              tooling. I enjoy designing clean architectures, optimizing
              performance, and shipping thoughtful UX with smooth motion.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-3">
                <Link
                  href="https://github.com/Parth2684"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl bg-primary/10 p-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                >
                  <IconGitHub className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/parth-bhosle-46a078271"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl bg-primary/10 p-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                >
                  <IconLinkedIn className="h-5 w-5" />
                </Link>
                <Link
                  href="https://x.com/ParthBhosle1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="rounded-xl bg-primary/10 p-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                >
                  <IconX className="h-5 w-5" />
                </Link>
                <a
                  href="mailto:bhosle6006@gmail.com"
                  className="rounded-xl bg-primary/10 p-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="pt-6">
              <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                <li className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-medium text-primary/90 hover:bg-primary/10 hover:border-primary/40 transition-all">Rust</li>
                <li className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-medium text-primary/90 hover:bg-primary/10 hover:border-primary/40 transition-all">TypeScript</li>
                <li className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-medium text-primary/90 hover:bg-primary/10 hover:border-primary/40 transition-all">Next.js</li>
                <li className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-medium text-primary/90 hover:bg-primary/10 hover:border-primary/40 transition-all">Axum</li>
                <li className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-medium text-primary/90 hover:bg-primary/10 hover:border-primary/40 transition-all">Tauri</li>
                {/* <li className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-medium text-primary/90 hover:bg-primary/10 hover:border-primary/40 transition-all">PostgreSQL</li> */}
                <li className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-medium text-primary/90 hover:bg-primary/10 hover:border-primary/40 transition-all">Docker</li>
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
                href="https://github-readme-stats-lilac-delta-38.vercel.app/api?username=Parth2684&show_icons=true&theme=radical"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://github-readme-stats-lilac-delta-38.vercel.app/api?username=Parth2684&show_icons=true&theme=radical"
                  height="180"
                  alt="GitHub stats"
                  className="cursor-pointer"
                />
              </a>
            </div>

            <div className="w-fit p-0.5 sm:p-2 shadow-xl flex justify-center items-center mt-2 rounded-lg bg-muted">
              <a
                href="https://github-readme-stats-lilac-delta-38.vercel.app/api/top-langs?username=Parth2684&locale=en&hide_title=false&layout=compact&card_width=600&langs_count=4&theme=radical&hide_border=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://github-readme-stats-lilac-delta-38.vercel.app/api/top-langs?username=Parth2684&locale=en&hide_title=false&layout=compact&card_width=600&langs_count=4&theme=radical&hide_border=false"
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
      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-20 py-16 md:py-24 lg:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
              A selection of my work showcasing modern development practices and
              attention to detail.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {projects.map((p, index) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="grid lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                      <Image
                        src={p.image || "/placeholder.svg"}
                        alt={`${p.title} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={index === 0}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            {p.title}
                          </h3>
                          {p.tech && p.tech.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {p.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <p className="text-base leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                          {p.links.live && (
                            <Link
                              href={p.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl"
                            >
                              <svg
                                className="h-4 w-4"
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
                              Live Demo
                            </Link>
                          )}
                          {p.links.github && (
                            <Link
                              href={p.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent transition-all"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52 0-.53.63-.01 1.08.58 1.23.82.72 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 018 4.73c.68.003 1.37.092 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.45.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" />
                              </svg>
                              GitHub
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-20 py-12 md:py-16 lg:py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
            Skills
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base lg:text-lg">
            Technologies and tools I work with to build modern applications.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Rust", desc: "Systems programming language for performance and safety" },
              { name: "TypeScript", desc: "Typed JavaScript for scalable applications" },
              { name: "JavaScript", desc: "Core language for web development" },
              { name: "SQL", desc: "Database querying and data manipulation" },
              { name: "React", desc: "Component-based UI library" },
              { name: "Next.js", desc: "React framework for production apps" },
              { name: "Tauri", desc: "Build cross-platform desktop apps with web tech" },
              { name: "Axum", desc: "Modern async web framework for Rust" },
              { name: "Node.js", desc: "JavaScript runtime for backend development" },
              { name: "Express.js", desc: "Minimalist web framework for Node.js" },
              { name: "PostgreSQL", desc: "Powerful open-source relational database" },
              { name: "MongoDB", desc: "NoSQL database for flexible data storage" },
              { name: "SQLite", desc: "Lightweight embedded database engine" },
              { name: "Redis", desc: "In-memory data store for caching and queues" },
              { name: "Prisma", desc: "Modern ORM for type-safe database access" },
              { name: "SeaORM", desc: "Async ORM for Rust applications" },
              { name: "Docker", desc: "Container platform for application deployment" },
              { name: "Git", desc: "Version control system for code management" },
              { name: "Linux", desc: "Operating system for server and development" },
              { name: "Vercel", desc: "Cloud platform for Next.js deployment" },
              { name: "Tailwind CSS", desc: "Utility-first CSS framework" },
              { name: "Framer Motion", desc: "Animation library for React" },
              { name: "Zustand", desc: "Lightweight state management for React" },
              { name: "REST APIs", desc: "Architectural style for web services" },
              { name: "OAuth 2.0", desc: "Authorization framework for secure access" },
              { name: "WebSockets", desc: "Real-time bidirectional communication" },
              { name: "Multi-threading", desc: "Concurrent execution for performance" }
            ].map((skill) => (
              <div
                key={skill.name}
                className="group rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <h3 className="font-semibold text-primary group-hover:text-primary/90 transition-colors">
                  {skill.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-20 py-12 md:py-16 lg:py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
            Education
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base lg:text-lg">
            My academic background and continuous learning journey.
          </p>
          <div className="mt-6">
            <div className="rounded-xl border bg-gradient-to-br from-card to-card/50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Vasantdada Patil College of Engineering</h3>
                  <p className="text-sm text-muted-foreground mt-1">Bachelor of Engineering in Information Technology</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Mumbai, India
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      2022 - 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-20 py-12 md:py-16 lg:py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Contact
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            I&apos;m available for new opportunities. Let&apos;s build something
            excellent.
          </p>

          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
}

import * as React from "react";
import { Mail } from "lucide-react";

function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  function validate() {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email";
    if (message.trim().length < 10)
      next.message = "Message should be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:bhosle6006@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 grid gap-4 rounded-xl border bg-card p-6 shadow-sm"
      noValidate
    >
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
  );
}
