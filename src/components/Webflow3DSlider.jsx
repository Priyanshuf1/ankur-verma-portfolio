import React, { useState, useEffect, useRef } from 'react';

export default function Webflow3DSlider({ 
  items, 
  title, 
  subtitle, 
  autoPlayInterval = 1400, 
  pauseOnHover = true,
  onItemClick 
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const timerRef = useRef(null);

  const total = items.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const shouldPause = pauseOnHover && isHovered;
    if (!shouldPause) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, activeIndex, autoPlayInterval, pauseOnHover]);

  const getCardStyle = (index) => {
    let diff = index - activeIndex;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    if (diff === 0) {
      return {
        transform: 'translateX(0%) scale(1.08) translateZ(70px)',
        opacity: 1,
        zIndex: 30,
        filter: 'brightness(1.08)',
        boxShadow: '0 25px 50px -10px rgba(179, 0, 0, 0.65)',
        border: '1.5px solid rgba(239, 68, 68, 0.8)'
      };
    } else if (diff === -1 || (diff === total - 1 && activeIndex === 0)) {
      return {
        transform: 'translateX(-70%) scale(0.82) rotateY(15deg)',
        opacity: 0.65,
        zIndex: 20,
        filter: 'brightness(0.65)',
        border: '1px solid rgba(128, 0, 0, 0.4)'
      };
    } else if (diff === 1 || (diff === 1 - total && activeIndex === total - 1)) {
      return {
        transform: 'translateX(70%) scale(0.82) rotateY(-15deg)',
        opacity: 0.65,
        zIndex: 20,
        filter: 'brightness(0.65)',
        border: '1px solid rgba(128, 0, 0, 0.4)'
      };
    } else if (diff === -2) {
      return {
        transform: 'translateX(-125%) scale(0.66) rotateY(22deg)',
        opacity: 0.3,
        zIndex: 10,
        filter: 'brightness(0.4)',
        border: '1px solid transparent'
      };
    } else if (diff === 2) {
      return {
        transform: 'translateX(125%) scale(0.66) rotateY(-22deg)',
        opacity: 0.3,
        zIndex: 10,
        filter: 'brightness(0.4)',
        border: '1px solid transparent'
      };
    } else {
      return {
        transform: 'translateX(0%) scale(0.5)',
        opacity: 0,
        zIndex: 0
      };
    }
  };

  const handleCardClick = (idx, item, isCenter) => {
    if (isCenter) {
      if (onItemClick) {
        onItemClick(item);
      } else {
        setSelectedItem(item);
      }
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-4 py-1 max-w-7xl mx-auto overflow-hidden select-none">
      {/* Header with clear clearance */}
      {title && (
        <div className="text-center shrink-0 mt-1 mb-1">
          <h2 className="font-futuristic text-4xl sm:text-6xl md:text-7xl font-black text-[#b30000] tracking-wider uppercase drop-shadow-md">
            {title}
          </h2>
          {subtitle && (
            <p className="font-body text-xs sm:text-sm text-gray-300 mt-0.5 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Top Curved Wave Mask SVG */}
      <div className="w-full max-w-4xl h-4 shrink-0 opacity-30 my-0.5">
        <svg viewBox="0 0 804 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M804 0V16.671C804 16.671 599.026 50.167 402.005 50.167C204.974 50.167 0 16.671 0 16.671V0H804Z" fill="#990000" />
        </svg>
      </div>

      {/* Webflow 3D Menu Slider Container */}
      <div 
        className="relative w-full max-w-4xl h-[340px] sm:h-[385px] flex items-center justify-center perspective-1000 my-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Badge Indicator */}
        {pauseOnHover && isHovered && (
          <div className="absolute top-0 right-4 z-40 bg-[#800000]/95 border border-red-500/60 text-white text-[10px] sm:text-xs font-futuristic px-3.5 py-1 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span>PAUSED • CLICK TO ZOOM</span>
          </div>
        )}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-3 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-red-950/90 border-2 border-red-500/60 text-white flex items-center justify-center text-xl sm:text-2xl shadow-2xl hover:bg-red-600 transition-all hover:scale-110 active:scale-95 cursor-pointer"
          title="Previous Slide"
        >
          ‹
        </button>

        {/* 3D Stack of Cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          {items.map((item, idx) => {
            const style = getCardStyle(idx);
            const isCenter = idx === activeIndex;

            return (
              <div
                key={idx}
                onClick={() => handleCardClick(idx, item, isCenter)}
                style={style}
                className="absolute w-[245px] sm:w-[295px] h-[300px] sm:h-[365px] rounded-2xl overflow-hidden cursor-pointer bg-[#0d0406]/95 backdrop-blur-md shadow-2xl transition-all duration-500 ease-out transform-gpu flex flex-col items-center justify-between p-3"
              >
                {/* Image Frame - Perfect Fit */}
                <div className="w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-black/70 p-2">
                  <img
                    src={item.src}
                    alt={item.title || 'Portfolio Item'}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-md"
                  />
                </div>

                {/* Card Title & Category */}
                <div className="mt-2 text-center w-full px-1.5 shrink-0">
                  <span className="text-[9px] font-futuristic text-red-400 uppercase tracking-widest block truncate font-bold">
                    {item.category || 'Portfolio'}
                  </span>
                  <h4 className="text-xs font-bold text-white font-body truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-3 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-red-950/90 border-2 border-red-500/60 text-white flex items-center justify-center text-xl sm:text-2xl shadow-2xl hover:bg-red-600 transition-all hover:scale-110 active:scale-95 cursor-pointer"
          title="Next Slide"
        >
          ›
        </button>
      </div>

      {/* Bottom Curved Wave Mask SVG */}
      <div className="w-full max-w-4xl h-4 shrink-0 opacity-30 my-0.5 rotate-180">
        <svg viewBox="0 0 804 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M804 0V16.671C804 16.671 599.026 50.167 402.005 50.167C204.974 50.167 0 16.671 0 16.671V0H804Z" fill="#990000" />
        </svg>
      </div>

      {/* Slide Pagination Dots */}
      <div className="flex items-center gap-2 mt-1 mb-1 shrink-0 z-30">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? 'w-7 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]'
                : 'bg-red-950 hover:bg-red-700'
            }`}
          />
        ))}
      </div>

      {/* Lightbox Tap/Click Zoom Modal (Fallback) */}
      {selectedItem && (
        <div 
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] bg-[#0d0406] border-2 border-red-600/70 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col items-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-red-950/90 border border-red-500/60 text-white flex items-center justify-center text-xl hover:bg-red-600 transition-all shadow-lg cursor-pointer"
              title="Close Zoom"
            >
              ✕
            </button>

            {/* High Res Image */}
            <img 
              src={selectedItem.src} 
              alt={selectedItem.title} 
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl mb-3"
            />

            {/* Title & Info */}
            <div className="text-center w-full mt-1">
              <h3 className="font-futuristic text-lg sm:text-2xl font-bold text-white tracking-wide">
                {selectedItem.title}
              </h3>
              {selectedItem.category && (
                <p className="font-body text-xs sm:text-sm text-red-400 tracking-widest uppercase mt-1">
                  {selectedItem.category}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
