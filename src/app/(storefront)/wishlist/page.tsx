import type { Metadata } from "next";
import { Heart } from "lucide-react";

import { EmptyState } from "@/components/shared/empty-state";

export const metadata: Metadata = { title: "Wishlist" };

export default function WishlistPage() {
  return (
    <div className="container-page py-12">
      <EmptyState
        icon={Heart}
        title="Wishlist belum terisi"
        description="Produk favorit yang kamu simpan akan tersedia lintas perangkat setelah login."
        actionLabel="Jelajahi kategori"
        actionHref="/kategori"
      />
    </div>
  );
}
