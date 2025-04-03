import Mailgun from 'mailgun.js';
import formData from 'form-data';

// Initialize Mailgun with form-data
const mailgun = new Mailgun(formData);

// Initialize the Mailgun client
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY, // API key from the environment variables
});

// Function to send a simple message (for other purposes, e.g., demo booked)
const sendSimpleMessage = async ({ message, to_email }) => {
  try {
    const data = await mg.messages.create(
      process.env.MAILGUN_DOMAIN, // Your Mailgun domain
      {
        from: 'Mailgun Sandbox <postmaster@sandbox7fa8024b7b284b298d0f6a18b472943a.mailgun.org>', // Sender email
        to: to_email,
        subject: 'Demo Booked Successfully',
        text: message,
      }
    );

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.log('Error sending email:', error);
    throw error; // Throw the error to handle it appropriately in the calling function
  }
};

// Function to send an email specifically for contact form messages
const sendContactEmail = async ({ full_name, email, message }) => {
  try {
    const emailMessage = `Hello ${full_name},\n\nThank you for contacting us. We have received your message: "${message}". We'll get back to you soon.`;

    const data = await mg.messages.create(
      process.env.MAILGUN_DOMAIN, // Your Mailgun domain
      {
        from: 'Your Company <support@yourcompany.com>', // Change this to your verified sender email
        to: email, // Send the email to the user's email address
        subject: 'Thank You for Your Message',
        text: emailMessage, // Include the message text here
      }
    );

    console.log('Contact email sent successfully:', data);
    return data;
  } catch (error) {
    console.log('Error sending contact email:', error);
    throw error; // Throw the error to handle it appropriately in the calling function
  }
};

export { sendSimpleMessage, sendContactEmail };
