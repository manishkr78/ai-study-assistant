import { motion } from "motion/react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className = "", hover = true, glass = false }: CardProps) {
  const baseStyles = "rounded-2xl p-6 transition-colors duration-300";
  const glassStyles = glass
    ? "glass dark:glass-dark"
    : "bg-card border border-border shadow-lg";
  const hoverStyles = hover ? "hover:border-primary/50" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { scale: 1.02, y: -5, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.2)" } : {}}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
