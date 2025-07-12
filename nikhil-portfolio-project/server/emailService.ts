import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactNotification(formData: ContactFormData): Promise<boolean> {
  try {
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>This message was sent from your portfolio website contact form.</em></p>
    `;

    const msg = {
      to: 'nikkaushal20@gmail.com', // Your email
      from: 'nikkaushal20@gmail.com', // Must be verified with SendGrid
      subject: `Portfolio Contact: ${formData.subject}`,
      html: emailContent,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
        
        This message was sent from your portfolio website contact form.
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