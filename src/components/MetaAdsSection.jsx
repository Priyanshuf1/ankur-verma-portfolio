import React from 'react';
import { ZoomIn, Target, BarChart2, DollarSign, MessageSquare } from 'lucide-react';

export default function MetaAdsSection({ onOpenModal }) {
  return (
    <section id="meta-ads" className="relative py-20 bg-damask border-t border-[#990000]/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-3">
            META ADS
          </h2>
          <p className="font-body text-gray-300 text-sm sm:text-base max-w-3xl mx-auto">
            Turning targeted Meta Ads into measurable business growth.
          </p>
        </div>

        {/* Campaign Metrics Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 max-w-5xl mx-auto">
          <div className="bg-[#0d0406]/90 border border-[#990000]/40 rounded-xl p-4 text-center shadow-lg">
            <Target className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <span className="text-[10px] font-futuristic uppercase text-gray-400 block">Total Reach</span>
            <span className="text-xl sm:text-2xl font-futuristic font-bold text-white">13,214</span>
          </div>
          <div className="bg-[#0d0406]/90 border border-[#990000]/40 rounded-xl p-4 text-center shadow-lg">
            <BarChart2 className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <span className="text-[10px] font-futuristic uppercase text-gray-400 block">Impressions</span>
            <span className="text-xl sm:text-2xl font-futuristic font-bold text-white">18,952</span>
          </div>
          <div className="bg-[#0d0406]/90 border border-[#990000]/40 rounded-xl p-4 text-center shadow-lg">
            <MessageSquare className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <span className="text-[10px] font-futuristic uppercase text-gray-400 block">Messaging Leads</span>
            <span className="text-xl sm:text-2xl font-futuristic font-bold text-white">44 Leads</span>
          </div>
          <div className="bg-[#0d0406]/90 border border-[#990000]/40 rounded-xl p-4 text-center shadow-lg">
            <DollarSign className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <span className="text-[10px] font-futuristic uppercase text-gray-400 block">Cost Per Result</span>
            <span className="text-xl sm:text-2xl font-futuristic font-bold text-red-400">₹41.01</span>
          </div>
        </div>

        {/* Ads Manager Dashboard Screenshot */}
        <div 
          onClick={() => onOpenModal('/assets/meta_ads_dashboard.png', 'Meta Ads Manager Table Report')}
          className="group relative bg-[#0d0406]/90 border border-[#990000]/40 rounded-2xl p-4 sm:p-6 shadow-2xl hover:border-red-500 transition-all cursor-pointer max-w-6xl mx-auto my-8"
        >
          <div className="flex items-center justify-between mb-4 border-b border-[#990000]/20 pb-3">
            <span className="text-xs font-futuristic text-red-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Meta Ads Manager Live Dashboard Report
            </span>
            <span className="text-xs text-gray-400 font-futuristic flex items-center gap-1 group-hover:text-white transition-colors">
              <ZoomIn className="w-4 h-4 text-red-500" /> Click to Expand Full Table
            </span>
          </div>

          <div className="relative aspect-[16/6] bg-black/80 rounded-xl overflow-hidden border border-white/10">
            <img 
              src="/assets/meta_ads_dashboard.png" 
              alt="Meta Ads Manager Performance Dashboard Screenshot"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-futuristic text-xs uppercase tracking-wider gap-2">
              <ZoomIn className="w-5 h-5 text-red-500" />
              <span>Inspect Detailed Campaign Metrics</span>
            </div>
          </div>
        </div>

        {/* Section Subtitle Footer */}
        <div className="text-center max-w-2xl mx-auto border-t border-[#990000]/30 pt-8">
          <h3 className="font-futuristic text-2xl text-red-600 font-bold mb-2">
            Campaign Intelligence
          </h3>
          <p className="font-body text-xs sm:text-sm text-gray-300">
            Smart targeting, creative execution, and performance-focused advertising.
          </p>
        </div>
      </div>
    </section>
  );
}
