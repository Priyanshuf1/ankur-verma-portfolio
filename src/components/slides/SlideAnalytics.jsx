import React from 'react';
import { ZoomIn, Eye, TrendingUp, ArrowRight } from 'lucide-react';
import TiltCard from '../TiltCard';

const InstagramIcon = () => (
  <svg className="w-4 h-4 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      profileSrc: '/assets/reach_original_1.jpeg',
      insightsSrc: '/assets/reach_hd_insights_1.png'
    },
    {
      id: 2,
      brand: 'Tabs 19 Studio',
      handle: '@tabs_19studio',
      metrics: '231 Followers • 17,256 Views',
      reach: '73.7% Reels Engagement',
      profileSrc: '/assets/reach_original_2.jpeg',
      insightsSrc: '/assets/reach_hd_insights_2.png'
    },
    {
      id: 3,
      brand: 'B Luxury Salon',
      handle: '@bluxury_salon',
      metrics: '401 Followers • 17,256 Views',
      reach: '79.1% Non-followers Reach',
      profileSrc: '/assets/reach_original_3.jpeg',
      insightsSrc: '/assets/reach_hd_insights_3.png'
    },
    {
      id: 4,
      brand: 'HomeArchs Construction',
      handle: '@homearchsofficial',
      metrics: '2,255 Followers • 106,859 Views',
      reach: '95.5% Non-followers Growth',
      profileSrc: '/assets/reach_original_4.jpeg',
      insightsSrc: '/assets/reach_hd_insights_4.png'
    },
    {
      id: 5,
      brand: 'Om Group Builders',
      handle: '@om_group_builder',
      metrics: '486 Followers • 898,034 Views',
      reach: '596,213 Viewers Reached',
      profileSrc: '/assets/reach_original_5.jpeg',
      insightsSrc: '/assets/reach_hd_insights_5.png'
    },
    {
      id: 6,
      brand: 'Swarnim Lite',
      handle: '@swarnimlite',
      metrics: '49 Followers • 15,767 Views',
      reach: '75.3% Non-followers Reach',
      profileSrc: '/assets/reach_original_6.jpeg',
      insightsSrc: '/assets/reach_hd_insights_6.png'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-2 sm:px-4 py-2 max-w-7xl mx-auto overflow-hidden font-poppins">
      {/* Header */}
      <div className="text-center shrink-0 mt-0 mb-1">
        <h2 className="font-poppins text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#b30000] tracking-tight uppercase select-none mb-1 drop-shadow-md">
          REACH &amp; PERFORMANCE
        </h2>
        <p className="font-poppins text-white font-medium text-xs sm:text-base max-w-3xl mx-auto drop-shadow-sm px-2">
          Data-driven reach that creates meaningful brand growth across multiple social media business profiles.
        </p>
      </div>

      {/* 6 Account Boxes Container */}
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full overflow-x-auto sm:overflow-y-auto max-h-[calc(100vh-185px)] p-2 custom-scrollbar snap-x snap-mandatory slide-interactive my-auto shrink">
        {accounts.map((acc) => (
          <div key={acc.id} className="w-[85vw] sm:w-auto shrink-0 snap-center">
            <TiltCard
              maxDegree={6}
              scaleOnHover={1.02}
              className="bg-[#0d0406]/95 border border-[#990000]/70 rounded-2xl p-3 shadow-2xl hover:border-red-500 hover:shadow-[0_0_25px_rgba(255,26,26,0.6)] transition-all flex flex-col justify-between h-full"
            >
              {/* Account Title Header (Poppins ExtraBold) */}
              <div className="mb-2 border-b border-[#990000]/40 pb-2">
                <div className="flex items-center gap-1.5">
                  <InstagramIcon />
                  <h3 className="font-poppins text-xs sm:text-sm font-bold text-white truncate tracking-wide">
                    {acc.brand}
                  </h3>
                </div>
                <span className="text-[11px] font-poppins text-red-400 block truncate font-extrabold mt-0.5 tracking-wider">
                  {acc.handle}
                </span>
              </div>

              {/* Dual Phone Screens Side-by-Side */}
              <div className="grid grid-cols-2 gap-2 my-1">
                <div
                  onClick={() => onOpenModal(acc.profileSrc, `${acc.brand} — Account Profile Screenshot`)}
                  className="group relative h-40 sm:h-44 bg-black/90 rounded-xl overflow-hidden border border-white/30 hover:border-red-500 cursor-pointer shadow-md flex items-center justify-center interactive-control"
                  title="Page 1: Account Profile"
                >
                  <img
                    src={acc.profileSrc}
                    alt={`${acc.brand} Account Profile`}
                    className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-poppins uppercase gap-1 p-1 text-center font-bold">
                    <ZoomIn className="w-4 h-4 text-red-500" />
                    <span>PAGE 1: ACCOUNT</span>
                  </div>
                </div>

                <div
                  onClick={() => onOpenModal(acc.insightsSrc, `${acc.brand} — Reach & Analytics Insights`)}
                  className="group relative h-40 sm:h-44 bg-black/90 rounded-xl overflow-hidden border border-white/30 hover:border-red-500 cursor-pointer shadow-md flex items-center justify-center interactive-control"
                  title="Page 2: Reach & Analytics Insights"
                >
                  <img
                    src={acc.insightsSrc}
                    alt={`${acc.brand} Reach Insights`}
                    className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-poppins uppercase gap-1 p-1 text-center font-bold">
                    <ZoomIn className="w-4 h-4 text-red-500" />
                    <span>PAGE 2: REACH</span>
                  </div>
                </div>
              </div>

              {/* Metrics & Performance Badge (Poppins Bold Crisp Contrast) */}
              <div className="mt-2 pt-2 border-t border-[#990000]/40 bg-[#16070a] rounded-xl p-2 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-[11px] text-gray-100 font-poppins font-semibold">
                  <Eye className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="truncate">{acc.metrics}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-[10.5px] text-emerald-400 font-poppins font-extrabold">
                  <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{acc.reach}</span>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>

      {/* Slide to View Work Note & Symbol Badge */}
      <div className="mt-1 flex items-center justify-center gap-2 bg-[#990000]/40 border border-red-500/70 px-4 py-1.5 rounded-full shadow-lg shrink-0">
        <span className="font-poppins text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
          SLIDE TO VIEW WORK
        </span>
        <ArrowRight className="w-4 h-4 text-red-400 animate-pulse shrink-0" />
      </div>
    </div>
  );
}
