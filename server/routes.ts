import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import path from "path";
import fs from "fs";

// Simple contact form schema - no database needed
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission - simplified
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
      // Simple console logging for development
      console.log("\n" + "=".repeat(50));
      console.log("📧 NEW CONTACT FORM SUBMISSION");
      console.log("=".repeat(50));
      console.log(`👤 Name: ${contactData.name}`);
      console.log(`📧 Email: ${contactData.email}`);
      console.log(`📝 Subject: ${contactData.subject}`);
      console.log(`💬 Message: ${contactData.message}`);
      console.log(`⏰ Time: ${new Date().toLocaleString()}`);
      console.log("=".repeat(50) + "\n");
      
      // Save to local file for persistence
      try {
        const contactsFile = path.join(process.cwd(), 'contacts.json');
        let contacts = [];
        
        if (fs.existsSync(contactsFile)) {
          const data = fs.readFileSync(contactsFile, 'utf8');
          contacts = JSON.parse(data);
        }
        
        contacts.push({
          ...contactData,
          id: Date.now(),
          timestamp: new Date().toISOString()
        });
        
        fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
      } catch (fileError) {
        console.log("Note: Could not save to file, but form submission logged");
      }
      
      res.json({ 
        success: true, 
        message: `Thank you for reaching out! I'll get back to you soon at ${contactData.email}`
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "NIKHIL KAUSHAL CV 20._1752347745525.pdf");
      
      if (fs.existsSync(resumePath)) {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=Nikhil_Kaushal_Resume.pdf");
        
        const fileStream = fs.createReadStream(resumePath);
        fileStream.pipe(res);
      } else {
        res.status(404).json({ error: "Resume not found" });
      }
    } catch (error) {
      console.error("Error downloading resume:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get all contacts from file
  app.get("/api/contacts", async (req, res) => {
    try {
      const contactsFile = path.join(process.cwd(), 'contacts.json');
      
      if (fs.existsSync(contactsFile)) {
        const data = fs.readFileSync(contactsFile, 'utf8');
        const contacts = JSON.parse(data);
        res.json(contacts);
      } else {
        res.json([]);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
