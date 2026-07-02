import type { Metadata } from "next";
import localFont from "next/font/local";
// stub

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTrail } from "@/components/ui/ScrollTrail";
import { SandevistanTrail } from "@/components/ui/SandevistanTrail";
import { CyberGrid } from "@/components/ui/CyberGrid";
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
      className={`${cyberpunkSignature.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-void text-text-primary antialiased">
        <CyberGrid />
        <ScrollTrail />
        <SandevistanTrail />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}