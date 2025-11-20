"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "./Container";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Hero() {
  function openCalendly() {
    // Open Calendly popup
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/matt-morfopoulos/chat-with-matt'
      });
    }
  }

  return (
    <section id="hero" aria-label="Hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-background.png"
          alt="Digital nomad workspace with laptop on a beachside desk overlooking tropical beach and city skyline"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
      </div>

      <Container className="relative flex min-h-[72svh] flex-col items-center justify-center text-center py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-teal-gradient" />
          Concierge for digital nomads
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
          Your personal concierge for the nomad life.
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base text-white/90 sm:text-lg drop-shadow-md">
          Tell us your vibe. We line up housing, coworking, and adventures—then handle the details so you just show up.
        </p>

        <div className="mt-8">
          <Button 
            onClick={openCalendly}
            size="lg" 
            className="rounded-2xl px-8 py-6 text-base shadow-sm transition-transform hover:scale-[1.01] whitespace-nowrap"
          >
            Get started
          </Button>
        </div>

        <p className="mt-6 text-xs text-white/70">
          Book a free onboarding call to get started.
        </p>
      </Container>
    </section>
  );
}
