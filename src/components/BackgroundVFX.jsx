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
      time += 0.008;

      ctx.clearRect(0, 0, width, height);

      const mouseOffsetX = (mouseX / width - 0.5) * 50;
      const mouseOffsetY = (mouseY / height - 0.5) * 50;

      // 1. Primary Broad Glowing Orange/Amber Wave Beam (Fleety Hero Signature)
      ctx.save();
      ctx.filter = 'blur(45px)';

      const grad1 = ctx.createLinearGradient(0, 0, width * 0.9, height * 0.9);
      grad1.addColorStop(0, 'rgba(255, 85, 0, 0.85)');
      grad1.addColorStop(0.35, 'rgba(255, 140, 0, 0.95)');
      grad1.addColorStop(0.65, 'rgba(230, 40, 20, 0.75)');
      grad1.addColorStop(1, 'rgba(120, 0, 0, 0.1)');

      ctx.beginPath();
      ctx.moveTo(-150 + mouseOffsetX, -100 + mouseOffsetY);
      ctx.bezierCurveTo(
        width * 0.35 + Math.sin(time) * 30 + mouseOffsetX,
        height * 0.25 + Math.cos(time * 0.7) * 25 + mouseOffsetY,
        width * 0.65 + Math.cos(time * 0.8) * 30 + mouseOffsetX,
        height * 0.7 + Math.sin(time * 0.6) * 25 + mouseOffsetY,
        width + 200 + mouseOffsetX,
        height + 150 + mouseOffsetY
      );
      ctx.lineWidth = 42;
      ctx.strokeStyle = grad1;
      ctx.stroke();

      // 2. Secondary Intense Core Highlight Wave
      ctx.filter = 'blur(20px)';
      const gradCore = ctx.createLinearGradient(width * 0.1, 0, width * 0.8, height);
      gradCore.addColorStop(0, 'rgba(255, 200, 100, 0.9)');
      gradCore.addColorStop(0.5, 'rgba(255, 100, 0, 0.95)');
      gradCore.addColorStop(1, 'rgba(200, 20, 20, 0.4)');

      ctx.beginPath();
      ctx.moveTo(-100 + mouseOffsetX, -80 + mouseOffsetY);
      ctx.bezierCurveTo(
        width * 0.35 + Math.sin(time) * 30 + mouseOffsetX,
        height * 0.25 + Math.cos(time * 0.7) * 25 + mouseOffsetY,
        width * 0.65 + Math.cos(time * 0.8) * 30 + mouseOffsetX,
        height * 0.7 + Math.sin(time * 0.6) * 25 + mouseOffsetY,
        width + 150 + mouseOffsetX,
        height + 120 + mouseOffsetY
      );
      ctx.lineWidth = 14;
      ctx.strokeStyle = gradCore;
      ctx.stroke();

      // 3. Bottom Curved Ambient Wave Ribbons (Fleety Fan Effect)
      ctx.filter = 'blur(35px)';
      const gradWave2 = ctx.createLinearGradient(0, height * 0.5, width, height);
      gradWave2.addColorStop(0, 'rgba(255, 60, 0, 0.4)');
      gradWave2.addColorStop(0.5, 'rgba(200, 20, 0, 0.5)');
      gradWave2.addColorStop(1, 'rgba(80, 0, 0, 0.1)');

      ctx.beginPath();
      ctx.moveTo(-100, height * 0.45);
      ctx.bezierCurveTo(
        width * 0.4 + Math.cos(time * 0.6) * 40,
        height * 0.6 + Math.sin(time * 0.8) * 30,
        width * 0.75 + Math.sin(time * 0.7) * 40,
        height * 0.88 - Math.cos(time * 0.5) * 20,
        width + 150,
        height * 0.9
      );
      ctx.lineWidth = 32;
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#09080a]">
      {/* Fleety Exact Dark Base Background */}
      <div className="absolute inset-0 bg-[#080709]" />

      {/* Fleety Luminous Orange/Gold Top-Left Glow */}
      <div className="absolute -top-32 -left-32 w-[900px] h-[650px] bg-gradient-to-br from-[#ff5500]/30 via-[#e63900]/20 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* Fleety Bottom-Right Ambient Warm Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-gradient-to-tl from-[#cc2200]/25 via-[#880000]/15 to-transparent rounded-full blur-[180px] pointer-events-none" />

      {/* Canvas Luminous Wave Beam & Ribbons */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-95" />

      {/* Soft Center Vignette Mask */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5, 4, 6, 0.75) 100%)'
        }}
      />
    </div>
  );
}
