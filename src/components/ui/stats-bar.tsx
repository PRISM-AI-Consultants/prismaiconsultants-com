import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  className?: string;
}

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 md:flex md:items-center md:justify-between md:gap-8",
        className
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-extrabold tracking-tight text-accent md:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
