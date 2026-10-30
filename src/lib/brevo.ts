type SendBrevoEmailInput = {
  subject: string;
  htmlContent: string;
  textContent: string;
  replyTo?: {
    email: string;
    name?: string;
  };
};

const brevoEndpoint = "https://api.brevo.com/v3/smtp/email";

export async function sendBrevoEmail({
  subject,
  htmlContent,
  textContent,
  replyTo,
}: SendBrevoEmailInput) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME ?? "Synora Legacy";
  const recipientEmail = process.env.FORM_TO_EMAIL;

  if (!apiKey || !senderEmail || !recipientEmail) {
    throw new Error("Missing Brevo email environment variables.");
  }

  const response = await fetch(brevoEndpoint, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: recipientEmail,
          name: "Synora Legacy",
        },
      ],
      replyTo,
      subject,
      htmlContent,
      textContent,
    }),
  });

  if (!response.ok) {
    throw new Error(`Email delivery failed (${response.status}).`);
  }

  return response.json() as Promise<{ messageId?: string }>;
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}
