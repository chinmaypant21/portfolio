import { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3 - scrollY * 0.1}px)`,
          transition: 'transform 0.3s ease-out',
          left: '10%',
          top: '20%',
        }}
      />
      <div
        className="absolute w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.2 - scrollY * 0.05}px)`,
          transition: 'transform 0.4s ease-out',
          right: '10%',
          top: '60%',
        }}
      />
      <div
        className="absolute w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.4 - scrollY * 0.15}px)`,
          transition: 'transform 0.2s ease-out',
          left: '50%',
          top: '80%',
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateY(${-scrollY * (0.1 + Math.random() * 0.3)}px)`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;