"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-blue text-white hover:bg-brand-blue-light shadow-md hover:shadow-glow-sm active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white",
        secondary:
          "bg-brand-neutral text-brand-dark hover:bg-brand-neutral-dark border border-brand-neutral-dark",
        ghost: "hover:bg-brand-neutral hover:text-brand-dark",
        link: "text-brand-blue underline-offset-4 hover:underline",
        white:
          "bg-white text-brand-dark hover:bg-brand-neutral shadow-md active:scale-[0.98]",
        dark: "bg-brand-dark text-white hover:bg-slate-800 shadow-md active:scale-[0.98]",
        success:
          "bg-brand-green text-white hover:bg-green-600 shadow-md active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-13 px-8 py-3 text-base rounded-xl",
        xl: "h-14 px-10 py-3.5 text-lg rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
