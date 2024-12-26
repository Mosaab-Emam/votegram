import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// check if the environment variables are set
if (!process.env.TURSO_DATABASE_URL)
  throw new Error("TURSO_DATABASE_URL is not set");

if (!process.env.TURSO_AUTH_TOKEN)
  throw new Error("TURSO_AUTH_TOKEN is not set");

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);
