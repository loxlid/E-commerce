import Link from "next/link";
import { Heart, MapPin, Menu, UserRound } from "lucide-react";

import { BrandLogo } from "@/components/shared/brand-logo";
import { SearchBar } from "@/components/shared/search-bar";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { CartLink } from "@/features/cart/components/cart-link";

const desktopLinks = [
  { href: "/kategori", label: "Kategori" },
  { href: "/cari?promo=true", label: "Promo" },
  { href: "/cari?sort=terlaris", label: "Terlaris" },
  { href: "/seller/daftar", label: "Mulai jualan" },
];

export function SiteHeader() {
  return (
    <header className="bg-background/90 supports-[backdrop-filter]:bg-background/78 sticky top-0 z-40 border-b backdrop-blur-xl">
      <div className="bg-primary text-primary-foreground border-b">
        <div className="container-page flex h-8 items-center justify-between text-[11px] font-medium sm:text-xs">
          <p className="truncate">
            Gratis ongkir dan perlindungan belanja terintegrasi.
          </p>
          <span className="hidden items-center gap-1 sm:flex">
            <MapPin className="size-3.5" /> Dikirim ke seluruh Indonesia
          </span>
        </div>
      </div>

      <div className="container-page">
        <div className="flex h-16 items-center gap-3 sm:h-20 lg:gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Buka menu navigasi"
          >
            <Menu />
          </Button>
          <BrandLogo className="hidden sm:inline-flex" />
          <div className="min-w-0 flex-1 lg:max-w-2xl">
            <SearchBar compact />
          </div>

          <nav aria-label="Aksi akun" className="flex items-center gap-0.5">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
            >
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart />
              </Link>
            </Button>
            <CartLink />
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              className="ml-1 hidden lg:inline-flex"
            >
              <Link href="/login">
                <UserRound /> Masuk
              </Link>
            </Button>
          </nav>
        </div>

        <nav
          aria-label="Navigasi utama"
          className="hidden h-10 items-center gap-7 border-t text-sm lg:flex"
        >
          {desktopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/bantuan"
            className="text-muted-foreground hover:text-foreground ml-auto font-medium transition-colors"
          >
            Pusat bantuan
          </Link>
        </nav>
      </div>
    </header>
  );
}
