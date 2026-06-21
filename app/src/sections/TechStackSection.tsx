import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Coffee,
  FileCode,
  BarChart3,
  Grid3X3,
  Brain,
  TrendingUp,
  Waves,
  Cpu,
  Network,
  Eye,
  Sparkles,
  PieChart,
  BarChart2,
  Sheet,
  Atom,
  Server,
  Github,
  Figma,
  Box,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillIconCard } from '@/components/SkillIconCard';

const categories = [
  {
    label: 'PROGRAMMING',
    skills: [
      { name: 'Python', icon: Code2 },
      { name: 'SQL', icon: Database },
      { name: 'Java', icon: Coffee },
      { name: 'JavaScript', icon: FileCode },
    ],
  },
  {
    label: 'DATA SCIENCE',
    skills: [
      { name: 'Pandas', icon: BarChart3 },
      { name: 'NumPy', icon: Grid3X3 },
      { name: 'Scikit-Learn', icon: Brain },
      { name: 'Matplotlib', icon: TrendingUp },
      { name: 'Seaborn', icon: Waves },
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      { name: 'Machine Learning', icon: Cpu },
      { name: 'Deep Learning', icon: Network },
      { name: 'Computer Vision', icon: Eye },
      { name: 'Generative AI', icon: Sparkles },
    ],
  },
  {
    label: 'VISUALIZATION',
    skills: [
      { name: 'Power BI', icon: PieChart },
      { name: 'Tableau', icon: BarChart2 },
      { name: 'Excel', icon: Sheet },
    ],
  },
  {
    label: 'DEVELOPMENT',
    skills: [
      { name: 'React.js', icon: Atom },
      { name: 'Node.js', icon: Server },
      { name: 'MongoDB', icon: Database },
    ],
  },
  {
    label: 'TOOLS',
    skills: [
      { name: 'VS Code', icon: Code2 },
      { name: 'GitHub', icon: Github },
      { name: 'Figma', icon: Figma },
      { name: 'Blender', icon: Box },
    ],
  },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export function TechStackSection() {
  return (
    <section id="skills" className="section-container py-[120px]">
      <div className="content-max-width">
        <SectionHeading label="EXPERTISE" heading="TECH STACK" />

        <div className="mt-16 flex flex-col gap-12">
          {categories.map((category, catIndex) => (
            <div key={category.label}>
              <motion.h3
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: catIndex * 0.1 }}
                className="label-text mb-4"
              >
                {category.label}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIconCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    index={catIndex * 5 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
