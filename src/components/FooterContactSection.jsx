import React from 'react';
import { Phone, Mail, Globe, ArrowUpRight, Heart } from 'lucide-react';

export default function FooterContactSection() {
  return (
    <footer id="contact" className="relative py-24 bg-damask border-t border-[#990000]/40 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center z-10 relative">
        {/* THANK You! Header */}
        <div className="mb-8 inline-flex flex-wrap items-baseline justify-center gap-3">
          <h2 className="font-futuristic text-6xl sm:text-8xl font-black text-[#b30000] tracking-wider uppercase select-none">
            THANK
          </h2>
          <span className="font-script text-5xl sm:text-7xl text-white">
            You!
          </span>
        </div>

        <p className="font-body text-gray-200 text-base sm:text-xl font-medium max-w-2xl mx-auto mb-12">
          Let’s build a stronger digital presence.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {/* Phone */}
          <div className="border-dashed-crimson rounded-2xl p-6 bg-[#0d0406]/90 backdrop-blur-sm flex flex-col items-center justify-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[#800000]/30 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-[#990000] group-hover:text-white transition-all shadow-lg">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-futuristic text-xs uppercase text-gray-400">CONTACT</span>
            <div className="font-body text-sm font-semibold text-white flex flex-col gap-1">
              <a href="tel:+917570060896" className="hover:text-red-400 transition-colors">+91 7570060896</a>
              <a href="tel:+919208111603" className="hover:text-red-400 transition-colors">+91 9208111603</a>
            </div>
          </div>

          {/* Email */}
          <div className="border-dashed-crimson rounded-2xl p-6 bg-[#0d0406]/90 backdrop-blur-sm flex flex-col items-center justify-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[#800000]/30 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-[#990000] group-hover:text-white transition-all shadow-lg">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-futuristic text-xs uppercase text-gray-400">G MAIL</span>
            <a 
              href="mailto:sv8417070@gmail.com" 
              className="font-body text-sm font-semibold text-white hover:text-red-400 transition-colors break-all"
            >
              sv8417070@gmail.com
            </a>
          </div>

          {/* Website */}
          <div className="border-dashed-crimson rounded-2xl p-6 bg-[#0d0406]/90 backdrop-blur-sm flex flex-col items-center justify-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[#800000]/30 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-[#990000] group-hover:text-white transition-all shadow-lg">
              <Globe className="w-5 h-5" />
            </div>
            <span className="font-futuristic text-xs uppercase text-gray-400">WEBSITE</span>
            <a 
              href="http://www.globallogicmedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold text-white hover:text-red-400 transition-colors flex items-center gap-1"
            >
              www.globallogicmedia.com
              <ArrowUpRight className="w-4 h-4 text-red-500" />
            </a>
          </div>
        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="border-t border-[#990000]/30 pt-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-futuristic text-sm text-red-500 font-bold tracking-[0.3em] uppercase">
            . Strategy . Creativity . Growth .
          </span>
          <span className="font-body text-xs text-gray-400 flex items-center gap-1">
            © {new Date().getFullYear()} Ankur Verma. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
