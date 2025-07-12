import sgMail from '@sendgrid/mail';

// Set API key
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';

if (!SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY environment variable is not set');
} else if (!SENDGRID_API_KEY.startsWith('SG.')) {
  console.warn('SENDGRID_API_KEY does not appear to be valid (should start with "SG.")');
} else {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactNotification(formData: ContactFormData): Promise<boolean> {
  // If no API key is set, skip email sending
  if (!SENDGRID_API_KEY || !SENDGRID_API_KEY.startsWith('SG.')) {
    console.log('Skipping email notification - no valid SendGrid API key');
    return false;
  }

  try {
    const msg = {
      to: 'nikkaushal20@gmail.com', // Your email
      from: {
        email: 'nikkaushal20@gmail.com', // Must be verified sender
        name: 'Nikhil Portfolio Contact Form'
      },
      replyTo: {
        email: formData.email,
        name: formData.name
      },
      subject: `Portfolio Contact: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Phone:</strong> +91 88947 25284</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${formData.message}</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              This email was sent from your portfolio contact form. 
              Reply directly to this email to respond to ${formData.name}.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Phone: +91 88947 25284
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${formData.message}
        
        Reply to: ${formData.email}
      `
    };

    await sgMail.send(msg);
    console.log('Email notification sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}