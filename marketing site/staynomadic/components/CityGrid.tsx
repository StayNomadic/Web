import * as React from "react";
import Container from "./Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type City = {
  slug: string;
  name: string;
  blurb: string;
};

const cities: City[] = [
  { slug: "vancouver", name: "Vancouver", blurb: "Mountains, sea, and stellar coffee." },
  { slug: "lisbon", name: "Lisbon", blurb: "Tiles, tram lines, and Atlantic light." },
  { slug: "mexico-city", name: "Mexico City", blurb: "Culture, cuisine, and vibrant barrios." },
  { slug: "bali", name: "Bali", blurb: "Tropical calm with a creative pulse." },
  { slug: "chiang-mai", name: "Chiang Mai", blurb: "Temples, markets, and mellow vibes." },
  { slug: "barcelona", name: "Barcelona", blurb: "Mediterranean energy and architecture." },
];

export default function CityGrid() {
  return (
    <section id="cities" aria-labelledby="cities-title" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 id="cities-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Cities
          </h2>
          <p className="mt-2 text-foreground/70">
            We keep a curated list that evolves—here are a few favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <Card key={c.slug} className="overflow-hidden rounded-2xl card-hover">
              <div className="relative aspect-[4/3] w-full bg-teal-gradient">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.08),rgba(0,0,0,0.2))]" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{c.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/70">{c.blurb}</p>
                <a
                  href="#get-started"
                  className="mt-3 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline focus-ring rounded-md px-1 py-1"
                >
                  Explore city →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
