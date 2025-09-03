import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Camera, 
  Mountain, 
  Coffee, 
  BookOpen, 
  Music, 
  Palette, 
  Zap 
} from "lucide-react";

const interests = [
  {
    category: "Creative Pursuits",
    icon: Palette,
    items: [
      { name: "Photography", description: "Capturing moments and experimenting with light" },
      { name: "Digital Art", description: "Creating illustrations and design concepts" },
      { name: "Music Production", description: "Composing electronic music in my spare time" }
    ]
  },
  {
    category: "Tech & Learning",
    icon: Zap,
    items: [
      { name: "Open Source", description: "Contributing to community projects and tools" },
      { name: "Tech Blogs", description: "Writing about development and sharing knowledge" },
      { name: "Hackathons", description: "Building innovative solutions under pressure" }
    ]
  },
  {
    category: "Outdoor & Fitness",
    icon: Mountain,
    items: [
      { name: "Hiking", description: "Exploring nature trails and mountain peaks" },
      { name: "Rock Climbing", description: "Indoor and outdoor climbing adventures" },
      { name: "Cycling", description: "Long rides through scenic routes" }
    ]
  },
  {
    category: "Hobbies",
    icon: Coffee,
    items: [
      { name: "Coffee Brewing", description: "Perfecting pour-over and espresso techniques" },
      { name: "Gaming", description: "Strategy games and indie titles" },
      { name: "Reading", description: "Sci-fi novels and tech industry books" }
    ]
  }
];

const InterestsSection = () => {
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
    <section id="interests" ref={sectionRef} className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Interests & <span className="text-gradient">Activities</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                What I'm passionate about beyond coding
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <Card
                    key={interest.category}
                    className={`p-6 card-gradient shadow-card hover:shadow-card-hover transition-smooth hover:scale-105 ${
                      isVisible ? 'animate-slide-in-left' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gradient">{interest.category}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {interest.items.map((item, itemIndex) => (
                          <div
                            key={item.name}
                            className="group p-3 rounded-lg hover:bg-background/50 transition-smooth"
                          >
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                              <Badge 
                                variant="secondary" 
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-smooth"
                              >
                                ✨
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Fun Stats */}
            <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <div className="text-center space-y-8">
                <h3 className="text-2xl font-bold text-gradient">Fun Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "GitHub Commits", value: "2,500+", icon: "📈" },
                    { label: "Coffee Cups", value: "∞", icon: "☕" },
                    { label: "Mountains Climbed", value: "12", icon: "🏔️" },
                    { label: "Books Read", value: "24/year", icon: "📚" }
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="card-gradient p-4 rounded-xl shadow-card hover:shadow-card-hover transition-smooth hover:scale-105"
                      style={{ animationDelay: `${900 + index * 100}ms` }}
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
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

export default InterestsSection;