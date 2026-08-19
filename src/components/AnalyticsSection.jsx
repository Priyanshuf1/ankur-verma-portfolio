import React from 'react';
import { ZoomIn, TrendingUp, Eye, Users } from 'lucide-react';
import TiltCard from './TiltCard';

const InstagramIcon = () => (
  <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function AnalyticsSection({ onOpenModal }) {
  const accounts = [
    {
      id: 1,
      brand: 'Shubhshadi.in',
      handle: '@shubhshadi.in',
      metrics: '1,585 Followers • 181,065 Views (25 Jul - 23 Aug)',
      reach: '122,354 Accounts Reached',
      profileSrc: '/assets/analytics_shubhshadi_profile.png',
      insightsSrc: '/assets/analytics_shubhshadi_insights.png'
    },
    {
      id: 2,
      brand: 'Tabs 19 Studio',
      handle: '@tabs_19studio',
      metrics: '231 Followers • 17,256 Views',
      reach: '73.7% Reels Views',
      profileSrc: '/assets/analytics_tabs19_profile.png',
      insightsSrc: '/assets/analytics_tabs19_insights.png'
    },
    {
      id: 3,
      brand: 'B Luxury Salon',
      handle: '@bluxury_salon',
      metrics: '401 Followers • 17,256 Views',
      reach: '79.1% Non-followers Reach',
      profileSrc: '/assets/analytics_bluxury_profile.png',
      insightsSrc: '/assets/analytics_bluxury_insights.png'
    },
    {
      id: 4,
      brand: 'HomeArchs Construction',
      handle: '@homearchsofficial',
      metrics: '2,255 Followers • 106,859 Views',
      reach: '95.5% Non-followers Growth',
      profileSrc: '/assets/analytics_homearchs_profile.png',
      insightsSrc: '/assets/analytics_homearchs_insights.png'
    },
    {
      id: 5,
      brand: 'Om Group Builders',
      handle: '@om_group_builder',
      metrics: '486 Followers • 898,034 Views',
      reach: '596,213 Viewers Reached',
      profileSrc: '/assets/analytics_omgroup_profile.png',
      insightsSrc: '/assets/analytics_omgroup_insights.png'
    },
    {
      id: 6,
      brand: 'Swarnim Lite',
      handle: '@swarnimlite',
      metrics: '49 Followers • 15,767 Views',
      reach: '75.3% Non-followers Engagement',
      profileSrc: '/assets/analytics_swarnim_profile.png',
      insightsSrc: '/assets/analytics_swarnim_insights.png'
    }
  ];

  return (
    <section id="analytics" className="relative py-20 bg-damask border-t border-[#990000]/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="font-futuristic text-4xl sm:text-6xl md:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-3">
            REACH &amp; PERFORMANCE
          </h2>
          <p className="font-body text-gray-300 text-sm sm:text-base max-w-3xl mx-auto">
            Data-driven reach that creates meaningful brand growth.
          </p>
        </div>

        {/* Analytics Accounts 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {accounts.map((acc) => (
            <TiltCard
              key={acc.id}
              maxDegree={10}
              scaleOnHover={1.03}
              className="bg-[#0d0406]/90 border border-[#990000]/40 rounded-2xl p-5 shadow-xl hover:border-red-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] transition-all flex flex-col justify-between"
            >
              {/* Account Header */}
              <div className="flex items-center justify-between mb-4 border-b border-[#990000]/20 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <InstagramIcon />
                    <h3 className="font-futuristic text-base font-bold text-white">
                      {acc.brand}
                    </h3>
                  </div>
                  <span className="text-xs font-body text-red-400 block mt-0.5">
                    {acc.handle}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-futuristic bg-red-950/60 border border-red-800 text-red-300 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-red-400" /> Verified Growth
                </span>
              </div>

              {/* Pair of Phone Screens: Profile & Insights */}
              <div className="grid grid-cols-2 gap-3 my-2">
                {/* Profile Screenshot */}
                <div
                  onClick={() => onOpenModal(acc.profileSrc, `${acc.brand} Profile`)}
                  className="group relative aspect-[9/16] bg-black/60 rounded-xl overflow-hidden border border-white/10 hover:border-red-500 cursor-pointer shadow-lg"
                >
                  <img
                    src={acc.profileSrc}
                    alt={`${acc.brand} Profile`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center text-white text-[10px] font-futuristic uppercase">
                    <ZoomIn className="w-4 h-4 text-red-500 mb-1" />
                    <span>Profile View</span>
                  </div>
                </div>

                {/* Insights Screenshot */}
                <div
                  onClick={() => onOpenModal(acc.insightsSrc, `${acc.brand} Insights`)}
                  className="group relative aspect-[9/16] bg-black/60 rounded-xl overflow-hidden border border-white/10 hover:border-red-500 cursor-pointer shadow-lg"
                >
                  <img
                    src={acc.insightsSrc}
                    alt={`${acc.brand} Insights`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center text-white text-[10px] font-futuristic uppercase">
                    <ZoomIn className="w-4 h-4 text-red-500 mb-1" />
                    <span>Insights Graph</span>
                  </div>
                </div>
              </div>

              {/* Metrics Badge */}
              <div className="mt-4 pt-3 border-t border-[#990000]/20 bg-[#120608] rounded-lg p-2.5">
                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-body">
                  <Eye className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="line-clamp-1">{acc.metrics}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-body mt-1">
                  <Users className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{acc.reach}</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Section Subtitle Footer */}
        <div className="text-center max-w-2xl mx-auto border-t border-[#990000]/30 pt-8">
          <h3 className="font-futuristic text-2xl text-red-600 font-bold mb-2">
            What this section communicates
          </h3>
          <p className="font-body text-xs sm:text-sm text-gray-300">
            Demonstrates hands-on social media management and performance tracking across multiple business profiles.
          </p>
        </div>
      </div>
    </section>
  );
}
