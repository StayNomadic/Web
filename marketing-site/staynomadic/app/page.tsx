import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueCards from "@/components/ValueCards";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="content" className="relative">
        <Hero />
        <Benefits />
        <HowItWorks />
        <ValueCards />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
