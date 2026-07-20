"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ErrorState({
  title = "Terjadi kendala",
  description = "Data belum dapat dimuat. Silakan coba kembali.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div role="alert" className="bg-card rounded-2xl border p-6 text-center">
      <AlertTriangle className="text-warning mx-auto size-8" />
      <h2 className="mt-3 font-bold">{title}</h2>
      <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      {onRetry ? (
        <Button onClick={onRetry} variant="outline" className="mt-4">
          <RefreshCw /> Coba lagi
        </Button>
      ) : null}
    </div>
  );
}
