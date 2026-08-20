import React from 'react';
import { TrendingUp, Target, DollarSign, Users, Award, ZoomIn, MessageSquare } from 'lucide-react';

export default function SlideMetaAds({ onOpenModal }) {
  const kpis = [
    { label: 'Total Reach', value: '13,214+', icon: Users, color: 'text-red-500' },
    { label: 'Total Impressions', value: '19,323+', icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Messaging Leads', value: '44 Leads', icon: MessageSquare, color: 'text-amber-400' },
    { label: 'Cost Per Result', value: '₹41.01', icon: DollarSign, color: 'text-white' }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-3 sm:px-4 py-2 sm:py-3 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center shrink-0 mt-0 mb-1">
        <h2 className="font-futuristic text-3xl sm:text-6xl md:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-1 drop-shadow-md">
          META ADS &amp; CAMPAIGNS
        </h2>
        <p className="font-body text-white font-semibold text-xs sm:text-base max-w-3xl mx-auto drop-shadow-sm px-2">
          High-ROAS Meta ad campaigns engineered for lead generation, customer acquisition, and brand scaling.
        </p>
      </div>

      {/* Verified KPI Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full shrink-0 my-1">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-[#0e0407]/95 border-2 border-red-600/70 rounded-2xl p-2.5 sm:p-3.5 shadow-xl backdrop-blur-md flex flex-col justify-between hover:border-red-500 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-futuristic text-[10px] sm:text-xs font-bold text-gray-200 uppercase truncate">
                  {kpi.label}
                </span>
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${kpi.color} shrink-0`} />
              </div>
              <span className={`font-futuristic text-xl sm:text-3xl font-black ${kpi.color} drop-shadow-md`}>
                {kpi.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* 2 Meta Ads Manager Verified Report Screenshots Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 w-full my-auto items-center overflow-y-auto max-h-[calc(100vh-230px)] custom-scrollbar p-1 scrollable-slide-content shrink">
        {/* Report 1: Results & Cost Per Result */}
        <div
          onClick={() => onOpenModal('/assets/meta_ads_report_1.png', 'Meta Ads Campaign Results & Cost Per Result Report')}
          className="group relative bg-[#0d0406] rounded-2xl overflow-hidden border-2 border-red-600/70 hover:border-red-500 shadow-2xl cursor-pointer p-2 flex flex-col justify-between interactive-control"
          title="Click to Zoom Campaign Results Report"
        >
          <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-red-900/40">
            <span className="font-futuristic text-xs font-bold text-red-400 uppercase tracking-wider">
              REPORT 1: RESULTS &amp; COST PER RESULT
            </span>
            <span className="font-futuristic text-[10px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-600/50 px-2 py-0.5 rounded-full">
              ₹41.01 / Lead
            </span>
          </div>
          <img
            src="/assets/meta_ads_report_1.png"
            alt="Meta Ads Campaign Results Report"
            className="w-full h-auto max-h-[220px] sm:max-h-[280px] object-contain rounded-xl bg-black/80 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white font-futuristic text-xs font-bold uppercase rounded-2xl">
            <ZoomIn className="w-6 h-6 text-red-500" />
            <span>ZOOM CAMPAIGN RESULTS</span>
          </div>
        </div>

        {/* Report 2: Reach & Impressions Report */}
        <div
          onClick={() => onOpenModal('/assets/meta_ads_report_2.png', 'Meta Ads Manager Reach & Impressions Report')}
          className="group relative bg-[#0d0406] rounded-2xl overflow-hidden border-2 border-red-600/70 hover:border-red-500 shadow-2xl cursor-pointer p-2 flex flex-col justify-between interactive-control"
          title="Click to Zoom Reach & Impressions Report"
        >
          <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-red-900/40">
            <span className="font-futuristic text-xs font-bold text-red-400 uppercase tracking-wider">
              REPORT 2: REACH &amp; IMPRESSIONS
            </span>
            <span className="font-futuristic text-[10px] text-red-300 font-bold bg-red-950/60 border border-red-600/50 px-2 py-0.5 rounded-full">
              13,214 Reach
            </span>
          </div>
          <img
            src="/assets/meta_ads_report_2.png"
            alt="Meta Ads Reach & Impressions Report"
            className="w-full h-auto max-h-[220px] sm:max-h-[280px] object-contain rounded-xl bg-black/80 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white font-futuristic text-xs font-bold uppercase rounded-2xl">
            <ZoomIn className="w-6 h-6 text-red-500" />
            <span>ZOOM REACH REPORT</span>
          </div>
        </div>
      </div>

      {/* Subtitle Footer */}
      <div className="mt-1 text-center max-w-2xl mx-auto border-t border-[#990000]/40 pt-1 shrink-0">
        <h3 className="font-futuristic text-xs sm:text-sm text-red-500 font-black mb-0.5 uppercase tracking-wide">
          Campaign Performance Summary
        </h3>
        <p className="font-body text-[11px] sm:text-xs text-white font-semibold">
          Meta Ads Manager performance tracking: 44 messaging leads generated at ₹41.01 cost per result with 13,214 reach.
        </p>
      </div>
    </div>
  );
}
