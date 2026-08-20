import React from 'react';
import { Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

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
  const linkedinUrl = "https://www.linkedin.com/in/ankur-verma-261256333?utm_source=share_via&utm_content=profile&utm_medium=member_ios";
  const instagramUrl = "https://www.instagram.com/globallogicmedia?igsh=NHU0Y3lrdnZqb3Rl&igsi=NHU0Y3lrdnZqb3Rl&utm_source=qr";
  const websiteUrl = "https://www.globallogicmedia.com";

  return (
    <div className="w-full h-full flex flex-col justify-between items-center text-center px-3 sm:px-4 py-3 sm:py-6 max-w-5xl mx-auto overflow-hidden font-poppins">
      {/* Header */}
      <div className="shrink-0 mt-0 sm:mt-1">
        <h2 className="font-poppins text-3xl sm:text-7xl md:text-8xl font-extrabold text-[#b30000] tracking-tight uppercase select-none drop-shadow-md">
          GET IN TOUCH
        </h2>
        <p className="font-poppins text-white font-medium text-xs sm:text-xl max-w-2xl mx-auto mt-1 sm:mt-2 drop-shadow-sm px-2">
          Let’s connect to build data-driven marketing campaigns and scale your brand.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="my-auto w-full max-w-4xl bg-[#0e0407]/95 border-2 border-red-600/80 rounded-3xl p-4 sm:p-8 shadow-2xl backdrop-blur-md flex flex-col items-center gap-3 sm:gap-5 interactive-control overflow-y-auto max-h-[calc(100vh-170px)] custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full text-left">
          {/* Email 1 */}
          <a 
            href="mailto:sv8417070@gmail.com"
            className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-black/90 border border-red-900/60 hover:border-red-500 transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-950/90 border border-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-red-500" />
            </div>
            <div className="overflow-hidden">
              <span className="font-poppins text-[11px] font-extrabold text-red-400 uppercase tracking-wider block mb-0.5">
                PRIMARY GMAIL
              </span>
              <span className="font-poppins text-xs sm:text-sm font-bold text-white truncate block group-hover:text-red-300">
                sv8417070@gmail.com
              </span>
            </div>
          </a>

          {/* Email 2 */}
          <a 
            href="mailto:ankurverma2022.av@gmail.com"
            className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-black/90 border border-red-900/60 hover:border-red-500 transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-950/90 border border-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-red-500" />
            </div>
            <div className="overflow-hidden">
              <span className="font-poppins text-[11px] font-extrabold text-red-400 uppercase tracking-wider block mb-0.5">
                SECONDARY GMAIL
              </span>
              <span className="font-poppins text-xs sm:text-sm font-bold text-white truncate block group-hover:text-red-300">
                ankurverma2022.av@gmail.com
              </span>
            </div>
          </a>

          {/* Phone Number 1 */}
          <a 
            href="tel:+917570060896"
            className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-black/90 border border-red-900/60 hover:border-red-500 transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-950/90 border border-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <span className="font-poppins text-[11px] font-extrabold text-red-400 uppercase tracking-wider block mb-0.5">
                CALL / WHATSAPP PRIMARY
              </span>
              <span className="font-poppins text-xs sm:text-sm font-bold text-white block group-hover:text-red-300">
                +91 7570060896
              </span>
            </div>
          </a>

          {/* Phone Number 2 */}
          <a 
            href="tel:+919208111603"
            className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-black/90 border border-red-900/60 hover:border-red-500 transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-950/90 border border-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <span className="font-poppins text-[11px] font-extrabold text-red-400 uppercase tracking-wider block mb-0.5">
                CALL / WHATSAPP SECONDARY
              </span>
              <span className="font-poppins text-xs sm:text-sm font-bold text-white block group-hover:text-red-300">
                +91 9208111603
              </span>
            </div>
          </a>
        </div>

        {/* Website */}
        <a 
          href={websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-black/90 border border-red-900/60 hover:border-red-500 transition-all group cursor-pointer w-full"
        >
          <div className="flex items-center gap-3.5 overflow-hidden">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-950/90 border border-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5 text-red-500" />
            </div>
            <div className="overflow-hidden text-left">
              <span className="font-poppins text-[11px] font-extrabold text-red-400 uppercase tracking-wider block mb-0.5">
                OFFICIAL AGENCY WEBSITE
              </span>
              <span className="font-poppins text-xs sm:text-sm font-bold text-white truncate block group-hover:text-red-300">
                www.globallogicmedia.com
              </span>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-red-400 shrink-0 ml-2" />
        </a>

        {/* Location */}
        <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-black/90 border border-red-900/60 w-full">
          <MapPin className="w-5 h-5 text-red-500 shrink-0" />
          <span className="font-poppins text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
            Location: Lucknow, Uttar Pradesh, India (Available Globally)
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 pt-1 w-full">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 font-poppins text-xs sm:text-sm font-black text-white bg-red-950/90 border border-red-600 px-5 py-3 rounded-full hover:bg-red-600 transition-all shadow-lg cursor-pointer tracking-wider"
          >
            <LinkedinIcon />
            <span>LINKEDIN</span>
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 font-poppins text-xs sm:text-sm font-black text-white bg-red-950/90 border border-red-600 px-5 py-3 rounded-full hover:bg-red-600 transition-all shadow-lg cursor-pointer tracking-wider"
          >
            <InstagramIcon />
            <span>INSTAGRAM</span>
          </a>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="shrink-0 mb-1">
        <p className="font-poppins text-xs sm:text-sm text-gray-300 font-semibold uppercase tracking-widest">
          © {new Date().getFullYear()} ANKUR VERMA • GLOBAL LOGIC MEDIA
        </p>
      </div>
    </div>
  );
}
