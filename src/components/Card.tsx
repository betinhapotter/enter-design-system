import { cn } from "../lib/cn";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl border border-border",
        "shadow-card-elevated backdrop-blur-md p-6",
        "animate-in fade-in slide-in-from-bottom-4 blur-in-sm duration-300",
        className
      )}
      {...props}
    />
  );
}
