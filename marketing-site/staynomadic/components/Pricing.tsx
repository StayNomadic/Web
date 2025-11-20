"use client";

import * as React from "react";
import Container from "./Container";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you handle visas/insurance?",
    a: "We provide guidance and vetted resources.",
  },
  {
    q: "Can you plan for pets?",
    a: "Yes—dog parks, pet-friendly rentals, and sitters.",
  },
  {
    q: "What cities and continents do you cover?",
    a: "All of them. We cover destinations across every continent.",
  },
  {
    q: "What's the pricing?",
    a: "Simple concierge fee starting at $100/month with a 3-month commitment.",
  },
  {
    q: "Do you book flights?",
    a: "We do not book flights.",
  },
  {
    q: "Can you plan for teams?",
    a: "Not yet, but we're working on it!",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-16 sm:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 id="pricing-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Your personal nomad concierge for less than a coworking membership.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Monthly Membership Card */}
          <Card className="relative overflow-hidden rounded-3xl border-2 border-border">
            <div className="rounded-3xl bg-card p-8 md:p-10">
              <div className="text-center">
                <h3 className="text-2xl font-semibold">
                  Nomad Concierge
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">
                    $100
                  </span>
                  <span className="text-lg font-semibold text-foreground/70">
                    /month
                  </span>
                </div>
                <p className="mt-4 text-sm text-foreground/70">
                  3-month commitment • Everything you need to live your best nomad life
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Housing curation & booking assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Coworking space recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Curated experiences & activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Healthcare & wellness resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Local events & community connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">24/7 support from real humans</span>
                </li>
              </ul>

              <p className="mt-8 text-center text-xs text-foreground/60">
                Cancel anytime. No hidden fees.
              </p>
            </div>
          </Card>

          {/* Plan Your First Trip Card */}
          <Card className="relative overflow-hidden rounded-3xl p-[1px] bg-teal-gradient">
            <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 md:p-10">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Plan Your First Trip
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    $300
                  </span>
                  <span className="text-lg font-semibold text-foreground/70">
                    one-time
                  </span>
                </div>
                <p className="mt-4 text-sm text-foreground/70">
                  Perfect for testing the waters
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Full trip planning for one destination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Housing options with pros/cons</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Coworking space recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Welcome guide & local tips</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Support during your trip</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">No commitment required</span>
                </li>
              </ul>

              <p className="mt-8 text-center text-xs text-foreground/60">
                Try before you subscribe
              </p>
            </div>
          </Card>
          </div>

          {/* FAQ Column */}
          <div id="faq">
            <h3 className="text-2xl font-semibold tracking-tight mb-6">
              Frequently asked questions
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="rounded-2xl border px-4 overflow-visible">
                  <AccordionTrigger className="text-left text-base font-medium">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-foreground/70 pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
