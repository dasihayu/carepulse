import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(50, { message: "Email must be less than 50 characters" }),
  phone: z.string().refine((phone) => /^\+?[1-9]\d{1,14}$/.test(phone), {
    message:
      "Invalid phone number",
  }),
});
