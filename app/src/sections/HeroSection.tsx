import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Download,
} from 'lucide-react';

function CustomLinkedinIcon({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    </svg>
  );
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const nameVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const cvDownloadUrl = 'https://drive.google.com/file/d/10pHWvKNw-f5AUEXLurDPbpGjjvRdoJjc/view?usp=sharing';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = e.clientX * 0.02;
      const y = e.clientY * 0.02;
      glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    let ticking = false;
    const onMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleMouseMove(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden py-12"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 75% 25%, rgba(255, 138, 61, 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 50% 80%, rgba(255, 138, 61, 0.03) 0%, transparent 50%), #0A0A0A',
      }}
    >
      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[1480px] p-6 sm:p-8 lg:p-10 glass-container flex flex-col"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center px-6 md:px-8 pt-5 md:pt-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-status-green shadow-[0_0_8px_rgba(74,222,128,0.4)] animate-status-pulse" />
            <span className="text-[13px] text-white/60">Open To Work</span>
          </motion.div>

          {/* Download CV Button */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="pill-primary text-sm inline-flex items-center justify-center"
            href={cvDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Download CV</span>
          </motion.a>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex items-center px-0 sm:px-4 md:px-8 lg:px-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1"
            >
              {/* Role Label */}
              <motion.p
                variants={itemVariants}
                className="text-orange font-medium text-lg md:text-xl tracking-[-0.01em]"
              >
                AI & Data Science Engineer
              </motion.p>

              {/* Name Heading */}
              <motion.h1
                variants={nameVariants}
                className="mt-3 font-inter font-extrabold text-white leading-[0.92] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
              >
                <span className="block">ABHISHEK</span>
                <motion.span
                  variants={nameVariants}
                  className="block"
                >
                  RAUT
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mt-6 text-white/60 text-base leading-relaxed max-w-[480px]"
              >
                Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science
                <br />
                G.S. Mandal's Maharashtra Institute of Technology, Chhatrapati Sambhajinagar
                <span className="block mt-1">2022 - 2026</span>
              </motion.p>

              {/* Contact Info Grid */}
              <motion.div
                variants={itemVariants}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[500px]"
              >
                <ContactRow icon={Mail} text="rautabhishek919@gmail.com" href="mailto:rautabhishek919@gmail.com" />
                <ContactRow icon={CustomLinkedinIcon} text="Linkedin" href="https://www.linkedin.com/in/abhishek-raut-a681a7258?utm_source=share_via&utm_content=profile&utm_medium=member_android" />
                <ContactRow icon={MapPin} text="Maharashtra, India" />
                <ContactRow icon={Phone} text="+91 8080967909" href="tel:+918080967909" />
              </motion.div>
            </motion.div>

            {/* Right Column - Portrait with Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: [0.45, 0.05, 0.55, 0.95] }}
              className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end"
            >
              {/* Orange Glow */}
              <div
                ref={glowRef}
                className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full animate-glow-pulse pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,138,61,0.45) 0%, rgba(255,138,61,0.16) 35%, transparent 70%)',
                  filter: 'blur(36px)',
                  top: '15%',
                  right: '0%',
                  transition: 'transform 0.1s ease-out',
                }}
              />

            <div className="relative z-10 flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
              </div>

              <img
                src="/hero-portrait.png"
                alt="Abhishek Raut"
                className="relative z-10 h-[420px] md:h-[520px] w-auto object-contain"
              />
            </div>
          </motion.div>
          </div>
        </div>

        {/* Bottom Navigation placeholder - the real NavigationBar is fixed */}
        <div className="h-30 md:h-24" />
      </motion.div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  text,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  text: string;
  href?: string;
}) {
  const containerClass = `flex items-center gap-2.5 group ${href ? 'cursor-pointer' : 'cursor-default'}`;

  return (
    <div className={containerClass}>
      <Icon
        size={24}
        className="w-5 h-5 text-white/35 group-hover:text-orange transition-colors duration-200"
      />
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-white/60 group-hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
        >
          {text}
        </a>
      ) : (
        <span className="text-[13px] text-white/60 group-hover:text-white transition-colors duration-200">
          {text}
        </span>
      )}
    </div>
  );
}
