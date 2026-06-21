import { motion } from 'framer-motion';
import {
  Sparkles,
  Search,
  LayoutDashboard,
  BrainCircuit,
  Lightbulb,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { GlassCard } from '@/components/GlassCard';

const responsibilities = [
  { icon: Sparkles, text: 'Data Cleaning & Preprocessing' },
  { icon: Search, text: 'Exploratory Data Analysis' },
  { icon: LayoutDashboard, text: 'Dashboard Development' },
  { icon: BrainCircuit, text: 'Machine Learning Model Building' },
  { icon: Lightbulb, text: 'Business Insights & Reporting' },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container py-[120px]">
      <div className="content-max-width">
        <SectionHeading label="CAREER" heading="EXPERIENCE" />

        <div className="mt-16 relative">
          {/* Timeline Line - Desktop */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] origin-top"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(255,138,61,0.3), transparent)',
            }}
          />

          {/* Timeline Line - Mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] origin-top"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(255,138,61,0.3), transparent)',
            }}
          />

          {/* Timeline Entry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            {/* Role Info - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:text-right pl-12 md:pl-0 md:pr-12"
            >
              <h3
                className="font-inter font-semibold text-white tracking-[-0.02em]"
                style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
              >
                Data Science Intern
              </h3>
              <p className="mt-1 text-orange text-base">Main Flow Pvt. Ltd.</p>
              <p className="mt-2 text-[13px] text-white/35"> Jan 2026 — May 2026</p>
            </motion.div>

            {/* Timeline Dot - Desktop */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-orange border-[3px] border-[#0A0A0A] shadow-[0_0_16px_rgba(255,138,61,0.4)] z-10"
            />

            {/* Timeline Dot - Mobile */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="md:hidden absolute left-6 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-orange border-[3px] border-[#0A0A0A] shadow-[0_0_16px_rgba(255,138,61,0.4)] z-10"
            />

            {/* Responsibility Cards - Right */}
            <div className="flex flex-col gap-3 pl-12 md:pl-12">
              {responsibilities.map((resp, index) => {
                const Icon = resp.icon;
                return (
                  <motion.div
                    key={resp.text}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <GlassCard compact className="flex items-center gap-3">
                      <Icon
                        size={16}
                        className="text-orange flex-shrink-0"
                      />
                      <span className="text-white/60 text-sm">
                        {resp.text}
                      </span>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
