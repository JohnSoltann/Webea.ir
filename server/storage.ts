import { contactMessages, type ContactMessage, type InsertContact } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContact): Promise<ContactMessage> {
    const [contactMessage] = await db
      .insert(contactMessages)
      .values(message)
      .returning();
    return contactMessage;
  }
}

export const storage = new DatabaseStorage();