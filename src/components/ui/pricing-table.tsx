import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  ctaUrl: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  tiers: PricingTier[];
  className?: string;
}

export function PricingTable({ tiers, className }: PricingTableProps) {
  return (
    <div
      className={cn(
        "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          variant={tier.highlighted ? "featured" : "default"}
          className={cn(
            "flex flex-col",
            tier.highlighted && "ring-2 ring-accent"
          )}
        >
          <CardHeader>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {tier.name}
            </p>
            <div className="mt-4">
              <span className="text-4xl font-extrabold tracking-tight text-foreground">
                {tier.price}
              </span>
              {tier.priceNote && (
                <span className="ml-2 text-sm text-muted-foreground">
                  {tier.priceNote}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {tier.description}
            </p>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col">
            <ul className="flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href={tier.ctaUrl}
              className={cn(
                "mt-8 inline-flex h-10 w-full items-center justify-center rounded-[var(--radius-md)] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                tier.highlighted
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "border border-border bg-transparent text-foreground hover:bg-muted hover:border-accent/40"
              )}
            >
              {tier.cta}
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
