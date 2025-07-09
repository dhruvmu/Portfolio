import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import * as nodemailer from "nodemailer";

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || "your-email@gmail.com",
      pass: process.env.SMTP_PASS || "your-app-password",
    },
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Save message to storage
      const savedMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      try {
        const transporter = createTransporter();
        
        await transporter.sendMail({
          from: process.env.SMTP_USER || "your-email@gmail.com",
          to: process.env.NOTIFICATION_EMAIL || "alex.johnson@email.com",
          subject: `New Contact Form Message: ${validatedData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
        });
        
        // Send auto-reply to sender
        await transporter.sendMail({
          from: process.env.SMTP_USER || "your-email@gmail.com",
          to: validatedData.email,
          subject: "Thank you for your message!",
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${validatedData.name},</p>
            <p>Thank you for your message. I have received your inquiry and will get back to you as soon as possible.</p>
            <p>Best regards,<br>Alex Johnson</p>
          `,
        });
        
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I will get back to you soon.",
        id: savedMessage.id 
      });
      
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again." 
        });
      }
    }
  });
  
  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
