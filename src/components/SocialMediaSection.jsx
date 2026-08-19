import React from 'react';
import { ZoomIn, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

export default function SocialMediaSection({ onOpenModal }) {
  const posts = [
    {
      id: 1,
      title: 'Sizzling Tandoori Chicken',
      category: 'Café & Restaurant',
      src: '/assets/social_tandoori.png'
    },
    {
      id: 2,
      title: 'B Luxury Unisex Salon — Happy Hours 50%',
      category: 'Luxury Salon',
      src: '/assets/social_bluxury_salon_happyhours.png'
    },
    {
      id: 3,
      title: 'Vinca Unisex Salon — Hair Spa Offer',
      category: 'Beauty & Hair Care',
      src: '/assets/social_vinca_salon.png'
    },
    {
      id: 4,
      title: 'Krazy 4 Cakes Bakery Workshop',
      category: 'Event & Bakery',
      src: '/assets/social_krazy4cakes.png'
    },
    {
      id: 5,
      title: 'Tabs19 Studio — Party Makeup',
      category: 'Bridal & Party Makeup',
      src: '/assets/social_tabs19_partymakeup.png'
    },
    {
      id: 6,
      title: 'Tabs19 Studio — Happy Hours 50% Off',
      category: 'Unisex Salon',
      src: '/assets/social_tabs19_happyhours.png'
    },
    {
      id: 7,
      title: 'GlowX — Glow Through Winter Serum',
      category: 'D2C Skincare Brand',
      src: '/assets/social_glowx_serum.png'
    },
    {
      id: 8,
      title: 'Tabs19 Studio — Wedding Bride Makeup',
      category: 'Bridal Makeup',
      src: '/assets/social_tabs19_bride.png'
    },
    {
      id: 9,
      title: 'Elevate Living Experience — Furniture 30% Off',
      category: 'Home & Interiors',
      src: '/assets/social_furniture_living.png'
    }
  ];

  return (
    <section id="social-media" className="relative py-20 bg-damask border-t border-[#990000]/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Title */}
        <div className="text-center mb-4">
          <div className="inline-flex flex-wrap items-baseline justify-center gap-3">
            <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none">
              SOCIAL MEDIA
            </h2>
            <span className="font-script text-4xl sm:text-6xl text-white">
              Post
            </span>
          </div>
          <p className="font-body text-gray-300 text-sm sm:text-base max-w-3xl mx-auto mt-2">
            Creative social media designs crafted to enhance brand visibility, engagement, and digital presence.
          </p>
        </div>

        {/* Multi-Row Posts Gallery Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-12">
          {posts.map((post) => (
            <TiltCard
              key={post.id}
              maxDegree={12}
              scaleOnHover={1.03}
              onClick={() => onOpenModal(post.src, post.title)}
              className="group bg-[#0d0406]/90 border border-[#990000]/40 rounded-xl shadow-xl hover:border-red-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.5)] transition-all"
            >
              <div className="relative aspect-[3/4] bg-black/40 overflow-hidden flex items-center justify-center">
                <img
                  src={post.src}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-futuristic text-xs uppercase tracking-wider">
                  <ZoomIn className="w-5 h-5 text-red-500" />
                  <span>View High-Res Creative</span>
                </div>
              </div>

              <div className="p-4 border-t border-[#990000]/20 bg-[#140609]">
                <span className="text-[10px] font-futuristic uppercase tracking-widest text-red-400 block mb-1">
                  {post.category}
                </span>
                <h3 className="font-body text-sm font-semibold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                  {post.title}
                </h3>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Feature Banner: 3-Panel Catering Campaign */}
        <div className="my-14 bg-[#0d0406]/90 border border-[#990000]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <span className="text-xs font-futuristic uppercase tracking-widest text-red-500 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Multi-Panel Creative Campaign
              </span>
              <h3 className="font-futuristic text-2xl font-bold text-white mt-1">
                The Spicy Affair — Catering Service 3-Panel Carousel
              </h3>
            </div>
            <button
              onClick={() => onOpenModal('/assets/social_spicy_affair_catering.png', 'The Spicy Affair Catering Campaign')}
              className="px-5 py-2.5 rounded-lg bg-[#990000] text-white font-futuristic text-xs uppercase tracking-wider hover:bg-red-600 hover:shadow-[0_0_20px_rgba(230,0,0,0.6)] transition-all shadow-lg cursor-pointer"
            >
              Zoom Full Carousel
            </button>
          </div>

          <TiltCard
            maxDegree={6}
            scaleOnHover={1.01}
            onClick={() => onOpenModal('/assets/social_spicy_affair_catering.png', 'The Spicy Affair Catering Campaign')}
            className="rounded-xl overflow-hidden border border-white/10 hover:border-red-500 shadow-inner"
          >
            <img 
              src="/assets/social_spicy_affair_catering.png" 
              alt="The Spicy Affair 3-Panel Catering Post Design"
              className="w-full h-auto object-cover"
            />
          </TiltCard>
        </div>

        {/* Subtitle Footer */}
        <div className="text-center max-w-2xl mx-auto border-t border-[#990000]/30 pt-8">
          <h3 className="font-futuristic text-2xl text-red-600 font-bold mb-2">
            Engagement Through Designn
          </h3>
          <p className="font-body text-xs sm:text-sm text-gray-300">
            Scroll-stopping visuals designed to connect brands with their audience.
          </p>
        </div>
      </div>
    </section>
  );
}
