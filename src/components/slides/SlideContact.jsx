import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function SlideContact() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center text-center px-4 py-6 max-w-5xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="shrink-0 mt-2">
        <h2 className="font-futuristic text-5xl sm:text-7xl md:text-8xl font-black text-[#b30000] tracking-wider uppercase select-none drop-shadow-md">
          GET IN TOUCH
        </h2>
        <p className="font-body text-white font-semibold text-sm sm:text-xl max-w-2xl mx-auto mt-2 drop-shadow-sm">
          Let’s connect to build data-driven marketing campaigns and grow your brand.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="my-auto w-full max-w-3xl bg-[#0e0407]/95 border-2 border-red-600/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md flex flex-col items-center gap-6 sm:gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
          {/* Email */}
          <a 
            href="mailto:ankurverma2022.av@gmail.com"
            className="flex items-center gap-4 p-4 rounded-2xl bg-black/80 border border-red-900/60 hover:border-red-500 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-red-950/90 border border-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-red-500" />
            </div>
            <div className="overflow-hidden">
              <span className="font-futuristic text-xs font-bold text-red-400 uppercase tracking-widest block">Email Me</span>
              <span className="font-body text-sm sm:text-base font-bold text-white truncate block group-hover:text-red-300">
                ankurverma2022.av@gmail.com
              </span>
            </div>
          </a>

          {/* Phone */}
          <a 
            href="tel:+918840251910"
            className="flex items-center gap-4 p-4 rounded-2xl bg-black/80 border border-red-900/60 hover:border-red-500 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-red-950/90 border border-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <span className="font-futuristic text-xs font-bold text-red-400 uppercase tracking-widest block">Call / WhatsApp</span>
              <span className="font-body text-sm sm:text-base font-bold text-white block group-hover:text-red-300">
                +91 8840251910
              </span>
            </div>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-black/80 border border-red-900/60 w-full">
          <MapPin className="w-6 h-6 text-red-500 shrink-0" />
          <span className="font-body text-sm sm:text-base font-bold text-white uppercase tracking-wide">
            Location: Lucknow, Uttar Pradesh, India (Available Globally)
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-futuristic text-xs sm:text-sm font-black text-white bg-red-950/90 border border-red-600 px-5 py-3 rounded-full hover:bg-red-600 transition-all shadow-lg cursor-pointer"
          >
            <LinkedinIcon />
            <span>LINKEDIN</span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-futuristic text-xs sm:text-sm font-black text-white bg-red-950/90 border border-red-600 px-5 py-3 rounded-full hover:bg-red-600 transition-all shadow-lg cursor-pointer"
          >
            <InstagramIcon />
            <span>INSTAGRAM</span>
          </a>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="shrink-0 mb-2">
        <p className="font-body text-xs sm:text-sm text-white font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} ANKUR VERMA • DIGITAL MARKETER PORTFOLIO
        </p>
      </div>
    </div>
  );
}
