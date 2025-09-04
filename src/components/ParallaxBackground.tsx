import { useEffect, useRef } from "react";

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position (-1 to 1)
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const update = () => {
      const container = containerRef.current;
      if (container) {
        const orbs = container.querySelectorAll<HTMLElement>("[data-parallax]");
        orbs.forEach((orb) => {
          const depthX = parseFloat(orb.dataset.depthx || "0");
          const depthY = parseFloat(orb.dataset.depthy || "0");

          orb.style.transform = `translate3d(
            ${mousePos.current.x * depthX * 30}px, 
            ${mousePos.current.y * depthY * 30 - scrollY.current * depthY * 0.2}px, 
            0
          )`;
        });
      }

      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Gradient orbs */}
      <div
        data-parallax
        data-depthx="0.5"
        data-depthy="0.3"
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl left-[10%] top-[20%]"
      />
      <div
        data-parallax
        data-depthx="-0.3"
        data-depthy="0.2"
        className="absolute w-80 h-80 bg-secondary/5 rounded-full blur-3xl right-[10%] top-[60%]"
      />
      <div
        data-parallax
        data-depthx="0.2"
        data-depthy="0.4"
        className="absolute w-64 h-64 bg-accent/5 rounded-full blur-3xl left-[50%] top-[80%]"
      />

      {/* Floating grid */}
      <div
        data-parallax
        data-depthx="0.05"
        data-depthy="0.05"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default ParallaxBackground;