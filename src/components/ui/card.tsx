import Link from "next/link";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "featured";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, string> = {
  default: "border-border",
  featured: "border-accent/50 ring-1 ring-accent/20",
};

export function Card({
  className,
  children,
  href,
  variant = "default",
}: CardProps) {
  const classes = cn(
    "rounded-[var(--radius-lg)] border bg-card text-card-foreground transition-colors",
    variantStyles[variant],
    href && "hover:border-accent/40 hover:bg-card/80",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
