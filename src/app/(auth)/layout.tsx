import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { BrandLogo } from "@/components/shared/brand-logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden px-4 py-12">
      <div className="surface-grid pointer-events-none absolute inset-0" />
      <div className="absolute top-5 left-5 z-10">
        <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft /> Beranda
          </Link>
        </Button>
      </div>
      <div className="absolute top-5 right-5 z-10">
        <ThemeToggle />
      </div>
      <div className="relative w-full max-w-md">
        <BrandLogo className="mb-8 justify-center" />
        {children}
      </div>
    </main>
  );
}
