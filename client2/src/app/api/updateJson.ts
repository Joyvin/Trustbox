"use server";

import { db } from "~/server/db";
import type {Template} from "@prisma/client"

export async function storeJson(jsondata: string, templateid: string): Promise<string | null> {
  // Fetch the user from the database using their id
  const template: Template | null = await db.template.findUnique({
    where: { id: templateid },
  });

  // If the user was found, return their role. Otherwise, return null.
  return template ? (template.json as string | null) : null;
}