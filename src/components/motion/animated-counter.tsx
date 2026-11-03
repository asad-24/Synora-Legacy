"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Count real process-step numbers, rather than adding invented business statistics.
export function AnimatedCounter({ end }: { end: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const formatted = String(end).padStart(2, "0");
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const value = { number: 0 };
      const tween = gsap.to(value, {
        number: end,
        duration: 1.3,
        ease: "power2.out",
        paused: true,
        onUpdate: () => {
          element.textContent = String(Math.round(value.number)).padStart(
            2,
            "0",
          );
        },
      });
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            tween.play();
            observer.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      observer.observe(element);
      return () => {
        observer.disconnect();
        tween.kill();
        element.textContent = formatted;
      };
    });
    return () => media.revert();
  }, [end, formatted]);
  return <span ref={ref}>{formatted}</span>;
}
