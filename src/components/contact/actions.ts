"use server";

import prisma from "@/lib/prisma";
import { rateLimitByIp } from "@/lib/rate-limiter";
import { MessageInput, MessageSchema } from "@/validations";

export async function sendMessageAction(data: MessageInput) {
  try {
    if (!(await rateLimitByIp({ key: "contact", limit: 1, interval: 60000 }))) {
      return "Sorry! You can only send one message per minute.";
    }

    const parsedData = MessageSchema.parse(data);

    await prisma.message.create({
      data: {
        name: parsedData.name,
        email: parsedData.email,
        message: parsedData.message,
      },
    });
  } catch (error) {
    console.error(error);
    return "An error occurred while sending the message.";
  }
}
