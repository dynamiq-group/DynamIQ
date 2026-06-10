"use client";

import { useEffect, forwardRef } from "react";
import Script from "next/script";

// Type definition for window.Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CtaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  url?: string;
  showArrow?: boolean;
  showUnderline?: boolean;
}

const CtaButton = forwardRef<HTMLAnchorElement, CtaButtonProps>(
  (
    {
      text = "Schedule a Call",
      className = "group flex items-center text-body-m font-medium text-parchment py-2 relative",
      url = "https://calendly.com/dynamiq-in/30min?primary_color=000000",
      showArrow = true,
      showUnderline = true,
      children,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      // Dynamically load Calendly widget.css stylesheet
      const linkId = "calendly-style";
      if (!document.getElementById(linkId)) {
        const link = document.createElement("link");
        link.id = linkId;
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url });
      } else {
        console.warn("Calendly widget script not loaded yet.");
      }
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return (
      <>
        {/* Load Calendly widget.js script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        
        <a
          ref={ref}
          {...props}
          href={props.href || ""}
          onClick={handleClick}
          className={className}
        >
          {children ? (
            children
          ) : (
            <>
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                {text}
              </span>
              {showArrow && (
                <span className="ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              )}
              {showUnderline && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-voltage scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </>
          )}
        </a>
      </>
    );
  }
);

CtaButton.displayName = "CtaButton";

export default CtaButton;
