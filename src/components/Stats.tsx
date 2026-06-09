"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numRefs.current.forEach((el, index) => {
        if (!el) return;
        
        const targetValue = parseInt(el.getAttribute("data-target") || "0", 10);
        
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: targetValue,
            duration: 1.5,
            ease: "expo.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
            onUpdate: function () {
              el.innerHTML = Math.ceil(Number(this.targets()[0].textContent)).toString() + (el.getAttribute("data-suffix") || "");
            },
          }
        );
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={statsRef}
      className="w-full bg-void text-parchment py-32 border-b border-line"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center divide-y md:divide-y-0 md:divide-x divide-line">
          
          <div className="flex-1 py-8 md:py-0 md:pr-10 flex flex-col items-start">
            <span 
              ref={(el) => { numRefs.current[0] = el; }} 
              data-target="28" 
              className="text-display-xl text-parchment"
            >
              0
            </span>
            <span className="text-label text-fog mt-2">Projects Completed</span>
          </div>

          <div className="flex-1 py-8 md:py-0 md:px-10 flex flex-col items-start">
            <span 
              ref={(el) => { numRefs.current[1] = el; }} 
              data-target="4" 
              data-suffix="yr"
              className="text-display-xl text-parchment"
            >
              0yr
            </span>
            <span className="text-label text-fog mt-2">Studio Experience</span>
          </div>

          <div className="flex-1 py-8 md:py-0 md:pl-10 flex flex-col items-start">
            <span 
              ref={(el) => { numRefs.current[2] = el; }} 
              data-target="100"
              data-suffix="%" 
              className="text-display-xl text-parchment"
            >
              0%
            </span>
            <span className="text-label text-fog mt-2">Client Satisfaction</span>
          </div>

        </div>
      </div>
    </section>
  );
}
