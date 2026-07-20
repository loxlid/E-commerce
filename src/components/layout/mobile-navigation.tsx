"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Grid2X2,
  House,
  PackageCheck,
  ShoppingBag,
  UserRound,
} from "lucide-react";

import {
  selectCartQuantity,
  useCartStore,
} from "@/features/cart/stores/cart-store";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Beranda", icon: House },
  { href: "/kategori", label: "Kategori", icon: Grid2X2 },
  { href: "/keranjang", label: "Keranjang", icon: ShoppingBag },
  { href: "/pesanan", label: "Pesanan", icon: PackageCheck },
  { href: "/akun", label: "Akun", icon: UserRound },
];

export function MobileNavigation() {
  const pathname = usePathname();
  const quantity = useCartStore(selectCartQuantity);

  return (
    <nav
      aria-label="Navigasi mobile"
      className="bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t px-2 pb-[max(0.4rem,env(safe-area-inset-bottom))] backdrop-blur-lg lg:hidden"
    >
      <div className="mx-auto grid h-16 max-w-lg grid-cols-5">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "text-muted-foreground focus-visible:ring-ring relative flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-medium transition-colors outline-none focus-visible:ring-2",
                active && "text-primary",
              )}
            >
              <span className="relative">
                <Icon
                  className={cn("size-5", active && "stroke-[2.5]")}
                  aria-hidden="true"
                />
                {href === "/keranjang" && quantity > 0 ? (
                  <span className="bg-destructive absolute -top-2 -right-2 grid min-w-4 place-items-center rounded-full px-1 text-[9px] leading-4 font-bold text-white">
                    {quantity > 99 ? "99+" : quantity}
                  </span>
                ) : null}
              </span>
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
