import { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>

      {/* Trailing cursor */}
      <div
        className="fixed pointer-events-none z-40 mix-blend-difference"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transition: 'all 0.3s ease-out',
        }}
      >
        <div
          className={`w-10 h-10 border border-white/30 rounded-full transition-all duration-300 ${
            isHovering ? 'scale-200 border-white/50' : 'scale-100'
          }`}
        />
      </div>
    </>
  );
};

export default MouseFollower;