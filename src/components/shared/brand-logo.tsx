import Link from "next/link";
import { Boxes } from "lucide-react";

import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="NexaCommerce — kembali ke beranda"
      className={cn(
        "group focus-visible:ring-ring inline-flex items-center gap-2 rounded-lg outline-none focus-visible:ring-2",
        className,
      )}
    >
      <span className="bg-primary text-primary-foreground grid size-9 place-items-center rounded-xl shadow-sm transition-transform group-hover:-rotate-3">
        <Boxes className="size-5" aria-hidden="true" />
      </span>
      <span className="text-lg font-extrabold tracking-tight sm:text-xl">
        Nexa<span className="text-primary">Commerce</span>
      </span>
    </Link>
  );
}
