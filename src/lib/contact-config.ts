import "server-only";
export function isContactConfigured() {
  return [
    process.env.BREVO_API_KEY,
    process.env.BREVO_SENDER_EMAIL,
    process.env.FORM_TO_EMAIL,
    process.env.TURNSTILE_SECRET_KEY,
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  ].every((value) => Boolean(value && !value.startsWith("replace-with")));
}
