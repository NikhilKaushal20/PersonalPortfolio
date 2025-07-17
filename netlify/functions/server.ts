import { Handler } from '@netlify/functions';
import express from 'express';
import serverless from 'serverless-http';
import { z } from 'zod';

// Simple contact form schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const contactData = contactSchema.parse(req.body);
    
    // Log the contact form submission
    console.log('📧 NEW CONTACT FORM SUBMISSION');
    console.log('Name:', contactData.name);
    console.log('Email:', contactData.email);
    console.log('Subject:', contactData.subject);
    console.log('Message:', contactData.message);
    
    res.json({ 
      success: true, 
      message: `Thank you for reaching out! I'll get back to you soon at ${contactData.email}`
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Invalid form data', details: error.errors });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

export const handler: Handler = serverless(app);