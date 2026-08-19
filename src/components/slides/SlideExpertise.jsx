import React from 'react';

export default function SlideExpertise() {
  const education = [
    { title: 'Bachelor of Science (B.Sc)', subtitle: 'University of Lucknow (2020 – 2023)' },
    { title: 'Masters in Digital Marketing', subtitle: 'SkillCircle & DelhiStartups (Oct 2024 – Feb 2025)' },
    { title: 'Diploma in Digital Marketing', subtitle: 'DIGITAIGA (July 2024 – Nov 2024)' }
  ];

  const skills = [
    'Social Media Marketing & Management',
    'Meta Ads & Performance Marketing',
    'Search Engine Optimization (SEO)',
    'Content Strategy & AI-Driven Content',
    'Brand Positioning & Creative Design',
    'Real Estate & D2C Marketing Strategy'
  ];

  const tools = [
    'Meta Ads Manager', 'Google Ads', 'Google Analytics (GA4)', 
    'Semrush & Ahrefs', 'Canva & Photoshop', 'WordPress', 'CapCut & Premiere', 'AI Prompt Engineering'
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-4 py-3 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center shrink-0 mt-1 mb-2">
        <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-1 drop-shadow-md">
          EXPERTISE &amp; SKILLS
        </h2>
        <p className="font-body text-white font-semibold text-xs sm:text-base max-w-3xl mx-auto">
          Comprehensive digital marketing capabilities built through professional training and hands-on client campaigns.
        </p>
      </div>

      {/* Main Grid: Left Cards + Right Thinking Cutout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 w-full my-auto items-center">
        {/* Left Column: 3 Dashed Cards */}
        <div className="md:col-span-7 flex flex-col gap-4">
          {/* Card 1: Education */}
          <div className="border-2 border-dashed border-red-500/80 rounded-2xl p-4 sm:p-5 bg-[#0e0407]/95 shadow-xl backdrop-blur-md">
            <h3 className="font-futuristic text-lg sm:text-xl font-black text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>🎓</span> Education &amp; Certifications
            </h3>
            <div className="space-y-2.5">
              {education.map((item, idx) => (
                <div key={idx} className="border-l-2 border-red-600 pl-3">
                  <h4 className="font-futuristic text-sm sm:text-base font-bold text-white uppercase">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-red-300 font-semibold mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Core Skills */}
          <div className="border-2 border-dashed border-red-500/80 rounded-2xl p-4 sm:p-5 bg-[#0e0407]/95 shadow-xl backdrop-blur-md">
            <h3 className="font-futuristic text-lg sm:text-xl font-black text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>⚡</span> Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 font-body text-xs sm:text-sm font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Tools Specialist */}
          <div className="border-2 border-dashed border-red-500/80 rounded-2xl p-4 sm:p-5 bg-[#0e0407]/95 shadow-xl backdrop-blur-md">
            <h3 className="font-futuristic text-lg sm:text-xl font-black text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>🛠️</span> Tools Specialist
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="font-futuristic text-xs sm:text-sm font-bold text-white bg-[#1f090d] border border-red-500/80 px-3.5 py-1.5 rounded-lg shadow-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Thinking Portrait Cutout */}
        <div className="md:col-span-5 flex justify-center items-center h-full">
          <div className="relative w-full max-w-md flex justify-center">
            <img
              src="/assets/ankur_expertise_thinking_cutout.png"
              alt="Ankur Verma Thinking Pose"
              className="w-full h-auto max-h-[460px] sm:max-h-[540px] md:max-h-[580px] object-contain drop-shadow-[0_20px_45px_rgba(179,0,0,0.7)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
