import React, { useState } from 'react';

export default function Auto3DMarqueeCarousel({ items, title, subtitle, duration = 35 }) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Repeat items for seamless 3D marquee scrolling
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 py-3 max-w-7xl mx-auto overflow-hidden select-none">
      {/* Title Header */}
      {title && (
        <div className="text-center mb-3">
          <h2 className="font-futuristic text-4xl sm:text-6xl md:text-7xl font-black text-[#b30000] tracking-wider uppercase">
            {title}
          </h2>
          {subtitle && (
            <p className="font-body text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* 3D Infinite Auto-Scroll Track Container */}
      <div 
        className="relative w-full overflow-hidden py-6 cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft Left & Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a0002] via-[#0a0002]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a0002] via-[#0a0002]/80 to-transparent z-20 pointer-events-none" />

        {/* Hover Pause Badge */}
        {isPaused && (
          <div className="absolute top-2 right-8 z-30 bg-[#800000]/95 border border-red-500/60 text-white text-[10px] sm:text-xs font-futuristic px-3.5 py-1 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
            <span>PAUSED • TAP / CLICK TO ZOOM</span>
          </div>
        )}

        {/* Moving Marquee Track */}
        <div
          className="flex items-center gap-6 sm:gap-8 w-max py-2"
          style={{
            animation: `marquee3d ${duration}s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedItem(item)}
              className="relative group shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-[#800000]/40 bg-[#0d0406]/90 backdrop-blur-md transform-gpu transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_20px_40px_rgba(179,0,0,0.5)] cursor-pointer"
            >
              <img 
                src={item.src} 
                alt={item.title || 'Portfolio Item'} 
                className="h-56 sm:h-72 w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-102"
              />
              
              {/* Overlay Label on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
                <span className="text-[10px] font-futuristic text-red-400 uppercase tracking-widest">
                  {item.category || 'Click to Zoom'}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white font-body truncate">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Tap/Click Zoom Dialog Modal */}
      {selectedItem && (
        <div 
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] bg-[#0d0406] border border-red-600/60 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col items-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-red-950/90 border border-red-500/60 text-white flex items-center justify-center text-xl hover:bg-red-700 transition-all shadow-lg"
              title="Close Zoom"
            >
              ✕
            </button>

            {/* High Res Image */}
            <img 
              src={selectedItem.src} 
              alt={selectedItem.title} 
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl mb-3"
            />

            {/* Title & Info */}
            <div className="text-center w-full mt-1">
              <h3 className="font-futuristic text-base sm:text-xl font-bold text-white tracking-wide">
                {selectedItem.title}
              </h3>
              {selectedItem.category && (
                <p className="font-body text-xs text-red-400 tracking-widest uppercase mt-1">
                  {selectedItem.category}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Marquee Keyframe CSS */}
      <style>{`
        @keyframes marquee3d {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
