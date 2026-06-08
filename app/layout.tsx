import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Parth Bhosle — Software Engineer",
  description:
    "Portfolio of Parth Bhosle, Software Engineer specializing in Rust, Next.js, Axum, PostgreSQL, and building high-performance applications.",
  keywords: ["Parth Bhosle", "Software Engineer", "Rust", "Next.js", "Axum", "Full Stack Developer", "Web Development", "Portfolio"],
  authors: [{ name: "Parth Bhosle" }],
  creator: "Parth Bhosle",
  generator: "v0.app",
  metadataBase: new URL("https://parthcodes.com"),
  openGraph: {
    title: "Parth Bhosle — Software Engineer",
    description:
      "Portfolio of Parth Bhosle, Software Engineer specializing in Rust, Next.js, Axum, PostgreSQL, and building high-performance applications.",
    url: "https://parthcodes.com",
    siteName: "Parth Bhosle Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://parthcodes.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parth Bhosle Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Bhosle — Software Engineer",
    description:
      "Portfolio of Parth Bhosle, Software Engineer specializing in Rust, Next.js, Axum, PostgreSQL, and building high-performance applications.",
    creator: "@Parth2684",
    images: ["https://parthcodes.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent theme flash: set initial theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function () {
          try {
            const theme = localStorage.getItem('theme') || 'dark';
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          } catch (_) {}
        })();
        `,
          }}
        />
        <link rel="icon" href="/letter-p-svgrepo-com.png"></link>
      </head>
      <body
        className={cn(
          "bg-background text-foreground min-h-screen",
          "scroll-smooth",
        )}
      >
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
  );
}
