import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { GlassCard } from '@/components/GlassCard';

const stats = [
  { number: '7.63', label: 'CGPA' },
  { number: '15+', label: 'Technical Skills' },
  { number: '6+', label: 'Certifications' },
  { number: '4+', label: 'Major Projects' },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="section-container py-[120px]">
      <div className="content-max-width">
        <SectionHeading label="ABOUT" heading="ABOUT ME" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-white/60 text-base leading-[1.7]">
              AI & Data Science student with experience in Python, SQL, Power
              BI, Tableau, Machine Learning, Data Analytics, and Computer
              Vision. Passionate about building intelligent systems and solving
              real-world business problems through data.
            </p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="mt-5 text-white/60 text-base leading-[1.7]"
            >
              With a strong foundation in both theoretical concepts and
              practical implementation, I specialize in transforming raw data
              into actionable insights. My work spans from exploratory data
              analysis and predictive modeling to deploying AI-powered solutions
              that drive business value. I believe in the power of data to tell
              stories and make decisions that matter.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="mt-6 text-orange font-medium text-base"
            >
              Currently seeking opportunities in AI Engineering, Data Science,
              and Data Analytics roles where I can contribute to innovative
              projects and continue growing as a technologist.
            </motion.p>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={cardVariants}>
                <GlassCard glow className="text-center">
                  <div
                    className="font-inter font-bold text-orange tracking-[-0.025em]"
                    style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
                  >
                    {stat.number}
                  </div>
                  <div className="label-text mt-2">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
