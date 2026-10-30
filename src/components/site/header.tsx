"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/site";
import { Logo } from "./logo";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <header className="site-header">
      <div className="header-top">
        <span>
          FINANCIAL EDUCATION <i /> PROTECTION <i /> LEGACY
        </span>
        <span>Protect Today. Preserve Tomorrow.</span>
      </div>
      <div className="header-main">
        <Logo light />
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={active(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-gold header-cta">
          Let’s connect <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
              aria-current={active(item.href) ? "page" : undefined}
            >
              {item.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="button button-navy"
          >
            Start a conversation
          </Link>
        </nav>
      )}
    </header>
  );
}
