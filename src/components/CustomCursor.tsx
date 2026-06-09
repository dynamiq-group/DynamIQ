"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<"link" | "card" | "email" | "drag" | null>(null);

  useEffect(() => {
    // Check if touch device, if so, don't show custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      return;
    }

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.12, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.12, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const card = target.closest('[data-cursor="card"]');
      const email = target.closest('[data-cursor="email"]');
      const drag = target.closest('[data-cursor="drag"]');
      const link = target.closest('a, button, [data-cursor="link"]');

      if (card) {
        setHoverType("card");
        setIsHovering(true);
      } else if (email) {
        setHoverType("email");
        setIsHovering(true);
      } else if (drag) {
        setHoverType("drag");
        setIsHovering(true);
      } else if (link) {
        setHoverType("link");
        setIsHovering(true);
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    // Initial position fix
    gsap.set(cursorRef.current, { x: window.innerWidth / 2, y: window.innerHeight / 2 });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor-dot flex items-center justify-center ${
        isHovering && hoverType === "link"
          ? "!w-10 !h-10 !border-parchment bg-voltage/10"
          : isHovering && hoverType === "card"
          ? "!w-20 !h-20 !border-voltage !bg-voltage"
          : isHovering && hoverType === "email"
          ? "!w-16 !h-16 !border-ember !bg-ember"
          : isHovering && hoverType === "drag"
          ? "!w-10 !h-10 !border-parchment bg-voltage/10"
          : ""
      }`}
    >
      {isHovering && hoverType === "card" && (
        <span className="text-[10px] text-void font-accent uppercase tracking-widest text-center leading-[1.2]">
          View<br/>Project
        </span>
      )}
      {isHovering && hoverType === "email" && (
        <span className="text-[10px] text-void font-accent uppercase tracking-widest text-center leading-[1.2]">
          Email<br/>Us
        </span>
      )}
      {isHovering && hoverType === "drag" && (
        <span className="text-[10px] text-parchment font-accent uppercase tracking-widest text-center leading-[1.2]">
          ← Drag →
        </span>
      )}
    </div>
  );
}
