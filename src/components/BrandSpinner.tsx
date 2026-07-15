import { cn } from "../lib/cn";

export function BrandSpinner({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex size-6", className)} role="status" aria-label="Carregando">
      <span className="absolute inset-0 rounded-full bg-brand animate-pulse-glow" />
      <span className="relative size-6 rounded-full border-2 border-brand border-t-transparent animate-spin" />
    </span>
  );
}
