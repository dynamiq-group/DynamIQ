"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const servicesList = [
  {
    id: "01",
    name: "WEB DESIGN & DEVELOPMENT",
    description: "We build custom websites from the ground up. No templates. Every interaction is designed to tell your brand's story while maintaining exceptional performance and accessibility.",
    deliverables: ["Custom Design Systems", "Responsive Interfaces", "Interaction Prototyping", "Next.js / WebGL Development"],
  },
  {
    id: "02",
    name: "DIGITAL PRODUCT DESIGN",
    description: "End-to-end product design that balances user needs with business goals. We create intuitive, frictionless experiences for complex web and mobile applications.",
    deliverables: ["UX/UI Design", "User Research", "Wireframing", "Design Systems"],
  },
  {
    id: "03",
    name: "BRAND SYSTEMS & VISUAL IDENTITY",
    description: "A brand is more than a logo. We create comprehensive visual systems including typography, color palettes, motion guidelines, and art direction.",
    deliverables: ["Brand Strategy", "Logo & Identity", "Typography Systems", "Brand Guidelines"],
  },
  {
    id: "04",
    name: "MOTION & INTERACTION DESIGN",
    description: "Motion is emotion. We use animation not as decoration, but as a functional element that guides users and brings interfaces to life.",
    deliverables: ["Micro-interactions", "Lottie Animations", "WebGL / Three.js", "Motion Choreography"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section 
      id="services"
      className="w-full bg-void text-parchment pt-32 pb-40 border-t border-line"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        
        {/* Header Label */}
        <div className="text-label text-fog mb-20">004 — WHAT WE DO</div>

        {/* Framing Statement */}
        <h2 className="text-display-l text-parchment mb-32 max-w-4xl">
          From the first sketch to the final deploy — we own the entire craft.
        </h2>

        {/* Accordion List */}
        <div className="w-full border-t border-line">
          {servicesList.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={service.id}
                ref={(el) => { rowsRef.current[index] = el; }}
                className="w-full border-b border-line overflow-hidden group cursor-pointer hover:bg-ash transition-colors duration-300 relative"
                onClick={() => toggleAccordion(index)}
              >
                {/* Visible Header Row */}
                <div className="w-full py-8 md:py-12 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="text-label text-fog">{service.id}</span>
                    <h3 className="text-heading-m font-medium text-parchment transition-transform duration-300 group-hover:translate-x-2">
                      {service.name}
                    </h3>
                  </div>

                  {/* Expand Icon */}
                  <div className="text-fog flex items-center justify-center w-8 h-8 relative transition-colors duration-300 group-hover:text-voltage">
                    <span className={`absolute w-full h-[1.5px] bg-current transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}></span>
                    <span className={`absolute h-full w-[1.5px] bg-current transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}></span>
                  </div>
                </div>

                {/* Ghost Preview Image (Desktop Hover) */}
                <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[180px] h-[120px] bg-[#1C1C19] opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden lg:flex items-center justify-center text-smoke z-0">
                  Preview
                </div>

                {/* Expandable Content */}
                <div 
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? "3rem" : "0rem",
                    marginTop: isOpen ? "-1rem" : "0rem"
                  }}
                >
                  <div className="pl-0 md:pl-24">
                    <p className="text-body-l text-fog">{service.description}</p>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-3">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-caption text-parchment flex items-center gap-3">
                          <span className="text-voltage">→</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
