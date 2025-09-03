import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, MapPin, Phone, Code2 } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/chinmaypant21",
    description: "Check out my projects and contributions"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/chinmaypant/",
    description: "Connect with me professionally"
  },
  {
    name: "Stack Overflow",
    icon: Code2,
    url: "https://stackoverflow.com/users/15276488/chinz",
    description: "Check out my contributions and answers"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:chinmaypant21@gmail.com",
    description: "Send me a message directly"
  }
];

const ContactSection = () => {
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
    <section id="contact" ref={sectionRef} className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your next project or just say hello
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gradient">Let's Connect</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    I'm always interested in new opportunities, whether that's a full-time role, 
                    freelance project, or just a chat about technology and development.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">San Francisco, CA</div>
                      <div className="text-sm text-muted-foreground">Available for remote work</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">chinmaypant21@gmail.com</div>
                      <div className="text-sm text-muted-foreground">Drop me a line anytime</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">Available on request</div>
                      <div className="text-sm text-muted-foreground">For serious inquiries</div>
                    </div>
                  </div>
                </div>

                {/* <div className="pt-4">
                  <Button size="lg" className="primary-gradient hover:scale-105 transition-transform" asChild>
                    <a href="mailto:alex@example.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div> */}
              </div>

              {/* Social Links */}
              <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                <h3 className="text-2xl font-bold text-gradient">Find Me Online</h3>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Card
                        key={social.name}
                        className="p-4 card-gradient hover:shadow-card-hover transition-smooth hover:scale-105 border-border/50"
                        style={{ animationDelay: `${500 + index * 100}ms` }}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 group"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                            <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium group-hover:text-primary transition-smooth">
                              {social.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {social.description}
                            </div>
                          </div>
                        </a>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className={`text-center pt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <div className="card-gradient p-8 rounded-2xl shadow-card">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gradient">Ready to work together?</h3>
                  <p className="text-foreground/90 max-w-2xl mx-auto">
                    I'm currently available for new projects and opportunities. 
                    Let's create something amazing together!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" className="primary-gradient hover:scale-105 transition-transform" asChild>
                      <a href="mailto:chinmaypant21@gmail.com">
                        Start a Project
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <span>
                      {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
                        Download Resume
                      {/* </a> */}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;