import React from 'react';
import { PRODUCT_CONFIG } from '../config/offer';
import { ArrowRight, Heart, ShieldCheck, Zap } from 'lucide-react';

export default function FinalCta() {
  return (
    <section
      id="chamada-final"
      className="py-20 md:py-28 bg-gradient-to-b from-[#081711] via-[#0C2118] to-[#081711] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        
        {/* Heart Icon */}
        <div className="w-12 h-12 rounded-full bg-[#132C21] border border-[#C5A059]/40 flex items-center justify-center mx-auto text-[#E5C78A] shadow-lg">
          <Heart className="w-6 h-6 fill-[#E5C78A]/20" />
        </div>

        {/* Headlines */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF8F5] leading-tight">
            Talvez vocês não precisem de mais uma promessa.
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E5C78A] leading-relaxed">
            “Talvez precisem apenas voltar a cuidar, conversar, tocar, rir e viver juntos.”
          </p>
        </div>

        {/* Offer Box */}
        <div className="bg-[#0F261E]/90 border border-[#C5A059]/40 rounded-3xl p-8 sm:p-10 max-w-xl mx-auto shadow-2xl space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-white/60 font-semibold block">
              Acesso Completo (Ebook + 6 Bônus)
            </span>
            <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#E5C78A]">
              {PRODUCT_CONFIG.formattedPrice}
            </div>
            <span className="text-xs text-white/60 block">
              Pagamento único | Acesso vitalício imediato
            </span>
          </div>

          <a
            id="final-section-cta"
            href={PRODUCT_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBE7A] to-[#C5A059] text-[#081711] font-bold text-base uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>{PRODUCT_CONFIG.finalCtaText}</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 text-[11px] text-white/70">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Liberação imediata no seu e-mail</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Garantia incondicional de 7 dias</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
