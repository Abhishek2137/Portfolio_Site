import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { GlassCard } from '@/components/GlassCard';

const certifications = [
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    image: '/certificates/Data_Analytics_Essentials.png',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: '2024',
    image: '/certificates/Google_Data_Analytics-1.png',
  },
  {
    title: 'Google Cloud Computing Foundation',
    issuer: 'Google Cloud',
    date: '2023',
    image: '/certificates/Google Cloud Foundation And Generative AI.png',
  },
  {
    title: 'NPTEL Deep Learning by IIT Ropar',
    issuer: 'NPTEL IIT Ropar',
    date: '2025',
    image: '/certificates/NPTL Deep Learning.png',
  },
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Google',
    date: '2024',
    image: '/certificates/Cybersecurity Foundation.png',
  },
  {
    title: 'SQL: Basics to Advanced',
    issuer: 'HackerRank',
    date: '2023',
    image: '/certificates/SQL-1.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function CertificationsSection() {
  return (
    <section className="section-container py-[120px]">
      <div className="content-max-width">
        <SectionHeading label="CREDENTIALS" heading="CERTIFICATIONS" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className={
                index === certifications.length - 1 && certifications.length % 3 === 2
                  ? 'md:col-span-2 lg:col-span-1'
                  : ''
              }
            >
              <GlassCard 
                glow 
                className="h-full cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => window.open(cert.image, '_blank')}
              >
                <div className="relative mb-4 overflow-hidden rounded-lg h-40">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Award
                  size={20}
                  className="text-orange/50 mb-4"
                />
                <h3 className="font-inter font-semibold text-white text-base leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-2 text-orange text-[13px]">{cert.issuer}</p>
                <p className="mt-1 text-white/35 text-[13px]">{cert.date}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
