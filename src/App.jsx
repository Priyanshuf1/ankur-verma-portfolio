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

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '' });
  
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const wheelCooldown = useRef(0);
  const slideRefs = useRef([]);

  const totalSlides = 11;

  // Initialize Hardware-Accelerated Mobile-First Slide Stack
  useEffect(() => {
    slideRefs.current.forEach((slide, idx) => {
      if (!slide) return;
      if (idx === 0) {
        gsap.set(slide, {
          scale: 1,
          y: 0,
          opacity: 1,
          zIndex: 20,
          pointerEvents: 'auto',
          display: 'block'
        });
      } else {
        gsap.set(slide, {
          scale: 0.95,
          y: 40,
          opacity: 0,
          zIndex: 10,
          pointerEvents: 'none',
          display: 'none'
        });
      }
    });
  }, []);

  // Check if touch target is a button or interactive control
  const isInteractiveTarget = (target) => {
    if (!target) return false;
    return (
      target.closest('button') ||
      target.closest('a') ||
      target.closest('video') ||
      target.closest('input') ||
      target.closest('select') ||
      target.closest('[role="button"]') ||
      target.closest('.interactive-control') ||
      target.closest('.modal-overlay') ||
      target.closest('.slide-interactive')
    );
  };

  // 60FPS High-Performance Mobile-Optimized Transition Engine (0 Lag, Pure GPU Transform)
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

    const animDuration = window.innerWidth < 768 ? 0.45 : 0.55;

    if (direction === 'next') {
      timeline.to(currentEl, {
        scale: 0.92,
        y: -40,
        opacity: 0,
        duration: animDuration,
        ease: 'power2.inOut',
        force3D: true
      }, 0);

      timeline.fromTo(
        targetEl,
        {
          scale: 0.95,
          y: 60,
          opacity: 0
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: animDuration + 0.05,
          ease: 'power2.out',
          force3D: true
        },
        0.02
      );
    } else {
      timeline.to(currentEl, {
        scale: 0.95,
        y: 60,
        opacity: 0,
        duration: animDuration,
        ease: 'power2.inOut',
        force3D: true
      }, 0);

      timeline.fromTo(
        targetEl,
        {
          scale: 0.92,
          y: -40,
          opacity: 0
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: animDuration + 0.05,
          ease: 'power2.out',
          force3D: true
        },
        0.02
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

  // High-Precision Mobile Touch & Wheel Protection
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (isAnimating.current || now - wheelCooldown.current < 350) return;

      if (e.deltaY > 10) {
        wheelCooldown.current = now;
        nextSlide();
      } else if (e.deltaY < -10) {
        wheelCooldown.current = now;
        prevSlide();
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      if (isAnimating.current) return;

      // DO NOT trigger slide transitions if tapping an interactive button / link / modal / control!
      if (isInteractiveTarget(e.target)) {
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;

      const diffY = touchStartY.current - touchEndY;
      const diffX = touchStartX.current - touchEndX;

      // Require vertical swipe (> 30px & dominant vertical angle)
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 30) {
        if (diffY > 0) {
          nextSlide(); // Finger swiped UP -> Go to NEXT slide
        } else {
          prevSlide(); // Finger swiped DOWN -> Go to PREVIOUS slide
        }
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
    <div className="relative w-screen h-screen overflow-hidden bg-[#0a0506] text-white select-none">
      {/* Exact Fleety Webflow Background Asset */}
      <BackgroundVFX />

      {/* Top Webflow Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-black/60 backdrop-blur-md pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-red-700 via-red-500 to-amber-500 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(239,68,68,0.9)]"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Fixed Viewport Stacked Slide Layers (Hardware Accelerated) */}
      <div className="relative z-10 w-full h-full overflow-hidden">
        {slides.map((slideComponent, idx) => (
          <section
            key={idx}
            ref={(el) => (slideRefs.current[idx] = el)}
            className="absolute inset-0 w-full h-full p-2 sm:p-4 flex flex-col justify-center items-center transform-gpu will-change-transform"
          >
            <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center">
              {slideComponent}
            </div>
          </section>
        ))}
      </div>

      {/* Navigation Arrows (Bottom-Right) */}
      <div className="fixed right-3 sm:right-6 bottom-4 sm:bottom-6 z-40 flex items-center gap-2 interactive-control">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full border backdrop-blur-md transition-all ${
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
          className={`p-3 rounded-full border backdrop-blur-md transition-all ${
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
