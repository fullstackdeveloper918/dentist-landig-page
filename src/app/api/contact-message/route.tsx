import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb"; // MongoDB connection
import ContactMessage from "@/lib/models/ContactMessage"; // Importing the model
import { sendContactEmail } from "@/lib/mailgun"; // Importing the Mailgun helper function

export async function POST(req: NextRequest) {
  try {
    await connectDB(); // Connect to MongoDB

    // Receive the data from the request
    const { full_name, email, message } = await req.json();

    // Validation of form fields
    if (!full_name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if the email already exists in the database
    const existingMessage = await ContactMessage.findOne({ email });

    if (existingMessage) {
      // If the email exists, update the message
      existingMessage.message = message;
      existingMessage.full_name = full_name;
      await existingMessage.save();

      // Send an email confirming the update
      const emailMessage = `Hello ${full_name},\n\nYour previous message has been updated. We have received your new message: "${message}". We'll get back to you soon.`;

      await sendContactEmail({ full_name, email, message: emailMessage });

      return NextResponse.json(
        {
          success: true,
          message: "Message updated successfully and email sent",
        },
        { status: 200 }
      );
    }

    // Save the new message if the email does not exist
    const newContactMessage = new ContactMessage({ full_name, email, message });
    await newContactMessage.save();

    // Prepare and send confirmation email
    const emailMessage = `Hello ${full_name},\n\nThank you for contacting us. We have received your message: "${message}". We'll get back to you soon.`;

    await sendContactEmail({ full_name, email, message: emailMessage });

    return NextResponse.json(
      {
        success: true,
        message: "Message saved successfully and email sent",
        user: newContactMessage,
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
