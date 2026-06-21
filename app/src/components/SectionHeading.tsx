import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  heading: string;
  centered?: boolean;
}

export function SectionHeading({ label, heading, centered = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={centered ? 'text-center' : ''}
    >
      <span className="label-text">{label}</span>
      <h2
        className="mt-2 font-inter font-bold text-white leading-[0.95] tracking-[-0.025em]"
        style={{ fontSize: 'clamp(42px, 5vw, 64px)' }}
      >
        {heading}
      </h2>
      <div
        className={cn(
          'mt-4 w-[60px] h-[1px] bg-orange/50',
          centered && 'mx-auto'
        )}
      />
    </motion.div>
  );
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
