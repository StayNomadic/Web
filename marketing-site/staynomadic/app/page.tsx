import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueCards from "@/components/ValueCards";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="content" className="relative">
        <Hero />
        <ValueCards />
        <HowItWorks />
        <Testimonials />
        <CtaBand />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
