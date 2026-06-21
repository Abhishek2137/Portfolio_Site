import { motion } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Cpu,
  Mail,
} from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/hooks/useLenis';
import { useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function NavigationBar() {
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id: string) => {
    const target = id === 'hero' ? '#hero' : `#${id}`;
    scrollToSection(target);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className="flex items-center gap-2 bg-white/[0.03] backdrop-blur-[24px] border border-white/[0.06] rounded-pill px-3 py-2"
          style={{ WebkitBackdropFilter: 'blur(24px)' }}
        >
          {navItems.map((item, i) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1 + i * 0.08,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                onClick={() => handleClick(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-orange text-[#0A0A0A] font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <Icon size={16} />
                <span className="hidden lg:inline">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-12 h-12 flex items-center justify-center bg-orange text-[#0A0A0A] rounded-full shadow-lg"
        >
          {mobileOpen ? (
            <span className="text-lg font-bold">&times;</span>
          ) : (
            <span className="text-lg">&#9776;</span>
          )}
        </button>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 flex flex-col gap-2 bg-white/[0.05] backdrop-blur-[24px] border border-white/[0.08] rounded-2xl p-3 min-w-[180px]"
            style={{ WebkitBackdropFilter: 'blur(24px)' }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-orange text-[#0A0A0A] font-semibold'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </div>
    </>
  );
}
