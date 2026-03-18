import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("border-b border-border bg-muted/30", className)}>
      <Container>
        <div className="py-16 md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
