import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole, Store, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = { title: "Akun" };

export default function AccountPage() {
  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-2xl">
        <span className="bg-secondary text-primary grid size-14 place-items-center rounded-2xl">
          <UserRound />
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight">Ruang akunmu</h1>
        <p className="text-muted-foreground mt-2">
          Kelola profil, alamat, keamanan, wishlist, dan pesanan dari satu
          tempat.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <LockKeyhole className="text-primary mb-3" />
              <CardTitle>Masuk sebagai pelanggan</CardTitle>
              <CardDescription>
                Autentikasi Supabase diimplementasikan pada Tahap 3.
              </CardDescription>
            </CardHeader>
            <Button asChild>
              <Link href="/login">Buka halaman masuk</Link>
            </Button>
          </Card>
          <Card>
            <CardHeader>
              <Store className="text-primary mb-3" />
              <CardTitle>Jadi seller</CardTitle>
              <CardDescription>
                Siapkan toko untuk menjual produk ke seluruh Indonesia.
              </CardDescription>
            </CardHeader>
            <Button asChild variant="outline">
              <Link href="/seller/daftar">Pelajari alurnya</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
