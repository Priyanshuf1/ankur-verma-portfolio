import React from 'react';
import { ZoomIn, Eye, TrendingUp } from 'lucide-react';
import TiltCard from '../TiltCard';

const InstagramIcon = () => (
  <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function SlideAnalytics({ onOpenModal }) {
  const accounts = [
    {
      id: 1,
      brand: 'Shubhshadi.in',
      handle: '@shubhshadi.in',
      metrics: '1,585 Followers • 181,065 Views',
      reach: '122,354 Accounts Reached (+348%)',
      profileSrc: '/assets/reach_hd_profile_1.png',
      insightsSrc: '/assets/reach_hd_insights_1.png'
    },
    {
      id: 2,
      brand: 'Tabs 19 Studio',
      handle: '@tabs_19studio',
      metrics: '231 Followers • 17,256 Views',
      reach: '73.7% Reels Engagement',
      profileSrc: '/assets/reach_hd_profile_2.png',
      insightsSrc: '/assets/reach_hd_insights_2.png'
    },
    {
      id: 3,
      brand: 'B Luxury Salon',
      handle: '@bluxury_salon',
      metrics: '401 Followers • 17,256 Views',
      reach: '79.1% Non-followers Reach',
      profileSrc: '/assets/reach_hd_profile_3.png',
      insightsSrc: '/assets/reach_hd_insights_3.png'
    },
    {
      id: 4,
      brand: 'HomeArchs Construction',
      handle: '@homearchsofficial',
      metrics: '2,255 Followers • 106,859 Views',
      reach: '95.5% Non-followers Growth',
      profileSrc: '/assets/reach_hd_profile_4.png',
      insightsSrc: '/assets/reach_hd_insights_4.png'
    },
    {
      id: 5,
      brand: 'Om Group Builders',
      handle: '@om_group_builder',
      metrics: '486 Followers • 898,034 Views',
      reach: '596,213 Viewers Reached',
      profileSrc: '/assets/reach_hd_profile_5.png',
      insightsSrc: '/assets/reach_hd_insights_5.png'
    },
    {
      id: 6,
      brand: 'Swarnim Lite',
      handle: '@swarnimlite',
      metrics: '49 Followers • 15,767 Views',
      reach: '75.3% Non-followers Reach',
      profileSrc: '/assets/reach_hd_profile_6.png',
      insightsSrc: '/assets/reach_hd_insights_6.png'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-4 py-3 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center shrink-0 mt-1 mb-2">
        <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-1 drop-shadow-md">
          REACH &amp; PERFORMANCE
        </h2>
        <p className="font-body text-gray-300 text-xs sm:text-base max-w-3xl mx-auto font-medium">
          Data-driven reach that creates meaningful brand growth across multiple social media business profiles.
        </p>
      </div>

      {/* 6 Instagram Account Cards Grid (High Resolution HD Cards - Perfect Fit) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full my-auto">
        {accounts.map((acc) => (
          <TiltCard
            key={acc.id}
            maxDegree={8}
            scaleOnHover={1.04}
            className="bg-[#0d0406]/95 border border-[#990000]/60 rounded-2xl p-3 shadow-2xl hover:border-red-500 hover:shadow-[0_0_25px_rgba(255,26,26,0.5)] transition-all flex flex-col justify-between"
          >
            {/* Account Title */}
            <div className="mb-2 border-b border-[#990000]/30 pb-2">
              <div className="flex items-center gap-1.5">
                <InstagramIcon />
                <h3 className="font-futuristic text-xs sm:text-sm font-bold text-white truncate">
                  {acc.brand}
                </h3>
              </div>
              <span className="text-[10px] font-futuristic text-red-400 block truncate font-bold mt-0.5">
                {acc.handle}
              </span>
            </div>

            {/* Consecutive Pair of HD Phone Screens (Page 1: Account Profile -> Page 2: Reach Analytics - Perfectly Fitted Edge-to-Edge) */}
            <div className="grid grid-cols-2 gap-2 my-1">
              <div
                onClick={() => onOpenModal(acc.profileSrc, `${acc.brand} — Social Media Account Page`)}
                className="group relative h-40 sm:h-48 bg-black/80 rounded-xl overflow-hidden border border-white/20 hover:border-red-500 cursor-pointer shadow-md flex items-center justify-center"
                title="Page 1: Social Media Account Profile"
              >
                <img
                  src={acc.profileSrc}
                  alt={`${acc.brand} Account Profile`}
                  className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[9px] font-futuristic uppercase gap-1 p-1 text-center">
                  <ZoomIn className="w-4 h-4 text-red-500" />
                  <span>PAGE 1: ACCOUNT</span>
                </div>
              </div>

              <div
                onClick={() => onOpenModal(acc.insightsSrc, `${acc.brand} — Reach & Performance Analytics`)}
                className="group relative h-40 sm:h-48 bg-black/80 rounded-xl overflow-hidden border border-white/20 hover:border-red-500 cursor-pointer shadow-md flex items-center justify-center"
                title="Page 2: Reach & Analytics Insights"
              >
                <img
                  src={acc.insightsSrc}
                  alt={`${acc.brand} Reach Insights`}
                  className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[9px] font-futuristic uppercase gap-1 p-1 text-center">
                  <ZoomIn className="w-4 h-4 text-red-500" />
                  <span>PAGE 2: REACH</span>
                </div>
              </div>
            </div>

            {/* Metrics & Performance Badge */}
            <div className="mt-2 pt-2 border-t border-[#990000]/30 bg-[#140608] rounded-xl p-2 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-200 font-body">
                <Eye className="w-3 h-3 text-red-400 shrink-0" />
                <span className="truncate font-semibold">{acc.metrics}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-futuristic">
                <TrendingUp className="w-3 h-3 shrink-0" />
                <span className="truncate font-bold">{acc.reach}</span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Subtitle Footer */}
      <div className="mt-2 text-center max-w-2xl mx-auto border-t border-[#990000]/30 pt-2 shrink-0">
        <h3 className="font-futuristic text-base sm:text-lg text-red-500 font-bold mb-0.5 uppercase tracking-wide">
          What this section communicates
        </h3>
        <p className="font-body text-xs text-gray-300">
          Demonstrates hands-on social media management and performance tracking across multiple business profiles.
        </p>
      </div>
    </div>
  );
}
