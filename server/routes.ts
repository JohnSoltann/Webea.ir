import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      // Log the entire request for debugging
      console.log('Request headers:', req.headers);
      console.log('Request body (raw):', req.body);

      try {
        // Parse and validate the data
        const data = insertContactSchema.parse(req.body);
        console.log('Validated contact data:', data);

        const message = await storage.createContactMessage(data);
        console.log('Stored message:', message);

        res.json(message);
      } catch (validationError) {
        if (validationError instanceof ZodError) {
          console.error('Validation errors:', validationError.errors);
          throw validationError;
        }
        throw validationError;
      }
    } catch (error) {
      console.error('Error in /api/contact:', error);
      if (error instanceof ZodError) {
        res.status(400).json({ 
          error: "داده‌های نامعتبر", 
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        res.status(500).json({ 
          error: "خطا در ذخیره‌سازی پیام",
          message: "لطفاً دوباره تلاش کنید" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}