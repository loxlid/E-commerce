import { describe, expect, it } from "vitest";

import { formatDateTime, formatRupiah } from "@/lib/utils";

describe("localization utilities", () => {
  it("formats integer currency as Indonesian Rupiah", () => {
    expect(formatRupiah(125_000)).toMatch(/Rp\s?125\.000/);
  });

  it("formats time in Asia/Jakarta", () => {
    const formatted = formatDateTime("2026-07-20T01:00:00.000Z");
    expect(formatted).toContain("08.00");
  });
});
