import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // make sure this isn't running on Edge

const resend = new Resend(process.env.RESEND_API_KEY);

// Read once at module scope (may be undefined at build), but DO NOT throw here.
const CONTACT_TO = process.env.CONTACT_TO;
const CONTACT_FROM = process.env.CONTACT_FROM;

type Body = { email?: string; subject?: string; message?: string };

export async function POST(req: Request) {
  // Validate env at runtime (deployment) instead of build time
  if (!CONTACT_TO || !CONTACT_FROM) {
    return NextResponse.json(
      { error: "Server is missing CONTACT_TO or CONTACT_FROM env vars." },
      { status: 500 }
    );
  }

  const { email, subject, message } = (await req.json()) as Body;
  if (!email || !message) {
    return NextResponse.json({ error: "Missing email or message" }, { status: 400 });
  }

  const { data, error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    subject: `[Contact From Personal Site] ${subject || "New message"}`,
    react: (
      <div>
        <p><strong>From:</strong> {email}</p>
        {subject ? <p><strong>Subject:</strong> {subject}</p> : null}
        <p><strong>Message:</strong></p>
        <pre style={{ whiteSpace: "pre-wrap" }}>{message}</pre>
      </div>
    ),
  });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ id: data?.id }, { status: 200 });
}
