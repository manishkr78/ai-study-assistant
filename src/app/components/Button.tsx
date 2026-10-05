import { motion } from "motion/react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent" | "glass";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  glow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "relative overflow-hidden rounded-2xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 z-10";

  const variantStyles = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30 border border-white/10",
    secondary: "bg-gradient-to-r from-secondary to-[#a855f7] text-white hover:shadow-lg hover:shadow-secondary/30 border border-white/10",
    ghost: "bg-transparent border border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/50",
    accent: "bg-gradient-to-r from-accent to-[#10b981] text-white hover:shadow-lg hover:shadow-accent/30 border border-white/10",
    glass: "glass dark:glass-dark text-foreground hover:bg-white/20 dark:hover:bg-white/5 border border-white/20 hover:border-white/40",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${glow ? 'shadow-[0_0_20px_rgba(99,102,241,0.4)]' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Subtle shine effect on hover */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  );
}
