import type { Metadata } from "next";
import localFont from "next/font/local";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTrail } from "@/components/ui/ScrollTrail";
import { SandevistanTrail } from "@/components/ui/SandevistanTrail";
import "./globals.css";

import { Barlow_Condensed, Roboto } from "next/font/google";

// const barlowCondensed = Barlow_Condensed({
//   variable: "--font-barlow-condensed",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Signature wordmark face — used sparingly, hero name only. Not for body
// or UI text: it only ships uppercase/lowercase Latin glyphs (no numerals
// or punctuation).
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
      className={`${cyberpunkSignature.variable} ${roboto.variable} ${cyberpunkSignature.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-void text-text-primary antialiased">
        <ScrollTrail />
        <SandevistanTrail />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}