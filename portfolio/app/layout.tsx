import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { SandevistanTrail } from "@/components/ui/SandevistanTrail";

import "./globals.css";

// Signature wordmark face — used on major headings only (hero name, nav
// logo, section titles). Not for body/UI text or copy with punctuation:
// it only ships uppercase/lowercase Latin glyphs (no numerals or
// punctuation), so titles like "Pac-Man" or "Parkinson's..." stay on
// font-display instead.
const cyberpunkSignature = localFont({
  src: "../assets/fonts/Cyberpunk.ttf",
  variable: "--font-cyberpunk",
  display: "swap",
});

// Body/UI text.
const blenderPro = localFont({
  src: "../assets/fonts/BlenderPro-Bold.ttf",
  variable: "--font-blender-pro",
  weight: "700",
  display: "swap",
});

// Headings — everything using font-display (RotatableWheel, ProjectCard,
// SectionHeading, etc).
const blenderProBold = localFont({
  src: "../assets/fonts/BlenderPro-Book.ttf",
  variable: "--font-blender-pro-bold",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azan Wasty — Software Engineer",
  description:
    "Portfolio of Azan Wasty — full-stack developer and data science student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cyberpunkSignature.variable} ${blenderPro.variable} ${blenderProBold.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-void text-text-primary antialiased">

        <SandevistanTrail />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}