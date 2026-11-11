"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "./language-provider";
import { withLocalePath } from "@/lib/i18n";
export function LocaleLink({ href, ...props }: ComponentProps<typeof Link>) {
  const { locale } = useLanguage();
  return (
    <Link
      {...props}
      href={
        typeof href === "string"
          ? withLocalePath(href, locale)
          : { ...href, pathname: withLocalePath(href.pathname || "/", locale) }
      }
    />
  );
}
