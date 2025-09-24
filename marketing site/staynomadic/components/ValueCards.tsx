import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Wifi, Plane, Mountain, ShieldCheck, PawPrint } from "lucide-react";
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
    icon: Plane,
    title: "Logistics",
    desc: "Airport transfer, SIM, gym, and local transport primers.",
  },
  {
    icon: Mountain,
    title: "Experiences",
    desc: "Weekend escapes, classes, hikes—planned to your vibe.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance resources",
    desc: "Visas and insurance guidance via vetted partners.",
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
            We handle the research, booking, and support—so you don’t juggle tabs. Real humans, clear pricing.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="rounded-2xl card-hover">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                  <it.icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <CardTitle className="text-base">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-foreground/70">
                {it.desc}
              </CardContent>
            </Card>
          ))}
        </div>
        </Container>
      </section>
    </>
  );
}
