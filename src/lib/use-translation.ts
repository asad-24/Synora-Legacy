"use client";
import { useLanguage } from "@/components/site/language-provider";
export function useTranslation() {
  return useLanguage().t;
}
