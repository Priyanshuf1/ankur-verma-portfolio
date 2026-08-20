import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, Eye, TrendingUp, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import TiltCard from '../TiltCard';

const InstagramIcon = () => (
  <svg className="w-4 h-4 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function SlideAnalytics({ onOpenModal }) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const accounts = [
    {
      id: 1,
      brand: 'Shubhshadi.in',
      handle: '@shubhshadi.in',
      metrics: '1,585 Followers • 181,065 Views',
      reach: '122,354 Accounts Reached (+348%)',
      profileSrc: '/assets/reach_original_1.jpeg',
      insightsSrc: '/assets/reach_hd_insights_1.png'
    },
    {
      id: 2,
      brand: 'Tabs 19 Studio',
      handle: '@tabs_19studio',
      metrics: '231 Followers • 17,256 Views',
      reach: '73.7% Reels Engagement',
      profileSrc: '/assets/reach_original_2.jpeg',
      insightsSrc: '/assets/reach_hd_insights_2.png'
    },
    {
      id: 3,
      brand: 'B Luxury Salon',
      handle: '@bluxury_salon',
      metrics: '401 Followers • 17,256 Views',
      reach: '79.1% Non-followers Reach',
      profileSrc: '/assets/reach_original_3.jpeg',
      insightsSrc: '/assets/reach_hd_insights_3.png'
    },
    {
      id: 4,
      brand: 'HomeArchs Construction',
      handle: '@homearchsofficial',
      metrics: '2,255 Followers • 106,859 Views',
      reach: '95.5% Non-followers Growth',
      profileSrc: '/assets/reach_original_4.jpeg',
      insightsSrc: '/assets/reach_hd_insights_4.png'
    },
    {
      id: 5,
      brand: 'Om Group Builders',
      handle: '@om_group_builder',
      metrics: '486 Followers • 898,034 Views',
      reach: '596,213 Viewers Reached',
      profileSrc: '/assets/reach_original_5.jpeg',
      insightsSrc: '/assets/reach_hd_insights_5.png'
    },
    {
      id: 6,
      brand: 'Swarnim Lite',
      handle: '@swarnimlite',
      metrics: '49 Followers • 15,767 Views',
      reach: '75.3% Non-followers Reach',
      profileSrc: '/assets/reach_original_6.jpeg',
      insightsSrc: '/assets/reach_hd_insights_6.png'
    }
  ];

  // Auto-scroll loop when not paused
  useEffect(() => {
    let animationFrameId;
    
    const autoScroll = () => {
      if (!isPaused && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += 1.2; // Smooth auto-slide velocity
        
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
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Duplicate items for seamless continuous looping
  const displayAccounts = [...accounts, ...accounts];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-2 sm:px-4 py-2 max-w-7xl mx-auto overflow-hidden font-poppins select-none">
      {/* Header */}
      <div className="text-center shrink-0 mt-0 mb-1">
        <h2 className="font-poppins text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#b30000] tracking-tight uppercase select-none mb-1 drop-shadow-md">
          REACH &amp; PERFORMANCE
        </h2>
        <p className="font-poppins text-white font-medium text-xs sm:text-base max-w-3xl mx-auto drop-shadow-sm px-2">
          Data-driven reach that creates meaningful brand growth across multiple social media business profiles.
        </p>
      </div>

      {/* Auto-Moving Slider Track Wrapper with Navigation Arrows */}
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

        {/* Pause/Play Controls Badge */}
        <div className="absolute top-0 right-4 z-20 hidden sm:flex items-center gap-2 bg-red-950/80 border border-red-600/60 px-3 py-1 rounded-full text-[11px] text-white font-bold backdrop-blur-md">
          {isPaused ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400 animate-pulse" />}
          <span>{isPaused ? 'PAUSED' : 'AUTO MOVING'}</span>
        </div>

        {/* Moving Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 overflow-x-auto scrollbar-none py-2 px-10 sm:px-14 scroll-smooth slide-interactive"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayAccounts.map((acc, idx) => (
            <div key={idx} className="w-[85vw] sm:w-[320px] md:w-[340px] shrink-0">
              <TiltCard
                maxDegree={6}
                scaleOnHover={1.02}
                className="bg-[#0d0406]/95 border border-[#990000]/70 rounded-2xl p-3 shadow-2xl hover:border-red-500 hover:shadow-[0_0_25px_rgba(255,26,26,0.6)] transition-all flex flex-col justify-between h-full"
              >
                {/* Account Title Header */}
                <div className="mb-2 border-b border-[#990000]/40 pb-2">
                  <div className="flex items-center gap-1.5">
                    <InstagramIcon />
                    <h3 className="font-poppins text-xs sm:text-sm font-bold text-white truncate tracking-wide">
                      {acc.brand}
                    </h3>
                  </div>
                  <span className="text-[11px] font-poppins text-red-400 block truncate font-extrabold mt-0.5 tracking-wider">
                    {acc.handle}
                  </span>
                </div>

                {/* Dual Phone Screens Side-by-Side */}
                <div className="grid grid-cols-2 gap-2 my-1">
                  <div
                    onClick={() => onOpenModal(acc.profileSrc, `${acc.brand} — Account Profile Screenshot`)}
                    className="group relative h-40 sm:h-44 bg-black/90 rounded-xl overflow-hidden border border-white/30 hover:border-red-500 cursor-pointer shadow-md flex items-center justify-center interactive-control"
                    title="Page 1: Account Profile"
                  >
                    <img
                      src={acc.profileSrc}
                      alt={`${acc.brand} Account Profile`}
                      className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-poppins uppercase gap-1 p-1 text-center font-bold">
                      <ZoomIn className="w-4 h-4 text-red-500" />
                      <span>PAGE 1: ACCOUNT</span>
                    </div>
                  </div>

                  <div
                    onClick={() => onOpenModal(acc.insightsSrc, `${acc.brand} — Reach & Analytics Insights`)}
                    className="group relative h-40 sm:h-44 bg-black/90 rounded-xl overflow-hidden border border-white/30 hover:border-red-500 cursor-pointer shadow-md flex items-center justify-center interactive-control"
                    title="Page 2: Reach & Analytics Insights"
                  >
                    <img
                      src={acc.insightsSrc}
                      alt={`${acc.brand} Reach Insights`}
                      className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-poppins uppercase gap-1 p-1 text-center font-bold">
                      <ZoomIn className="w-4 h-4 text-red-500" />
                      <span>PAGE 2: REACH</span>
                    </div>
                  </div>
                </div>

                {/* Metrics & Performance Badge */}
                <div className="mt-2 pt-2 border-t border-[#990000]/40 bg-[#16070a] rounded-xl p-2 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-100 font-poppins font-semibold">
                    <Eye className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span className="truncate">{acc.metrics}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-poppins font-extrabold">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{acc.reach}</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle Footer */}
      <div className="mt-1 text-center max-w-2xl mx-auto border-t border-[#990000]/40 pt-1 shrink-0">
        <h3 className="font-poppins text-xs sm:text-sm text-red-500 font-black mb-0.5 uppercase tracking-wide">
          What this section communicates
        </h3>
        <p className="font-poppins text-[11px] sm:text-xs text-white font-medium">
          Demonstrates hands-on social media management and performance tracking across multiple business profiles.
        </p>
      </div>
    </div>
  );
}
