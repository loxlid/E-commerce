import { z } from "zod";

const nonPlaceholder = z
  .string()
  .min(1)
  .refine(
    (value) => !/your-|replace-with|example\.com/i.test(value),
    "Ganti nilai contoh dengan kredensial sebenarnya.",
  );

export const publicEnvironmentSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3000"),
  NEXT_PUBLIC_SUPABASE_URL: z.url(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: nonPlaceholder,
  NEXT_PUBLIC_MIDTRANS_CLIENT_KEY: z.string().min(1).optional(),
});

export const serverEnvironmentSchema = publicEnvironmentSchema.extend({
  SUPABASE_SERVICE_ROLE_KEY: nonPlaceholder,
  MIDTRANS_SERVER_KEY: nonPlaceholder,
  MIDTRANS_IS_PRODUCTION: z
    .enum(["true", "false"])
    .default("false")
    .transform((value) => value === "true"),
  RESEND_API_KEY: nonPlaceholder,
  EMAIL_FROM: z.string().min(3),
  CRON_SECRET: z.string().min(32),
});

export type PublicEnvironment = z.infer<typeof publicEnvironmentSchema>;
export type ServerEnvironment = z.infer<typeof serverEnvironmentSchema>;
