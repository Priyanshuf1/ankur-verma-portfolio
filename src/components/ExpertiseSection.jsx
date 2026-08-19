import React from 'react';

export default function ExpertiseSection() {
  const tools = [
    { name: 'Meta', icon: '♾️', bg: 'bg-black' },
    { name: 'Canva', icon: '🎨', bg: 'bg-gradient-to-r from-teal-500 to-blue-600' },
    { name: 'Claude', icon: '✴️', bg: 'bg-amber-700' },
    { name: 'Gemini', icon: '✦', bg: 'bg-gradient-to-r from-blue-500 to-purple-600' },
    { name: 'ChatGPT', icon: '✳️', bg: 'bg-emerald-700' },
    { name: 'Midjourney', icon: '⛵', bg: 'bg-slate-900' },
    { name: 'Google Ads', icon: 'G', bg: 'bg-blue-600' }
  ];

  return (
    <section id="expertise" className="relative py-20 bg-damask border-t border-[#990000]/20">
      <div className="max-w-6xl mx-auto px-4">
        {/* EXPERTISE Header */}
        <div className="text-center mb-14">
          <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none">
            EXPERTISE
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: 3 Dashed Red Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1: Eduction */}
              <div className="border-dashed-crimson rounded-xl p-6 bg-[#0d0406]/90 backdrop-blur-sm">
                <h3 className="font-script text-3xl text-white mb-4 border-b border-[#990000]/40 pb-2">
                  Eduction
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm font-body text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Bachelor of Art (2020-2023)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>O level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Diploma in Digital Marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Master of Business Administration (Second Year)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-400">Asian International University</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Core Skills */}
              <div className="border-dashed-crimson rounded-xl p-6 bg-[#0d0406]/90 backdrop-blur-sm">
                <h3 className="font-script text-3xl text-white mb-4 border-b border-[#990000]/40 pb-2">
                  Core Skills
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm font-body text-gray-300">
                  {['Social Media Marketing', 'Performance Marketing', 'Website Design', 'AI Video Creation', 'Basic Graphic Design', 'Basic Video Editing', 'Logo Design'].map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-red-500">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Box 3: Tools Specialist */}
            <div className="border-dashed-crimson rounded-xl p-6 bg-[#0d0406]/90 backdrop-blur-sm">
              <h3 className="font-script text-3xl text-white mb-5 border-b border-[#990000]/40 pb-2">
                Tools Specialist
              </h3>
              <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4">
                {tools.map((tool, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center gap-1.5 group cursor-pointer"
                    title={tool.name}
                  >
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${tool.bg} border border-white/20 flex items-center justify-center text-lg sm:text-xl text-white shadow-lg group-hover:scale-110 group-hover:border-red-500 transition-all`}>
                      {tool.icon}
                    </div>
                    <span className="text-[10px] font-futuristic text-gray-400 group-hover:text-red-400 transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Armchair Thinking Photo Cutout */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative max-w-sm sm:max-w-md">
              <div className="absolute inset-0 bg-red-600/10 rounded-full blur-3xl" />
              <img 
                src="/assets/ankur_expertise_thinking.png" 
                alt="Ankur Verma Expertise"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
