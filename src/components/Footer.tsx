"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (footerContentRef.current) {
        setFooterHeight(footerContentRef.current.offsetHeight);
      }
    };

    updateHeight();
    
    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    if (footerContentRef.current) {
      observer.observe(footerContentRef.current);
    }

    return () => {
      if (footerContentRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(footerContentRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div 
      className="relative w-full"
      style={{ 
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", 
        height: footerHeight > 0 ? `${footerHeight}px` : "auto" 
      }}
    >
      <div 
        className="relative w-full"
        style={{ 
          height: footerHeight > 0 ? `calc(100vh + ${footerHeight}px)` : "auto", 
          top: footerHeight > 0 ? "-100vh" : "0" 
        }}
      >
        <div 
          className="w-full"
          style={{ 
            position: footerHeight > 0 ? "sticky" : "relative", 
            top: footerHeight > 0 ? `calc(100vh - ${footerHeight}px)` : "0" 
          }}
        >
          <footer 
            ref={footerContentRef}
            className="w-full bg-voltage text-void pt-20 pb-10 border-t border-void/20"
          >
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
              
              {/* Four Columns */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 mb-20">
                
                {/* Column 1: Studio Name */}
                <div className="flex flex-col items-start gap-4">
                  <h4 className="text-body-m font-medium !text-void uppercase tracking-wide">
                    DynamIQ Studio
                  </h4>
                  <p className="text-caption !text-void/80">
                    New York, USA<br />
                    London, UK
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse-slow"></span>
                    <span className="text-[10px] font-accent uppercase tracking-wider text-void/80">
                      Available
                    </span>
                  </div>
                </div>

                {/* Column 2: Navigation */}
                <div className="flex flex-col items-start gap-3">
                  <span className="text-label !text-void/60 mb-2">Navigation</span>
                  <Link href="#work" className="text-caption !text-void/80 hover:!text-void transition-colors">Work</Link>
                  <Link href="#about" className="text-caption !text-void/80 hover:!text-void transition-colors">About</Link>
                  <Link href="#services" className="text-caption !text-void/80 hover:!text-void transition-colors">Services</Link>
                  <Link href="#contact" className="text-caption !text-void/80 hover:!text-void transition-colors">Contact</Link>
                </div>

                {/* Column 3: Social */}
                <div className="flex flex-col items-start gap-3">
                  <span className="text-label !text-void/60 mb-2">Social</span>
                  <a href="#" className="text-caption !text-void/80 hover:!text-void transition-colors">Instagram</a>
                  <a href="#" className="text-caption !text-void/80 hover:!text-void transition-colors">Twitter (X)</a>
                  <a href="#" className="text-caption !text-void/80 hover:!text-void transition-colors">LinkedIn</a>
                  <a href="#" className="text-caption !text-void/80 hover:!text-void transition-colors">Awwwards</a>
                </div>

                {/* Column 4: Legal */}
                <div className="flex flex-col items-start gap-3">
                  <span className="text-label !text-void/60 mb-2">Legal</span>
                  <Link href="#" className="text-caption !text-void/80 hover:!text-void transition-colors">Privacy Policy</Link>
                  <Link href="#" className="text-caption !text-void/80 hover:!text-void transition-colors">Terms of Service</Link>
                </div>

              </div>

              {/* Bottom Bar */}
              <div className="w-full pt-6 border-t border-void/20 flex justify-between items-center">
                <p className="text-caption !text-void/70">
                  © 2024 DynamIQ Studio. All rights reserved.
                </p>
                <button 
                  onClick={scrollToTop}
                  className="text-label !text-void group flex items-center gap-2 relative overflow-hidden"
                  data-cursor="link"
                >
                  Back to Top 
                  <span className="inline-block transition-transform duration-500 group-hover:-translate-y-4 relative">
                    <span className="absolute top-0 left-0 transition-transform duration-500 group-hover:translate-y-4">↑</span>
                    ↑
                  </span>
                </button>
              </div>

            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
