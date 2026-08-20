import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, X, ChevronLeft, ChevronRight, Film, Sparkles } from 'lucide-react';
import TiltCard from '../TiltCard';

export default function SlideVideoProduction() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const scrollContainerRef = useRef(null);

  const videoList = [
    {
      id: 1,
      title: 'Shubhshadi.in — Wedding Reel',
      category: 'Social Media Reel',
      brand: 'Shubhshadi.in',
      src: '/assets/video_prod_1.mp4',
      views: '180K+ Views'
    },
    {
      id: 2,
      title: 'B Luxury Salon — Glam Showcase',
      category: 'Brand Promotion Film',
      brand: 'B Luxury Salon',
      src: '/assets/video_prod_2.mp4',
      views: '120K+ Views'
    },
    {
      id: 3,
      title: 'Tabs 19 Studio — Hair & Style',
      category: 'Studio Campaign',
      brand: 'Tabs 19 Studio',
      src: '/assets/video_prod_3.mp4',
      views: '95K+ Views'
    },
    {
      id: 4,
      title: 'HomeArchs — Architectural Tour',
      category: 'Commercial Showcase',
      brand: 'HomeArchs Construction',
      src: '/assets/video_prod_4.mp4',
      views: '110K+ Views'
    },
    {
      id: 5,
      title: 'Krazy 4 Cakes — Dessert Campaign',
      category: 'D2C Brand Reel',
      brand: 'Krazy 4 Cakes',
      src: '/assets/video_prod_5.mp4',
      views: '75K+ Views'
    },
    {
      id: 6,
      title: 'Kurti Kahaanii — Fashion Lookbook',
      category: 'Ethnic Fashion Reel',
      brand: 'Kurti Kahaanii',
      src: '/assets/video_prod_6.mp4',
      views: '88K+ Views'
    }
  ];

  // 60FPS Smooth Auto-Scroll loop when not paused
  useEffect(() => {
    let animationFrameId;

    const autoScroll = () => {
      if (!isPaused && !activeVideo && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += 1.8; // Dynamic auto-slide velocity

        // Seamless continuous loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, activeVideo]);

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

  // Duplicate video list for seamless continuous infinite marquee
  const displayVideos = [...videoList, ...videoList];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-2 sm:px-4 py-2 sm:py-3 max-w-7xl mx-auto overflow-hidden font-poppins select-none">
      {/* Header */}
      <div className="text-center shrink-0 mt-0 mb-1">
        <h2 className="font-poppins text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#b30000] tracking-tight uppercase select-none mb-1 drop-shadow-md flex items-center justify-center gap-2">
          <Film className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 hidden sm:inline-block" />
          <span>VIDEO PRODUCTION &amp; REELS</span>
        </h2>
        <p className="font-poppins text-white font-medium text-xs sm:text-base max-w-3xl mx-auto drop-shadow-sm px-2">
          High-energy social media reels, promotional brand films, and commercial video campaigns designed for maximum viral engagement.
        </p>
      </div>

      {/* Auto-Moving Video Slider Track Container with Navigation Controls */}
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

        {/* Status Indicator Badge */}
        <div className="absolute top-0 right-4 z-20 hidden sm:flex items-center gap-2 bg-red-950/80 border border-red-600/60 px-3 py-1 rounded-full text-[11px] text-white font-bold backdrop-blur-md">
          {isPaused ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400 animate-pulse" />}
          <span>{isPaused ? 'PAUSED' : 'AUTO MOVING'}</span>
        </div>

        {/* Moving Marquee Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-3 px-10 sm:px-14 scroll-smooth slide-interactive"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayVideos.map((vid, idx) => (
            <div key={idx} className="w-[70vw] sm:w-[260px] md:w-[280px] shrink-0">
              <TiltCard
                maxDegree={6}
                scaleOnHover={1.04}
                className="bg-[#0d0406]/95 border border-[#990000]/70 rounded-2xl p-3 shadow-2xl hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,26,26,0.6)] transition-all flex flex-col items-center justify-between h-full group cursor-pointer"
                onClick={() => setActiveVideo(vid)}
              >
                {/* Mobile Phone Mockup Video Player Container */}
                <div className="relative w-full h-72 sm:h-80 bg-black rounded-xl border-2 border-red-900/60 group-hover:border-red-500 overflow-hidden shadow-inner flex items-center justify-center interactive-control">
                  {/* Background Muted Video Preview Loop */}
                  <video
                    src={vid.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-2 left-2 z-10 bg-black/80 border border-red-600/60 text-red-400 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full backdrop-blur-md uppercase tracking-wider">
                    {vid.category}
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 opacity-80 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-2 text-white">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.8)] group-hover:scale-115 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                    <span className="text-[11px] font-extrabold text-white tracking-widest uppercase bg-black/70 px-3 py-1 rounded-full border border-white/20">
                      TAP TO PLAY WITH SOUND
                    </span>
                  </div>

                  {/* Views Badge */}
                  <div className="absolute bottom-2 right-2 z-10 bg-red-950/90 border border-red-500/80 text-emerald-400 text-[10px] font-extrabold px-2 py-0.5 rounded-md backdrop-blur-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{vid.views}</span>
                  </div>
                </div>

                {/* Video Info Header */}
                <div className="w-full text-center pt-2.5 mt-2 border-t border-[#990000]/50">
                  <h3 className="font-poppins text-xs sm:text-sm font-extrabold text-white group-hover:text-red-400 transition-colors uppercase tracking-wider truncate">
                    {vid.brand}
                  </h3>
                  <p className="font-poppins text-[11px] text-gray-300 font-semibold truncate mt-0.5">
                    {vid.title}
                  </p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Video Player Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#0a0204] border-2 border-red-600/80 rounded-3xl overflow-hidden shadow-2xl p-4 flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-red-950/90 border border-red-500 text-white flex items-center justify-center text-xl hover:bg-red-600 transition-all shadow-xl interactive-control cursor-pointer"
              title="Close Video"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Title Header */}
            <div className="w-full text-center mb-3 pr-10">
              <span className="text-[11px] font-extrabold text-red-400 uppercase tracking-widest block">
                {activeVideo.category} • {activeVideo.views}
              </span>
              <h3 className="font-poppins text-base sm:text-xl font-extrabold text-white mt-0.5">
                {activeVideo.title}
              </h3>
            </div>

            {/* Interactive HD Video Player with Sound */}
            <div className="relative w-full max-h-[70vh] aspect-[9/16] max-w-sm mx-auto bg-black rounded-2xl overflow-hidden border border-red-900/80 shadow-2xl">
              <video
                src={activeVideo.src}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Subtitle Footer */}
      <div className="mt-1 text-center max-w-xl mx-auto border-t border-[#990000]/40 pt-1 shrink-0">
        <h3 className="font-poppins text-xs sm:text-sm text-red-500 font-black mb-0.5 flex items-center justify-center gap-2 uppercase tracking-wide">
          <Film className="w-4 h-4" /> Professional Video Production &amp; Editing
        </h3>
        <p className="font-poppins text-xs sm:text-sm text-white font-semibold">
          Seamlessly storytelling through high-resolution video production, color grading, and viral reel choreography.
        </p>
      </div>
    </div>
  );
}
