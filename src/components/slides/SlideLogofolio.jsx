import React, { useRef, useState } from 'react';
import { ZoomIn, Layers } from 'lucide-react';

function WebflowGlowingCard({ logo, onClick }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="relative rounded-2xl p-[2px] overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-108 group shadow-2xl bg-[#140508]"
    >
      {/* Webflow Glowing Border Spotlight Layer (Tracks Cursor Position) */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0.25,
          background: isHovered
            ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 30, 30, 1), rgba(239, 68, 68, 0.6) 40%, rgba(120, 0, 0, 0.2) 80%)`
            : 'rgba(150, 0, 0, 0.3)'
        }}
      />

      {/* Inner Dark Card Body */}
      <div className="relative w-full h-full bg-[#0a0204] rounded-2xl p-3 flex flex-col items-center justify-between z-10 overflow-hidden">
        {/* Webflow Radial Surface Glow (Directly Under Image) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 0.75 : 0,
            background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 20, 20, 0.45), rgba(180, 0, 0, 0.15) 50%, transparent 80%)`
          }}
        />

        {/* Logo Image Frame - Dark Glassmorphism with Glowing Backdrop */}
        <div className="relative z-10 w-full aspect-square flex items-center justify-center p-2.5 bg-black/80 rounded-xl shadow-inner border border-red-900/40 group-hover:border-red-500/80 transition-all overflow-hidden">
          {/* Inner Image Radial Highlight */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.8 : 0,
              background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 40, 40, 0.6), transparent 75%)`
            }}
          />

          <img
            src={logo.src}
            alt={logo.name}
            className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(255,0,0,0.5)]"
          />
        </div>

        {/* Title & Subtitle */}
        <div className="relative z-10 w-full text-center pt-2 mt-2 border-t border-[#990000]/40">
          <h3 className="font-futuristic text-[11px] font-bold text-white group-hover:text-red-400 transition-colors uppercase truncate">
            {logo.name}
          </h3>
          <p className="font-body text-[9px] text-gray-400 mt-0.5 truncate">
            {logo.subtitle}
          </p>
        </div>

        {/* Zoom Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white font-futuristic text-[10px] uppercase rounded-2xl z-30 pointer-events-none">
          <ZoomIn className="w-5 h-5 text-red-500 animate-pulse" />
          <span>Inspect Logo</span>
        </div>
      </div>
    </div>
  );
}

export default function SlideLogofolio({ onOpenModal }) {
  const logos = [
    {
      id: 1,
      name: 'Book Your Digital Story',
      subtitle: 'PD Monogram Brand Identity',
      src: '/assets/logo_new_enhanced_1.png'
    },
    {
      id: 2,
      name: 'B Luxury Salon',
      subtitle: 'BL Monogram Luxury Identity',
      src: '/assets/logo_new_enhanced_2.png'
    },
    {
      id: 3,
      name: 'CS / EC Monogram',
      subtitle: 'Modern Minimal Monogram',
      src: '/assets/logo_new_enhanced_3.png'
    },
    {
      id: 4,
      name: 'Tabs 19 Studio',
      subtitle: 'TC Unisex Salon Identity',
      src: '/assets/logo_new_enhanced_4.png'
    },
    {
      id: 5,
      name: 'GlowX Skincare',
      subtitle: 'D2C Skincare Brand Identity',
      src: '/assets/logo_new_enhanced_5.png'
    },
    {
      id: 6,
      name: 'Spicy Affair Catering',
      subtitle: 'Gourmet Hospitality Identity',
      src: '/assets/logo_new_enhanced_6.png'
    },
    {
      id: 7,
      name: 'HomeArchs Construction',
      subtitle: 'Architectural Construction Logo',
      src: '/assets/logo_new_enhanced_7.png'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-4 py-3 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center shrink-0 mt-1 mb-2">
        <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-1 drop-shadow-md">
          LOGOFOILO
        </h2>
        <p className="font-body text-gray-300 text-xs sm:text-base max-w-3xl mx-auto font-medium">
          A curated showcase of distinctive logos crafted to create memorable and impactful brand identities.
        </p>
      </div>

      {/* Webflow Glowing Card Effect Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 w-full my-auto">
        {logos.map((logo) => (
          <WebflowGlowingCard
            key={logo.id}
            logo={logo}
            onClick={() => onOpenModal(logo.src, logo.name)}
          />
        ))}
      </div>

      {/* Subtitle Footer */}
      <div className="mt-2 text-center max-w-xl mx-auto border-t border-[#990000]/30 pt-2 shrink-0">
        <h3 className="font-futuristic text-base sm:text-lg text-red-500 font-bold mb-0.5 flex items-center justify-center gap-2 uppercase tracking-wide">
          <Layers className="w-4 h-4" /> Brand Identity &amp; Logo Design
        </h3>
        <p className="font-body text-xs text-gray-300">
          Distinctive logo concepts created to elevate brand identity across digital, salon, and studio spaces.
        </p>
      </div>
    </div>
  );
}
