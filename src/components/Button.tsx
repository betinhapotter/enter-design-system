import { cn } from "../lib/cn";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "brand" | "destructive";
type Size = "sm" | "md" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 font-medium select-none " +
  "transition-[background,box-shadow,transform] duration-200 ease-enter " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring " +
  "disabled:opacity-50 disabled:pointer-events-none active:scale-[.98]";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
  ghost: "bg-transparent text-foreground hover:bg-fill-tr-10",
  brand: "bg-brand-active text-brand hover:bg-brand/20",
  destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
};
const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm rounded-full",
  md: "h-10 px-4 text-sm rounded-full",
  icon: "size-10 rounded-full p-0",
};

export function Button({
  variant = "primary", size = "md", className, ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
