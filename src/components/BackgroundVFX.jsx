import React from 'react';

export default function BackgroundVFX() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0c0103]">
      {/* 1. Base Rich Damask Wine Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#220206] via-[#140104] to-[#0a0002]" />

      {/* 2. Hand-Crafted Structural Architectural Grid (Agency Precision) */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      {/* 3. Soft Hand-Positioned Ruby Spotlights (Subtle & Elegant, 0% Noise) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#990000]/18 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[800px] h-[400px] bg-[#660000]/15 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />

      {/* 4. Luxury Vignette Edge Mask */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5, 0, 1, 0.85) 100%)'
        }}
      />
    </div>
  );
}
