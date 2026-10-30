type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

const siteVerifyEndpoint =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(formData: FormData, request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret || secret.startsWith("replace-with")) {
    return false;
  }

  const token = formData.get("cf-turnstile-response");

  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });
  const remoteIp = getRequestIp(request);

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  const response = await fetch(siteVerifyEndpoint, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as TurnstileResponse;
  return result.success === true;
}

function getRequestIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (!forwardedFor) {
    return "";
  }

  return forwardedFor.split(",")[0]?.trim() ?? "";
}
