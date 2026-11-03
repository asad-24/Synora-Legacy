"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { navigation, services } from "@/data/site";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const reduce = useReducedMotion();
  const drawer = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) ||
        (href === "/careers" && pathname === "/join-us");

  useEffect(() => {
    const update = () => setCompact(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() =>
      drawer.current?.querySelector<HTMLButtonElement>("button")?.focus(),
    );
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const links = Array.from(
        drawer.current?.querySelectorAll<HTMLElement>("a,button,summary") || [],
      ).filter((el) => el.getClientRects().length);
      const first = links[0],
        last = links.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      toggle.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${compact ? "is-compact" : ""}`}>
        <div className="header-main">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) =>
              item.href === "/solutions" ? (
                <details className="nav-solutions" key={item.href}>
                  <summary className={active(item.href) ? "is-active" : ""}>
                    Solutions <ChevronDown size={14} aria-hidden="true" />
                  </summary>
                  <div className="solutions-dropdown" data-lenis-prevent>
                    <Link href="/solutions" className="dropdown-overview">
                      Explore all solutions{" "}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/solutions/${service.slug}`}
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={item.href}
                  key={item.href}
                  aria-current={active(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Link href="/contact" className="button button-gold header-cta">
            Let’s connect <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            ref={toggle}
            className="menu-toggle"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu size={21} />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="drawer-backdrop"
              data-lenis-prevent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              id="mobile-navigation"
              className="mobile-drawer"
              ref={drawer}
              role="dialog"
              aria-label="Navigation menu"
              aria-modal="true"
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: reduce ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="drawer-top">
                <Logo />
                <button
                  type="button"
                  className="drawer-close"
                  aria-label="Close navigation"
                  onClick={() => setOpen(false)}
                >
                  <X size={21} />
                </button>
              </div>
              <nav aria-label="Mobile navigation" className="mobile-nav">
                {navigation.map((item) =>
                  item.href === "/solutions" ? (
                    <details key={item.href} className="mobile-solutions">
                      <summary>
                        Solutions <ChevronDown size={17} />
                      </summary>
                      <div>
                        <Link href="/solutions" onClick={() => setOpen(false)}>
                          Explore all solutions
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/solutions/${service.slug}`}
                            onClick={() => setOpen(false)}
                          >
                            {service.shortTitle}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active(item.href) ? "page" : undefined}
                    >
                      {item.label}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  ),
                )}
              </nav>
              <div className="drawer-bottom">
                <p>
                  Protect Today.
                  <br />
                  Preserve Tomorrow.
                </p>
                <Link
                  href="/contact"
                  className="button button-gold"
                  onClick={() => setOpen(false)}
                >
                  Start a conversation <ArrowUpRight size={17} />
                </Link>
                <span>FINANCIAL EDUCATION • PROTECTION • LEGACY</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
