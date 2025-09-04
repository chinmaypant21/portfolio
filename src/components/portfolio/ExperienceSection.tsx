import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer - Frontend",
    company: "Gamezop",
    period: "Aug 2024 – Present",
    location: "Remote",
    description: "Building scalable frontend systems and developer tooling across high-traffic consumer products",
    technologies: ["Next.js", "Javscript", "TypeScript", "Payload CMS", "Cypress", "SEO"],
    achievements: [
      "Spearheaded the development of a custom UI-library npm package in Next.js & TypeScript, enabling seamless serialization of Payload CMS rich text into dynamic UI components",
      "Worked on a modular Analytics SDK in Next.js & TypeScript to standardize events and impressions tracking across 5+ products, capturing 50M+ monthly events with consistent pipelines",
      "Optimized SEO performance through structured metadata, improved content delivery, and schema integration, resulting in a 35% increase in organic traffic",
      "Increased user retention by 15% by optimizing Core Web Vitals (LCP, CLS, FID), resulting in a 25% rise in Lighthouse scores"
    ]
  },
  {
    title: "SDE I",
    company: "GrowAgro",
    period: "May 2023 – Jul 2024",
    location: "Gurgaon, India",
    description: "Owned core frontend and infrastructure initiatives, improving performance, scalability and developer experience",
    technologies: ["React", "Vue.js", "TypeScript", "Node.js", "Ghost CMS", "AWS", "Auth0"],
    achievements: [
      "Developed the company’s main website in Vue.js, delivering a responsive, performant, and SEO-friendly experience",
      "Launched a scalable in-house dashboard in React.js & TypeScript for real-time monitoring of employee and analytics data, improving operational insights and decision-making",
      "Designed and managed AWS infrastructure, reducing hosting costs by 30% while increasing reliability and performance",
      "Automated deployments with AWS + Docker-based CI/CD pipelines, streamlining release cycles and improving developer productivity",
      "Built and integrated REST APIs for real-time data exchange between dashboards and backend services"
    ]
  },
  {
    title: "Program Engineer",
    company: "Permissionless",
    period: "Sep 2022 – Feb 2023",
    location: "Remote",
    description: "Contributed to decentralized platforms and internal tools within a Web3-focused environment",
    technologies: ["React", "TypeScript", "AWS", "CI/CD", "Web3"],
    achievements: [
      "Deployed and hosted applications like Zulip, Workland (Metaverse), and Coder (IDE)",
      "Worked on the development of the Dsync Web App UI, improving usability and feature discoverability, which led to a measurable increase in user engagement",
      "Managed AWS deployments (EC2/ECS, S3) and set up CI/CD pipelines to ensure high reliability of services"
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
    <section id="experience" ref={sectionRef} className="py-20">
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