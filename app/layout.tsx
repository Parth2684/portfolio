import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Parth Bhosle — Full Stack Developer",
  description:
    "Portfolio of Parth Bhosle, Full Stack Developer specializing in Next.js, MERN, PostgreSQL, Prisma, and modern web performance.",
  generator: "v0.app",
  metadataBase: new URL("https://parthcodes.com"),
  openGraph: {
    title: "Parth Bhosle — Full Stack Developer",
    description:
      "Portfolio of Parth Bhosle, Full Stack Developer specializing in Next.js, MERN, PostgreSQL, Prisma, and modern web performance.",
    url: "https://parthcodes.com",
    siteName: "Parth Bhosle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Bhosle — Full Stack Developer",
    description:
      "Portfolio of Parth Bhosle, Full Stack Developer specializing in Next.js, MERN, PostgreSQL, Prisma, and modern web performance.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Prevent theme flash: set initial theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    const ls = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = ls || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (_) {}
})();`,
          }}
        />
        <link rel="icon" href="/letter-p-svgrepo-com.svg"></link>
      </head>
      <body className={cn("bg-background text-foreground min-h-screen", "scroll-smooth")}>
        <div className="flex min-h-screen flex-col">
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
