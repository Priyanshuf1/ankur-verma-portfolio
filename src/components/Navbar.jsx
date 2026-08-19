import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Table of Content', href: '#toc' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Social Media', href: '#social-media' },
    { name: 'Logofolio', href: '#logofolio' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Meta Ads', href: '#meta-ads' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0d0406]/90 backdrop-blur-md border-b border-[#990000]/30 py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#990000] to-[#550000] p-0.5 shadow-lg group-hover:shadow-[0_0_15px_rgba(200,0,0,0.5)] transition-all">
            <div className="w-full h-full bg-[#0d0406] rounded-[7px] flex items-center justify-center font-futuristic text-red-500 font-bold text-lg">
              AV
            </div>
          </div>
          <div>
            <span className="font-futuristic text-lg font-bold tracking-wider text-white group-hover:text-red-400 transition-colors">
              ANKUR VERMA
            </span>
            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-body">
              Digital Marketer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs uppercase tracking-wider font-body text-gray-300 hover:text-red-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#cc0000] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Call CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+917570060896"
            className="flex items-center gap-2 text-xs font-futuristic uppercase px-4 py-2 rounded-full border border-[#990000] bg-[#800000]/20 hover:bg-[#990000] text-white transition-all shadow-md hover:shadow-[0_0_15px_rgba(200,0,0,0.5)]"
          >
            <Phone className="w-3.5 h-3.5 text-red-400" />
            +91 7570060896
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 text-gray-300 hover:text-white rounded-lg bg-[#990000]/20 border border-[#990000]/40"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#0d0406]/98 backdrop-blur-xl border-b border-[#990000]/40 px-6 py-6 transition-all animate-slideDown">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-futuristic uppercase tracking-wider text-gray-200 hover:text-red-400 py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+917570060896"
                className="flex items-center justify-center gap-2 text-xs font-futuristic uppercase px-4 py-3 rounded-lg bg-[#990000] text-white shadow-lg"
              >
                <Phone className="w-4 h-4" /> Call +91 7570060896
              </a>
              <a
                href="mailto:sv8417070@gmail.com"
                className="flex items-center justify-center gap-2 text-xs font-futuristic uppercase px-4 py-3 rounded-lg border border-[#990000]/60 bg-[#1a080c] text-gray-200"
              >
                <Mail className="w-4 h-4 text-red-400" /> sv8417070@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
