import { NextResponse } from "next/server";
import { isContactConfigured } from "@/lib/contact-config";

import { escapeHtml, getFormValue, sendBrevoEmail } from "@/lib/brevo";
import { verifyTurnstile } from "@/lib/turnstile";

export async function POST(request: Request) {
  if (!isContactConfigured())
    return NextResponse.json(
      { error: "Messaging is not available in this preview." },
      { status: 503 },
    );
  try {
    const formData = await request.formData();
    const firstName = getFormValue(formData, "firstName");
    const lastName = getFormValue(formData, "lastName");
    const email = getFormValue(formData, "email");
    const phone = getFormValue(formData, "phone");
    const city = getFormValue(formData, "city");
    const state = getFormValue(formData, "state");
    const licenseStatus = getFormValue(formData, "licenseStatus");
    const message = getFormValue(formData, "message");
    const appointmentDate = getFormValue(formData, "appointmentDate");
    const locale = getFormValue(formData, "locale") || "en";
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !city ||
      !state ||
      !licenseStatus
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }
    if (
      [firstName, lastName, phone, city, state, message].some(
        (value) => value.length > 5000,
      )
    ) {
      return NextResponse.json(
        { error: "Please shorten your message." },
        { status: 400 },
      );
    }
    const isHuman = await verifyTurnstile(formData, request);

    if (!isHuman) {
      return NextResponse.json(
        { error: "Please complete the spam protection check." },
        { status: 400 },
      );
    }

    await sendBrevoEmail({
      subject: "Synora Legacy Join Us inquiry",
      replyTo: {
        email,
        name,
      },
      htmlContent: `
        <h2>New Synora Legacy Join Us inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>City of residence:</strong> ${escapeHtml(city)}</p>
        <p><strong>State:</strong> ${escapeHtml(state)}</p>
        <p><strong>Website language:</strong> ${escapeHtml(locale.toUpperCase())}</p>
        <p><strong>Life insurance license:</strong> ${escapeHtml(licenseStatus)}</p>
        <p><strong>Selected appointment date:</strong> ${escapeHtml(
          appointmentDate || "No date selected",
        )}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "No message provided.").replaceAll(
          "\n",
          "<br />",
        )}</p>
      `,
      textContent: [
        "New Synora Legacy Join Us inquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `City of residence: ${city}`,
        `State: ${state}`,
        `Website language: ${locale.toUpperCase()}`,
        `Life insurance license: ${licenseStatus}`,
        `Selected appointment date: ${appointmentDate || "No date selected"}`,
        `Message: ${message || "No message provided."}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to send your inquiry right now." },
      { status: 500 },
    );
  }
}
