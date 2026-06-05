import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Name, phone, and message are required" }, { status: 400 });
    }

    // TODO: Integrate with your preferred email service (Resend, SendGrid, etc.)
    console.log("Contact message received:", { name, phone, email, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
