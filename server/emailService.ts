// Simple contact form logging service
// No external dependencies required

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function logContactSubmission(formData: ContactFormData): Promise<boolean> {
  try {
    // Log the contact form submission to console
    console.log("\n" + "=".repeat(60));
    console.log("📧 NEW CONTACT FORM SUBMISSION");
    console.log("=".repeat(60));
    console.log(`👤 Name: ${formData.name}`);
    console.log(`📧 Email: ${formData.email}`);
    console.log(`📝 Subject: ${formData.subject}`);
    console.log(`💬 Message: ${formData.message}`);
    console.log(`⏰ Time: ${new Date().toLocaleString()}`);
    console.log("=".repeat(60));
    console.log("✅ Contact form logged successfully!");
    console.log("📧 Reach back via: nikkaushal20@gmail.com");
    console.log("📱 Phone: +91 88947 25284");
    console.log("=".repeat(60) + "\n");
    
    return true;
  } catch (error) {
    console.error("Error logging contact submission:", error);
    return false;
  }
}

// Optional: Save to file for persistence
export async function saveContactToFile(formData: ContactFormData): Promise<boolean> {
  try {
    const fs = await import('fs');
    const path = await import('path');
    
    const contactsFile = path.join(process.cwd(), 'contacts.json');
    let contacts = [];
    
    // Read existing contacts if file exists
    if (fs.existsSync(contactsFile)) {
      const data = fs.readFileSync(contactsFile, 'utf8');
      contacts = JSON.parse(data);
    }
    
    // Add new contact
    contacts.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    });
    
    // Save to file
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
    
    console.log(`📁 Contact saved to ${contactsFile}`);
    return true;
  } catch (error) {
    console.error("Error saving contact to file:", error);
    return false;
  }
}