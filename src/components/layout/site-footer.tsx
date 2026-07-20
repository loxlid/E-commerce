import Link from "next/link";
import { Mail, Share2, ShieldCheck } from "lucide-react";

import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";

const footerGroups = [
  {
    title: "NexaCommerce",
    links: ["Tentang kami", "Karier", "Blog", "Kebijakan privasi"],
  },
  {
    title: "Bantuan",
    links: ["Pusat bantuan", "Cara belanja", "Pengiriman", "Pengembalian"],
  },
  {
    title: "Untuk seller",
    links: [
      "Mulai berjualan",
      "Pusat edukasi",
      "Biaya layanan",
      "Kebijakan seller",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-card border-t pb-20 lg:pb-0">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.25fr_2fr] lg:py-16">
        <div className="max-w-sm">
          <BrandLogo />
          <p className="text-muted-foreground mt-4 text-sm leading-6">
            Infrastruktur marketplace Indonesia yang menghubungkan pelanggan
            dengan seller tepercaya secara aman dan transparan.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Media sosial NexaCommerce"
            >
              <Share2 />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Email NexaCommerce"
            >
              <Mail />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold">{group.title}</h2>
              <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
                {group.links.map((label) => (
                  <li key={label}>
                    <Link
                      href="/bantuan"
                      className="hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t">
        <div className="container-page text-muted-foreground flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NexaCommerce. Semua hak dilindungi.
          </p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="text-primary size-4" /> Transaksi
            terenkripsi dan terlindungi
          </p>
        </div>
      </div>
    </footer>
  );
}
