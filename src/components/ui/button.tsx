import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center font-body text-sm uppercase tracking-widest transition-all duration-300 ease-luxury focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-100 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-terracotta-600 text-ivory-50 hover:bg-terracotta-700 shadow-soft hover:shadow-elevated",
        secondary:
          "bg-transparent text-navy-700 border border-gold-600 hover:bg-ivory-200",
        ghost:
          "bg-transparent text-terracotta-600 hover:bg-terracotta-50",
        premium:
          "bg-gradient-premium text-ivory-50 shadow-premium hover:shadow-glow",
        outline:
          "bg-transparent text-navy-700 border border-ivory-500 hover:border-terracotta-600 hover:text-terracotta-600",
      },
      size: {
        sm: "h-9 px-4 text-[10px]",
        md: "h-11 px-6 text-xs",
        lg: "h-14 px-8 text-sm",
        xl: "h-16 px-10 text-sm",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-3">
            <span className="h-2 w-2 bg-current rounded-full animate-pulse" />
            <span className="h-2 w-2 bg-current rounded-full animate-pulse [animation-delay:0.2s]" />
            <span className="h-2 w-2 bg-current rounded-full animate-pulse [animation-delay:0.4s]" />
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
