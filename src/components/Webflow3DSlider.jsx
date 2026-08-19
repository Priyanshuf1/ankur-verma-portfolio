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
        boxShadow: '0 25px 50px -10px rgba(179, 0, 0, 0.75)',
        border: '2px solid rgba(239, 68, 68, 0.95)'
      };
    } else if (diff === -1 || (diff === total - 1 && activeIndex === 0)) {
      return {
        transform: 'translateX(-70%) scale(0.82) rotateY(15deg)',
        opacity: 0.75,
        zIndex: 20,
        filter: 'brightness(0.75)',
        border: '1.5px solid rgba(163, 0, 0, 0.6)'
      };
    } else if (diff === 1 || (diff === 1 - total && activeIndex === total - 1)) {
      return {
        transform: 'translateX(70%) scale(0.82) rotateY(-15deg)',
        opacity: 0.75,
        zIndex: 20,
        filter: 'brightness(0.75)',
        border: '1.5px solid rgba(163, 0, 0, 0.6)'
      };
    } else if (diff === -2) {
      return {
        transform: 'translateX(-125%) scale(0.66) rotateY(22deg)',
        opacity: 0.4,
        zIndex: 10,
        filter: 'brightness(0.5)',
        border: '1px solid transparent'
      };
    } else if (diff === 2) {
      return {
        transform: 'translateX(125%) scale(0.66) rotateY(-22deg)',
        opacity: 0.4,
        zIndex: 10,
        filter: 'brightness(0.5)',
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
      {/* Header */}
      {title && (
        <div className="text-center shrink-0 mt-1 mb-1">
          <h2 className="font-futuristic text-4xl sm:text-6xl md:text-7xl font-black text-[#b30000] tracking-wider uppercase drop-shadow-md">
            {title}
          </h2>
          {subtitle && (
            <p className="font-body text-xs sm:text-base text-white font-semibold mt-0.5 max-w-3xl mx-auto drop-shadow-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Top Curved Wave Mask SVG */}
      <div className="w-full max-w-4xl h-4 shrink-0 opacity-40 my-0.5">
        <svg viewBox="0 0 804 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M804 0V16.671C804 16.671 599.026 50.167 402.005 50.167C204.974 50.167 0 16.671 0 16.671V0H804Z" fill="#b30000" />
        </svg>
      </div>

      {/* Webflow 3D Menu Slider Container */}
      <div 
        className="relative w-full max-w-4xl h-[340px] sm:h-[385px] flex items-center justify-center perspective-1000 my-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pause Badge Indicator */}
        {pauseOnHover && isHovered && (
          <div className="absolute top-0 right-4 z-40 bg-[#800000]/95 border border-red-500/80 text-white text-xs font-futuristic px-4 py-1.5 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 font-bold animate-bounce">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span>PAUSED • CLICK TO ZOOM</span>
          </div>
        )}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-3 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-red-950/95 border-2 border-red-500 text-white flex items-center justify-center text-2xl sm:text-3xl font-black shadow-2xl hover:bg-red-600 transition-all hover:scale-110 active:scale-95 cursor-pointer"
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
                {/* Image Frame */}
                <div className="w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-black/80 p-2 border border-white/10">
                  <img
                    src={item.src}
                    alt={item.title || 'Portfolio Item'}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-md"
                  />
                </div>

                {/* Card Title & Category */}
                <div className="mt-2 text-center w-full px-1.5 shrink-0">
                  <span className="text-[10px] font-futuristic text-red-400 uppercase tracking-widest block truncate font-black">
                    {item.category || 'Portfolio'}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-body truncate mt-0.5">
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
          className="absolute right-1 sm:right-3 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-red-950/95 border-2 border-red-500 text-white flex items-center justify-center text-2xl sm:text-3xl font-black shadow-2xl hover:bg-red-600 transition-all hover:scale-110 active:scale-95 cursor-pointer"
          title="Next Slide"
        >
          ›
        </button>
      </div>

      {/* Bottom Curved Wave Mask SVG */}
      <div className="w-full max-w-4xl h-4 shrink-0 opacity-40 my-0.5 rotate-180">
        <svg viewBox="0 0 804 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M804 0V16.671C804 16.671 599.026 50.167 402.005 50.167C204.974 50.167 0 16.671 0 16.671V0H804Z" fill="#b30000" />
        </svg>
      </div>

      {/* Slide Pagination Dots */}
      <div className="flex items-center gap-2 mt-1 mb-1 shrink-0 z-30">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? 'w-8 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.95)]'
                : 'bg-red-950 hover:bg-red-700'
            }`}
          />
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedItem && (
        <div 
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] bg-[#0d0406] border-2 border-red-600 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col items-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-red-950/90 border border-red-500 text-white flex items-center justify-center text-xl hover:bg-red-600 transition-all shadow-lg cursor-pointer font-bold"
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
              <h3 className="font-futuristic text-xl sm:text-3xl font-black text-white tracking-wide">
                {selectedItem.title}
              </h3>
              {selectedItem.category && (
                <p className="font-futuristic text-xs sm:text-sm text-red-400 tracking-widest uppercase font-bold mt-1">
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
