import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  readingTime: string;
  className?: string;
}

export function BlogCard({
  title,
  slug,
  date,
  tags,
  description,
  readingTime,
  className,
}: BlogCardProps) {
  return (
    <Card href={`/blog/${slug}`} className={cn("flex flex-col", className)}>
      <CardHeader>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={date}>{date}</time>
          <span>&middot;</span>
          <span>{readingTime}</span>
        </div>
        <h3 className="mt-2 text-lg font-bold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="flex-1 text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
