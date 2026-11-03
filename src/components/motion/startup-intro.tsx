"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function StartupIntro() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("synora:intro")) return;
    } catch {
      /* Storage may be disabled; the intro still has a bounded duration. */
    }
    document.documentElement.dataset.intro = "loading";
    setVisible(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.dataset.intro = "ready";
      try {
        sessionStorage.setItem("synora:intro", "seen");
      } catch {}
    }, 700);
    return () => {
      window.clearTimeout(timer);
      document.documentElement.dataset.intro = "ready";
    };
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="startup-intro"
          role="status"
          aria-label="Welcome to Synora Legacy"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="startup-brand">
            <svg viewBox="0 0 48 52" fill="none" aria-hidden="true">
              <path
                d="M24 2 44 10v17c0 11-12 19-20 23C16 46 4 38 4 27V10L24 2Z M24 10v30M15 37h18M15 20l9-8 9 8M14 28l10-9 10 9"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <p>
              SYNORA <span>LEGACY</span>
            </p>
            <span className="startup-rule" />
            <small>Protect Today. Preserve Tomorrow.</small>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
