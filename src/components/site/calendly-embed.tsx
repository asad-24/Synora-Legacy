"use client";
import Script from "next/script";
import { CalendarDays } from "lucide-react";
export function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const valid =
    url &&
    /^https:\/\/(www\.)?calendly\.com\//.test(url) &&
    !url.includes("your-event");
  return (
    <div className="border border-[#deded8] bg-white p-6 sm:p-8">
      {valid ? (
        <>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
          <div
            className="calendly-inline-widget min-h-[650px]"
            data-url={url}
          />
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            Open booking calendar in a new tab
          </a>
        </>
      ) : (
        <>
          <CalendarDays
            size={30}
            strokeWidth={1.3}
            className="text-[#967640]"
            aria-hidden="true"
          />
          <h3 className="mt-5 font-heading text-3xl">A time to connect.</h3>
          <p className="mt-4 text-sm leading-8 text-[#54616b]">
            Online scheduling will be available when Synora Legacy launches. For
            now, you can explore the conversation form above.
          </p>
        </>
      )}
    </div>
  );
}
