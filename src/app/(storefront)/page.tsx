import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Bike,
  BookOpen,
  Boxes,
  ChevronRight,
  Clock3,
  Headphones,
  HeartPulse,
  Home,
  MapPin,
  PackageCheck,
  Shirt,
  ShoppingBasket,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "Elektronik",
    icon: Smartphone,
    tone: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  },
  {
    name: "Fashion",
    icon: Shirt,
    tone: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  },
  {
    name: "Rumah",
    icon: Home,
    tone: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  },
  {
    name: "Kesehatan",
    icon: HeartPulse,
    tone: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    name: "Hobi",
    icon: Bike,
    tone: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  },
  {
    name: "Buku",
    icon: BookOpen,
    tone: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  },
];

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Seller terverifikasi",
    description: "Identitas dan kualitas toko ditinjau sebelum berjualan.",
  },
  {
    icon: Banknote,
    title: "Pembayaran terlindungi",
    description: "Dana diteruskan setelah pesanan diproses dengan benar.",
  },
  {
    icon: PackageCheck,
    title: "Pesanan transparan",
    description:
      "Status bayar, proses, dan pengiriman terlihat dalam satu alur.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <div className="surface-grid pointer-events-none absolute inset-0" />
        <div className="bg-primary/16 absolute -top-28 -right-20 size-96 rounded-full blur-3xl" />
        <div className="bg-warning/20 absolute bottom-0 -left-28 size-72 rounded-full blur-3xl" />

        <div className="container-page relative grid min-h-[630px] items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="bg-background/75 mb-5 py-1.5 backdrop-blur"
            >
              <Sparkles className="text-primary" /> Marketplace generasi baru
            </Badge>
            <h1 className="text-4xl leading-[1.08] font-black tracking-[-0.04em] text-balance sm:text-5xl lg:text-7xl">
              Belanja lebih dekat.{" "}
              <span className="text-primary">Hidup lebih mudah.</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl text-base leading-7 sm:text-lg">
              Satu tempat untuk menemukan produk pilihan, mendukung seller
              lokal, dan mengelola setiap transaksi dengan tenang.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/kategori">
                  Mulai jelajah <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-background/60"
              >
                <Link href="/seller/daftar">
                  <Store /> Buka toko
                </Link>
              </Button>
            </div>
            <div className="text-muted-foreground mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <span className="flex items-center gap-2">
                <BadgeCheck className="text-primary size-4" /> Checkout aman
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="text-primary size-4" /> Seluruh Indonesia
              </span>
              <span className="flex items-center gap-2">
                <Clock3 className="text-primary size-4" /> Update real-time
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
            <div className="bg-primary/20 absolute inset-10 rounded-[3rem] blur-3xl" />
            <div className="bg-card/88 shadow-soft relative overflow-hidden rounded-[2rem] border p-4 backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary text-xs font-bold tracking-widest uppercase">
                    Ruang belanja
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    Dirancang untuk terasa simpel
                  </p>
                </div>
                <span className="bg-primary text-primary-foreground grid size-11 place-items-center rounded-2xl">
                  <Boxes className="size-5" />
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-secondary col-span-2 rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      Pesanan dalam kendali
                    </span>
                    <Badge variant="success">Real-time</Badge>
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    {["Dibayar", "Diproses", "Dikirim"].map((label, index) => (
                      <div key={label} className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center">
                          <span className="bg-primary text-primary-foreground grid size-6 shrink-0 place-items-center rounded-full text-[10px] font-bold">
                            {index + 1}
                          </span>
                          {index < 2 ? (
                            <span className="bg-primary/35 h-0.5 flex-1" />
                          ) : null}
                        </div>
                        <p className="text-muted-foreground truncate text-[11px] font-medium">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background/75 rounded-2xl border p-4">
                  <ShoppingBasket className="text-primary size-5" />
                  <p className="mt-5 text-sm font-bold">Satu keranjang</p>
                  <p className="text-muted-foreground mt-1 text-xs leading-5">
                    Lintas produk, tetap rapi.
                  </p>
                </div>
                <div className="bg-background/75 rounded-2xl border p-4">
                  <Headphones className="text-primary size-5" />
                  <p className="mt-5 text-sm font-bold">Chat langsung</p>
                  <p className="text-muted-foreground mt-1 text-xs leading-5">
                    Dekat dengan seller.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background/90 absolute -right-2 -bottom-8 flex items-center gap-3 rounded-2xl border p-3 pr-5 shadow-lg backdrop-blur sm:-right-8">
              <span className="bg-success/15 text-success grid size-10 place-items-center rounded-xl">
                <PackageCheck />
              </span>
              <div>
                <p className="text-muted-foreground text-xs">Status pesanan</p>
                <p className="text-sm font-bold">Terkirim dengan aman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Jelajah cepat"
          title="Mulai dari yang kamu butuhkan"
          description="Taksonomi kategori disiapkan sebagai navigasi awal dan akan terhubung ke katalog Supabase pada tahap storefront."
          href="/kategori"
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, icon: Icon, tone }) => (
            <Link
              key={name}
              href={`/cari?kategori=${name.toLowerCase()}`}
              className="group bg-card hover:border-primary/40 hover:shadow-soft focus-visible:ring-ring rounded-2xl border p-4 shadow-sm transition-[transform,box-shadow,border-color] outline-none hover:-translate-y-1 focus-visible:ring-2"
            >
              <span
                className={`grid size-11 place-items-center rounded-xl ${tone}`}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="mt-4 flex items-center justify-between gap-2 text-sm font-bold">
                {name}
                <ChevronRight className="text-muted-foreground size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-card border-y">
        <div className="container-page grid gap-4 py-14 md:grid-cols-3">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 rounded-2xl p-4">
              <span className="bg-secondary text-primary grid size-11 shrink-0 place-items-center rounded-xl">
                <Icon className="size-5" />
              </span>
              <div>
                <h2 className="font-bold">{title}</h2>
                <p className="text-muted-foreground mt-1 text-sm leading-6">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <Card className="border-primary/20 bg-primary text-primary-foreground shadow-soft relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="absolute -top-24 -right-24 size-72 rounded-full border-[40px] border-white/10" />
          <div className="relative max-w-2xl">
            <Badge className="mb-4 bg-white/15 text-white">
              Untuk bisnis Indonesia
            </Badge>
            <h2 className="text-3xl font-black tracking-tight text-balance sm:text-4xl">
              Punya produk bagus? Bawa tokomu ke level berikutnya.
            </h2>
            <p className="text-primary-foreground/80 mt-3 max-w-xl leading-7">
              Kelola produk, stok, pesanan, promosi, dan laporan dari dashboard
              seller yang dibangun untuk tumbuh bersama tokomu.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="relative mt-4 shrink-0 lg:mt-0"
          >
            <Link href="/seller/daftar">
              Mulai berjualan <ArrowRight />
            </Link>
          </Button>
        </Card>
      </section>
    </>
  );
}
