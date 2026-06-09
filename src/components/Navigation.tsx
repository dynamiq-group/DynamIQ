"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[72px] z-40 transition-colors duration-500 flex items-center justify-center ${
        scrolled ? "bg-void/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Bounding margin system container */}
      <div className="w-full max-w-[1440px] px-5 md:px-10 lg:px-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="text-body-m font-medium text-parchment tracking-wide hover:text-voltage transition-colors duration-300">
            DYNAMIQ STUDIO
          </Link>
        </div>

        {/* Center: Negative Space (Desktop) */}
        <div className="hidden md:block flex-1"></div>

        {/* Right: Nav Links & Availability */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] font-body text-fog relative group py-2"
              >
                <span className="group-hover:text-parchment transition-colors duration-200">
                  {link.name}
                </span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-voltage scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Availability Indicator */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage animate-pulse-slow"></span>
            <span className="text-label text-fog uppercase whitespace-nowrap">
              Available for 2025
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle (Placeholder for now) */}
        <button className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8">
          <span className="w-full h-[1px] bg-parchment block"></span>
        </button>
      </div>
    </header>
  );
}
