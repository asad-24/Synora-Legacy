import Link from "next/link";
import type { ComponentProps } from "react";
// Existing content now uses ordinary, English-only links.
export function LocaleLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}
