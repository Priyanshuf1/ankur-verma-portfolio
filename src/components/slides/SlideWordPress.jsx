import React from 'react';
import { Globe, ZoomIn, CheckCircle2, ShieldCheck, Zap, Layout } from 'lucide-react';
import TiltCard from '../TiltCard';

export default function SlideWordPress({ onOpenModal }) {
  const features = [
    'Custom WordPress & Elementor Pro Architecture',
    'Luxury UI/UX Design Tailored for Service Brands',
    'Service Catalog & Appointment Booking System',
    'Mobile-Optimized, Speed & SEO Engine'
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-3 sm:px-4 py-2 sm:py-3 max-w-7xl mx-auto overflow-hidden font-poppins">
      {/* Header */}
      <div className="text-center shrink-0 mt-0 mb-1">
        <h2 className="font-poppins text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#b30000] tracking-tight uppercase select-none mb-1 drop-shadow-md">
          WORDPRESS WEBSITE DEVELOPMENT
        </h2>
        <p className="font-poppins text-white font-medium text-xs sm:text-base max-w-3xl mx-auto drop-shadow-sm px-2">
          High-converting, responsive WordPress websites engineered for luxury service brands, e-commerce, and business lead capture.
        </p>
      </div>

      {/* Main Content Grid: Left Details Card + Right High-Res Website Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full my-auto items-center overflow-y-auto max-h-[calc(100vh-175px)] custom-scrollbar p-1 scrollable-slide-content shrink">
        {/* Left Column: Project Case Study Overview */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <TiltCard
            maxDegree={4}
            scaleOnHover={1.01}
            className="bg-[#0e0407]/95 border-2 border-red-600/70 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-2 mb-2 border-b border-red-900/40 pb-2">
              <Globe className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <h3 className="font-poppins text-base sm:text-lg font-black text-white uppercase tracking-wide">
                  B Luxury Salon Website
                </h3>
                <span className="font-poppins text-xs font-bold text-red-400 block">
                  WordPress &amp; Service Booking Portal
                </span>
              </div>
            </div>

            <p className="font-poppins text-xs sm:text-sm text-gray-200 font-medium leading-relaxed mb-3">
              Designed and built a premium WordPress website for Lucknow’s premier luxury salon, featuring an interactive service catalog, bridal booking section, and WhatsApp instant consultation integration.
            </p>

            <div className="space-y-2 mb-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-red-900/40">
              <span className="font-poppins text-[10px] sm:text-xs font-bold text-white bg-red-950/80 border border-red-600/80 px-3 py-1 rounded-full">
                WordPress
              </span>
              <span className="font-poppins text-[10px] sm:text-xs font-bold text-white bg-red-950/80 border border-red-600/80 px-3 py-1 rounded-full">
                Elementor Pro
              </span>
              <span className="font-poppins text-[10px] sm:text-xs font-bold text-white bg-red-950/80 border border-red-600/80 px-3 py-1 rounded-full">
                Responsive UI/UX
              </span>
              <span className="font-poppins text-[10px] sm:text-xs font-bold text-white bg-red-950/80 border border-red-600/80 px-3 py-1 rounded-full">
                Local SEO
              </span>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Interactive Website Screenshot */}
        <div className="md:col-span-7 flex justify-center items-center h-full">
          <div
            onClick={() => onOpenModal('/assets/wordpress_b_luxury_salon.png', 'B Luxury Salon — WordPress Website Design')}
            className="group relative w-full bg-[#0d0406] rounded-2xl overflow-hidden border-2 border-red-600/70 hover:border-red-500 shadow-2xl cursor-pointer p-2 flex flex-col justify-between interactive-control"
            title="Click to Zoom WordPress Website Screenshot"
          >
            <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-red-900/40">
              <span className="font-poppins text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layout className="w-4 h-4" /> LIVE WEBSITE SHOWCASE
              </span>
              <span className="font-poppins text-[10px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-600/50 px-2 py-0.5 rounded-full">
                WordPress + Elementor
              </span>
            </div>
            <img
              src="/assets/wordpress_b_luxury_salon.png"
              alt="B Luxury Salon WordPress Website"
              className="w-full h-auto max-h-[300px] sm:max-h-[380px] object-contain rounded-xl bg-black/80 group-hover:scale-105 transition-transform duration-300"
            />
            {/* Zoom Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white font-poppins text-xs font-bold uppercase rounded-2xl">
              <ZoomIn className="w-6 h-6 text-red-500" />
              <span>ZOOM LIVE WORDPRESS WEBSITE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Footer */}
      <div className="mt-1 text-center max-w-2xl mx-auto border-t border-[#990000]/40 pt-1 shrink-0">
        <h3 className="font-poppins text-xs sm:text-sm text-red-500 font-black mb-0.5 uppercase tracking-wide">
          Web Design Capability
        </h3>
        <p className="font-poppins text-[11px] sm:text-xs text-white font-medium">
          Building end-to-end WordPress web solutions that bridge high-end aesthetics with seamless lead conversion.
        </p>
      </div>
    </div>
  );
}
