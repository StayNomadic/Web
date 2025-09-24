import * as React from "react";
import { Button } from "@/components/ui/button";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-b from-white to-[#F5F7F8] dark:from-[#0f1115] dark:to-[#0f1115]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22144%22 height=%22144%22 viewBox=%220 0 144 144%22><path d=%22M0 72h144M72 0v144%22 stroke=%22%23e5e7eb%22 stroke-width=%221%22 fill=%22none%22 /></svg>')] opacity-30 dark:opacity-10" />
      </div>

      <Container className="relative flex min-h-[72svh] flex-col items-center justify-center text-center py-20">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs text-foreground/70 backdrop-blur dark:bg-white/5">
          <span className="h-2 w-2 rounded-full bg-teal-gradient" />
          Concierge for digital nomads
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your personal concierge for the nomad life.
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base text-foreground/70 sm:text-lg">
          Tell us your vibe. We line up housing, coworking, and adventures—then handle the details so you just show up.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-2xl px-6 py-6 text-base shadow-sm transition-transform hover:scale-[1.01]">
            <a href="#get-started">Get concierge help</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6 py-6 text-base">
            <a href="#how">See how it works</a>
          </Button>
        </div>
        <p className="mt-3 text-xs text-foreground/60">
          We handle the details so you can enjoy the adventure.
        </p>
      </Container>
    </section>
  );
}
