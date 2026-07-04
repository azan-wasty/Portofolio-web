import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { LiveWallpaper } from "@/components/ui/LiveBground";
import { SandevistanTrail } from "@/components/ui/SandevistanTrail";
import { Footer } from "@/components/layout/Footer";

import "./globals.css";

const cyberpunkSignature = localFont({
  src: "../assets/fonts/Cyberpunk.ttf",
  variable: "--font-cyberpunk",
  display: "swap",
});

const blenderPro = localFont({
  src: "../assets/fonts/BlenderPro-Book.ttf",
  variable: "--font-blender-pro",
  weight: "700",
  display: "swap",
});

const blenderProBold = localFont({
  src: "../assets/fonts/BlenderPro-Bold.ttf",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`relative text-white antialiased ${cyberpunkSignature.variable} ${blenderPro.variable} ${blenderProBold.variable}`}
      >
        <LiveWallpaper />
        <SandevistanTrail />

        <Navbar />

        <main className="relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}