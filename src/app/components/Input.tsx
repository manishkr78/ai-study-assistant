import { InputHTMLAttributes, ReactNode } from "react";
import { motion } from "motion/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

export function Input({ label, icon, className = "", ...props }: InputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      {label && (
        <label className="block text-sm mb-2 font-medium text-foreground/80">{label}</label>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-300 z-10">
            {icon}
          </div>
        )}
        <input
          className={`w-full px-4 py-3 rounded-xl bg-input-background dark:bg-white/5 border border-border/50 group-focus-within:border-primary focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-300 shadow-sm ${
            icon ? "pl-12" : ""
          } ${className}`}
          {...props}
        />
      </div>
    </motion.div>
  );
}
