import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brand-blue text-white",
        secondary: "border-transparent bg-brand-neutral text-brand-dark",
        outline: "border-brand-blue text-brand-blue bg-transparent",
        success: "border-transparent bg-brand-green/10 text-green-700 border-green-200",
        warning: "border-transparent bg-amber-100 text-amber-700 border-amber-200",
        muted: "border-slate-200 bg-slate-50 text-brand-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
