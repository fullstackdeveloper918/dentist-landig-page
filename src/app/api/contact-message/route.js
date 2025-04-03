import { connectDB } from "@/lib/mongodb"; // MongoDB connection
import ContactMessage from "@/lib/models/ContactMessage"; // Importing the model
import { sendContactEmail } from "@/lib/mailgun"; // Importing the Mailgun helper function

export async function POST(req) {
  await connectDB(); // Connect to MongoDB

  try {
    // Receive the data from the request
    const { full_name, email, message } = await req.json();

    // Validation of form fields
    if (!full_name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Check if the email already exists in the database
    const existingMessage = await ContactMessage.findOne({ email });

    if (existingMessage) {
      // If the email exists, update the message instead of rejecting
      existingMessage.message = message;
      existingMessage.full_name = full_name;
      await existingMessage.save();

      // Send an email confirming the update
      const emailMessage = `Hello ${full_name},\n\nYour previous message has been updated. We have received your new message: "${message}". We'll get back to you soon.`;
      await sendContactEmail({
        full_name,
        email,
        message: emailMessage,
      });

      return new Response(
        JSON.stringify({ message: "Message updated successfully and email sent" }),
        { status: 200 }
      );
    }

    // Save the new message if the email does not exist
    const newContactMessage = new ContactMessage({ full_name, email, message });
    await newContactMessage.save();

    // Prepare the message to send via Mailgun
    const emailMessage = `Hello ${full_name},\n\nThank you for contacting us. We have received your message: "${message}". We'll get back to you soon.`;

    // Send email using the new sendContactEmail function
    const sendResult = await sendContactEmail({
      full_name,
      email,
      message: emailMessage, // Send the message content in the email
    });

    if (sendResult) {
      console.log("Email sent successfully:", sendResult);
    } else {
      console.log("Email sending failed");
    }

    // Respond with success after email is sent
    return new Response(
      JSON.stringify({
        message: "Message saved successfully and email sent",
        user: newContactMessage,
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
