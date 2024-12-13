import { z } from "zod";

const trimmedString = z.string().trim();
const requiredString = trimmedString.min(1, "Required");

export const MessageSchema = z.object({
  name: trimmedString
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must exceed 20 characters")
    .transform((data) => {
      return data
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    }),
  email: requiredString.email("Invalid email").toLowerCase(),
  message: trimmedString.min(10, "Message must be at least 10 characters"),
});

export type MessageInput = z.infer<typeof MessageSchema>;
