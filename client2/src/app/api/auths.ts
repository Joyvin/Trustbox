"use server";

import { getServerAuthSession } from "~/server/auth";
import type { Session } from "next-auth"; // Import the Session type

export async function uid(): Promise<string | null> {
  const session: Session | null = await getServerAuthSession();

  // If the session exists and the user was found, return their id. Otherwise, return null.
  return session?.user?.id ?? null;
}
