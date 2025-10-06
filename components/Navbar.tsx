"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"

const links = [
  { href: "#home", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          Parth Bhosle
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            )
          })}
          <ThemeToggle className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"/>
        </div>
        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"/>
        </div>
      </nav>
    </header>
  )
}
