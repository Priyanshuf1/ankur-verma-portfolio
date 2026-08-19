import React from 'react';
import { ZoomIn, Target, BarChart2, DollarSign, MessageSquare } from 'lucide-react';
import TiltCard from '../TiltCard';

export default function SlideMetaAds({ onOpenModal }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 py-4 max-w-6xl mx-auto overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-3">
        <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-1.5">
          META ADS
        </h2>
        <p className="font-body text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto">
          Turning targeted Meta Ads into measurable business growth.
        </p>
      </div>

      {/* Campaign Metrics Summary Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-3 w-full max-w-4xl">
        <TiltCard maxDegree={8} scaleOnHover={1.04} className="bg-[#0d0406]/90 border border-[#990000]/50 rounded-xl p-3 text-center shadow-lg">
          <Target className="w-4 h-4 text-red-500 mx-auto mb-0.5" />
          <span className="text-[9px] font-futuristic uppercase text-gray-400 block">Total Reach</span>
          <span className="text-lg sm:text-xl font-futuristic font-bold text-white">13,214</span>
        </TiltCard>
        <TiltCard maxDegree={8} scaleOnHover={1.04} className="bg-[#0d0406]/90 border border-[#990000]/50 rounded-xl p-3 text-center shadow-lg">
          <BarChart2 className="w-4 h-4 text-red-500 mx-auto mb-0.5" />
          <span className="text-[9px] font-futuristic uppercase text-gray-400 block">Impressions</span>
          <span className="text-lg sm:text-xl font-futuristic font-bold text-white">18,952</span>
        </TiltCard>
        <TiltCard maxDegree={8} scaleOnHover={1.04} className="bg-[#0d0406]/90 border border-[#990000]/50 rounded-xl p-3 text-center shadow-lg">
          <MessageSquare className="w-4 h-4 text-red-500 mx-auto mb-0.5" />
          <span className="text-[9px] font-futuristic uppercase text-gray-400 block">Messaging Leads</span>
          <span className="text-lg sm:text-xl font-futuristic font-bold text-white">44 Leads</span>
        </TiltCard>
        <TiltCard maxDegree={8} scaleOnHover={1.04} className="bg-[#0d0406]/90 border border-[#990000]/50 rounded-xl p-3 text-center shadow-lg">
          <DollarSign className="w-4 h-4 text-red-500 mx-auto mb-0.5" />
          <span className="text-[9px] font-futuristic uppercase text-gray-400 block">Cost Per Result</span>
          <span className="text-lg sm:text-xl font-futuristic font-bold text-red-400">₹41.01</span>
        </TiltCard>
      </div>

      {/* Ads Manager Dashboard Table Cutout Box with 3D Tilt */}
      <TiltCard
        maxDegree={6}
        scaleOnHover={1.02}
        onClick={() => onOpenModal('/assets/meta_ads_dashboard.png', 'Meta Ads Manager Live Dashboard')}
        className="w-full max-w-4xl bg-[#0d0406]/90 border border-[#990000]/50 rounded-xl p-3 sm:p-4 shadow-2xl hover:border-red-500 hover:shadow-[0_0_25px_rgba(255,26,26,0.45)] transition-all my-2 cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2 border-b border-[#990000]/20 pb-2">
          <span className="text-[10px] font-futuristic text-red-400 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Ads Manager Data
          </span>
          <span className="text-[10px] text-gray-400 font-futuristic flex items-center gap-1">
            <ZoomIn className="w-3.5 h-3.5 text-red-500" /> Click to Expand Full Table
          </span>
        </div>

        <div className="relative aspect-[16/5] bg-black/80 rounded-lg overflow-hidden border border-white/10">
          <img 
            src="/assets/meta_ads_dashboard.png" 
            alt="Meta Ads Performance Table Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
      </TiltCard>

      {/* Subtitle Footer */}
      <div className="mt-4 text-center max-w-xl mx-auto border-t border-[#990000]/30 pt-3">
        <h3 className="font-futuristic text-lg sm:text-xl text-red-600 font-bold mb-0.5">
          Campaign Intelligence
        </h3>
        <p className="font-body text-[11px] sm:text-xs text-gray-300">
          Smart targeting, creative execution, and performance-focused advertising.
        </p>
      </div>
    </div>
  );
}
