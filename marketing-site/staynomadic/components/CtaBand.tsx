"use client";

import * as React from "react";
import Container from "./Container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CtaBand() {
  const [email, setEmail] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "success">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Simulate client-only capture
    console.log("StayNomadic intake:", {
      email,
      destination,
      startDate,
      endDate,
      budget,
    });
    setStatus("success");
  }

  return (
    <section id="get-started" aria-labelledby="cta-title" className="py-16 sm:py-24">
      <Container>
        <div className="rounded-3xl p-[1px] bg-teal-gradient">
          <div className="rounded-3xl bg-white/70 p-8 backdrop-blur dark:bg-white/5 md:p-10">
            <div className="grid items-start gap-6 md:grid-cols-[1fr]">
              <div>
                <h2 id="cta-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Your nomad concierge, on call
                </h2>
                <p className="mt-2 max-w-prose text-sm text-foreground/70">
                  Tell us your vibe and we’ll line up housing, coworking, and adventures—then handle the details the whole way.
                </p>
                <p className="mt-1 text-xs text-foreground/60">
                  We handle the details so you can enjoy the adventure.
                </p>
              </div>

              <form
                onSubmit={onSubmit}
                className="grid w-full gap-3 md:grid-cols-12"
                aria-describedby="cta-helper"
              >
                <div className="md:col-span-4">
                  <label htmlFor="email" className="mb-1 block text-xs font-medium text-foreground/80">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="rounded-2xl"
                    aria-label="Email address"
                  />
                </div>

                <div className="md:col-span-4">
                  <label htmlFor="destination" className="mb-1 block text-xs font-medium text-foreground/80">
                    Destination
                  </label>
                  <Input
                    id="destination"
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Lisbon, Portugal"
                    className="rounded-2xl"
                    aria-label="Destination"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="start" className="mb-1 block text-xs font-medium text-foreground/80">
                    Start date
                  </label>
                  <Input
                    id="start"
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="rounded-2xl"
                    aria-label="Start date"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="end" className="mb-1 block text-xs font-medium text-foreground/80">
                    End date
                  </label>
                  <Input
                    id="end"
                    type="date"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="rounded-2xl"
                    aria-label="End date"
                  />
                </div>

                <div className="md:col-span-3">
                  <label htmlFor="budget" className="mb-1 block text-xs font-medium text-foreground/80">
                    Monthly budget (USD)
                  </label>
                  <Input
                    id="budget"
                    type="number"
                    min="0"
                    step="100"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="2500"
                    className="rounded-2xl"
                    aria-label="Monthly budget in USD"
                  />
                </div>

                <div className="md:col-span-3 flex items-end">
                  <Button type="submit" className="w-full rounded-2xl px-6">
                    {status === "success" ? "You're on the list" : "Get concierge help"}
                  </Button>
                </div>
              </form>
            </div>

            <p id="cta-helper" className="mt-3 text-xs text-foreground/60">
              We’ll never share your info. Unsubscribe anytime.
            </p>

            {status === "success" && (
              <div
                role="status"
                aria-live="polite"
                className="mt-3 inline-flex items-center rounded-xl bg-accent px-3 py-1 text-xs text-foreground/80"
              >
                Success! A concierge will reach out shortly with next steps.
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
