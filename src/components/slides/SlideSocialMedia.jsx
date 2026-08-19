import React from 'react';
import Webflow3DSlider from '../Webflow3DSlider';

export default function SlideSocialMedia({ onOpenModal }) {
  const socialItems = [
    {
      src: '/assets/social_new_enhanced_1.png',
      title: 'Luxury Property Showcase — Real Estate Creative',
      category: 'Real Estate & Property'
    },
    {
      src: '/assets/social_new_enhanced_2.png',
      title: 'D2C Skincare & Beauty Product Campaign',
      category: 'D2C Brand Marketing'
    },
    {
      src: '/assets/social_new_enhanced_3.png',
      title: 'Exclusive Salon Offer & Special Package',
      category: 'Salon & Wellness'
    },
    {
      src: '/assets/social_new_enhanced_4.png',
      title: 'Premium Hospitality & Gourmet Food Banner',
      category: 'Café & Restaurant'
    },
    {
      src: '/assets/social_new_enhanced_5.png',
      title: 'Brand Positioning & Social Media Story',
      category: 'Brand Strategy'
    },
    {
      src: '/assets/social_tabs19_happyhours.png',
      title: 'Tabs19 Studio — Weekday Happy Hours',
      category: 'Unisex Salon'
    },
    {
      src: '/assets/social_glowx_serum.png',
      title: 'GlowX Niacinamide Serum Creative',
      category: 'D2C Skincare'
    },
    {
      src: '/assets/social_tabs19_bride.png',
      title: 'Tabs19 Studio — HD Makeup Package',
      category: 'Bridal Package'
    },
    {
      src: '/assets/social_furniture_living.png',
      title: 'Living Experience — Modern Home Furniture',
      category: 'Real Estate & Interior'
    },
    {
      src: '/assets/social_spicy_affair_catering.png',
      title: 'Spicy Affair Catering — 3-Panel Campaign Banner',
      category: '3-Panel Campaign Banner'
    }
  ];

  const handleCardClick = (item) => {
    if (onOpenModal) {
      onOpenModal(item.src, `${item.title} — ${item.category}`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Webflow3DSlider
        title="SOCIAL MEDIA"
        subtitle="Creative social media designs crafted to enhance brand visibility, engagement, and digital presence."
        items={socialItems}
        autoPlayInterval={1200}
        pauseOnHover={false}
        onItemClick={handleCardClick}
      />
    </div>
  );
}
