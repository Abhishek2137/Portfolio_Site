import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  compact?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className, glow = false, compact = false, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white/[0.05] backdrop-blur-[20px] border border-white/[0.08] rounded-[16px] transition-all duration-300',
        compact ? 'p-5' : 'p-8',
        glow && 'hover:border-orange/30 hover:shadow-[0_0_30px_rgba(255,138,61,0.08)]',
        !glow && 'hover:bg-white/[0.08] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
        className
      )}
      style={{ WebkitBackdropFilter: 'blur(20px)' }}
    >
      {children}
    </div>
  );
}

