"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    // Clone the content for seamless looping
    const track = trackRef.current;
    const items = track.innerHTML;
    track.innerHTML = items + items;

    // Create the animation
    const tween = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 20, // Adjust for speed
      repeat: -1,
    });

    // Hover interaction to slow down
    const handleMouseEnter = () => gsap.to(tween, { timeScale: 0.5, duration: 0.5 });
    const handleMouseLeave = () => gsap.to(tween, { timeScale: 1, duration: 0.5 });

    const container = containerRef.current;
    container?.addEventListener("mouseenter", handleMouseEnter);
    container?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container?.removeEventListener("mouseenter", handleMouseEnter);
      container?.removeEventListener("mouseleave", handleMouseLeave);
      tween.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full h-16 bg-ash border-y border-line overflow-hidden flex items-center relative z-20 cursor-default"
    >
      <div 
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {/* Marquee Content block */}
        <div className="flex items-center">
          <span className="text-[14px] font-accent font-medium uppercase tracking-widest text-parchment mx-6">
            Web Design
          </span>
          <span className="text-[14px] text-voltage">✦</span>
          <span className="text-[14px] font-accent font-medium uppercase tracking-widest text-parchment mx-6">
            Digital Products
          </span>
          <span className="text-[14px] text-voltage">✦</span>
          <span className="text-[14px] font-accent font-medium uppercase tracking-widest text-parchment mx-6">
            Brand Systems
          </span>
          <span className="text-[14px] text-voltage">✦</span>
          <span className="text-[14px] font-accent font-medium uppercase tracking-widest text-parchment mx-6">
            Motion
          </span>
          <span className="text-[14px] text-voltage">✦</span>
          <span className="text-[14px] font-accent font-medium uppercase tracking-widest text-parchment mx-6">
            Development
          </span>
          <span className="text-[14px] text-voltage mr-6">✦</span>
        </div>
      </div>
    </section>
  );
}
