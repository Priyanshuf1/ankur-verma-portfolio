import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 bg-damask border-t border-[#990000]/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Background Header Title & Name */}
        <div className="relative text-center mb-8">
          <h2 className="font-futuristic text-5xl sm:text-7xl md:text-8xl font-black text-[#8b0000] tracking-wider uppercase opacity-90 select-none">
            ABOUT ME
          </h2>
          <div className="absolute bottom-1 right-1/4 sm:right-1/3 translate-x-12 translate-y-2">
            <span className="font-futuristic text-lg sm:text-2xl font-bold text-white tracking-widest uppercase">
              ANKUR VERMA
            </span>
          </div>
        </div>

        {/* Armchair Portrait & Horizontal Crimson Bar Container */}
        <div className="relative my-8 py-10 flex justify-center items-center">
          {/* Horizontal Solid Crimson Bar */}
          <div className="absolute w-full h-24 sm:h-32 bg-[#8b0000] rounded-lg shadow-[0_0_40px_rgba(139,0,0,0.5)] z-0" />
          
          {/* Armchair Photo Cutout */}
          <div className="relative z-10 -mt-16 -mb-8 max-w-sm sm:max-w-md">
            <img 
              src="/assets/ankur_about_armchair.png" 
              alt="Ankur Verma - Digital Marketing Professional"
              className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* Biography Paragraphs Text Box */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#0d0406]/80 border border-[#990000]/30 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <p className="font-body text-gray-200 text-sm sm:text-base leading-relaxed mb-4">
            I’m a Digital Marketing Professional with <strong className="text-white font-semibold">2.5+ years of experience</strong> in building digital presence and driving growth for businesses across multiple industries.
          </p>
          <p className="font-body text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            I have hands-on experience working with <strong className="text-red-400">Real Estate & Construction Brands</strong>, along with D2C Brands, Salons, Cafés and Service-based Businesses. My real estate experience includes handling social media marketing, content strategy, property-focused campaigns, lead generation, creative content and brand positioning.
          </p>
          <p className="font-body text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            My core expertise includes <strong className="text-white font-semibold">Social Media Marketing, Meta Ads, Google Ads, SEO, Content Strategy, Branding, Creative Content, AI-powered Content Creation and Performance Marketing</strong>.
          </p>
          <p className="font-body text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            I believe digital marketing is more than just posting content — it’s about understanding the brand, reaching the right audience and turning attention into measurable business results.
          </p>
          <p className="font-body text-gray-300 text-sm sm:text-base leading-relaxed">
            I’m constantly exploring new marketing strategies, AI tools and digital trends to create creative, data-driven and result-oriented campaigns that help brands grow.
          </p>
        </div>
      </div>
    </section>
  );
}
