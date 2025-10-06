import type React from "react"
import Link from "next/link"




export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Parth Bhosle. All rights reserved.</p>
      </div>
    </footer>
  )
}
