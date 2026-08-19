import React, { useEffect, useRef } from 'react';

export default function BackgroundVFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;

      ctx.clearRect(0, 0, width, height);

      // 1. Fleety Luminous Laser Light Ray (Top-Left to Bottom-Right)
      const gradRay = ctx.createLinearGradient(0, 0, width, height);
      gradRay.addColorStop(0, 'rgba(255, 30, 30, 0.05)');
      gradRay.addColorStop(0.3, 'rgba(239, 68, 68, 0.75)');
      gradRay.addColorStop(0.5, 'rgba(255, 140, 0, 0.9)');
      gradRay.addColorStop(0.7, 'rgba(220, 20, 60, 0.7)');
      gradRay.addColorStop(1, 'rgba(150, 0, 0, 0.05)');

      // Draw Main Luminous Light Beam Path
      const mouseOffsetX = (mouseX / width - 0.5) * 60;
      const mouseOffsetY = (mouseY / height - 0.5) * 60;

      ctx.save();
      ctx.shadowColor = '#ff1a1a';
      ctx.shadowBlur = 45;

      ctx.beginPath();
      ctx.moveTo(-100 + mouseOffsetX, -50 + mouseOffsetY);
      ctx.bezierCurveTo(
        width * 0.35 + Math.sin(time) * 40 + mouseOffsetX,
        height * 0.2 + Math.cos(time * 0.8) * 30 + mouseOffsetY,
        width * 0.65 + Math.cos(time * 0.9) * 40 + mouseOffsetX,
        height * 0.75 + Math.sin(time * 0.7) * 30 + mouseOffsetY,
        width + 150 + mouseOffsetX,
        height + 100 + mouseOffsetY
      );
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = gradRay;
      ctx.stroke();

      // Core Intense Bright Laser Line
      ctx.beginPath();
      ctx.moveTo(-100 + mouseOffsetX, -50 + mouseOffsetY);
      ctx.bezierCurveTo(
        width * 0.35 + Math.sin(time) * 40 + mouseOffsetX,
        height * 0.2 + Math.cos(time * 0.8) * 30 + mouseOffsetY,
        width * 0.65 + Math.cos(time * 0.9) * 40 + mouseOffsetX,
        height * 0.75 + Math.sin(time * 0.7) * 30 + mouseOffsetY,
        width + 150 + mouseOffsetX,
        height + 100 + mouseOffsetY
      );
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Secondary Luminous Ambient Wave Ribbon
      const gradWave2 = ctx.createLinearGradient(0, height * 0.4, width, height * 0.8);
      gradWave2.addColorStop(0, 'rgba(200, 0, 0, 0)');
      gradWave2.addColorStop(0.5, 'rgba(255, 60, 20, 0.45)');
      gradWave2.addColorStop(1, 'rgba(120, 0, 0, 0)');

      ctx.shadowColor = '#ff4d4d';
      ctx.shadowBlur = 35;

      ctx.beginPath();
      ctx.moveTo(-50 - mouseOffsetX, height * 0.3 - mouseOffsetY);
      ctx.bezierCurveTo(
        width * 0.4 - Math.cos(time * 0.7) * 50,
        height * 0.55 + Math.sin(time * 0.9) * 40,
        width * 0.75 + Math.sin(time * 0.8) * 50,
        height * 0.85 - Math.cos(time * 0.6) * 30,
        width + 100,
        height * 0.95
      );
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = gradWave2;
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070103]">
      {/* Fleety Base Dark Obsidian Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#120104] via-[#090103] to-[#040001]" />

      {/* Fleety Luminous Radial Ambient Spotlight Pools */}
      <div className="absolute -top-20 -left-20 w-[850px] h-[600px] bg-gradient-to-br from-red-600/25 via-[#a30000]/15 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-0 w-[700px] h-[500px] bg-gradient-to-l from-amber-600/15 via-[#990000]/10 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[750px] h-[450px] bg-red-950/20 rounded-full blur-[190px] pointer-events-none" />

      {/* HTML Canvas Fleety Luminous Laser Ray & Wave VFX */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-90" />

      {/* Sleek Fleety Grid Overlay (3.5% Opacity) */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Vignette Edge Mask */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 45%, rgba(4, 0, 1, 0.85) 100%)'
        }}
      />
    </div>
  );
}
