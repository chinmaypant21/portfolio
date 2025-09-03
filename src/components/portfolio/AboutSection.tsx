import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate about creating digital experiences that matter
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                <p className="text-lg leading-relaxed text-foreground/90">
                  I'm a frontend engineer with over 5 years of experience building modern, 
                  responsive web applications. I specialize in React, TypeScript, and modern 
                  CSS frameworks, with a strong focus on performance and user experience.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  When I'm not coding, you'll find me exploring new design trends, 
                  contributing to open source projects, or sharing knowledge with the 
                  developer community through blogs and talks.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gradient">What I bring to the table:</h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>5+ years of frontend development experience</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Strong eye for design and user experience</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Performance optimization and accessibility focus</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Collaborative mindset and team leadership</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                <div className="relative">
                  <div className="card-gradient p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-smooth">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gradient">Quick Stats</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">50+</div>
                          <div className="text-sm text-muted-foreground">Projects Completed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-secondary">5+</div>
                          <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-accent">100%</div>
                          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">24/7</div>
                          <div className="text-sm text-muted-foreground">Learning Mode</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;