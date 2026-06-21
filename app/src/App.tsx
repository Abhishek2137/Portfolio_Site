import { useLenisInit } from '@/hooks/useLenis';
import { CustomCursor } from '@/components/CustomCursor';
import { NavigationBar } from '@/components/NavigationBar';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { TechStackSection } from '@/sections/TechStackSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { CertificationsSection } from '@/sections/CertificationsSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';

function App() {
  useLenisInit();

  return (
    <div className="relative min-h-screen bg-dark text-white font-inter">
      <CustomCursor />
      <NavigationBar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
