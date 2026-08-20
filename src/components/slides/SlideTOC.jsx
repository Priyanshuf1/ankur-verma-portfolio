import React from 'react';
import TiltCard from '../TiltCard';

export default function SlideTOC({ onJumpToSlide }) {
  const sections = [
    { name: 'Certification', targetSlide: 4 },
    { name: 'Social Media', targetSlide: 5 },
    { name: 'Logofolio', targetSlide: 6 },
    { name: 'Reach & Performance', targetSlide: 7 },
    { name: 'Meta Ads', targetSlide: 8 },
    { name: 'WordPress Web Dev', targetSlide: 9 },
    { name: 'Video Production', targetSlide: 10 }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 max-w-5xl mx-auto text-center font-poppins">
      {/* TABLE OF Content Header */}
      <div className="mb-3 inline-flex flex-wrap items-baseline justify-center gap-3">
        <h2 className="font-poppins text-5xl sm:text-7xl font-extrabold text-[#b30000] tracking-tight uppercase select-none drop-shadow-md">
          TABLE OF
        </h2>
        <span className="font-poppins text-4xl sm:text-6xl text-white font-bold drop-shadow-md">
          Content
        </span>
      </div>

      <p className="font-poppins text-white font-semibold text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 drop-shadow-sm">
        A structured overview of the strategies, campaigns, and creative work featured in this portfolio
      </p>

      {/* Interactive 3D Tilt Jump Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 max-w-4xl mx-auto">
        {sections.map((sec, idx) => (
          <TiltCard
            key={idx}
            maxDegree={12}
            scaleOnHover={1.06}
            className="border-dashed-crimson rounded-xl px-6 py-3.5 sm:py-4 bg-[#0d0406]/95 backdrop-blur-sm shadow-2xl min-w-[200px]"
            onClick={() => onJumpToSlide(sec.targetSlide)}
          >
            <span className="font-poppins text-base sm:text-lg font-extrabold text-white hover:text-red-400 transition-colors block text-center uppercase tracking-wider">
              {sec.name}
            </span>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
