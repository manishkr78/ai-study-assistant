import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface AIBadgeProps {
  className?: string;
}

export function AIBadge({ className = "" }: AIBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-md ${className}`}
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-3.5 h-3.5 text-primary" />
      </motion.div>
      <span className="text-xs font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        AI Generated
      </span>
    </motion.div>
  );
}
