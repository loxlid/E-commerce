"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  selectCartQuantity,
  useCartStore,
} from "@/features/cart/stores/cart-store";

export function CartLink({ showLabel = false }: { showLabel?: boolean }) {
  const quantity = useCartStore(selectCartQuantity);

  return (
    <Button
      asChild
      variant="ghost"
      size={showLabel ? "default" : "icon"}
      className="relative"
    >
      <Link href="/keranjang" aria-label={`Keranjang, ${quantity} barang`}>
        <ShoppingBag />
        {showLabel ? <span>Keranjang</span> : null}
        {quantity > 0 ? (
          <span className="bg-destructive absolute -top-0.5 -right-0.5 grid min-w-4 place-items-center rounded-full px-1 text-[10px] leading-4 font-bold text-white">
            {quantity > 99 ? "99+" : quantity}
          </span>
        ) : null}
      </Link>
    </Button>
  );
}
