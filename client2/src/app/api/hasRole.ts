"use server";

import { db } from "~/server/db";
import type { User } from "@prisma/client";

export async function hasRole(username: string): Promise<string | null> {
  // Fetch the user from the database using their username
  const user: User | null = await db.user.findFirst({
    where: { name: username },
  });

  // If the user was found, return their role. Otherwise, return null.
  return user ? (user.role as string | null) : null;
}
