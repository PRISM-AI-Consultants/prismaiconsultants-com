import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioCardProps {
  name: string;
  client: string;
  description: string;
  category: string;
  liveUrl?: string;
  marketValue: string;
  clientPaid: string;
  quote?: string;
  quoteAuthor?: string;
  className?: string;
}

export function PortfolioCard({
  name,
  client,
  description,
  category,
  liveUrl,
  marketValue,
  clientPaid,
  quote,
  quoteAuthor,
  className,
}: PortfolioCardProps) {
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <Badge variant="accent" className="w-fit">
          {category}
        </Badge>
        <h3 className="mt-3 text-xl font-bold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{client}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Value comparison */}
        <div className="mt-6 space-y-2 rounded-[var(--radius-md)] bg-muted/50 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Market Value</span>
            <span className="font-semibold text-foreground">{marketValue}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Client Investment</span>
            <span className="font-semibold text-accent">{clientPaid}</span>
          </div>
        </div>

        {/* Optional quote */}
        {quote && (
          <blockquote className="mt-6 border-l-2 border-accent/50 pl-4 text-sm italic text-muted-foreground">
            &ldquo;{quote}&rdquo;
            {quoteAuthor && (
              <cite className="mt-1 block text-xs not-italic text-muted-foreground/70">
                &mdash; {quoteAuthor}
              </cite>
            )}
          </blockquote>
        )}

        {/* Live URL */}
        {liveUrl && (
          <div className="mt-auto pt-6">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-[var(--radius-md)] bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              View Live System
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
