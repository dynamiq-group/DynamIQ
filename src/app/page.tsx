"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/navbar/Navigation";
import Hero from "@/components/herosection/Hero";
import About from "@/components/about/About";
import Portfolio from "@/components/services/Portfolio";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full flex flex-col min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
