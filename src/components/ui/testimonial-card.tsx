import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  metric?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  title,
  company,
  metric,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardContent className="flex flex-1 flex-col">
        <div className="flex-1">
          <span className="text-4xl leading-none text-accent">&ldquo;</span>
          <blockquote className="-mt-4 text-base italic text-muted-foreground">
            {quote}
          </blockquote>
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">{author}</p>
            <p className="text-xs text-muted-foreground">
              {title}, {company}
            </p>
          </div>
          {metric && <Badge variant="accent">{metric}</Badge>}
        </div>
      </CardContent>
    </Card>
  );
}
