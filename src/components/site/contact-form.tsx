"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { conversationTopics } from "@/data/site";
import { useTranslation } from "@/lib/use-translation";
import { TurnstileField, resetTurnstile } from "./turnstile-field";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm({
  enabled = false,
  initialTopic,
}: {
  enabled?: boolean;
  initialTopic?: string;
}) {
  const t = useTranslation();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    setSubmitState("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      if (response.ok) {
        form.reset();
        setSubmitState("success");
        setMessage("Thank you. Your message has been sent to Synora Legacy.");
        return;
      }

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      setSubmitState("error");
      setMessage(data?.error ?? "Unable to send your message right now.");
    } catch {
      setSubmitState("error");
      setMessage(
        "Unable to send your message right now. Please try again later.",
      );
    } finally {
      window.clearTimeout(timeout);
      resetTurnstile();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid min-w-0 gap-4 rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 shadow-xl shadow-[#071629]/8 sm:p-5 lg:p-6"
    >
      {!enabled && (
        <p className="form-note" role="status">
          You’re viewing a website preview. Messaging will be available when
          Synora Legacy launches.
        </p>
      )}
      <fieldset
        disabled={!enabled || submitState === "sending"}
        className="grid min-w-0 gap-4 border-0 p-0"
      >
        <input type="hidden" name="locale" value="en" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First name" name="firstName" required />
          <Field label="Last name" name="lastName" required />
        </div>
        <Field label="Email address" name="email" type="email" required />
        <Field label="Phone number" name="phone" type="tel" required />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="City of residence" name="city" required />
          <Field label="State" name="state" required />
        </div>
        <label className="grid min-w-0 gap-2 text-sm font-semibold text-[#071629]">
          {t("Conversation topic")}
          <select
            name="topic"
            defaultValue={initialTopic}
            className="h-12 w-full min-w-0 rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-base font-normal text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15 sm:text-sm"
          >
            {conversationTopics.map((topic) => (
              <option key={topic} value={topic}>
                {t(topic)}
              </option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-semibold text-[#071629]">
          {t("Message")}
          <textarea
            name="message"
            rows={5}
            required
            className="w-full min-w-0 rounded-[6px] border border-[#D1D5DB] bg-white px-4 py-3 text-base font-normal leading-7 text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15 sm:text-sm"
            placeholder={t(
              "Share what you would like to understand or discuss.",
            )}
          />
        </label>
        {enabled && <TurnstileField />}
        <Button
          type="submit"
          disabled={!enabled || submitState === "sending"}
          className="h-12 w-full rounded-full sm:w-fit"
        >
          {submitState === "sending" ? t("Sending...") : t("Send your message")}
        </Button>
      </fieldset>
      {message ? (
        <p
          role="status"
          aria-live="polite"
          className={`text-xs leading-6 ${
            submitState === "success" ? "text-[#0B1F3A]" : "text-red-700"
          }`}
        >
          {t(message)}
        </p>
      ) : (
        <p className="text-xs leading-6 text-[#334155]">
          {enabled
            ? "Your message will be sent to Synora Legacy. Please do not include sensitive information."
            : "Preview form — no messages are sent."}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const t = useTranslation();

  return (
    <label className="grid min-w-0 gap-2 text-sm font-semibold text-[#071629]">
      {t(label)}
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 w-full min-w-0 rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-base font-normal text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15 sm:text-sm"
      />
    </label>
  );
}
