import * as React from "react";
import Container from "./Container";

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: "📲",
    title: "24/7 support",
    description: "Always-on help for last-minute changes, issues, or questions in any timezone.",
  },
  {
    icon: "🧑‍💼",
    title: "Dedicated personal concierge",
    description: "One person who knows your preferences, travel style, and needs — not a rotating support team.",
  },
  {
    icon: "💬",
    title: "Private WhatsApp channel",
    description: "Direct, fast communication with your concierge — no apps, no tickets, no waiting.",
  },
];

export default function Benefits() {
  return (
    <section className="py-8 sm:py-10 border-y border-border bg-accent/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start"
            >
              <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-foreground/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
