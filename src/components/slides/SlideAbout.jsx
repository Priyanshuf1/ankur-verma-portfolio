import React from 'react';

export default function SlideAbout() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-4 py-2 max-w-6xl mx-auto overflow-hidden -translate-y-2">
      {/* ABOUT ME Header & ANKUR VERMA Subtitle */}
      <div className="relative text-center w-full shrink-0 mt-0">
        <h2 className="font-futuristic text-4xl sm:text-6xl md:text-7xl font-black text-[#990000] tracking-wider uppercase select-none drop-shadow-md">
          ABOUT ME
        </h2>
        <div className="text-right max-w-4xl mx-auto -mt-2 sm:-mt-4 pr-4">
          <span className="font-futuristic text-lg sm:text-2xl font-black text-white tracking-widest uppercase border-b-2 border-red-500 pb-0.5">
            ANKUR VERMA
          </span>
        </div>
      </div>

      {/* Solid Crimson Bar with Armchair Cutout (Shifted Up) */}
      <div className="relative my-1 w-full flex justify-center items-center shrink-0">
        {/* Horizontal Solid Crimson Bar */}
        <div className="absolute w-full h-16 sm:h-22 bg-gradient-to-r from-[#660000] via-[#a30000] to-[#660000] rounded-2xl shadow-[0_0_45px_rgba(163,0,0,0.8)] z-0" />
        
        {/* Transparent Armchair Cutout (Scaled & Shifted Up) */}
        <div className="relative z-10 -my-6 sm:-my-10 max-w-md w-full flex justify-center">
          <img 
            src="/assets/ankur_about_armchair_cutout.png" 
            alt="Ankur Verma - Digital Marketing Professional"
            className="w-full h-auto max-h-[270px] sm:max-h-[330px] md:max-h-[360px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
          />
        </div>
      </div>

      {/* High-Contrast Bold Glassmorphic Bio Box - 100% Fully Visible */}
      <div className="mb-4 w-full bg-[#0e0407]/95 border-2 border-red-600/70 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-white font-body text-xs sm:text-sm md:text-base leading-relaxed font-semibold">
          <div className="space-y-2">
            <p>
              I’m a Digital Marketing Professional with <strong className="text-red-400 font-black text-xs sm:text-sm md:text-base border-b border-red-500">2.5+ years of experience</strong> in building digital presence and driving growth for businesses across multiple industries.
            </p>
            <p>
              I have hands-on experience working with <strong className="text-red-300 font-bold">Real Estate &amp; Construction Brands</strong>, along with D2C Brands, Salons, Cafés and Service-based Businesses. My real estate experience includes handling social media marketing, content strategy, property-focused campaigns, lead generation, creative content and brand positioning.
            </p>
          </div>
          <div className="space-y-2">
            <p>
              My core expertise includes <strong className="text-white font-black text-xs sm:text-sm md:text-base">Social Media Marketing, Meta Ads, Google Ads, SEO, Content Strategy, Branding, Creative Content, AI-powered Content Creation and Performance Marketing</strong>.
            </p>
            <p>
              I believe digital marketing is more than just posting content — it’s about understanding the brand, reaching the right audience and turning attention into measurable business results. I’m constantly exploring new marketing strategies, AI tools and digital trends to create creative, data-driven and result-oriented campaigns that help brands grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
