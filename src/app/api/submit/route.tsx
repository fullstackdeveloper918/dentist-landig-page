import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ClientRequest from "@/lib/models/ClientRequest";
import { sendSimpleMessage } from "@/lib/mailgun";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { full_name, phone, email, message } = await req.json();

    if (!full_name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newUser = new ClientRequest({ full_name, phone, email, message });
    await newUser.save();

    await sendSimpleMessage({
      to_email: email,
      message: `Hello ${full_name},\n\nThank you for contacting us. We have received your message: "${message}". We'll get back to you soon.`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User saved successfully and email sent",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error processing request:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
