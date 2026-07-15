import { cn } from "../lib/cn";
import { useEffect, type ReactNode } from "react";

export function Dialog({
  open, onClose, children,
}: { open: boolean; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div onClick={onClose} className="absolute inset-0 bg-background/70 backdrop-blur-sm animate-in fade-in duration-200" />
      <div
        role="dialog" aria-modal="true"
        className={cn(
          "relative z-10 w-full max-w-md p-6",
          "bg-popover text-popover-foreground rounded-xl border border-border shadow-card-elevated",
          "animate-in fade-in zoom-in-95 blur-in-sm slide-in-from-bottom-2 duration-300 ease-enter"
        )}
      >
        {children}
      </div>
    </div>
  );
}
