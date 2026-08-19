import React, { useRef, useState } from 'react';
import { ZoomIn, Layers } from 'lucide-react';

function GlowingLogoCard({ logo, onClick }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
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
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -500, y: -500 });
      }}
      onClick={onClick}
      className="relative rounded-2xl p-[1.5px] overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 group shadow-2xl"
    >
      {/* Webflow Glowing Border Spotlight Effect (Tracks Mouse Position) */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0.4,
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.95), rgba(153, 0, 0, 0.5) 45%, rgba(60, 10, 15, 0.4) 80%)`
        }}
      />

      {/* Inner Card Body */}
      <div className="relative w-full h-full bg-[#0d0406]/95 rounded-2xl p-3 flex flex-col items-center justify-between z-10">
        {/* Webflow Mouse-Following Radial Surface Glow (Underneath Logo Image Frame) */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 0.4 : 0,
            background: `radial-gradient(260px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 30, 30, 0.6), transparent 70%)`
          }}
        />

        {/* Logo Image Frame Only with Webflow Cursor Glow Highlight */}
        <div className="relative z-10 w-full aspect-square flex items-center justify-center p-2.5 bg-white/95 rounded-xl shadow-xl group-hover:bg-white transition-all overflow-hidden border border-white/60">
          <img
            src={logo.src}
            alt={logo.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
          />

          {/* Radial Cursor Glow directly inside image frame */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.35 : 0,
              background: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 0, 0, 0.7), transparent 70%)`
            }}
          />
        </div>

        {/* Card Title & Subtitle */}
        <div className="relative z-10 w-full text-center pt-2 mt-2 border-t border-[#990000]/30">
          <h3 className="font-futuristic text-[11px] font-bold text-white group-hover:text-red-400 transition-colors uppercase truncate">
            {logo.name}
          </h3>
          <p className="font-body text-[9px] text-gray-400 mt-0.5 truncate">
            {logo.subtitle}
          </p>
        </div>

        {/* Inspect Hover Badge */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white font-futuristic text-[10px] uppercase rounded-2xl z-20 pointer-events-none">
          <ZoomIn className="w-4 h-4 text-red-500" />
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

      {/* Webflow Glowing Card Effect On Hover Grid Showcase */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 w-full my-auto">
        {logos.map((logo) => (
          <GlowingLogoCard
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
