"use client";
import { useTranslation } from "@/lib/use-translation";
import { useEffect, useRef, type ElementType } from "react";
import gsap from "gsap";
export function BlurText({
  text,
  as: Tag = "span",
  className = "",
  delay = 55,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}) {
  const t = useTranslation();
  const localizedText = t(text);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const words = element.querySelectorAll(".blur-word");
      const tween = gsap.fromTo(
        words,
        { opacity: 0, filter: "blur(10px)", y: 18 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.65,
          paused: true,
          stagger: delay / 1000,
          ease: "power2.out",
          clearProps: "transform,filter,opacity",
          delay: document.documentElement.dataset.intro === "loading" ? 0.8 : 0,
        },
      );
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            tween.play();
            observer.disconnect();
          }
        },
        { threshold: 0, rootMargin: "0px 0px -4% 0px" },
      );
      observer.observe(element);
      return () => {
        observer.disconnect();
        tween.revert();
      };
    });
    return () => media.revert();
  }, [localizedText, delay]);
  const Component = Tag as ElementType;
  return (
    <Component ref={ref} className={`blur-text ${className}`}>
      {localizedText.split(" ").map((word, index, all) => (
        <span className="blur-word" key={`${word}-${index}`}>
          {word}
          {index < all.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </Component>
  );
}
