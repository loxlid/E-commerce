import type { Metadata } from "next";
import Link from "next/link";
import {
  Baby,
  Bike,
  BookOpen,
  Camera,
  Dumbbell,
  Gamepad2,
  HeartPulse,
  Home,
  Laptop,
  PawPrint,
  Shirt,
  Smartphone,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = { title: "Kategori" };

const categories = [
  { label: "Handphone", icon: Smartphone },
  { label: "Komputer", icon: Laptop },
  { label: "Fashion", icon: Shirt },
  { label: "Rumah tangga", icon: Home },
  { label: "Kesehatan", icon: HeartPulse },
  { label: "Olahraga", icon: Dumbbell },
  { label: "Hobi", icon: Bike },
  { label: "Gaming", icon: Gamepad2 },
  { label: "Fotografi", icon: Camera },
  { label: "Buku", icon: BookOpen },
  { label: "Ibu & anak", icon: Baby },
  { label: "Hewan", icon: PawPrint },
];

export default function CategoriesPage() {
  return (
    <div className="container-page py-10 sm:py-14">
      <SectionHeading
        eyebrow="Katalog"
        title="Semua kategori"
        description="Pilih kategori untuk mempersempit pencarian. Data kategori akan dikelola admin dan dibaca dari Supabase pada Tahap 2–4."
      />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map(({ label, icon: Icon }) => (
          <Link
            key={label}
            href={`/cari?kategori=${encodeURIComponent(label.toLowerCase())}`}
            className="group bg-card hover:border-primary/40 hover:shadow-soft focus-visible:ring-ring flex items-center gap-4 rounded-2xl border p-4 shadow-sm transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none"
          >
            <span className="bg-secondary text-primary grid size-11 shrink-0 place-items-center rounded-xl">
              <Icon className="size-5" />
            </span>
            <span className="text-sm font-bold sm:text-base">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
