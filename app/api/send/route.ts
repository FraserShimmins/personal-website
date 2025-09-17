import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import { EmailTemplate } from '@/app/components/message/EmailTemplate';
import * as React from 'react';
const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY || '',
  },
});

export async function POST() {
  const emailHtml = await render(
    React.createElement(EmailTemplate, { url: "https://example.com" })
  );

  const options = {
    from: 'Fraser <message@mail.frasershimmins.com>',
    to: ['frasershimmins@gmail.com'],
    subject: 'Hello, World!',
    html: emailHtml,
  };

  await transporter.sendMail(options);

  return Response.json({ success: true });
}