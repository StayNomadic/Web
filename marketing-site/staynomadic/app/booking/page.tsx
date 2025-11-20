"use client";

import * as React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main id="content" className="relative">
        <section className="py-16 sm:py-24">
          <Container>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Book Your Free Onboarding Call
              </h1>
              <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                Let&apos;s talk about your nomad journey. Schedule a 30-minute call to discuss your travel plans and how we can help.
              </p>
            </div>

            {/* Calendly embed container */}
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl p-[1px] bg-teal-gradient">
                <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 md:p-10">
                  {/* Placeholder for Calendly */}
                  <div className="min-h-[600px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-2xl">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
                        <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Insert Your Calendly Link
                      </h2>
                      <p className="text-sm text-foreground/70 max-w-md mx-auto mb-4">
                        Replace this placeholder with your Calendly embed code to allow visitors to book onboarding calls.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-left">
                        <code className="text-xs text-gray-800 dark:text-gray-200 break-all">
                          {`<!-- Calendly inline widget begin -->\n<div class="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style="min-width:320px;height:700px;"></div>\n<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>\n<!-- Calendly inline widget end -->`}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-foreground/60">
                  Not ready to book yet?{" "}
                  <Link href="/" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">
                    Return to homepage
                  </Link>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
