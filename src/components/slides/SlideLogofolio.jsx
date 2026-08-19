import React from 'react';
import { ZoomIn, Layers } from 'lucide-react';
import TiltCard from '../TiltCard';

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

      {/* Logo Grid Showcase with 3D Tilt */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 w-full my-auto">
        {logos.map((logo) => (
          <TiltCard
            key={logo.id}
            maxDegree={12}
            scaleOnHover={1.05}
            onClick={() => onOpenModal(logo.src, logo.name)}
            className="group bg-[#0d0406]/95 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(255,26,26,0.6)] transition-all p-3 flex flex-col items-center justify-between border border-[#990000]/60 hover:border-red-500 cursor-pointer"
          >
            <div className="w-full aspect-square flex items-center justify-center p-2 bg-white/95 rounded-xl">
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-300"
              />
            </div>

            <div className="w-full text-center pt-2 mt-2 border-t border-[#990000]/30">
              <h3 className="font-futuristic text-[11px] font-bold text-white group-hover:text-red-400 transition-colors uppercase truncate">
                {logo.name}
              </h3>
              <p className="font-body text-[9px] text-gray-400 mt-0.5 truncate">
                {logo.subtitle}
              </p>
            </div>

            {/* Hover Zoom Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white font-futuristic text-[10px] uppercase rounded-2xl">
              <ZoomIn className="w-4 h-4 text-red-500" />
              <span>Inspect Logo</span>
            </div>
          </TiltCard>
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
