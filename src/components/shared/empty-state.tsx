import Link from "next/link";
import { PackageOpen, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function EmptyState({
  icon: Icon = PackageOpen,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="bg-card mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-dashed px-6 py-14 text-center shadow-sm">
      <span className="bg-secondary text-primary mb-4 grid size-14 place-items-center rounded-2xl">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground mt-2 text-sm leading-6">
        {description}
      </p>
      {actionLabel && actionHref ? (
        <Button asChild className="mt-6">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      ) : null}
    </div>
  );
}
