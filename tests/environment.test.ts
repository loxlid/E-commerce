import { describe, expect, it } from "vitest";

import {
  publicEnvironmentSchema,
  serverEnvironmentSchema,
} from "@/lib/validations/environment";

describe("environment validation", () => {
  it("accepts valid public configuration", () => {
    const result = publicEnvironmentSchema.safeParse({
      NEXT_PUBLIC_APP_URL: "http://localhost:3000",
      NEXT_PUBLIC_SUPABASE_URL: "https://project.supabase.co",
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_real-key",
    });

    expect(result.success).toBe(true);
  });

  it("rejects example credentials", () => {
    const result = publicEnvironmentSchema.safeParse({
      NEXT_PUBLIC_APP_URL: "http://localhost:3000",
      NEXT_PUBLIC_SUPABASE_URL: "https://project.supabase.co",
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_your-key",
    });

    expect(result.success).toBe(false);
  });

  it("requires a strong cron secret on the server", () => {
    const result = serverEnvironmentSchema.safeParse({
      NEXT_PUBLIC_APP_URL: "http://localhost:3000",
      NEXT_PUBLIC_SUPABASE_URL: "https://project.supabase.co",
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_real-key",
      SUPABASE_SERVICE_ROLE_KEY: "sb_secret_real-key",
      MIDTRANS_SERVER_KEY: "SB-Mid-server-real-key",
      MIDTRANS_IS_PRODUCTION: "false",
      RESEND_API_KEY: "re_real-key",
      EMAIL_FROM: "NexaCommerce <noreply@nexa.test>",
      CRON_SECRET: "short",
    });

    expect(result.success).toBe(false);
  });
});
