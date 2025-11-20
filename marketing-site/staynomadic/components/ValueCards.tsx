import * as React from "react";
import { Building2, Wifi, Stethoscope, Mountain, Users, PawPrint } from "lucide-react";
import Container from "./Container";

type Item = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    icon: Building2,
    title: "Housing curation & booking",
    desc: "Short‑list with pros/cons, total cost, and coordination.",
  },
  {
    icon: Wifi,
    title: "Coworking & Wi‑Fi",
    desc: "Verified work‑ready options with proximity notes.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & wellness",
    desc: "Find nearby doctors, dentists, gyms, and wellness centers.",
  },
  {
    icon: Mountain,
    title: "Experiences",
    desc: "Weekend escapes, classes, hikes—planned to your vibe.",
  },
  {
    icon: Users,
    title: "Local events",
    desc: "Discover meetups, workshops, and social gatherings in your area.",
  },
  {
    icon: PawPrint,
    title: "Pets",
    desc: "Dog parks, boarding, and sitters where available.",
  },
];

export default function ValueCards() {
  return (
    <>
      <span id="why" className="sr-only" aria-hidden />
      <section id="services" aria-labelledby="services-title" className="py-16 sm:py-24">
        <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 id="services-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What we handle
          </h2>
          <p className="mt-2 text-foreground/70">
            We handle the research, booking, and support—so you don&apos;t juggle tabs. Real humans, clear pricing.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((it) => (
              <div key={it.title} className="flex gap-5 items-start p-6 rounded-2xl">
                <div className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-teal-gradient shadow-lg">
                  <it.icon className="h-7 w-7 text-white" aria-hidden strokeWidth={2} />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold mb-2">{it.title}</h3>
                  <p className="text-base text-foreground/80 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Container>
      </section>
    </>
  );
}
