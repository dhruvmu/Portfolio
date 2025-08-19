import type { VercelRequest, VercelResponse } from "@vercel/node";
import { insertContactMessageSchema } from "../shared/schema";
import { storage } from "../server/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const validated = insertContactMessageSchema.parse(body);
      const saved = await storage.createContactMessage(validated);
      return res.status(200).json({
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
        id: saved.id,
      });
    }

    if (req.method === "GET") {
      const messages = await storage.getContactMessages();
      return res.status(200).json({ success: true, messages });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  } catch (error: any) {
    const message = error?.message || "Internal Server Error";
    return res.status(500).json({ success: false, message });
  }
}
