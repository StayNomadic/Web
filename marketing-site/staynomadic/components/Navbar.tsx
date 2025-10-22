import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import Logo from "./Logo";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why us" },
  { href: "#cities", label: "Cities" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#hero" className="focus-ring rounded-2xl px-1">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-foreground/80 hover:text-foreground focus-ring rounded-md px-1 py-1">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="rounded-2xl">
            <a href="#get-started">Get concierge help</a>
          </Button>
        </div>
      </Container>
    </header>
  );
}
