"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import Logo from "./Logo";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  function openCalendly() {
    // Open Calendly popup
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/matt-morfopoulos/chat-with-matt'
      });
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-20 items-center justify-between">
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
          <Button onClick={openCalendly} className="rounded-2xl">
            Get concierge help
          </Button>
        </div>
      </Container>
    </header>
  );
}
