"use client";

import * as React from "react";
import Container from "./Container";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const quotes = [
  { text: "Planning was a breeze—I just showed up.", author: "Jamie R." },
  { text: "Housing, coworking, hikes—handled.", author: "Priya S." },
  { text: "Matched my vibe and budget—effortless.", author: "Marco T." },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 id="testimonials-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Loved by busy nomads
          </h2>
          <p className="mt-2 text-foreground/70">Short and sweet—what our travelers say.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <motion.div
              key={q.author}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
            >
              <Card className="h-full rounded-2xl card-hover">
                <CardContent className="p-6">
                  <p className="text-sm leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                  <p className="mt-3 text-xs font-medium text-foreground/70">— {q.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
