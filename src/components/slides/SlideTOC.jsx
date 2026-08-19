import React from 'react';
import TiltCard from '../TiltCard';

export default function SlideTOC({ onJumpToSlide }) {
  const sections = [
    { name: 'Certification', targetSlide: 4 },
    { name: 'Social Media', targetSlide: 5 },
    { name: 'Logofolio', targetSlide: 6 },
    { name: 'Reach & Performance', targetSlide: 7 },
    { name: 'Meta Ads', targetSlide: 8 },
    { name: 'Video Production', targetSlide: 9 }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 max-w-5xl mx-auto text-center">
      {/* TABLE OF Content Header */}
      <div className="mb-3 inline-flex flex-wrap items-baseline justify-center gap-3">
        <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none">
          TABLE OF
        </h2>
        <span className="font-script text-4xl sm:text-6xl text-white">
          Content
        </span>
      </div>

      <p className="font-body text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
        A structured overview of the strategies, campaigns, and creative work featured in this portfolio
      </p>

      {/* Interactive 3D Tilt Jump Buttons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
        {sections.map((sec, idx) => (
          <TiltCard
            key={idx}
            maxDegree={15}
            scaleOnHover={1.08}
            className="border-dashed-crimson rounded-xl px-7 py-4 sm:py-5 bg-[#0d0406]/90 backdrop-blur-sm shadow-xl min-w-[220px]"
            onClick={() => onJumpToSlide(sec.targetSlide)}
          >
            <span className="font-body text-lg sm:text-xl font-medium text-gray-200 hover:text-white transition-colors block text-center">
              {sec.name}
            </span>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
