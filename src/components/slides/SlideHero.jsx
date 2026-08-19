import React from 'react';

export default function SlideHero({ onNext }) {
  const tags = [
    '@Social Media Marketing',
    '@Meta Ads Specialist',
    '@Brand Identity & Strategy',
    '@Content Strategy & AI',
    '@Performance Lead Generation'
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center text-center px-4 py-6 max-w-7xl mx-auto">
      {/* Top Header Tagline */}
      <div className="shrink-0 mt-2">
        <span className="font-futuristic text-xs sm:text-sm md:text-base text-white font-bold uppercase tracking-widest bg-red-950/90 border border-red-600 px-5 py-2.5 rounded-full shadow-2xl">
          GROWTH &amp; PERFORMANCE STRATEGIST
        </span>
      </div>

      {/* Main Title & Subtitle with High-Contrast Bold Typography */}
      <div className="flex flex-col items-center justify-center my-auto w-full py-4">
        <h1 className="font-futuristic text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-wider text-white uppercase leading-none drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)]">
          PORTFOLIO
        </h1>
        <h2 className="font-futuristic text-4xl sm:text-6xl md:text-7xl font-bold text-[#cc0000] tracking-widest uppercase mt-3 sm:mt-4 drop-shadow-xl">
          DIGITAL MARKETER
        </h2>
        <p className="font-body text-lg sm:text-2xl md:text-3xl text-white font-semibold max-w-4xl mt-5 sm:mt-6 leading-relaxed drop-shadow-md">
          Transforming brand visions into measurable growth through data-driven performance marketing, social media choreography, and Meta Ad campaigns.
        </p>

        {/* Tag Badges with High Contrast Bold Text */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 max-w-5xl">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-futuristic text-xs sm:text-sm md:text-base text-white font-bold bg-[#1d080c] border border-red-600/90 px-5 py-2.5 rounded-full shadow-xl hover:bg-red-900 hover:text-white transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="shrink-0 mb-4">
        <button
          onClick={onNext}
          className="font-futuristic text-base sm:text-xl font-black text-white uppercase tracking-wider bg-gradient-to-r from-red-800 via-red-600 to-red-800 hover:from-red-600 hover:to-red-500 border-2 border-red-500 px-10 py-4 rounded-full shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-3"
        >
          <span>EXPLORE PORTFOLIO</span>
          <span className="text-2xl">↓</span>
        </button>
      </div>
    </div>
  );
}
