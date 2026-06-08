"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "#home", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link href="/" className="font-semibold tracking-tight text-base sm:text-lg">
          Parth Bhosle
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"/>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"/>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t bg-background"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
