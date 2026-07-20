import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SearchBar({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <form
      action="/cari"
      role="search"
      className={cn(
        "border-input bg-background/90 focus-within:ring-ring/30 flex w-full items-center rounded-xl border p-1 shadow-sm transition-shadow focus-within:ring-2",
        className,
      )}
    >
      <Search
        className="text-muted-foreground ml-2 size-4 shrink-0"
        aria-hidden="true"
      />
      <Input
        type="search"
        name="q"
        aria-label="Cari produk atau toko"
        placeholder={
          compact ? "Cari produk..." : "Cari produk, merek, atau toko..."
        }
        className="h-9 border-0 bg-transparent shadow-none focus-visible:ring-0"
      />
      <Button type="submit" size="sm" className="hidden sm:inline-flex">
        Cari
      </Button>
    </form>
  );
}
