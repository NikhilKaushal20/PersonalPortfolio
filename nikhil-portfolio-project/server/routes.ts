import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactNotification } from "./emailService";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // Send email notification
      const emailSent = await sendContactNotification(contactData);
      
      // Always log the contact form submission for monitoring
      console.log("=".repeat(50));
      console.log("🔔 NEW CONTACT FORM SUBMISSION");
      console.log("=".repeat(50));
      console.log(`📧 From: ${contactData.name} <${contactData.email}>`);
      console.log(`📱 Phone: +91 88947 25284`);
      console.log(`📝 Subject: ${contactData.subject}`);
      console.log(`💬 Message: ${contactData.message}`);
      console.log(`⏰ Time: ${new Date().toLocaleString()}`);
      console.log("=".repeat(50));
      
      if (emailSent) {
        console.log("✅ Email notification sent successfully!");
        res.json({ success: true, message: "Message sent successfully! I'll get back to you soon." });
      } else {
        console.log("❌ Email notification failed - check console for details");
        res.json({ success: true, message: "Message sent successfully! I'll get back to you soon." });
      }
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

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
