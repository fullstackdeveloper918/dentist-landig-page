import Mailgun from "mailgun.js";
import formData from "form-data";

// Initialize Mailgun with form-data
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "", // Ensure it's always a string
});

// Function to send a simple email (e.g., demo booked confirmation)
const sendSimpleMessage = async ({
  message,
  to_email,
}: {
  message: string;
  to_email: string;
}) => {
  try {
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      throw new Error("Mailgun API key or domain is missing in .env");
    }

    const data = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: to_email, // Using `to_email` to match your parameter
      subject: "Demo Booked Successfully",
      text: message,
    });

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// Function to send an email specifically for contact form messages
const sendContactEmail = async ({
  full_name,
  email,
  message,
}: {
  full_name: string;
  email: string;
  message: string;
}) => {
  try {
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      throw new Error("Mailgun API key or domain is missing in .env");
    }

    const emailMessage = `Hello ${full_name},\n\nThank you for contacting us. We have received your message: "${message}". We'll get back to you soon.`;

    const data = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Your Company <support@yourcompany.com>`, // Change this to your verified sender email
      to: email, // Matches `email` parameter
      subject: "Thank You for Your Message",
      text: emailMessage,
    });

    console.log("Contact email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw error;
  }
};

export { sendSimpleMessage, sendContactEmail };
