"use client";
import { useTranslation } from "@/lib/use-translation";
import Script from "next/script";
export function TurnstileField() {
  const t = useTranslation();
  const siteKey = getTurnstileSiteKey();
  if (!siteKey) {
    return (
      <p className="rounded-[8px] border border-[#C9A227]/30 bg-[#F7F4EC] px-4 py-3 text-xs leading-6 text-[#334155]">
        {t(
          "Spam protection is ready to enable when the Cloudflare Turnstile site key is added.",
        )}
      </p>
    );
  }
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-white p-3">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />
    </div>
  );
}
function getTurnstileSiteKey() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!siteKey || siteKey.startsWith("replace-with")) {
    return "";
  }
  return siteKey;
}
export function resetTurnstile() {
  const turnstile = window.turnstile;
  if (turnstile && typeof turnstile.reset === "function") {
    turnstile.reset();
  }
}
declare global {
  interface Window {
    turnstile?: {
      reset: () => void;
    };
  }
}
