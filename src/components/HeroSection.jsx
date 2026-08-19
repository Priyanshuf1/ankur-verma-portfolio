import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 bg-damask overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center z-10">
        <div ref={titleRef} className="inline-block">
          {/* Giant Futuristic PORTFOLIO Title */}
          <h1 className="font-futuristic text-6xl sm:text-8xl md:text-9xl font-black text-[#b30000] tracking-wider drop-shadow-[0_10px_30px_rgba(150,0,0,0.6)] select-none leading-none">
            PORTFOLIO
          </h1>
          
          {/* DIGITAL MARKETER Subtitle Aligned Right */}
          <div className="flex justify-end mt-2 sm:mt-4 pr-2 sm:pr-6">
            <h2 className="font-futuristic text-xl sm:text-3xl md:text-4xl text-white font-bold tracking-[0.25em] uppercase border-b-2 border-red-600/60 pb-1">
              DIGITAL MARKETER
            </h2>
          </div>
        </div>

        {/* Floating Quick Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {['Meta Ads Specialist', 'Real Estate Marketing', 'Performance Lead Gen', '2.5+ Yrs Experience', 'Brand Positioning'].map((tag, idx) => (
            <span 
              key={idx} 
              className="px-4 py-2 rounded-full text-xs font-futuristic uppercase tracking-widest text-red-200 bg-[#800000]/20 border border-[#990000]/50 backdrop-blur-sm shadow-md hover:border-red-500 hover:bg-[#990000]/30 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
