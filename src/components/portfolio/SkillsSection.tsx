import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React/Next.js", experience: "3+ years", category: "Frontend", proficiency: "Expert" },
  { name: "TypeScript", experience: "3+ years", category: "Frontend", proficiency: "Expert" },
  { name: "JavaScript (ES6+)", experience: "3+ years", category: "Frontend", proficiency: "Expert" },
  { name: "Vue.js", experience: "1+ years", category: "Frontend", proficiency: "Intermediate" },
  { name: "HTML/CSS", experience: "3+ years", category: "Frontend", proficiency: "Expert" },
  { name: "Performance Optimization", experience: "2+ years", category: "Optimization", proficiency: "Advanced" },
  { name: "Node.js", experience: "2+ years", category: "Backend", proficiency: "Intermediate" },
  { name: "Express.js", experience: "2+ years", category: "Backend", proficiency: "Intermediate" },
  { name: "REST APIs", experience: "2+ years", category: "Backend", proficiency: "Advanced" },
  { name: "Web Security", experience: "2+ years", category: "Security", proficiency: "Advanced" },
  { name: "Git/GitHub", experience: "4+ years", category: "Version Control", proficiency: "Expert" },
];

const technicalStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Vue.js",
  "HTML5",
  "CSS3 / SASS",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Web Security",

]

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delays
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, index]);
            }, index * 100);
          });
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
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Skills & <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`card-gradient p-6 rounded-xl shadow-card hover:shadow-card-hover transition-smooth hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-foreground">{skill.name}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs text-primary font-medium">{skill.category}</div>
                        <div className="text-xs text-muted-foreground">{skill.experience}</div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${
                              animatedSkills.includes(index) && dotIndex < (skill.proficiency === 'Expert' ? 5 : skill.proficiency === 'Advanced' ? 4 : 3)
                                ? 'bg-primary scale-110' 
                                : 'bg-muted scale-90'
                            }`}
                            style={{ 
                              transitionDelay: `${index * 100 + dotIndex * 50}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Technical Stack */}
            <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <div className="text-center space-y-8">
                <h3 className="text-2xl font-bold text-gradient">Technical Stack</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {technicalStack.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-card hover:bg-card-hover rounded-lg text-sm font-medium transition-smooth hover:scale-105 border border-border"
                      style={{ animationDelay: `${900 + index * 50}ms` }}
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
    </section>
  );
};

export default SkillsSection;