import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SkillIconCardProps {
  name: string;
  icon: LucideIcon;
  index?: number;
}

export function SkillIconCard({ name, icon: Icon, index = 0 }: SkillIconCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="group flex items-center gap-2.5 bg-white/[0.04] backdrop-blur-[10px] border border-white/[0.06] rounded-xl px-5 py-4 transition-all duration-200 hover:bg-white/[0.08] hover:border-orange/30 hover:scale-105 cursor-default"
      style={{ WebkitBackdropFilter: 'blur(10px)' }}
    >
      <Icon
        size={20}
        className="text-white/60 group-hover:text-orange transition-colors duration-200"
      />
      <span className="font-mono text-[13px] text-white/60 group-hover:text-white/80 transition-colors duration-200">
        {name}
      </span>
    </motion.div>
  );
}
