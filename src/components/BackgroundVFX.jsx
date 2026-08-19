import React from 'react';

export default function BackgroundVFX() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0506]">
      {/* Exact Fleety Webflow Background Asset */}
      <img
        src="/assets/BackgroundFleety.webp"
        alt="Fleety Background"
        className="w-full h-full object-cover opacity-90 scale-105 select-none pointer-events-none"
      />

      {/* Signature Red/Crimson Ambient Spotlight Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#990000]/20 via-transparent to-transparent pointer-events-none" />

      {/* Smooth Outer Vignette Mask */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5, 2, 3, 0.75) 100%)'
        }}
      />
    </div>
  );
}
