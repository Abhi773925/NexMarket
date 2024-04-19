// server.js
import express from 'express';
import mongoose from 'mongoose';
import Contact from '../backend/models/Contact.js';

const app = express();
const PORT = 5173;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nexmarket', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submissions
app.post('/api/contacts', async (req, res) => {
  try {
    // Create a new Contact document
    const newContact = new Contact({
      username: req.body.username,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    });

    // Save the Contact document to the database
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    console.error('Error submitting contact form:', err);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
