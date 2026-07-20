import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Lihat semua",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="text-primary mb-2 text-xs font-bold tracking-[0.18em] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="text-muted-foreground mt-2 text-sm leading-6 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {href ? (
        <Button asChild variant="ghost" className="hidden sm:inline-flex">
          <Link href={href}>
            {linkLabel} <ArrowRight />
          </Link>
        </Button>
      ) : null}
    </div>
  );
}
