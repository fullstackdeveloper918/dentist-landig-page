import { connectDB } from "@/lib/mongodb"; // MongoDB connection
import ClientRequest from "@/lib/models/ClientRequest"; // Import the ClientRequest model
import { sendSimpleMessage } from "@/lib/mailgun"; // Import the Mailgun email sending function

export async function POST(req) {
  await connectDB(); // Connect to MongoDB

  try {
    const { full_name, phone, email, message } = await req.json();

    // Validate form fields
    if (!full_name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Save the new user data to MongoDB (without checking for existing email)
    const newUser = new ClientRequest({ full_name, phone, email, message });
    await newUser.save();

    // Prepare the message to send via Mailgun
    const emailMessage = `Hello ${full_name},\n\nThank you for contacting us. We have received your message: "${message}". We'll get back to you soon.`;

    // Send email using Mailgun
    await sendSimpleMessage({
      message: emailMessage,
      to_email: email, // Send the email to the user's email address
    });

    // Respond with success after saving and sending the email
    return new Response(
      JSON.stringify({
        message: "User saved successfully and email sent",
        user: newUser,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error processing the request:", error);
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
