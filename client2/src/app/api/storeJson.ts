"use server";

import { db } from "~/server/db";
import type {Organization} from "@prisma/client"
import type {Template} from "@prisma/client"

export async function storeJson(organizationId: string): Promise<string | null> {
  // Fetch the user from the database using their id
  const organization: Organization | null = await db.user.findUnique({
    where: { id: organizationId },
  });

  // If the user was found, return their role. Otherwise, return null.
  return organization ? (Template.json as string | null) : null;
}