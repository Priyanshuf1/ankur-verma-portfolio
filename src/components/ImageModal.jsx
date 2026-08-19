import React, { useEffect } from 'react';
import { X, ZoomIn, Download } from 'lucide-react';

export default function ImageModal({ isOpen, imageSrc, imageAlt, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[92vh] bg-[#120508] border border-[#990000]/60 rounded-2xl overflow-hidden shadow-2xl p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#990000]/30 bg-[#1a070c]">
          <span className="text-xs font-futuristic text-gray-200 tracking-wider flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-red-500" />
            {imageAlt || 'High-Resolution Visual Preview'}
          </span>
          <div className="flex items-center gap-2">
            <a 
              href={imageSrc} 
              download 
              className="p-1.5 text-gray-400 hover:text-white hover:bg-[#990000]/40 rounded-lg transition-colors"
              title="Download Asset"
            >
              <Download className="w-4 h-4" />
            </a>
            <button 
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-[#990000]/50 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="p-3 flex items-center justify-center max-h-[82vh] overflow-auto">
          <img 
            src={imageSrc} 
            alt={imageAlt || 'Preview'} 
            className="max-h-[78vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
          />
        </div>
      </div>
    </div>
  );
}
