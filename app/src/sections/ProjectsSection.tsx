import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { GlassCard } from '@/components/GlassCard';

const projects = [
  {
    title: 'Fraud Detection System',
    description:
      'Machine Learning-based fraud transaction detection system with interactive dashboard. Built classification models to identify fraudulent transactions with high accuracy. Features real-time prediction, accuracy metrics visualization, and explainable AI components.',
    image: '/fraud-detection.jpg',
    github: 'https://github.com/yourusername/fraud-detection-system',
    liveDemo: 'https://your-live-demo-url.com',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Live Weather Forecast Dashboard',
    description:
      'Real-time weather analytics dashboard built with Power BI. Integrates weather API data to provide interactive visualizations including temperature trends, precipitation forecasts, and geographic weather pattern analysis.',
    image: '/weather-dashboard.jpg',
    github: 'https://github.com/yourusername/weather-dashboard',
    liveDemo: 'https://your-live-demo-url.com',
    tags: ['Power BI', 'Data Visualization', 'API Integration'],
  },
  {
    title: 'Supermarket Sales Analysis',
    description:
      'Comprehensive sales trends analysis and KPI dashboard. Analyzed supermarket transaction data to uncover purchasing patterns, seasonal trends, and product performance insights driving strategic business decisions.',
    image: '/sales-analysis.jpg',
    github: 'https://github.com/yourusername/supermarket-sales-analysis',
    liveDemo: 'https://your-live-demo-url.com',
    tags: ['Power BI', 'Excel', 'Data Analytics'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="section-container py-[120px]">
      <div className="content-max-width">
        <SectionHeading label="PORTFOLIO" heading="FEATURED PROJECTS" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <GlassCard
                glow
                className="h-full flex flex-col p-0 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="font-inter font-semibold text-white tracking-[-0.02em] leading-[1.05]"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 28px)' }}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-3 text-white/60 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs bg-orange/10 text-orange px-3 py-1 rounded-full border border-orange/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-button flex items-center gap-2 text-xs"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-primary flex items-center gap-2 text-xs py-2 px-4"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
