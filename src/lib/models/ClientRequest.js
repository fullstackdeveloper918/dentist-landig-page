// Inside src/lib/models/ClientRequest.js
import mongoose from 'mongoose';

const clientRequestSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

const ClientRequest = mongoose.models.ClientRequest || mongoose.model('ClientRequest', clientRequestSchema);

export default ClientRequest;
