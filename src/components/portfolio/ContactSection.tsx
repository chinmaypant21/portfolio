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
    description: "Check out my contributions"
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

            <div className="">
              {/* Social Links */}
              <div
                className={`space-y-6 text-center md:text-left ${isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
              >
                <div
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Card
                        key={social.name}
                        className={`flex items-center p-5 rounded-xl card-gradient hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-out cursor-pointer relative overflow-hidden]`}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group"
                        >
                          <div
                            className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                          >
                            <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="font-semibold group-hover:text-primary transition-colors text-lg">
                              {social.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {social.description}
                            </div>
                          </div>
                        </a>

                        {/* subtle animated gradient highlight */}
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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