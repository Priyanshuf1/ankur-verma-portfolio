import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
  
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const slideRefs = useRef([]);

  const totalSlides = 11;

  // Initialize GSAP Slide Styles (Fixed Viewport Stack)
  useEffect(() => {
    slideRefs.current.forEach((slide, idx) => {
      if (!slide) return;
      if (idx === 0) {
        gsap.set(slide, {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          clipPath: 'circle(150% at 50% 50%)',
          zIndex: 20,
          pointerEvents: 'auto',
          display: 'block'
        });
      } else {
        gsap.set(slide, {
          scale: 0.35,
          opacity: 0,
          filter: 'blur(20px)',
          clipPath: 'circle(0% at 50% 50%)',
          zIndex: 10,
          pointerEvents: 'none',
          display: 'none'
        });
      }
    });
  }, []);

  // Awwwards "Emerge From Inside" 3D Depth Portal Transition Engine
  const transitionToSlide = (targetIndex, direction = 'next') => {
    if (isAnimating.current || targetIndex === currentSlide || targetIndex < 0 || targetIndex >= totalSlides) {
      return;
    }

    isAnimating.current = true;

    const currentEl = slideRefs.current[currentSlide];
    const targetEl = slideRefs.current[targetIndex];

    if (!currentEl || !targetEl) {
      isAnimating.current = false;
      return;
    }

    // Set target element visible & z-index
    gsap.set(targetEl, {
      display: 'block',
      zIndex: 30,
      pointerEvents: 'auto'
    });

    gsap.set(currentEl, {
      zIndex: 20,
      pointerEvents: 'none'
    });

    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set(currentEl, { display: 'none' });
        setCurrentSlide(targetIndex);
        isAnimating.current = false;
      }
    });

    if (direction === 'next') {
      // Current slide zooms out & fades into backdrop depth
      timeline.to(currentEl, {
        scale: 1.25,
        opacity: 0,
        filter: 'blur(15px)',
        duration: 0.9,
        ease: 'power3.inOut'
      }, 0);

      // Target slide EMERGES FROM INSIDE (Scale 0.3 -> 1, Circle Mask 0% -> 150%)
      timeline.fromTo(
        targetEl,
        {
          scale: 0.3,
          opacity: 0,
          filter: 'blur(25px)',
          clipPath: 'circle(0% at 50% 50%)'
        },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          clipPath: 'circle(150% at 50% 50%)',
          duration: 1.0,
          ease: 'power4.out'
        },
        0.1
      );
    } else {
      // Reverse transition (Emerges inwards smoothly)
      timeline.to(currentEl, {
        scale: 0.3,
        opacity: 0,
        filter: 'blur(20px)',
        clipPath: 'circle(0% at 50% 50%)',
        duration: 0.9,
        ease: 'power3.inOut'
      }, 0);

      timeline.fromTo(
        targetEl,
        {
          scale: 1.25,
          opacity: 0,
          filter: 'blur(15px)',
          clipPath: 'circle(150% at 50% 50%)'
        },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          clipPath: 'circle(150% at 50% 50%)',
          duration: 1.0,
          ease: 'power4.out'
        },
        0.1
      );
    }
  };

  const goToSlide = (newIndex) => {
    if (newIndex > currentSlide) {
      transitionToSlide(newIndex, 'next');
    } else if (newIndex < currentSlide) {
      transitionToSlide(newIndex, 'prev');
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      transitionToSlide(currentSlide + 1, 'next');
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      transitionToSlide(currentSlide - 1, 'prev');
    }
  };

  // Listen for Mouse Wheel Events (No Native Document Scroll)
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isAnimating.current) return;

      if (e.deltaY > 25) {
        nextSlide();
      } else if (e.deltaY < -25) {
        prevSlide();
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isAnimating.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      if (diffY > 40) {
        nextSlide();
      } else if (diffY < -40) {
        prevSlide();
      }
    };

    const handleKeyDown = (e) => {
      if (isAnimating.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

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

      {/* Fixed Viewport Stacked Slide Layers (Emerges from Inside Portal Transition) */}
      <div className="relative z-10 w-full h-full overflow-hidden">
        {slides.map((slideComponent, idx) => (
          <section
            key={idx}
            ref={(el) => (slideRefs.current[idx] = el)}
            className="absolute inset-0 w-full h-full p-2 sm:p-4 flex flex-col justify-center items-center transform-gpu"
          >
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
        <span className="text-gray-300 text-xs hidden sm:inline ml-2 uppercase tracking-widest border-l border-red-900/50 pl-2 font-bold">
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
