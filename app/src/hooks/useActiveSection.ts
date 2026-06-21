import { useEffect, useState } from 'react';

const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry = entries[0];
        for (const entry of entries) {
          if (entry.intersectionRatio > bestEntry.intersectionRatio) {
            bestEntry = entry;
          }
        }
        if (bestEntry && bestEntry.isIntersecting) {
          setActiveSection(bestEntry.target.id);
        }
      },
      {
        rootMargin: '-10% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
