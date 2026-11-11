"use client";
import { useTranslation } from "@/lib/use-translation";
export function TranslatedText({ value }: { value: string }) {
  const t = useTranslation();
  return <>{t(value)}</>;
}
