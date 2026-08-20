import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, Layers, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import TiltCard from '../TiltCard';

export default function SlideLogofolio({ onOpenModal }) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const logos = [
    {
      id: 1,
      name: 'B Luxury Salon',
      src: '/assets/logo_new_enhanced_2.png'
    },
    {
      id: 2,
      name: 'EOS Salon',
      src: '/assets/logo_new_enhanced_3.png'
    },
    {
      id: 3,
      name: 'Tabs 19 Salon',
      src: '/assets/logo_new_enhanced_4.png'
    },
    {
      id: 4,
      name: 'Book Your Digital Story',
      src: '/assets/logo_new_enhanced_1.png'
    },
    {
      id: 5,
      name: 'Krazy 4 Cakes',
      src: '/assets/logo_new_enhanced_5.png'
    },
    {
      id: 6,
      name: 'Om Group Builders',
      src: '/assets/logo_new_enhanced_6.png'
    },
    {
      id: 7,
      name: 'Kurti Kahaanii',
      src: '/assets/logo_new_enhanced_7.png'
    }
  ];

  // Auto-scroll loop when not paused
  useEffect(() => {
    let animationFrameId;
    
    const autoScroll = () => {
      if (!isPaused && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += 2.2; // Smooth dynamic auto-slide velocity
        
        // Loop back seamlessly
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  // Duplicate items for seamless continuous marquee looping
  const displayLogos = [...logos, ...logos];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-2 sm:px-4 py-2 sm:py-3 max-w-7xl mx-auto overflow-hidden font-poppins select-none">
      {/* Header */}
      <div className="text-center shrink-0 mt-0 mb-1">
        <h2 className="font-poppins text-4xl sm:text-7xl font-extrabold text-[#b30000] tracking-tight uppercase select-none mb-1 drop-shadow-md">
          LOGOFOLIO
        </h2>
        <p className="font-poppins text-white font-medium text-xs sm:text-base max-w-3xl mx-auto drop-shadow-sm px-2">
          A curated showcase of distinctive logos crafted to create memorable and impactful brand identities.
        </p>
      </div>

      {/* Auto-Moving Marquee Track Wrapper with Left/Right Navigation Buttons */}
      <div 
        className="relative w-full my-auto shrink py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-950/90 border border-red-500/80 text-white flex items-center justify-center hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.6)] cursor-pointer active:scale-95 interactive-control"
          title="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-950/90 border border-red-500/80 text-white flex items-center justify-center hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.6)] cursor-pointer active:scale-95 interactive-control"
          title="Scroll Right"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Status Badge */}
        <div className="absolute top-0 right-4 z-20 hidden sm:flex items-center gap-2 bg-red-950/80 border border-red-600/60 px-3 py-1 rounded-full text-[11px] text-white font-bold backdrop-blur-md">
          {isPaused ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400 animate-pulse" />}
          <span>{isPaused ? 'PAUSED' : 'AUTO SCROLLING'}</span>
        </div>

        {/* Moving Marquee Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 overflow-x-auto scrollbar-none py-3 px-10 sm:px-14 scroll-smooth slide-interactive"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayLogos.map((logo, idx) => (
            <div key={idx} className="w-[60vw] sm:w-[220px] md:w-[240px] shrink-0">
              <TiltCard
                maxDegree={8}
                scaleOnHover={1.05}
                className="bg-[#0d0406]/95 border border-[#990000]/70 rounded-2xl p-3 shadow-2xl hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,26,26,0.6)] transition-all flex flex-col items-center justify-between h-full group cursor-pointer"
                onClick={() => onOpenModal(logo.src, logo.name)}
              >
                {/* Zoomed Logo Frame (Increased image scale & padding for bold visibility) */}
                <div className="relative w-full aspect-square flex items-center justify-center p-1.5 bg-black/90 rounded-xl border border-red-900/50 group-hover:border-red-500 transition-all overflow-hidden shadow-inner interactive-control">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-full object-contain transform scale-115 group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_4px_15px_rgba(255,0,0,0.6)]"
                  />
                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white font-poppins text-[10px] font-extrabold uppercase rounded-xl">
                    <ZoomIn className="w-5 h-5 text-red-500 animate-pulse" />
                    <span>INSPECT LOGO</span>
                  </div>
                </div>

                {/* Company / Logo Name (Poppins ExtraBold) */}
                <div className="w-full text-center pt-2.5 mt-2 border-t border-[#990000]/50">
                  <h3 className="font-poppins text-xs sm:text-sm font-extrabold text-white group-hover:text-red-400 transition-colors uppercase tracking-wider truncate">
                    {logo.name}
                  </h3>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle Footer */}
      <div className="mt-1 text-center max-w-xl mx-auto border-t border-[#990000]/40 pt-1 shrink-0">
        <h3 className="font-poppins text-xs sm:text-sm text-red-500 font-black mb-0.5 flex items-center justify-center gap-2 uppercase tracking-wide">
          <Layers className="w-4 h-4" /> Brand Identity &amp; Logo Design
        </h3>
        <p className="font-poppins text-xs sm:text-sm text-white font-semibold">
          Distinctive logo concepts created to elevate brand identity across digital, salon, and studio spaces.
        </p>
      </div>
    </div>
  );
}
