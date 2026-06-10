"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Dr. Singh Dental",
    fullTitle: "Singh Dental Clinic",
    description: "Advanced Care, Human Touch. A digital platform for a 4.8-star rated dental clinic with 20+ years of expertise.",
    meta: "Healthcare + Web — 2024",
    image: "https://www.drsinghdental.com/assets/images/banner/desktop_banner-1.webp",
    aspectRatio: "aspect-[3/4]",
    size: "w-full md:w-[40%]",
    offset: "md:mt-0",
  },
  {
    id: "02",
    title: "CoWork'IN",
    fullTitle: "CoWork'IN Spaces",
    description: "Premium shared environments and private suites optimized for scaling builders, featuring a workspace network across 30+ cities.",
    meta: "Enterprise Workspace + Web — 2024",
    image: "https://co-work-in.vercel.app/images/private_office.png",
    aspectRatio: "aspect-[16/9]",
    size: "w-full md:w-[50%]",
    offset: "md:mt-32",
  },
  {
    id: "03",
    title: "Nexus Labs",
    fullTitle: "Nexus AI Platform",
    description: "Interaction design and 3D web experience for an AI research lab, visualizing complex neural networks in real-time.",
    meta: "Web GL + Interaction — 2023",
    aspectRatio: "aspect-[3/2]",
    size: "w-full md:w-[50%]",
    offset: "md:ml-[10%]",
  },
  {
    id: "04",
    title: "Objekt",
    fullTitle: "Objekt Furniture",
    description: "E-commerce experience for a luxury furniture brand, focusing on high-fidelity imagery and micro-interactions.",
    meta: "E-Commerce + Web — 2023",
    aspectRatio: "aspect-[3/4]",
    size: "w-full md:w-[35%]",
    offset: "md:-mt-20",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal cards on scroll
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        gsap.fromTo(
          card,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="work"
      ref={sectionRef} 
      className="w-full bg-void text-parchment pt-32 pb-40"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-20">
          <div className="text-label text-fog">003 — SELECTED WORK</div>
          <div className="text-label text-fog">08 PROJECTS</div>
        </div>

        {/* Grid Container */}
        <div className="flex flex-wrap justify-between gap-y-20 md:gap-y-32">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className={`relative flex flex-col group cursor-none ${project.size} ${project.offset}`}
              data-cursor="card"
            >
              <div className="text-label text-fog mb-3">—{project.id}</div>
              
              {/* Image Container */}
              <div className={`w-full relative overflow-hidden bg-ash ${project.aspectRatio}`}>
                {/* Image or Placeholder */}
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[0.5s] ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1C1C19] scale-100 group-hover:scale-105 transition-transform duration-[0.5s] ease-out flex items-center justify-center text-smoke">
                    [PROJECT {project.id}]
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-void/85 flex flex-col justify-end p-8 clip-path-inset-bottom-0 group-hover:clip-path-inset-0 transition-all duration-[0.4s] ease-[cubic-bezier(0.76,0,0.24,1)]">
                  <h3 className="text-heading-l text-parchment italic font-display leading-tight mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {project.fullTitle}
                  </h3>
                  <p className="text-body-m text-parchment max-w-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-[150ms]">
                    {project.description}
                  </p>
                  <div className="mt-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <span className="text-label text-voltage inline-block border-b border-voltage/30 pb-1">
                      View Project →
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Metadata (Hides on hover) */}
              <div className="mt-4 flex flex-col transition-opacity duration-300 group-hover:opacity-0">
                <h4 className="text-heading-m font-medium text-parchment">{project.title}</h4>
                <p className="text-caption mt-1">{project.meta}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-32 w-full flex justify-center">
          <button 
            className="text-body-m font-medium text-parchment py-2 group relative"
            data-cursor="link"
          >
            Load More Work (4/8)
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-voltage scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></span>
          </button>
        </div>

      </div>
    </section>
  );
}
