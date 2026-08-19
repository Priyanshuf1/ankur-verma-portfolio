import React from 'react';
import TiltCard from '../TiltCard';

export default function SlideExpertise() {
  const tools = [
    { name: 'Meta Ads', icon: '♾️', bg: 'bg-black' },
    { name: 'Canva Pro', icon: '🎨', bg: 'bg-gradient-to-r from-teal-500 to-blue-600' },
    { name: 'Claude AI', icon: '✴️', bg: 'bg-amber-700' },
    { name: 'Gemini AI', icon: '✦', bg: 'bg-gradient-to-r from-blue-500 to-purple-600' },
    { name: 'ChatGPT-4', icon: '✳️', bg: 'bg-emerald-700' },
    { name: 'Midjourney', icon: '⛵', bg: 'bg-slate-900' },
    { name: 'Google Ads', icon: 'G', bg: 'bg-blue-600' }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-4 py-3 max-w-7xl mx-auto overflow-hidden">
      {/* EXPERTISE Header */}
      <div className="text-center w-full shrink-0 mt-1 mb-2">
        <h2 className="font-futuristic text-5xl sm:text-7xl md:text-8xl font-black text-[#b30000] tracking-wider uppercase select-none drop-shadow-md">
          EXPERTISE
        </h2>
      </div>

      {/* Main Grid: Left 3 Dashed Cards + Right Thinking Portrait */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center justify-between w-full h-full my-auto">
        {/* Left Side: 3 Dashed Glassmorphic Cards */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Box 1: Eduction */}
            <TiltCard
              maxDegree={6}
              scaleOnHover={1.02}
              className="border-dashed-crimson rounded-2xl p-5 bg-[#0d0406]/95 backdrop-blur-md shadow-2xl"
            >
              <h3 className="font-script text-2xl sm:text-3xl font-bold text-white mb-2.5 border-b-2 border-[#990000]/60 pb-1">
                Eduction
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm md:text-base font-body text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Bachelor of Art (2020-2023)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>O level Certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Diploma in Digital Marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Master of Business Administration (2nd Yr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-400">Asian International University</span>
                </li>
              </ul>
            </TiltCard>

            {/* Box 2: Core Skills */}
            <TiltCard
              maxDegree={6}
              scaleOnHover={1.02}
              className="border-dashed-crimson rounded-2xl p-5 bg-[#0d0406]/95 backdrop-blur-md shadow-2xl"
            >
              <h3 className="font-script text-2xl sm:text-3xl font-bold text-white mb-2.5 border-b-2 border-[#990000]/60 pb-1">
                Core Skills
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm md:text-base font-body text-gray-200">
                {['Social Media Marketing', 'Performance Marketing', 'Website Design', 'AI Video Creation', 'Basic Graphic Design', 'Basic Video Editing', 'Logo Design'].map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </div>

          {/* Box 3: Tools Specialist */}
          <TiltCard
            maxDegree={4}
            scaleOnHover={1.01}
            className="border-dashed-crimson rounded-2xl p-5 bg-[#0d0406]/95 backdrop-blur-md shadow-2xl"
          >
            <h3 className="font-script text-2xl sm:text-3xl font-bold text-white mb-2.5 border-b-2 border-[#990000]/60 pb-1">
              Tools Specialist
            </h3>
            <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4">
              {tools.map((tool, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                  title={tool.name}
                >
                  <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl ${tool.bg} border-2 border-white/20 flex items-center justify-center text-lg sm:text-xl text-white shadow-xl group-hover:scale-115 group-hover:border-red-500 transition-all`}>
                    {tool.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-futuristic text-gray-300 group-hover:text-red-400 transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* Right Side: Thinking Portrait Cutout with Clear Separation */}
        <div className="flex justify-center items-center w-full lg:w-80 shrink-0 my-auto">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute inset-0 bg-red-600/35 rounded-full blur-3xl pointer-events-none" />
            <img 
              src="/assets/ankur_expertise_thinking_cutout.png" 
              alt="Ankur Verma - Expertise"
              className="relative z-10 w-full h-auto max-h-[440px] sm:max-h-[520px] md:max-h-[580px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
