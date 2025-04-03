import mongoose from 'mongoose';

// Define the schema without the `phone` field
const contactMessageSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// Create or get the existing model
const ContactMessage = mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema);

// Export the model
export default ContactMessage;
