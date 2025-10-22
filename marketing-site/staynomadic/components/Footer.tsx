import * as React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const nav = [
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why us" },
  { href: "#cities", label: "Cities" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container className="py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#hero" className="focus-ring rounded-2xl">
            <Logo />
          </Link>

          <nav aria-label="Footer" className="order-3 sm:order-none">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-foreground/70 hover:text-foreground focus-ring rounded-md px-1 py-1"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
            >
              <Twitter className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
            >
              <Github className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t pt-6 text-center text-xs text-foreground/60">
          © {new Date().getFullYear()} StayNomadic. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
