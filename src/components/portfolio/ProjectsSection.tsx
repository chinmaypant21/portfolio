import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const projects: any = [
  {
    title: "macOS-Style Web Application",
    description:
      "A web application mimicking the macOS interface, built with performance-first design principles. Achieved a 98% Lighthouse performance score, optimizing load times and user experience.",
    image: "/projects/macos.png",
    technologies: ["React", "Preact", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://mac.chinz.me",
    // githubUrl: "https://github.com/example/macos-webapp",
    featured: true,
  },
  {
    title: "NFT Marketplace for Musicians (Web3)",
    description:
      "An NFT marketplace concept enabling music artists to tokenize tracks, manage copyright, and distribute royalties using smart contracts. Included SRS documentation, use cases, and risk mitigation planning.",
    technologies: ["Web3", "Smart Contracts", "Software Design"],
    featured: false,
  },
];

const ProjectsSection = () => {
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
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                My <span className="text-gradient">Initial Days</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Side Projects That Shaped My College Journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group card-gradient rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth hover:scale-[1.02] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {
                      project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        />
                      ) : (
                      <Eye className="w-16 h-16 text-primary/50" />)
                    }
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="flex space-x-2">
                        {
                          project.liveUrl &&
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        }

                        {
                          project.githubUrl &&
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        }
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gradient group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-foreground/90 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-2">
                      {
                        project.liveUrl &&
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-sm text-primary hover:text-primary-dark transition-smooth"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Live</span>
                        </a>
                      }

                      {
                        project.githubUrl &&
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      }

                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to={'https://github.com/chinmaypant21'} target="blank">
                  <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View More on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;