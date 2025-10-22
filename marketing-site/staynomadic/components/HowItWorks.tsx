import * as React from "react";
import Container from "./Container";

type Step = {
  title: string;
  desc: string;
};

const steps: Step[] = [
  { title: "Share your vibe", desc: "Dream route, budget, must‑haves. Rough dates are fine." },
  { title: "We scout & propose", desc: "Curated shortlist with pros/cons and total cost." },
  { title: "We book & prep", desc: "Bookings, Welcome Kit, and WhatsApp support." },
];

export default function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 id="how-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How it works
          </h2>
          <p className="mt-2 text-foreground/70">
            Share your vibe → We scout & propose → We book & prep. Real humans, no endless tabs.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="group rounded-2xl border bg-card p-6 card-hover">
              <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-gradient text-[13px] font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
