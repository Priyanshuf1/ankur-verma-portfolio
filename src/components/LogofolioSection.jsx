import React from 'react';
import { ZoomIn, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

export default function LogofolioSection({ onOpenModal }) {
  const logos = [
    {
      id: 1,
      name: 'Book Your Digital Story',
      subtitle: 'PD Monogram Brand Identity',
      src: '/assets/logo_book_your_digital_story.png'
    },
    {
      id: 2,
      name: 'B Luxury Salon',
      subtitle: 'BL Monogram Luxury Identity',
      src: '/assets/logo_b_luxury_salon.png'
    },
    {
      id: 3,
      name: 'CS / EC Monogram',
      subtitle: 'Modern Minimal Monogram',
      src: '/assets/logo_cs_ec_monogram.png'
    },
    {
      id: 4,
      name: 'Tabs 19 Studio',
      subtitle: 'TC Unisex Salon Identity',
      src: '/assets/logo_tabs19_studio.png'
    }
  ];

  return (
    <section id="logofolio" className="relative py-20 bg-damask border-t border-[#990000]/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header (Preserving LOGOFOILO spelling from original PDF) */}
        <div className="text-center mb-4">
          <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-3">
            LOGOFOILO
          </h2>
          <p className="font-body text-gray-300 text-sm sm:text-base max-w-3xl mx-auto">
            A curated showcase of distinctive logos crafted to create memorable and impactful brand identities.
          </p>
        </div>

        {/* Logos Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {logos.map((logo) => (
            <TiltCard
              key={logo.id}
              maxDegree={15}
              scaleOnHover={1.05}
              onClick={() => onOpenModal(logo.src, logo.name)}
              className="group bg-white rounded-xl shadow-xl hover:shadow-[0_0_35px_rgba(230,0,0,0.6)] transition-all p-6 flex flex-col items-center justify-between border-2 border-transparent hover:border-[#990000]"
            >
              <div className="w-full aspect-square flex items-center justify-center p-4">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="w-full text-center pt-4 border-t border-gray-100">
                <h3 className="font-futuristic text-xs font-bold text-gray-900 group-hover:text-red-600 transition-colors uppercase">
                  {logo.name}
                </h3>
                <p className="font-body text-[11px] text-gray-500 mt-0.5">
                  {logo.subtitle}
                </p>
              </div>

              {/* Hover Zoom Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-futuristic text-xs uppercase">
                <ZoomIn className="w-5 h-5 text-red-500" />
                <span>View Logo Specs</span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Subtitle Footer */}
        <div className="text-center max-w-2xl mx-auto border-t border-[#990000]/30 pt-8">
          <h3 className="font-futuristic text-2xl text-red-600 font-bold mb-2 flex items-center justify-center gap-2">
            <Layers className="w-5 h-5" /> Brand Identity & Logo Design
          </h3>
          <p className="font-body text-xs sm:text-sm text-gray-300">
            Distinctive logo concepts created to elevate brand identity across digital, salon, and studio spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
