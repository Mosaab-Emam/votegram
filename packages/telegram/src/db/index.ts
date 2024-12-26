import { createClient } from "@libsql/client";

// check if the environment variables are set
if (!process.env.TURSO_DATABASE_URL)
  throw new Error("TURSO_DATABASE_URL is not set");

if (!process.env.TURSO_AUTH_TOKEN)
  throw new Error("TURSO_AUTH_TOKEN is not set");

export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
