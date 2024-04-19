// backend/models/Contact.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const contactSchema = new Schema({
  username: String,
  email: String,
  subject: String,
  message: String
});

const Contact = model('Contact', contactSchema);

export default Contact;
