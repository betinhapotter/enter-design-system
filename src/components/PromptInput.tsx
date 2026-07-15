import { cn } from "../lib/cn";
import { Button } from "./Button";

export function PromptInput({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl p-4 backdrop-blur-md",
        "transition-shadow duration-200 ease-enter",
        "focus-within:shadow-input-glow-focus hover:shadow-input-glow-hover",
        className
      )}
    >
      <textarea
        rows={2}
        placeholder='Digite "/" para usar habilidades…'
        className="w-full resize-none bg-transparent text-foreground placeholder:text-muted-foreground text-[17.5px] outline-none"
      />
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2">
          <Button size="sm" variant="ghost">+</Button>
          <Button size="sm" variant="brand">Plano</Button>
          <Button size="sm" variant="ghost">Skills 5</Button>
        </div>
        <Button size="icon" variant="primary" aria-label="Enviar">↑</Button>
      </div>
    </div>
  );
}
