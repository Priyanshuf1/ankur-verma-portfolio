import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';

export default function SlideVideoProduction() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-4 py-3 max-w-6xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center shrink-0 mt-1 mb-2">
        <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700/60 px-4 py-1 rounded-full mb-1 shadow-lg">
          <Film className="w-4 h-4 text-red-500" />
          <span className="font-futuristic text-xs sm:text-sm text-red-400 uppercase tracking-widest font-bold">
            CLIENT WORK • VIDEO SHOOTING
          </span>
        </div>
        <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none drop-shadow-md">
          VIDEO PRODUCTION
        </h2>
        <p className="font-body text-gray-300 text-xs sm:text-base max-w-3xl mx-auto font-medium">
          Professional commercial videography, client shoot choreography, and high-engagement visual storytelling.
        </p>
      </div>

      {/* Main Video Player Showcase */}
      <div className="relative my-auto w-full max-w-4xl h-[360px] sm:h-[420px] md:h-[460px] rounded-3xl overflow-hidden bg-black/90 border-2 border-red-600/70 shadow-[0_0_50px_rgba(239,68,68,0.5)] group flex items-center justify-center">
        {/* Video Element */}
        <video
          ref={videoRef}
          src="/assets/client_video_shoot.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-contain cursor-pointer"
          onClick={togglePlay}
        />

        {/* Video Overlay Play/Pause Button on Hover */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute z-30 w-20 h-20 rounded-full bg-red-600/90 border-2 border-white text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            title="Play Video"
          >
            <Play className="w-10 h-10 ml-1 fill-white" />
          </button>
        )}

        {/* Video Control Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 flex flex-col gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
            <div 
              className="h-full bg-gradient-to-r from-red-700 to-red-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-white" />}
              </button>
              <span className="font-futuristic text-xs text-gray-300 hidden sm:inline uppercase tracking-widest">
                Client Shoot Showcase
              </span>
            </div>

            <button
              onClick={handleFullscreen}
              className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
              title="Fullscreen"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtitle Footer */}
      <div className="mt-2 text-center max-w-2xl mx-auto border-t border-[#990000]/30 pt-2 shrink-0">
        <h3 className="font-futuristic text-base sm:text-lg text-red-500 font-bold mb-0.5 uppercase tracking-wide">
          What this section communicates
        </h3>
        <p className="font-body text-xs text-gray-300">
          Highlights end-to-end client videography, high-definition video production, and social-first video storytelling.
        </p>
      </div>
    </div>
  );
}
