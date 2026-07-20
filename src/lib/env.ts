import { publicEnvironmentSchema } from "@/lib/validations/environment";

let cachedPublicEnvironment: ReturnType<
  typeof publicEnvironmentSchema.parse
> | null = null;

export function getPublicEnvironment() {
  if (cachedPublicEnvironment) return cachedPublicEnvironment;

  cachedPublicEnvironment = publicEnvironmentSchema.parse({
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_MIDTRANS_CLIENT_KEY:
      process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
  });

  return cachedPublicEnvironment;
}
