import type { Metadata } from "next";
import { Oxanium, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTrail } from "@/components/ui/ScrollTrail";
import { SandevistanTrail } from "@/components/ui/SandevistanTrail";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={`${oxanium.variable} ${spaceMono.variable} h-full`}
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
