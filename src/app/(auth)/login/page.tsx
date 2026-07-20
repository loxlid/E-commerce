import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = { title: "Masuk" };

export default function LoginPage() {
  return (
    <Card className="shadow-soft">
      <div>
        <Badge variant="secondary">
          <LockKeyhole /> Akses aman
        </Badge>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">
          Selamat datang kembali
        </h1>
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          Form dan client Supabase telah disiapkan. Server Action autentikasi,
          rate limiting, dan verifikasi email diaktifkan pada Tahap 3.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="nama@email.com"
            disabled
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-semibold">
            Password
          </label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            disabled
          />
        </div>
        <Button type="button" className="w-full" disabled>
          Masuk — tersedia di Tahap 3
        </Button>
      </form>
      <p className="text-muted-foreground text-center text-sm">
        Belum punya akun?{" "}
        <Link href="/" className="text-primary font-semibold hover:underline">
          Kembali jelajah
        </Link>
      </p>
    </Card>
  );
}
