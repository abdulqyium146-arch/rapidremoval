import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, moveFrom, moveTo, date, propertySize, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    // TODO: Integrate with your preferred email/CRM service
    // Options: Resend, SendGrid, Mailgun, EmailJS, Formspree
    // Example Resend integration:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'quotes@getrapidRemovals.co.uk',
    //   to: SITE.email,
    //   subject: `New Quote Request from ${name}`,
    //   text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nFrom: ${moveFrom}\nTo: ${moveTo}\nDate: ${date}\nProperty: ${propertySize}\nMessage: ${message}`,
    // });

    console.log("Quote request received:", { name, phone, email, service, moveFrom, moveTo, date, propertySize, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
