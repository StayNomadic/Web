import * as React from "react";
import Container from "./Container";
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
    q: "What cities do you cover?",
    a: "We keep a curated list that evolves.",
  },
  {
    q: "What’s the pricing?",
    a: "Simple concierge fee; custom quotes for teams.",
  },
  {
    q: "Do you book flights?",
    a: "We focus on your on-the-ground experience. We’ll share trusted flight tools.",
  },
  {
    q: "Can you plan for teams?",
    a: "Absolutely. Tell us headcount, roles, and goals for a tailored plan.",
  },
];

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 id="faq-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-foreground/70">Answers to common questions about StayNomadic.</p>
        </div>

        <Accordion type="single" collapsible className="mx-auto max-w-2xl">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="rounded-2xl border px-4">
              <AccordionTrigger className="text-left text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/70">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
