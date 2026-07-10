import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center font-body text-[10px] uppercase tracking-widest px-3 py-1 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-ivory-200 text-navy-600",
        premium: "bg-gold-500/20 text-gold-700 border border-gold-500/30",
        verified: "bg-emerald-600/10 text-emerald-700 border border-emerald-600/20",
        new: "bg-terracotta-500/10 text-terracotta-600 border border-terracotta-500/20",
        sale: "bg-terracotta-600 text-ivory-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
