import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering an interactive element
      const target = e.target;
      const isInteractive = target.closest('button, a, input, [role="button"], .cursor-pointer, group');
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Glowing Ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-red-500/90 transition-transform duration-150 ease-out hidden sm:block shadow-[0_0_25px_rgba(255,26,26,0.9)]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.8 : 1})`,
          backgroundColor: isHovered ? 'rgba(239, 68, 68, 0.15)' : 'transparent',
          borderColor: isHovered ? '#ff4d4d' : 'rgba(239, 68, 68, 0.85)'
        }}
      />

      {/* Inner Solid Red Center Dot */}
      <div
        className="fixed top-0 left-0 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 hidden sm:block shadow-[0_0_10px_#ff1a1a]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
      />
    </>
  );
}
