import React from 'react';
import { FINANCIAL_BONUSES_DATA } from '../data/bonuses';
import { Sparkles, CheckCircle2, Gift } from 'lucide-react';

export default function FinancialBonusesSection() {
  return (
    <section
      id="bonus-financeiro"
      className="py-16 md:py-24 bg-gradient-to-b from-[#180B0E] via-[#200E12] to-[#180B0E] text-[#F4EFE5] relative overflow-hidden border-t border-[#C9A24A]/15"
    >
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#C9A24A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-6 left-10 w-72 h-72 bg-[#4A1722]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A1722]/60 border border-[#C9A24A]/40 text-[#E0C477] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>BÔNUS EXCLUSIVOS</span>
          </div>

          {/* Main Title */}
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE5] leading-tight">
            BÔNUS |{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24A] via-[#E0C477] to-[#C9A24A]">
              VIDA FINANCEIRA
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#F4EFE5]/80 font-light leading-relaxed max-w-2xl mx-auto">
            Conteúdos exclusivos para ajudar o casal a organizar a vida financeira, criar novas possibilidades de renda e construir um futuro mais próspero juntos.
          </p>
        </div>

        {/* 3 Bonus Cards Grid (Desktop: 3 cols, Tablet: 2 cols / adapted, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FINANCIAL_BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#241115]/90 border border-[#C9A24A]/25 hover:border-[#C9A24A]/70 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.45)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm"
            >
              <div>
                {/* Header Tag / Number */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                  <span className="text-xs font-bold font-editorial text-[#E0C477] tracking-widest uppercase">
                    {bonus.number}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E0C477] bg-[#4A1722] px-2.5 py-0.5 rounded-full border border-[#C9A24A]/30">
                    <Gift className="w-3 h-3 text-[#C9A24A]" />
                    <span>Incluído</span>
                  </span>
                </div>

                {/* Official Bonus Cover Image */}
                <div className="w-full flex items-center justify-center my-4 py-2 h-[240px]">
                  <img
                    src={bonus.imageUrl}
                    alt={`${bonus.number}: ${bonus.title}`}
                    className="max-h-[220px] sm:max-h-[235px] w-auto max-w-[170px] sm:max-w-[190px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300 select-none"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Bonus Title */}
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#F4EFE5] mb-2.5 leading-snug group-hover:text-[#E0C477] transition-colors duration-200 min-h-[56px] sm:min-h-[64px] flex items-center">
                  {bonus.title}
                </h3>

                {/* Bonus Description */}
                <p className="text-xs sm:text-sm text-[#F4EFE5]/80 leading-relaxed font-light min-h-[54px]">
                  {bonus.description}
                </p>
              </div>

              {/* Card Footer: Included Indicator with Programmed Release */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#E0C477] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A24A]" />
                  <span>100% Gratuito na oferta</span>
                </span>
                <span className="text-[11px] text-white/60 uppercase tracking-wider font-semibold">
                  LIBERAÇÃO PROGRAMADA
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
