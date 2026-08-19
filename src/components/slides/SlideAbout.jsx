import React from 'react';

export default function SlideAbout() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-4 py-3 max-w-6xl mx-auto overflow-hidden">
      {/* ABOUT ME Header & ANKUR VERMA Subtitle */}
      <div className="relative text-center w-full shrink-0 mt-1">
        <h2 className="font-futuristic text-5xl sm:text-7xl md:text-8xl font-black text-[#8b0000] tracking-wider uppercase select-none drop-shadow-md">
          ABOUT ME
        </h2>
        <div className="text-right max-w-4xl mx-auto -mt-3 sm:-mt-5 pr-4">
          <span className="font-futuristic text-lg sm:text-2xl font-bold text-white tracking-widest uppercase border-b-2 border-red-600 pb-0.5">
            ANKUR VERMA
          </span>
        </div>
      </div>

      {/* Solid Crimson Bar with Enlarged Armchair Cutout */}
      <div className="relative my-2 w-full flex justify-center items-center shrink-0">
        {/* Horizontal Solid Crimson Bar */}
        <div className="absolute w-full h-20 sm:h-26 bg-gradient-to-r from-[#660000] via-[#990000] to-[#660000] rounded-2xl shadow-[0_0_45px_rgba(153,0,0,0.7)] z-0" />
        
        {/* Transparent Armchair Cutout */}
        <div className="relative z-10 -my-8 sm:-my-12 max-w-lg w-full flex justify-center">
          <img 
            src="/assets/ankur_about_armchair_cutout.png" 
            alt="Ankur Verma - Digital Marketing Professional"
            className="w-full h-auto max-h-[360px] sm:max-h-[440px] md:max-h-[480px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
          />
        </div>
      </div>

      {/* Glassmorphic Bio Box with Generous Padding & Space */}
      <div className="mb-2 w-full bg-[#0d0406]/95 border border-red-600/50 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200 font-body text-xs sm:text-sm md:text-base leading-relaxed">
          <div className="space-y-2.5">
            <p>
              I’m a Digital Marketing Professional with <strong className="text-white font-bold">2.5+ years of experience</strong> in building digital presence and driving growth for businesses across multiple industries.
            </p>
            <p>
              I have hands-on experience working with <strong className="text-red-400 font-semibold">Real Estate &amp; Construction Brands</strong>, along with D2C Brands, Salons, Cafés and Service-based Businesses. My real estate experience includes handling social media marketing, content strategy, property-focused campaigns, lead generation, creative content and brand positioning.
            </p>
          </div>
          <div className="space-y-2.5">
            <p>
              My core expertise includes <strong className="text-white font-bold">Social Media Marketing, Meta Ads, Google Ads, SEO, Content Strategy, Branding, Creative Content, AI-powered Content Creation and Performance Marketing</strong>.
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
