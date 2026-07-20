"use client";

import { ShoppingBag } from "lucide-react";

import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  selectCartSubtotal,
  useCartStore,
} from "@/features/cart/stores/cart-store";
import { formatRupiah } from "@/lib/utils";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore(selectCartSubtotal);
  const removeItem = useCartStore((state) => state.removeItem);

  if (items.length === 0) {
    return (
      <div className="container-page py-12">
        <EmptyState
          icon={ShoppingBag}
          title="Keranjangmu masih kosong"
          description="Jelajahi kategori dan simpan produk yang ingin kamu beli di sini."
          actionLabel="Mulai belanja"
          actionHref="/kategori"
        />
      </div>
    );
  }

  return (
    <div className="container-page grid gap-6 py-10 lg:grid-cols-[1fr_360px]">
      <section>
        <h1 className="text-2xl font-bold">Keranjang</h1>
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <Card
              key={item.variantId}
              className="flex-row items-center gap-4 p-4"
            >
              <div
                className="bg-secondary size-16 rounded-xl"
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <h2 className="truncate font-semibold">{item.name}</h2>
                <p className="text-muted-foreground mt-1 text-sm">
                  {item.quantity} × {formatRupiah(item.unitPrice)}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(item.variantId)}
              >
                Hapus
              </Button>
            </Card>
          ))}
        </div>
      </section>
      <Card className="h-fit">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">Subtotal lokal</span>
          <strong>{formatRupiah(subtotal)}</strong>
        </div>
        <p className="text-muted-foreground text-xs leading-5">
          Harga, stok, promo, dan ongkir selalu akan dihitung ulang di server
          sebelum checkout.
        </p>
        <Button disabled>Checkout tersedia di Tahap 5</Button>
      </Card>
    </div>
  );
}
