import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";

import type { Service } from "@/data/site";
import { LocaleLink } from "./locale-link";
import { TranslatedText } from "./translated-text";

export function ServiceGrid({
  services,
  limit,
  variant = "standard",
}: {
  services: Service[];
  limit?: number;
  variant?: "standard" | "media";
}) {
  const visibleServices =
    typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {visibleServices.map((service, index) => {
        const Icon = service.icon;

        return variant === "media" ? (
          <LocaleLink
            key={service.slug}
            href={`/solutions/${service.slug}`}
            data-stagger
            style={{ "--stagger-delay": `${index * 70}ms` } as CSSProperties}
            className="motion-card group flex min-h-full flex-col overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-white shadow-sm shadow-[#071629]/5 transition hover:-translate-y-1 hover:border-[#C9A227]/70 hover:bg-[#0B1F3A] hover:shadow-xl hover:shadow-[#071629]/12"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F4EC]">
              {service.heroImage ? (
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt ?? service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Icon className="size-10 text-[#C9A227]" aria-hidden="true" />
                </div>
              )}
              <span
                className="absolute inset-x-0 bottom-0 h-1 bg-[#C9A227] opacity-0 transition group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3 className="text-lg font-bold leading-snug text-[#071629] transition group-hover:text-white">
                <TranslatedText value={service.shortTitle} />
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#334155] transition group-hover:text-white/76 sm:text-sm">
                <TranslatedText value={service.summary} />
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#0B1F3A] transition group-hover:text-[#C9A227]">
                <TranslatedText value="Read More" />
                <ArrowUpRight
                  className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </LocaleLink>
        ) : (
          <LocaleLink
            key={service.slug}
            href={`/solutions/${service.slug}`}
            data-stagger
            style={{ "--stagger-delay": `${index * 70}ms` } as CSSProperties}
            className="motion-card group relative overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 hover:-translate-y-1 hover:border-[#C9A227]/70 hover:bg-[#F7F4EC] hover:shadow-xl hover:shadow-[#071629]/8 sm:p-5 lg:p-6"
          >
            <span
              className="absolute inset-x-0 top-0 h-1 bg-[#C9A227] opacity-0 transition group-hover:opacity-100"
              aria-hidden="true"
            />
            <span className="flex size-11 items-center justify-center rounded-full bg-[#F7F4EC] text-[#C9A227] transition group-hover:bg-[#0B1F3A] group-hover:text-white">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-[#071629]">
              <TranslatedText value={service.shortTitle} />
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-[#334155] sm:text-sm">
              <TranslatedText value={service.summary} />
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A]">
              <TranslatedText value="Learn More" />
              <ArrowUpRight
                className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </LocaleLink>
        );
      })}
    </div>
  );
}
