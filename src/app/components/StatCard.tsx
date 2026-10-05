import { motion } from "motion/react";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  trend?: string;
  gradient?: string;
}

export function StatCard({ icon, label, value, trend, gradient = "from-[#6366f1] to-[#8b5cf6]" }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl bg-white dark:bg-card border border-border p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full -mr-16 -mt-16`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4`}>
          {icon}
        </div>
        <p className="text-muted-foreground text-sm mb-1">{label}</p>
        <p className="text-3xl font-bold mb-1">{value}</p>
        {trend && <p className="text-accent text-sm">{trend}</p>}
      </div>
    </motion.div>
  );
}
