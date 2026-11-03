"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference) and (pointer: fine)",
      () => {
        const lenis = new Lenis({
          duration: 1.1,
          smoothWheel: true,
          anchors: { offset: -110 },
          prevent: (node) => node.hasAttribute("data-lenis-prevent"),
        });
        const onScroll = () => ScrollTrigger.update();
        const raf = (time: number) => lenis.raf(time * 1000);
        lenis.on("scroll", onScroll);
        gsap.ticker.add(raf);
        return () => {
          gsap.ticker.remove(raf);
          lenis.off("scroll", onScroll);
          lenis.destroy();
        };
      },
    );
    return () => media.revert();
  }, []);

  useEffect(() => {
    const media = gsap.matchMedia();
    const frame = requestAnimationFrame(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const candidates = gsap.utils.toArray<HTMLElement>(
          "main [data-reveal], main .section-topline, main .intro-copy, main .section-heading, main .philosophy-item, main .process-step, main .feature-card, main .resource-editorial, main .solution-tile, main .reading-article, main .education-editorial-copy, main .about-manifesto, main .faq-layout > div, main .motion-card, .footer-grid > div",
        );
        candidates
          .filter((el) => !el.parentElement?.closest("[data-reveal]"))
          .forEach((el, index) => {
            // Already-visible content stays useful during hydration; hide only the upcoming reveal.
            const rect = el.getBoundingClientRect();
            if (rect.bottom < 0) return;
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 30, filter: "blur(7px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                delay: el.matches(
                  ".feature-card,.philosophy-item,.process-step,.resource-editorial,.solution-tile",
                )
                  ? (index % 4) * 0.07
                  : 0,
                ease: "power2.out",
                clearProps: "transform,filter,opacity,visibility",
                scrollTrigger: { trigger: el, start: "top 92%", once: true },
              },
            );
          });
        document
          .querySelectorAll<HTMLElement>(".parallax-media")
          .forEach((el) => {
            const image = el.querySelector("img");
            if (!image) return;
            gsap.fromTo(
              image,
              { yPercent: -4, scale: 1.09 },
              {
                yPercent: 4,
                scale: 1.13,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.6,
                },
              },
            );
          });
        const hero = document.querySelector(".signature-hero-image img");
        if (hero)
          gsap.fromTo(
            hero,
            { scale: 1.08 },
            { scale: 1, duration: 2.2, ease: "power2.out" },
          );
        ScrollTrigger.refresh();
      });
    });
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh).catch(() => {});
    window.addEventListener("load", refresh);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", refresh);
      media.revert();
    };
  }, [pathname]);
  return <>{children}</>;
}
