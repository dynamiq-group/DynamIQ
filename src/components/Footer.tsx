"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full bg-ash text-fog pt-20 pb-10 border-t border-line">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        
        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 mb-20">
          
          {/* Column 1: Studio Name */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-body-m font-medium text-parchment uppercase tracking-wide">
              DynamIQ Studio
            </h4>
            <p className="text-caption">
              New York, USA<br />
              London, UK
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-voltage animate-pulse-slow"></span>
              <span className="text-[10px] font-accent uppercase tracking-wider text-fog">
                Available
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-label text-smoke mb-2">Navigation</span>
            <Link href="#work" className="text-caption hover:text-parchment transition-colors">Work</Link>
            <Link href="#about" className="text-caption hover:text-parchment transition-colors">About</Link>
            <Link href="#services" className="text-caption hover:text-parchment transition-colors">Services</Link>
            <Link href="#contact" className="text-caption hover:text-parchment transition-colors">Contact</Link>
          </div>

          {/* Column 3: Social */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-label text-smoke mb-2">Social</span>
            <a href="#" className="text-caption hover:text-parchment transition-colors">Instagram</a>
            <a href="#" className="text-caption hover:text-parchment transition-colors">Twitter (X)</a>
            <a href="#" className="text-caption hover:text-parchment transition-colors">LinkedIn</a>
            <a href="#" className="text-caption hover:text-parchment transition-colors">Awwwards</a>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-label text-smoke mb-2">Legal</span>
            <Link href="#" className="text-caption text-smoke hover:text-parchment transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-caption text-smoke hover:text-parchment transition-colors">Terms of Service</Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-6 border-t border-line flex justify-between items-center">
          <p className="text-caption text-smoke">
            © 2024 DynamIQ Studio. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="text-label text-voltage group flex items-center gap-2 relative overflow-hidden"
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
  );
}
