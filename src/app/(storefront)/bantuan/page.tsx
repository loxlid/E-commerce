import type { Metadata } from "next";
import { CircleHelp } from "lucide-react";

import { EmptyState } from "@/components/shared/empty-state";

export const metadata: Metadata = { title: "Pusat Bantuan" };

export default function HelpPage() {
  return (
    <div className="container-page py-12">
      <EmptyState
        icon={CircleHelp}
        title="Pusat bantuan sedang disusun"
        description="Konten FAQ, kebijakan transaksi, pengiriman, dan pengembalian akan dikelola lewat CMS admin."
        actionLabel="Kembali ke beranda"
        actionHref="/"
      />
    </div>
  );
}
