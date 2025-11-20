"use client";

import * as React from "react";
import Container from "./Container";

type Step = {
  title: string;
  heading: string;
  description: string;
  imagePosition: "left" | "right";
  benefits: string[];
};

const steps: Step[] = [
  {
    title: "Share your vibe",
    heading: "Tell us about your trip(s) and journey",
    description: "Share where you want to go, your budget, travel style, and what matters most to you. Planning one trip or a multi-city journey? Rough dates? No problem. We work with your timeline and help you refine the details as you go.",
    imagePosition: "right",
    benefits: ["Answers from real nomads with 3+ years traveling"],
  },
  {
    title: "We scout & propose",
    heading: "Get a curated shortlist for your destinations and journey",
    description: "We research the best destinations and routes that match your journey. You'll receive a detailed proposal with housing options, coworking spaces, local experiences, pros/cons, total costs, and booking links—honest recommendations from real humans who've been there.",
    imagePosition: "left",
    benefits: ["Avoid common mistakes", "Save hours planning every move"],
  },
  {
    title: "We book & prep",
    heading: "Relax while we handle the details",
    description: "Once you approve, we coordinate bookings, send you a Welcome Kit with local tips, and stay available on WhatsApp for any questions. From arrival to departure, you've got a team in your corner—so you can focus on the adventure.",
    imagePosition: "right",
    benefits: ["Dive right into your location from day one"],
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Section Header */}
      <section id="how-it-works" className="py-16 sm:py-20 text-center">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Real humans, no endless tabs. We handle the research, booking, and support—so you just show up.
          </p>
        </Container>
      </section>

      {/* Individual Step Sections */}
      {steps.map((step, index) => (
        <section
          key={step.title}
          className="py-16 sm:py-20"
        >
          <Container>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${step.imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
              {/* Content */}
              <div className={step.imagePosition === "left" ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-teal-gradient text-white font-bold text-lg mb-6">
                  {index + 1}
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-4">
                  {step.heading}
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-primary"
                    >
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Placeholder */}
              <div className={step.imagePosition === "left" ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-border flex items-center justify-center">
                  <span className="text-6xl">{index === 0 ? "💭" : index === 1 ? "🔍" : "✅"}</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
