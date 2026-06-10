import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

// ─── Tailwind class merging ───────────────────────────────────────────────────
// Merges Tailwind classes safely, resolving conflicts (e.g. p-2 + p-4 → p-4)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── String helpers ───────────────────────────────────────────────────────────
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function truncate(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.slice(0, length).trimEnd() + "…";
}

// ─── Email validation ─────────────────────────────────────────────────────────
export function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── Scroll helpers ───────────────────────────────────────────────────────────
export function scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// ─── Format helpers ───────────────────────────────────────────────────────────
export function formatDate(date: Date | string): string {
    return new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

// ─── GSAP Reusable Magnetic Effect ───────────────────────────────────────────
/**
 * Attaches a magnetic hover effect to any HTML element using GSAP quickTo.
 * Returns a cleanup function to remove event listeners.
 */
export function initMagneticEffect(
    element: HTMLElement | null,
    options?: { radius?: number; speed?: number; strength?: number }
) {
    if (!element) return () => { };

    const radius = options?.radius ?? 60;
    const strength = options?.strength ?? 0.4;
    const speed = options?.speed ?? 0.4;

    const xTo = gsap.quickTo(element, "x", { duration: speed, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: speed, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < radius + rect.width / 2) {
            // Pull element towards cursor
            xTo(distanceX * strength);
            yTo(distanceY * strength);
        } else {
            // Return to origin
            xTo(0);
            yTo(0);
        }
    };

    const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
    };
}

// ─── Debounce helper ─────────────────────────────────────────────────────────
export function debounce<T extends (...args: any[]) => void>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    return (...args: Parameters<T>) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}
