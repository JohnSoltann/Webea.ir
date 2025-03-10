import { pgTable, text, serial, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact messages table
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  websiteType: text("website_type").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Table of administrators
export const admins = pgTable("admins", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  lastLogin: timestamp("last_login"),
});

// Content table
export const content = pgTable("content", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  type: text("type").notNull(), // 'page', 'portfolio', 'blog'
  status: text("status").notNull().default('draft'), // 'draft', 'published'
  metadata: jsonb("metadata"), // SEO and other metadata
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at"),
  authorId: serial("author_id").references(() => admins.id),
});

// Media files table
export const media = pgTable("media", {
  id: serial("id").primaryKey(),
  filename: text("filename").notNull(),
  originalName: text("original_name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: serial("size").notNull(),
  path: text("path").notNull(),
  contentId: serial("content_id").references(() => content.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at"),
});

// Schema for creating an administrator
export const insertAdminSchema = createInsertSchema(admins)
  .omit({ id: true, passwordHash: true, createdAt: true, lastLogin: true })
  .extend({
    password: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

// Schema for creating content
export const insertContentSchema = createInsertSchema(content)
  .omit({ id: true, createdAt: true, updatedAt: true, publishedAt: true })
  .extend({
    metadata: z.object({
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      ogImage: z.string().optional(),
    }).optional(),
  });

// Schema for uploading media files
export const insertMediaSchema = createInsertSchema(media)
  .omit({ id: true, createdAt: true, updatedAt: true });

// Schema for contacts
export const insertContactSchema = createInsertSchema(contactMessages)
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    email: z.string().email("ایمیل نامعتبر است"),
    phone: z.string().min(10, "شماره تلفن باید حداقل ۱۰ رقم باشد").max(15, "شماره تلفن نامعتبر است"),
    message: z.string().min(5, "پیام باید حداقل ۵ کاراکتر باشد").max(1000, "پیام نمی‌تواند بیشتر از ۱۰۰۰ کاراکتر باشد"),
    websiteType: z.enum(["ecommerce", "corporate", "service", "startup", "educational"], {
      required_error: "لطفاً نوع سایت را انتخاب کنید",
      invalid_type_error: "نوع سایت نامعتبر است",
    }),
  });

// Export types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertAdmin = z.infer<typeof insertAdminSchema>;
export type Admin = typeof admins.$inferSelect;

export type InsertContent = z.infer<typeof insertContentSchema>;
export type Content = typeof content.$inferSelect;

export type InsertMedia = z.infer<typeof insertMediaSchema>;
export type Media = typeof media.$inferSelect;