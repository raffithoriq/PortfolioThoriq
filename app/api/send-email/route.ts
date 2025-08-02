// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME, // pastikan ENV ini di .env.local
        pass: process.env.EMAIL_PASSWORD, // ini adalah app password Gmail
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New message Portfolio from ${name}`,
      text: `
        From: ${name} (${email})

        Message:
        ${message}
        `.trim(),
      html: `
            <div style="font-family: sans-serif; line-height: 1.5;">
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            </div>
        `.trim(),
      replyTo: email,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
