import React from 'react';
import { Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';
import TiltCard from '../TiltCard';

export default function SlideContact() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 py-4 max-w-5xl mx-auto text-center overflow-y-auto">
      {/* THANK You! Header */}
      <div className="mb-4 inline-flex flex-wrap items-baseline justify-center gap-3">
        <h2 className="font-futuristic text-6xl sm:text-8xl font-black text-[#b30000] tracking-wider uppercase select-none drop-shadow-[0_10px_35px_rgba(180,0,0,0.7)]">
          THANK
        </h2>
        <span className="font-script text-5xl sm:text-7xl text-white">
          You!
        </span>
      </div>

      <p className="font-body text-gray-200 text-base sm:text-lg font-medium max-w-2xl mx-auto mb-8">
        Let’s build a stronger digital presence.
      </p>

      {/* 3 Contact Cards Grid with 3D Tilt */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mx-auto mb-10">
        {/* Phone */}
        <TiltCard
          maxDegree={12}
          scaleOnHover={1.06}
          className="border-dashed-crimson rounded-2xl p-5 bg-[#0d0406]/90 backdrop-blur-md flex flex-col items-center justify-center gap-2 group"
        >
          <div className="w-11 h-11 rounded-full bg-[#800000]/35 border border-red-500/50 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-[#b30000] group-hover:text-white transition-all shadow-lg">
            <Phone className="w-5 h-5" />
          </div>
          <span className="font-futuristic text-[11px] uppercase text-gray-400">CONTACT</span>
          <div className="font-body text-xs sm:text-sm font-semibold text-white flex flex-col gap-0.5">
            <a href="tel:+917570060896" className="hover:text-red-400 transition-colors">+91 7570060896</a>
            <a href="tel:+919208111603" className="hover:text-red-400 transition-colors">+91 9208111603</a>
          </div>
        </TiltCard>

        {/* Email */}
        <TiltCard
          maxDegree={12}
          scaleOnHover={1.06}
          className="border-dashed-crimson rounded-2xl p-5 bg-[#0d0406]/90 backdrop-blur-md flex flex-col items-center justify-center gap-2 group"
        >
          <div className="w-11 h-11 rounded-full bg-[#800000]/35 border border-red-500/50 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-[#b30000] group-hover:text-white transition-all shadow-lg">
            <Mail className="w-5 h-5" />
          </div>
          <span className="font-futuristic text-[11px] uppercase text-gray-400">G MAIL</span>
          <a 
            href="mailto:sv8417070@gmail.com" 
            className="font-body text-xs sm:text-sm font-semibold text-white hover:text-red-400 transition-colors break-all"
          >
            sv8417070@gmail.com
          </a>
        </TiltCard>

        {/* Website */}
        <TiltCard
          maxDegree={12}
          scaleOnHover={1.06}
          className="border-dashed-crimson rounded-2xl p-5 bg-[#0d0406]/90 backdrop-blur-md flex flex-col items-center justify-center gap-2 group"
        >
          <div className="w-11 h-11 rounded-full bg-[#800000]/35 border border-red-500/50 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-[#b30000] group-hover:text-white transition-all shadow-lg">
            <Globe className="w-5 h-5" />
          </div>
          <span className="font-futuristic text-[11px] uppercase text-gray-400">WEBSITE</span>
          <a 
            href="http://www.globallogicmedia.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-body text-xs sm:text-sm font-semibold text-white hover:text-red-400 transition-colors flex items-center gap-1"
          >
            globallogicmedia.com
            <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
          </a>
        </TiltCard>
      </div>

      {/* Tagline */}
      <div className="border-t border-[#990000]/30 pt-4 w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-futuristic text-xs sm:text-sm text-red-500 font-bold tracking-[0.25em] uppercase">
          . Strategy . Creativity . Growth .
        </span>
        <span className="font-body text-[11px] text-gray-400">
          © {new Date().getFullYear()} Ankur Verma
        </span>
      </div>
    </div>
  );
}
