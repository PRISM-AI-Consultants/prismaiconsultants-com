import { MDXRemote } from "next-mdx-remote/rsc";
import { cn } from "@/lib/utils";

interface MDXContentProps {
  source: string;
  className?: string;
}

export function MDXContent({ source, className }: MDXContentProps) {
  return (
    <div className={cn("prose", className)}>
      <MDXRemote source={source} />
    </div>
  );
}
