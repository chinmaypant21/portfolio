import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import InterestsSection from "@/components/portfolio/InterestsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import MouseFollower from "@/components/MouseFollower";
import ParallaxBackground from "@/components/ParallaxBackground";
import { useLayoutEffect, useState } from "react";

const Index = () => {
    const [isDesktop, setIsDesktop] = useState(true);

  useLayoutEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <ParallaxBackground />
      {isDesktop && <MouseFollower />}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />

        {/* <InterestsSection /> */}

        <ProjectsSection />
        <ContactSection />
      
        {/* Footer */}
        {/* <footer className="py-8 bg-background border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Alex Johnson. Built with React, TypeScript & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default Index;
