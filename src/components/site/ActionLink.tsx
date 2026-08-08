import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "outline";

const base =
  "btn-shine inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "text-primary-foreground shadow-[0_0_40px_-12px_var(--primary)] hover:shadow-[0_0_60px_-8px_var(--primary)] hover:-translate-y-0.5 [background-image:var(--gradient-brand)]",
  outline:
    "glass-panel text-foreground hover:border-primary-light/60 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-16px_var(--primary)]",
  ghost: "text-muted-foreground hover:text-foreground",
};

export function ActionLink({
  variant = "primary",
  className,
  ...props
}: { variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}
