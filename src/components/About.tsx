"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelOneRef = useRef<HTMLDivElement>(null);
  const panelTwoRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for founders panels
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Divider draw
      gsap.fromTo(
        dividerRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Panel 1 moves up slightly
      gsap.to(panelOneRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Panel 2 moves down slightly
      gsap.to(panelTwoRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="w-full relative bg-void text-parchment pt-32 pb-40"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Label */}
        <div className="text-label text-fog mb-20 overflow-hidden">
          <span className="inline-block">002 — THE STUDIO</span>
        </div>

        {/* Diptych Container */}
        <div className="relative w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 mt-10">
          
          {/* Central Divider */}
          <div 
            ref={dividerRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-line origin-top"
          ></div>

          {/* Founder One Panel */}
          <div 
            ref={panelOneRef}
            className="w-full md:w-[45%] flex flex-col items-center md:items-start group md:-mt-20"
            data-cursor="drag"
          >
            <div className="w-full aspect-[3/4] relative overflow-hidden bg-ash">
              <div className="absolute inset-0 grayscale-[0.75] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-[1.015]">
                <img 
                  src="/images/divyansh.jpg" 
                  alt="Divyansh - Co-Founder"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              {/* Bio reveal on hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-void/90 to-transparent">
                <p className="text-body-m text-parchment">
                  Former lead designer at a global agency. Obsessed with typographic precision and structural harmony.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <h3 className="text-display-l uppercase text-parchment">DIVYANSH</h3>
              <p className="text-label text-fog mt-1">Co-Founder & Creative Director</p>
            </div>
          </div>

          {/* Founder Two Panel */}
          <div 
            ref={panelTwoRef}
            className="w-full md:w-[45%] flex flex-col items-center md:items-start group md:mt-20"
            data-cursor="drag"
          >
            <div className="w-full aspect-[3/4] relative overflow-hidden bg-ash">
              <div className="absolute inset-0 grayscale-[0.75] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-[1.015]">
                <img 
                  src="/images/animesh.jpg" 
                  alt="Animesh Raghav - Co-Founder"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>

              {/* Bio reveal on hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-void/90 to-transparent">
                <p className="text-body-m text-parchment">
                  Creative developer bridging logic and emotion. Believes code is a design medium.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <h3 className="text-display-l uppercase text-parchment">ANIMESH RAGHAV</h3>
              <p className="text-label text-fog mt-1">Co-Founder & Technical Director</p>
            </div>
          </div>

        </div>

        {/* Philosophy Area */}
        <div className="w-full mt-40 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-display-l italic text-parchment px-4 leading-[1.1]">
            "We believe the best digital products are invisible — until they're not."
          </h2>

          <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <p className="text-body-m text-fog">
              We started this studio to escape the factory model of digital production. We don't believe in templates or rushing to launch. Every project is an opportunity to invent a new language for a brand.
            </p>
            <p className="text-body-m text-fog">
              Our approach pairs obsessive visual design with deep technical architecture. A site must not only look stunning, it must perform flawlessly. This duality is what we mean by DynamIQ Studio.
            </p>
            <p className="text-body-m text-fog">
              When we partner with you, we become an extension of your team. We challenge your assumptions, push the creative boundaries, and ultimately deliver a product that sets a new industry standard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
