import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, BarChart3, Boxes, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "Mulai Berjualan" };

const benefits = [
  { icon: Store, label: "Profil toko profesional" },
  { icon: Boxes, label: "Produk, variasi, dan stok" },
  { icon: BarChart3, label: "Statistik penjualan" },
  { icon: BadgeCheck, label: "Verifikasi seller" },
];

export default function SellerRegistrationPage() {
  return (
    <div className="container-page py-12 sm:py-16">
      <Card className="mx-auto max-w-4xl overflow-hidden p-0 lg:grid lg:grid-cols-2">
        <div className="bg-primary text-primary-foreground p-8 sm:p-12">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80">
            Nexa Seller
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight">
            Tumbuhkan tokomu bersama kami.
          </h1>
          <p className="mt-4 leading-7 opacity-80">
            Infrastruktur seller dirancang untuk mengelola katalog hingga
            pencairan dana dengan aman.
          </p>
        </div>
        <div className="p-8 sm:p-12">
          <h2 className="text-xl font-bold">Yang akan kamu dapatkan</h2>
          <ul className="mt-6 space-y-4">
            {benefits.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-medium"
              >
                <span className="bg-secondary text-primary grid size-9 place-items-center rounded-lg">
                  <Icon className="size-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 w-full">
            <Link href="/login">Masuk untuk melanjutkan</Link>
          </Button>
          <p className="text-muted-foreground mt-3 text-center text-xs">
            Onboarding seller tersedia setelah Tahap 3 autentikasi selesai.
          </p>
        </div>
      </Card>
    </div>
  );
}
