"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const btnRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    // Magnetic Button Effect
    const btn = btnRef.current;
    if (!btn) return;

    const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const radius = 60; // 60px magnetic radius
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < radius + rect.width / 2) {
        // Apply magnetic pull
        xTo(distanceX * 0.4);
        yTo(distanceY * 0.4);
      } else {
        // Reset
        xTo(0);
        yTo(0);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="contact" className="w-full relative bg-void text-parchment pt-40 pb-20 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-voltage/5 blur-[150px] pointer-events-none z-0"></div>

      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        
        {/* Label */}
        <div className="text-label text-fog mb-20">LET'S BUILD</div>

        {/* Headline */}
        <h2 className="text-display-xl font-light leading-none mb-32 flex flex-col items-start select-none">
          <span className="block">Have an idea?</span>
          <span className="block">We want to</span>
          <span className="block flex items-baseline">
            hear it. 
            <span className="text-voltage inline-block ml-3 -translate-y-[0.1em]">●</span>
          </span>
        </h2>

        {/* Divider */}
        <div className="w-full h-[1px] bg-line mb-10"></div>

        {/* Bottom CTA Area */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          <a 
            href="mailto:hello@dynamiqstudio.com"
            className="group relative inline-block"
            data-cursor="email"
          >
            <span className="text-heading-l text-parchment group-hover:text-voltage transition-colors duration-300">
              hello@dynamiqstudio.com
            </span>
            {/* Ember underline on hover */}
            <span className="absolute bottom-1 left-0 w-full h-[2px] bg-ember scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>

          <button 
            ref={btnRef}
            className="group bg-voltage text-void font-body font-medium text-[16px] px-8 py-4 rounded-full flex items-center transition-all duration-250 hover:bg-ember hover:scale-105 hover:shadow-[0_0_40px_rgba(200,242,58,0.25)] will-change-transform cursor-none"
          >
            Start a Project
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>

        </div>
      </div>
    </section>
  );
}
