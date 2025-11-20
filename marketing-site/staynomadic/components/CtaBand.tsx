"use client";

import * as React from "react";
import Container from "./Container";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CtaBand() {
  function openCalendly() {
    // Open Calendly popup
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/matt-morfopoulos/chat-with-matt'
      });
    }
  }

  return (
    <section id="get-started" aria-labelledby="cta-title" className="py-16 sm:py-24">
      <Container>
        <div className="rounded-3xl p-[1px] bg-teal-gradient">
          <div className="rounded-3xl bg-white/70 p-8 backdrop-blur dark:bg-white/5 md:p-10">
            <div className="text-center">
              <h2 id="cta-title" className="text-2xl font-semibold tracking-tight sm:text-3xl text-gray-900 dark:text-white">
                Ready to simplify your nomad life?
              </h2>
              <p className="mt-2 text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Book a free onboarding call and experience concierge service that handles housing, coworking, and adventures—so you can just show up and enjoy.
              </p>

              <div className="mt-6">
                <Button 
                  onClick={openCalendly}
                  size="lg"
                  className="rounded-2xl px-8 py-6 text-base whitespace-nowrap font-semibold"
                >
                  Get started
                </Button>
              </div>

              <p id="cta-helper" className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Book a free onboarding call to get started.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
