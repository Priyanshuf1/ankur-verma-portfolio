import React from 'react';
import { TrendingUp, Target, DollarSign, Users, Award, ZoomIn } from 'lucide-react';

export default function SlideMetaAds({ onOpenModal }) {
  const kpis = [
    { label: 'Total Impressions', value: '1.2M+', icon: Users, color: 'text-red-500' },
    { label: 'Avg Click-Through Rate', value: '3.85%', icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Targeting Accuracy', value: '94%', icon: Target, color: 'text-[#cc0000]' },
    { label: 'Avg Cost Per Lead', value: '₹42', icon: DollarSign, color: 'text-amber-400' }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-4 py-3 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center shrink-0 mt-1 mb-2">
        <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-1 drop-shadow-md">
          META ADS &amp; CAMPAIGNS
        </h2>
        <p className="font-body text-white font-semibold text-xs sm:text-base max-w-3xl mx-auto drop-shadow-sm">
          High-ROAS Meta ad campaigns engineered for lead generation, customer acquisition, and brand scaling.
        </p>
      </div>

      {/* Main Grid: Left KPI Badges + Right Ads Dashboard Screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 w-full my-auto items-center">
        {/* Left Column: KPI Cards */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            {kpis.map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0e0407]/95 border-2 border-red-600/70 rounded-2xl p-4 shadow-xl backdrop-blur-md flex flex-col justify-between hover:border-red-500 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-futuristic text-xs sm:text-sm font-bold text-gray-200 uppercase truncate">
                      {kpi.label}
                    </span>
                    <Icon className={`w-5 h-5 ${kpi.color} shrink-0`} />
                  </div>
                  <span className={`font-futuristic text-2xl sm:text-4xl font-black ${kpi.color} drop-shadow-md`}>
                    {kpi.value}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Strategy Highlight Box */}
          <div className="border-2 border-dashed border-red-500/80 rounded-2xl p-4 sm:p-5 bg-[#0e0407]/95 shadow-xl backdrop-blur-md">
            <h3 className="font-futuristic text-base sm:text-lg font-black text-red-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Award className="w-5 h-5" /> Campaign Strategy Highlights
            </h3>
            <ul className="space-y-2 font-body text-xs sm:text-sm text-white font-bold">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span>Hyper-targeted audience segmentation for Real Estate &amp; D2C brands.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span>A/B testing ad creatives, copy hooks, and conversion landing pages.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span>Continuous bid optimization for maximum return on ad spend (ROAS).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: High Res Meta Ads Dashboard Screenshot */}
        <div className="md:col-span-7 flex justify-center items-center h-full">
          <div
            onClick={() => onOpenModal('/assets/meta_ads_dashboard.png', 'Meta Ads Manager Dashboard')}
            className="group relative w-full max-w-2xl bg-[#0d0406] rounded-2xl overflow-hidden border-2 border-red-600/70 hover:border-red-500 shadow-2xl cursor-pointer p-2"
            title="Inspect Meta Ads Manager Dashboard"
          >
            <img
              src="/assets/meta_ads_dashboard.png"
              alt="Meta Ads Manager Dashboard"
              className="w-full h-auto max-h-[380px] sm:max-h-[460px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
            {/* Zoom Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white font-futuristic text-xs font-bold uppercase rounded-2xl">
              <ZoomIn className="w-6 h-6 text-red-500" />
              <span>Inspect Ads Manager Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
