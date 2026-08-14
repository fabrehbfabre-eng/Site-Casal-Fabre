import React from 'react';
import { PRODUCT_CONFIG } from '../config/offer';
import BookMockup from './BookMockup';
import { ShieldCheck, Zap, CheckCircle2, ArrowRight, Sparkles, Lock, CreditCard } from 'lucide-react';

export default function OfferSection() {
  const packageItems = [
    "Ebook Principal: O Prazer da Vida a Dois (12 Capítulos)",
    "12 Roteiros Práticos de Conversa a Dois",
    "12 Desafios Semanais de 7 Dias para consolidar novos hábitos",
    "Bônus 01: Como Reacender a Paixão",
    "Bônus 02: Como Lidar com Ciúmes",
    "Bônus 03: 12 Frases para Reconquistar",
    "Bônus 04: Filhos de Outro Relacionamento",
    "Bônus 05: 5 Maneiras de Surpreender seu Amor depois do Casamento",
    "Bônus 06: Como Manter a Chama Acesa",
    "Acesso digital imediato e vitalício aos arquivos PDF",
  ];

  return (
    <section
      id="oferta"
      className="py-20 md:py-28 bg-[#FAF8F5] text-[#1D2B24] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11281E]/10 border border-[#11281E]/15 text-[#11281E] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6D2D]" />
            <span>Condição Oficial</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D2119] leading-tight">
            Leve o pacote completo
          </h2>

          <p className="text-base sm:text-lg text-[#33463E] font-normal leading-relaxed">
            Uma decisão simples para dar ao seu relacionamento o cuidado, o carinho e a atenção que ele merece.
          </p>
        </div>

        {/* Master Offer Card */}
        <div className="bg-[#0D2119] text-[#FAF8F5] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#C5A059] shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Light */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C5A059]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: What is Included Checklist */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#E5C78A] font-bold block mb-1">
                  Pacote Exclusivo Casal Fabre
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
                  O Prazer da Vida a Dois + 6 Bônus
                </h3>
              </div>

              <div className="space-y-2.5">
                {packageItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FAF8F5]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className={idx === 0 ? 'font-semibold text-[#E5C78A]' : ''}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Price Tag & Main Button */}
            <div className="lg:col-span-5 bg-[#081711] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-xl">
              
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-white/60 font-semibold block">
                  Valor Único de Acesso:
                </span>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-4xl sm:text-5xl font-bold font-editorial text-[#E5C78A]">
                    {PRODUCT_CONFIG.formattedPrice}
                  </span>
                </div>
                <span className="text-xs text-white/60 block">
                  {PRODUCT_CONFIG.installmentsInfo}
                </span>
              </div>

              <a
                id="offer-section-cta"
                href={PRODUCT_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBE7A] to-[#C5A059] text-[#081711] font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>{PRODUCT_CONFIG.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Trust Indicators */}
              <div className="pt-2 border-t border-white/10 space-y-2 text-[11px] text-white/70 text-left">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Acesso digital após a confirmação do pagamento.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Pagamento 100% criptografado e seguro via Kiwify.</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{PRODUCT_CONFIG.guaranteeDays} dias de garantia incondicional.</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
