import * as React from "react";
import Container from "./Container";

type Stat = {
  icon: string;
  value: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: "🌎",
    value: "25",
    suffix: "+",
    label: "Curated cities and regions",
  },
  {
    icon: "✈️",
    value: "500",
    suffix: "+",
    label: "Trips planned",
  },
  {
    icon: "🏠",
    value: "1,000",
    suffix: "+",
    label: "Partner stays and spaces",
  },
  {
    icon: "⚡",
    value: "<24",
    suffix: "h",
    label: "Average response time",
  },
];

export default function StatsBand() {
  return (
    <section className="py-12 sm:py-16 border-y border-border bg-accent/30">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
                {stat.value}
                {stat.suffix && <span className="text-primary">{stat.suffix}</span>}
              </div>
              <p className="text-sm text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
