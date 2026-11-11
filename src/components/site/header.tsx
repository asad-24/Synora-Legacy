"use client";
import { useTranslation } from "@/lib/use-translation";
import { LocaleLink as Link } from "@/components/site/locale-link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { navigation, services } from "@/data/site";
import { LanguageSwitcher } from "./language-switcher";
import { stripLocaleFromPathname } from "@/lib/i18n";
import { Logo } from "./logo";
export function Header() {
  const t = useTranslation();
  const pathname = stripLocaleFromPathname(usePathname());
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
    const toggleButton = toggle.current;
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
      toggleButton?.focus();
    };
  }, [open]);
  return (
    <>
      <header className={`site-header ${compact ? "is-compact" : ""}`}>
        <div className="header-main">
          <Logo />
          <nav className="desktop-nav" aria-label={t("Main navigation")}>
            {navigation.map((item) =>
              item.href === "/solutions" ? (
                <details className="nav-solutions" key={item.href}>
                  <summary className={active(item.href) ? "is-active" : ""}>
                    {t("Solutions")}
                    <ChevronDown size={14} aria-hidden="true" />
                  </summary>
                  <div className="solutions-dropdown" data-lenis-prevent>
                    <Link href="/solutions" className="dropdown-overview">
                      {t("Explore all solutions")}
                      {" "}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/solutions/${service.slug}`}
                      >
                        {t(service.shortTitle)}
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
                  {t(item.label)}
                </Link>
              ),
            )}
          </nav>
          <Link href="/contact" className="button button-gold header-cta">
            {t("Let\u2019s connect")}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <LanguageSwitcher />
          <button
            type="button"
            ref={toggle}
            className="menu-toggle"
            aria-label={t("Open navigation")}
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
              aria-label={t("Navigation menu")}
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
                  aria-label={t("Close navigation")}
                  onClick={() => setOpen(false)}
                >
                  <X size={21} />
                </button>
              </div>
              <nav aria-label={t("Mobile navigation")} className="mobile-nav">
                {navigation.map((item) =>
                  item.href === "/solutions" ? (
                    <details key={item.href} className="mobile-solutions">
                      <summary>
                        {t("Solutions")}
                        <ChevronDown size={17} />
                      </summary>
                      <div>
                        <Link href="/solutions" onClick={() => setOpen(false)}>
                          {t("Explore all solutions")}
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/solutions/${service.slug}`}
                            onClick={() => setOpen(false)}
                          >
                            {t(service.shortTitle)}
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
                      {t(item.label)}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  ),
                )}
              </nav>
              <div className="drawer-bottom">
                <LanguageSwitcher />
                <p>
                  {t("Protect Today.")}
                  <br />
                  {t("Secure Tomorrow.")}
                </p>
                <Link
                  href="/contact"
                  className="button button-gold"
                  onClick={() => setOpen(false)}
                >
                  {t("Start a conversation")}
                  <ArrowUpRight size={17} />
                </Link>
                <span>
                  {t("FINANCIAL EDUCATION \u2022 PROTECTION \u2022 LEGACY")}
                </span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
