import React from 'react';
import { PRODUCT_CONFIG } from '../config/offer';
import { Sparkles } from 'lucide-react';

interface BookMockupProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'perspective' | 'front' | 'bonus';
  bonusNumber?: string;
  bonusTitle?: string;
  customImage?: string;
  className?: string;
}

export default function BookMockup({
  size = 'md',
  variant = 'perspective',
  bonusNumber,
  bonusTitle,
  customImage,
  className = '',
}: BookMockupProps) {
  const isBonus = variant === 'bonus';

  // Sizing definitions
  const sizeClasses = {
    sm: 'w-[180px] h-[260px]',
    md: 'w-[230px] h-[330px] sm:w-[270px] sm:h-[390px]',
    lg: 'w-[260px] h-[380px] sm:w-[320px] sm:h-[460px]',
  };

  return (
    <div
      className={`relative inline-block select-none group perspective-1000 ${className}`}
    >
      {/* Dynamic 3D Container */}
      <div
        className={`relative ${sizeClasses[size]} rounded-r-md rounded-l-xs transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
          variant === 'perspective'
            ? 'rotate-y-[-14deg] rotate-x-[4deg] rotate-z-[-2deg] shadow-2xl'
            : 'shadow-xl'
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft Ambient Shadow Beneath Book */}
        <div className="absolute -bottom-6 left-4 right-2 h-8 bg-black/40 blur-xl rounded-full transform -rotate-1 pointer-events-none" />

        {/* Hardcover Outer Frame */}
        <div className="relative w-full h-full rounded-r-md rounded-l-xs overflow-hidden bg-[#081711] border border-[#C5A059]/40 flex flex-col justify-between p-5 sm:p-6 text-center book-shadow">
          
          {/* Subtle Metallic & Leather Sheen Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 pointer-events-none z-10" />
          
          {/* Book Spine Fold & Shadow Indicator on Left */}
          <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-20 book-spine-shadow border-r border-white/5" />

          {/* Golden Corner Trim Accents */}
          <div className="absolute top-2 left-5 w-4 h-4 border-t border-l border-[#C5A059]/50 pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#C5A059]/50 pointer-events-none" />
          <div className="absolute bottom-2 left-5 w-4 h-4 border-b border-l border-[#C5A059]/50 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C5A059]/50 pointer-events-none" />

          {/* Top Brand Header (Positioned above portrait without covering faces) */}
          <div className="relative z-10 pt-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#11281E]/90 border border-[#C5A059]/40 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B974] animate-pulse" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#E5C78A] uppercase font-semibold">
                {isBonus ? (bonusNumber || 'BÔNUS EXCLUSIVO') : 'CASAL FABRE'}
              </span>
            </div>
            <p className="text-[8px] sm:text-[9px] tracking-[0.18em] text-white/60 uppercase">
              {isBonus ? 'Material Complementar' : 'Edição Especial de Casamento'}
            </p>
          </div>

          {/* Center Photography / Visual Framing */}
          <div className="relative z-10 my-auto py-2">
            {!isBonus ? (
              <div className="space-y-2.5">
                {/* Couple Photograph Frame (Tastefully styled with soft golden border) */}
                <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-[#D8B974] via-[#785E2A] to-[#163628] shadow-inner">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0A1B14] relative">
                    <img
                      src={customImage || PRODUCT_CONFIG.images.coupleRealPhoto}
                      alt="Casal Fabre - Heberson e Kátia Fabre"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081711]/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Main Title */}
                <div>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold leading-tight tracking-tight text-[#FAF8F5] drop-shadow-md">
                    O Prazer da <br />
                    <span className="gold-gradient-text font-serif italic text-2xl sm:text-3xl">
                      Vida a Dois
                    </span>
                  </h3>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-2 mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-[#FAF8F5]/80 font-light max-w-[200px] mx-auto line-clamp-2">
                    Conexão, cumplicidade e novos hábitos na relação
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-4 px-2 space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#132C21] border border-[#C5A059]/40 flex items-center justify-center mx-auto text-[#E5C78A]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#FAF8F5] leading-snug">
                  {bonusTitle || 'Guia Prático'}
                </h3>
                <div className="w-8 h-[1px] bg-[#C5A059]/50 mx-auto" />
              </div>
            )}
          </div>

          {/* Bottom Book Footer */}
          <div className="relative z-10 pt-2 border-t border-[#C5A059]/20">
            <p className="text-[10px] sm:text-[11px] font-medium text-[#E5C78A] tracking-wider uppercase">
              {PRODUCT_CONFIG.author}
            </p>
            <p className="text-[8px] text-white/50 tracking-widest uppercase">
              Ebook Digital Oficial
            </p>
          </div>
        </div>

        {/* 3D Paper Stack Edge on Right Side */}
        <div
          className="absolute top-1 bottom-1 right-[-9px] w-[10px] bg-gradient-to-r from-[#EDE5D8] via-[#FAF8F5] to-[#D4C8B5] rounded-r-[3px] border-r border-[#B8A892] shadow-sm pointer-events-none"
          style={{
            transform: 'rotateY(70deg) translateZ(-4px)',
          }}
        >
          {/* Subtle line marks for pages simulation */}
          <div className="w-full h-full opacity-40 bg-[repeating-linear-gradient(0deg,#9c8a74_0px,#9c8a74_1px,transparent_1px,transparent_3px)]" />
        </div>
      </div>
    </div>
  );
}
