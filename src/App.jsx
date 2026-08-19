import React, { useState, useEffect, useRef } from 'react';
import BackgroundVFX from './components/BackgroundVFX';
import ImageModal from './components/ImageModal';

import SlideHero from './components/slides/SlideHero';
import SlideAbout from './components/slides/SlideAbout';
import SlideExpertise from './components/slides/SlideExpertise';
import SlideTOC from './components/slides/SlideTOC';
import SlideCertifications from './components/slides/SlideCertifications';
import SlideSocialMedia from './components/slides/SlideSocialMedia';
import SlideLogofolio from './components/slides/SlideLogofolio';
import SlideAnalytics from './components/slides/SlideAnalytics';
import SlideMetaAds from './components/slides/SlideMetaAds';
import SlideVideoProduction from './components/slides/SlideVideoProduction';
import SlideContact from './components/slides/SlideContact';

import { ChevronUp, ChevronDown } from 'lucide-react';

const slideTitles = [
  'Hero',
  'About Me',
  'Expertise',
  'Table of Contents',
  'Certifications',
  'Social Media',
  'Logofolio',
  'Reach & Performance',
  'Meta Ads',
  'Video Production',
  'Contact'
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '' });
  const containerRef = useRef(null);

  const totalSlides = 11;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideHeight = container.clientHeight;
      if (slideHeight > 0) {
        const activeIdx = Math.round(container.scrollTop / slideHeight);
        if (activeIdx !== currentSlide && activeIdx >= 0 && activeIdx < totalSlides) {
          setCurrentSlide(activeIdx);
        }
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentSlide, totalSlides]);

  const goToSlide = (newIndex) => {
    if (newIndex < 0 || newIndex >= totalSlides) return;
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: newIndex * container.clientHeight,
        behavior: 'smooth'
      });
      setCurrentSlide(newIndex);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  const handleOpenModal = (src, alt) => {
    setModalData({ isOpen: true, src, alt });
  };

  const handleCloseModal = () => {
    setModalData({ isOpen: false, src: '', alt: '' });
  };

  const slides = [
    <SlideHero onNext={nextSlide} />,
    <SlideAbout />,
    <SlideExpertise />,
    <SlideTOC onJumpToSlide={goToSlide} />,
    <SlideCertifications onOpenModal={handleOpenModal} />,
    <SlideSocialMedia onOpenModal={handleOpenModal} />,
    <SlideLogofolio onOpenModal={handleOpenModal} />,
    <SlideAnalytics onOpenModal={handleOpenModal} />,
    <SlideMetaAds onOpenModal={handleOpenModal} />,
    <SlideVideoProduction />,
    <SlideContact />
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0a0002] text-white select-none">
      {/* Background Particle Atmosphere */}
      <BackgroundVFX />

      {/* Top Webflow Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-black/60 backdrop-blur-md">
        <div 
          className="h-full bg-gradient-to-r from-red-700 via-red-500 to-amber-500 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(239,68,68,0.9)]"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Webflow Scroll Snap FullPage Container */}
      <div 
        ref={containerRef}
        className="fullpage-container relative z-10 w-full h-full"
      >
        {slides.map((slideComponent, idx) => (
          <section key={idx} className="fullpage-section w-full h-full p-2 sm:p-4">
            <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center">
              {slideComponent}
            </div>
          </section>
        ))}
      </div>

      {/* Right Side Navigation Dots */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 bg-black/60 backdrop-blur-md p-2 sm:p-2.5 rounded-full border border-red-900/40 shadow-2xl">
        {slideTitles.map((title, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            title={`Slide ${idx + 1}: ${title}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx
                ? 'bg-red-500 scale-140 shadow-[0_0_15px_#ff1a1a]'
                : 'bg-white/30 hover:bg-white/70 hover:scale-125'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter Indicator */}
      <div className="fixed left-3 sm:left-6 bottom-4 sm:bottom-6 z-40 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-red-900/40 text-xs sm:text-sm font-futuristic text-gray-300 flex items-center gap-2 shadow-2xl">
        <span className="text-red-500 font-bold text-sm sm:text-base">
          {currentSlide + 1 < 10 ? `0${currentSlide + 1}` : currentSlide + 1}
        </span>
        <span className="text-gray-500">/</span>
        <span>{totalSlides < 10 ? `0${totalSlides}` : totalSlides}</span>
        <span className="text-gray-300 text-xs hidden sm:inline ml-2 uppercase tracking-widest border-l border-red-900/50 pl-2">
          {slideTitles[currentSlide]}
        </span>
      </div>

      {/* Navigation Arrows */}
      <div className="fixed right-3 sm:right-6 bottom-4 sm:bottom-6 z-40 flex items-center gap-2">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-2.5 rounded-full border backdrop-blur-md transition-all ${
            currentSlide === 0
              ? 'opacity-25 cursor-not-allowed border-white/10 text-gray-600'
              : 'border-red-600/60 bg-red-950/40 text-white hover:bg-red-600 hover:border-red-500 cursor-pointer shadow-lg active:scale-95'
          }`}
          title="Previous Slide"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`p-2.5 rounded-full border backdrop-blur-md transition-all ${
            currentSlide === totalSlides - 1
              ? 'opacity-25 cursor-not-allowed border-white/10 text-gray-600'
              : 'border-red-600/60 bg-red-950/40 text-white hover:bg-red-600 hover:border-red-500 cursor-pointer shadow-lg active:scale-95'
          }`}
          title="Next Slide"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Image Zoom Modal */}
      <ImageModal
        isOpen={modalData.isOpen}
        imageSrc={modalData.src}
        imageAlt={modalData.alt}
        onClose={handleCloseModal}
      />
    </div>
  );
}
