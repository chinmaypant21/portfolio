import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading frontend development for a suite of B2B applications serving 50k+ users. Architected and implemented a design system that reduced development time by 40%.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"],
    achievements: [
      "Improved application performance by 60% through code splitting and optimization",
      "Mentored 3 junior developers and established frontend best practices",
      "Led migration from legacy codebase to modern React architecture"
    ]
  },
  {
    title: "Frontend Engineer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    location: "Remote",
    description: "Built responsive web applications for fintech startup, focusing on user experience and performance. Collaborated closely with design and backend teams.",
    technologies: ["React", "JavaScript", "SCSS", "REST APIs", "Jest"],
    achievements: [
      "Developed mobile-first responsive designs with 99% cross-browser compatibility",
      "Implemented automated testing reducing bugs by 50%",
      "Created reusable component library used across 5 products"
    ]
  },
  {
    title: "Junior Frontend Developer",
    company: "Digital Agency Pro",
    period: "2019 - 2020",
    location: "New York, NY",
    description: "Developed custom websites and web applications for various clients across different industries. Gained experience in multiple frameworks and tools.",
    technologies: ["HTML/CSS", "JavaScript", "WordPress", "PHP", "jQuery"],
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Increased website performance scores by average of 35%",
      "Learned and adapted to various client requirements and technologies"
    ]
  }
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Work <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My journey building exceptional digital experiences
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block" />
                    
                    <div className="md:ml-20">
                      <div className="card-gradient p-8 rounded-xl shadow-card hover:shadow-card-hover transition-smooth">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <h3 className="text-2xl font-bold text-gradient">{exp.title}</h3>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-foreground">
                              <span className="text-lg font-semibold">{exp.company}</span>
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-foreground/90 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex} className="flex items-start space-x-2 text-sm text-foreground/90">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-secondary mb-2">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-muted rounded-md text-xs font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;