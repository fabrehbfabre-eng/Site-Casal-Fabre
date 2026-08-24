import React from 'react';
import { BONUSES_DATA } from '../data/bonuses';
import { Sparkles, CheckCircle2, ShieldCheck, Gift, ArrowRight } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';
import { trackInitiateCheckout } from '../config/analytics';

export default function BonusesSection() {
  return (
    <section
      id="bonus"
      className="py-20 md:py-28 bg-gradient-to-b from-[#180B0E] via-[#241115] to-[#180B0E] text-[#F4EFE5] relative overflow-hidden"
    >
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A24A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#4A1722]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A1722]/60 border border-[#C9A24A]/40 text-[#E0C477] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>MATERIAIS COMPLEMENTARES</span>
          </div>

          {/* Main Title */}
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE5] leading-tight">
            Adquira o Livro e Receba{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24A] via-[#E0C477] to-[#C9A24A]">
              +6 Bônus Inclusos
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#F4EFE5]/80 font-light leading-relaxed max-w-2xl mx-auto">
            Guias práticos desenvolvidos para complementar as reflexões de O Prazer da Vida a Dois e apoiar o casal em situações específicas do cotidiano.
          </p>
        </div>

        {/* 6 Bonus Cards Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {BONUSES_DATA.map((bonus) => (
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

              {/* Card Footer: Included Indicator */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#E0C477] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A24A]" />
                  <span>100% Gratuito na oferta</span>
                </span>
                <span className="text-[11px] text-white/60 uppercase tracking-wider font-semibold">
                  ACESSO IMEDIATO
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Box with CTA Button and Price */}
        <div className="bg-[#241115]/95 border border-[#C9A24A]/40 rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto shadow-2xl text-center space-y-6 relative overflow-hidden backdrop-blur-md">
          {/* Subtle Corner Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C9A24A]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Action Header */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E0C477] font-bold block">
              PACOTE COMPLETO DIGITAL
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F4EFE5]">
              O Livro Oficial + Todos os 12 Bônus Inclusos
            </h3>
          </div>

          {/* Price display in bonus section */}
          <div className="py-4 border-y border-white/10 space-y-1.5 text-center">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#E0C477] font-semibold block">
              POR APENAS
            </span>
            <div className="flex items-baseline justify-center gap-1.5 leading-none">
              <span className="font-playfair text-xl sm:text-2xl md:text-[28px] font-bold text-[#E0C477] drop-shadow-[0_2px_8px_rgba(201,162,74,0.25)]">
                R$
              </span>
              <span className="font-playfair text-[40px] sm:text-[52px] font-bold text-[#E0C477] tracking-tight leading-none drop-shadow-[0_2px_14px_rgba(201,162,74,0.3)]">
                37,90
              </span>
            </div>
            <span className="text-xs text-white/70 font-light block">
              Acesso imediato ao livro digital + 12 bônus exclusivos
            </span>
          </div>

          {/* Informational Message */}
          <p className="text-xs sm:text-sm text-[#F4EFE5]/80 font-light max-w-lg mx-auto leading-relaxed">
            Todos os bônus são liberados no seu e-mail junto com o livro completo logo após a confirmação da compra.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2 flex justify-center">
            <a
              id="bonus-section-cta"
              href={PRODUCT_CONFIG.checkoutUrl}
              onClick={() => trackInitiateCheckout('bonuses')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-[#180B0E] bg-gradient-to-r from-[#C9A24A] via-[#E0C477] to-[#C9A24A] hover:brightness-110 hover:shadow-[0_0_25px_rgba(201,162,74,0.45)] active:scale-[0.99] transition-all duration-200 text-xs sm:text-sm md:text-base tracking-wider uppercase shadow-xl cursor-pointer text-center group"
            >
              <span>{PRODUCT_CONFIG.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-[#180B0E] group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex items-center justify-center gap-4 text-[11px] text-white/60 pt-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>Garantia incondicional de 7 dias</span>
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
