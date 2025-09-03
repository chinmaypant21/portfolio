import { useEffect, useRef, useState } from "react";

const MouseFollower = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const trailCursorRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => setIsHovering(false);

    // Animation loop
    const animate = () => {
      // Main cursor → snaps directly
      if (mainCursorRef.current) {
        mainCursorRef.current.style.transform = `translate3d(${mouseX - 10}px, ${
          mouseY - 10
        }px, 0)`;
      }

      // Trail cursor → lerps (smooth follow)
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      if (trailCursorRef.current) {
        trailCursorRef.current.style.transform = `translate3d(${trailX - 20}px, ${
          trailY - 20
        }px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={mainCursorRef}
        className="fixed pointer-events-none z-50 mix-blend-difference"
      >
        <div
          className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
            isHovering ? "scale-150" : "scale-100"
          }`}
        />
      </div>

      {/* Trailing cursor */}
      <div
        ref={trailCursorRef}
        className="fixed pointer-events-none z-40 mix-blend-difference"
      >
        <div
          className={`w-10 h-10 border border-white/30 rounded-full transition-all duration-300 ${
            isHovering ? "scale-200 border-white/50" : "scale-100"
          }`}
        />
      </div>
    </>
  );
};

export default MouseFollower;