import type { Metadata } from "next";
import { SearchX } from "lucide-react";

import { EmptyState } from "@/components/shared/empty-state";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Pencarian" };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; kategori?: string }>;
}) {
  const params = await searchParams;
  const query = params.q?.trim() || params.kategori?.trim();

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {query ? `Hasil untuk “${query}”` : "Jelajahi produk"}
        </h1>
        <Badge variant="secondary">Katalog terhubung di Tahap 4</Badge>
      </div>
      <EmptyState
        icon={SearchX}
        title="Katalog sedang disiapkan"
        description="Fondasi pencarian dan URL filter sudah aktif. Hasil nyata akan ditampilkan setelah schema produk, RLS, dan repository Supabase selesai pada tahap berikutnya."
        actionLabel="Lihat kategori"
        actionHref="/kategori"
      />
    </div>
  );
}
