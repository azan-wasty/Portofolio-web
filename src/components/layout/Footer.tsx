import Link from "next/link";
import { profile, socialLinks } from "@/lib/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-void-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-text-dim sm:flex-row">
        <p>
          © {year} {profile.name} — built with Next.js
        </p>
        <ul className="flex gap-6">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                className="transition-colors hover:text-signal-red"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
