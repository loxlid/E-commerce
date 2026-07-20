import type { Metadata } from "next";
import { PackageSearch } from "lucide-react";

import { EmptyState } from "@/components/shared/empty-state";

export const metadata: Metadata = { title: "Pesanan" };

export default function OrdersPage() {
  return (
    <div className="container-page py-12">
      <EmptyState
        icon={PackageSearch}
        title="Belum ada pesanan"
        description="Setelah autentikasi dan checkout aktif, semua pesananmu akan tampil dan diperbarui secara real-time di sini."
        actionLabel="Cari produk"
        actionHref="/kategori"
      />
    </div>
  );
}
