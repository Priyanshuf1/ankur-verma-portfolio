import React, { useState, useRef } from 'react';

export default function TiltCard({ children, className = '', maxDegree = 12, scaleOnHover = 1.04, onClick }) {
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
  });
  const [glare, setGlare] = useState({ opacity: 0, x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    const xRotation = -((yPercent - 50) / 50) * maxDegree;
    const yRotation = ((xPercent - 50) / 50) * maxDegree;

    setStyle({
      transform: `perspective(1000px) rotateX(${xRotation.toFixed(2)}deg) rotateY(${yRotation.toFixed(2)}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`,
      transition: 'transform 0.1s ease-out'
    });

    setGlare({
      opacity: 0.3,
      x: xPercent,
      y: yPercent
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
    });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={style}
      className={`relative overflow-hidden cursor-pointer transform-gpu select-none ${className}`}
    >
      {children}
      {/* Dynamic Specular Light Glare */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-30"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 50, 50, 0.15) 40%, transparent 80%)`
        }}
      />
    </div>
  );
}
