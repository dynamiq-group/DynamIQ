"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CtaButton from "@/components/buttons/ctabutton";
import Marquee from "@/components/herosection/Marquee";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic entrance animation setup (Placeholder for Phase 3 GSAP choreography)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineLinesRef.current,
        { y: 100, opacity: 0, rotateX: 45 },
        { y: 0, opacity: 1, rotateX: 0, stagger: 0.1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center bg-void text-parchment"
    >
      {/* Background WebGL Placeholder */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-parchment/5 blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>

      {/* Content Container */}
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">

        {/* Label */}
        <p className="text-label text-fog mb-6 md:mb-10 overflow-hidden">
          DYNAMIQ — EST. 2026
        </p>

        {/* Headline */}
        <h1 className="text-display-xl flex flex-col items-start uppercase select-none">
          <div className="overflow-hidden pb-2" ref={(el) => { headlineLinesRef.current[0] = el; }}>
            WE BUILD
          </div>
          <div className="overflow-hidden pb-2" ref={(el) => { headlineLinesRef.current[1] = el; }}>
            DIGITAL
          </div>
          <div className="overflow-hidden pb-2 flex items-baseline" ref={(el) => { headlineLinesRef.current[2] = el; }}>
            EXPERIENCE<span className="italic">S</span>
            <span className="text-voltage inline-block ml-1 md:ml-3 -translate-y-[0.1em]">●</span>
          </div>
        </h1>

        {/* Divider */}
        <div className="w-full h-[1px] bg-line my-8 md:my-12 origin-left scale-x-100"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-body-l text-fog max-w-md">
            We partner with founders and brands to craft digital products that stand apart — from concept to launch.
          </p>

          {/* CTA */}
          <CtaButton text="Schedule a Call" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute right-5 md:right-10 bottom-24 hidden md:flex flex-col items-center gap-4 mix-blend-difference">
        <span className="text-label text-fog select-none [writing-mode:vertical-lr] whitespace-nowrap">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-10 bg-line relative overflow-hidden mt-20">
          <div
            ref={scrollLineRef}
            className="absolute top-0 left-0 w-full h-1/2 bg-voltage animate-[scroll-down_1.5s_ease-in-out_infinite]"
          ></div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Marquee />
      </div>
    </section>
  );
}
