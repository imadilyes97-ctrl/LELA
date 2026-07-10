import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-body text-xs uppercase tracking-widest text-navy-500 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400">
              {icon}
            </div>
          )}
          <input
            id={inputId}
            className={cn(
              "w-full bg-ivory-100 border border-ivory-500 rounded-lg px-4 py-3 font-body text-sm text-navy-700",
              "placeholder:text-navy-300",
              "transition-all duration-200",
              "focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 focus:bg-ivory-50",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-terracotta-600 focus:border-terracotta-600 focus:ring-terracotta-600",
              icon && "pl-12",
              className
            )}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 font-body text-xs text-terracotta-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
