import React from 'react';
import TiltCard from './TiltCard';

export default function TableOfContentsSection() {
  const sections = [
    { name: 'Certification', href: '#certifications' },
    { name: 'Social Media', href: '#social-media' },
    { name: 'Logofolio', href: '#logofolio' },
    { name: 'Reach & Performance', href: '#analytics' },
    { name: 'Meta Ads', href: '#meta-ads' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="toc" className="relative py-20 bg-damask border-t border-[#990000]/20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* TABLE OF Content Header */}
        <div className="mb-4 inline-flex flex-wrap items-baseline justify-center gap-3">
          <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none">
            TABLE OF
          </h2>
          <span className="font-script text-4xl sm:text-6xl text-white">
            Content
          </span>
        </div>

        <p className="font-body text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-12">
          A structured overview of the strategies, campaigns, and creative work featured in this portfolio
        </p>

        {/* Interactive 3D Tilt Red Dashed TOC Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          {sections.map((sec, idx) => (
            <TiltCard
              key={idx}
              maxDegree={15}
              scaleOnHover={1.05}
              className="border-dashed-crimson rounded-xl px-6 py-4 bg-[#0d0406]/90 backdrop-blur-sm shadow-lg min-w-[200px]"
              onClick={(e) => scrollToSection(e, sec.href)}
            >
              <a
                href={sec.href}
                className="font-body text-lg sm:text-xl font-medium text-gray-200 hover:text-white transition-colors block text-center"
              >
                {sec.name}
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
