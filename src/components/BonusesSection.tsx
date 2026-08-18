import React from 'react';
import { BONUSES_DATA } from '../data/bonuses';
import { PRODUCT_CONFIG } from '../config/offer';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Gift } from 'lucide-react';

export default function BonusesSection() {
  return (
    <section
      id="bonus"
      className="py-20 md:py-28 bg-gradient-to-b from-[#081711] via-[#0D2119] to-[#081711] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#163B2B]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132C21] border border-[#C5A059]/40 text-[#E5C78A] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>OFERTA ESPECIAL</span>
          </div>

          {/* Main Title */}
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-tight">
            Compre Hoje e Leve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#E5C78A] to-[#DFBE7A]">
              +6 Bônus Grátis
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#E3DCD3] font-light leading-relaxed max-w-2xl mx-auto">
            Material exclusivo que sozinho vale outra compra, mas que você recebe totalmente de graça ao adquirir O Prazer da Vida a Dois.
          </p>
        </div>

        {/* 6 Bonus Cards Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#0A1A14]/90 border border-[#C5A059]/25 hover:border-[#C5A059]/70 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.45)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm"
            >
              <div>
                {/* Header Tag / Number */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                  <span className="text-xs font-bold font-editorial text-[#E5C78A] tracking-widest uppercase">
                    {bonus.number}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E5C78A] bg-[#132C21] px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
                    <Gift className="w-3 h-3 text-[#C5A059]" />
                    <span>Incluído</span>
                  </span>
                </div>

                {/* Official Bonus Cover Image (Centered, object-contain, crisp) */}
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
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#FAF8F5] mb-2.5 leading-snug group-hover:text-[#E5C78A] transition-colors duration-200 min-h-[56px] sm:min-h-[64px] flex items-center">
                  {bonus.title}
                </h3>

                {/* Bonus Description */}
                <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed font-light min-h-[54px]">
                  {bonus.description}
                </p>
              </div>

              {/* Card Footer: Included Indicator */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#E5C78A] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>100% Gratuito na oferta</span>
                </span>
                <span className="text-[11px] text-white/60 uppercase tracking-wider font-semibold">
                  ACESSO IMEDIATO
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Valuation Box (Valor Total dos Bônus) */}
        <div className="bg-[#0A1A14]/95 border border-[#C5A059]/40 rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto shadow-2xl text-center space-y-6 relative overflow-hidden backdrop-blur-md">
          {/* Subtle Corner Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Pricing Valuation */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold block">
              VALOR TOTAL DOS 6 BÔNUS
            </span>
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <span className="text-2xl sm:text-3xl text-white/40 line-through font-editorial">
                R$ 597,00
              </span>
              <span className="text-xl sm:text-2xl text-white/60 font-editorial">
                →
              </span>
              <span className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#E5C78A]">
                HOJE: GRATUITO
              </span>
            </div>
          </div>

          {/* Informational Message */}
          <p className="text-xs sm:text-sm text-[#E3DCD3] font-light max-w-lg mx-auto leading-relaxed border-t border-white/10 pt-4">
            Os 6 bônus são liberados junto com o ebook após a confirmação do pagamento.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              id="bonus-section-cta"
              href={PRODUCT_CONFIG.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 sm:px-10 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBE7A] to-[#C5A059] text-[#081711] font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>QUERO MEU EBOOK + 6 BÔNUS</span>
              <ArrowRight className="w-5 h-5 text-[#081711]" />
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex items-center justify-center gap-4 text-[11px] text-white/60 pt-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Garantia de 7 dias</span>
            </div>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-1.5">
              <span>Acesso vitalício aos materiais</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
