import React from 'react';
import { ShieldCheck, Zap, CheckCircle2, Sparkles, Lock, ArrowRight, Download } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';
import { trackInitiateCheckout } from '../config/analytics';

export default function OfferSection() {
  const packageItems = [
    "Ebook Principal: O Prazer da Vida a Dois (12 Capítulos)",
    "12 Roteiros Práticos de Conversa a Dois",
    "12 Desafios Semanais de 7 Dias para novos hábitos",
    "Bônus 01: Como Reacender a Paixão",
    "Bônus 02: 12 Mensagens Poderosas",
    "Bônus 03: Como Lidar com Ciúmes e Insegurança",
    "Bônus 04: Filhos de Outro Relacionamento | Como Lidar",
    "Bônus 05: 3 Passos para Manter a Chama Acesa",
    "Bônus 06: 12 Maneiras de Transformar o Cotidiano",
    "Acesso digital imediato e vitalício aos arquivos PDF",
  ];

  return (
    <section
      id="oferta"
      className="py-20 md:py-28 bg-[#FAF8F5] text-[#1D2B24] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11281E]/10 border border-[#11281E]/15 text-[#11281E] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6D2D]" />
            <span>Condição Oficial</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D2119] leading-tight">
            Leve o pacote completo
          </h2>

          <p className="text-base sm:text-lg text-[#33463E] font-normal leading-relaxed max-w-2xl mx-auto">
            Uma decisão simples para dar ao seu relacionamento o cuidado, o carinho e a atenção que ele merece.
          </p>
        </div>

        {/* Master Offer Card */}
        <div className="bg-[#0D2119] text-[#FAF8F5] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#C5A059] shadow-[0_25px_60px_rgba(13,33,25,0.35)] relative overflow-hidden">
          
          {/* Subtle Ambient Light */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
            
            {/* Left: What is Included Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#E5C78A] font-bold block mb-1">
                    Pacote Exclusivo Casal Fabre
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF8F5] leading-snug">
                    O Prazer da Vida a Dois + 6 Bônus
                  </h3>
                </div>

                <div className="space-y-2.5 pt-1">
                  {packageItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FAF8F5]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className={idx === 0 ? 'font-semibold text-[#E5C78A]' : 'font-light'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra reassurance badge */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-white/70">
                <Download className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Download imediato disponível logo após a confirmação.</span>
              </div>

            </div>

            {/* Right: Pricing Box & Primary CTA */}
            <div className="lg:col-span-5 bg-[#081711] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
              
              <div className="space-y-5 text-center">
                
                {/* Header Tag */}
                <div className="pb-3 border-b border-white/10">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#132C21] border border-[#C5A059]/30 text-[11px] font-semibold uppercase tracking-wider text-[#E5C78A]">
                    Edição Digital Oficial
                  </span>
                </div>

                {/* Price Display */}
                <div className="space-y-1.5 py-1">
                  <span className="text-xs uppercase tracking-wider text-white/60 font-medium block">
                    Valor promocional de lançamento
                  </span>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-base sm:text-lg font-light text-white/70">R$</span>
                    <span className="font-editorial text-4xl sm:text-5xl font-bold text-[#E5C78A] tracking-tight">
                      {PRODUCT_CONFIG.price}
                    </span>
                  </div>
                  <span className="text-xs text-white/60 block font-light">
                    {PRODUCT_CONFIG.installmentsInfo}
                  </span>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-2">
                  <a
                    id="offer-section-cta"
                    href={PRODUCT_CONFIG.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackInitiateCheckout('offer_master_card')}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBE7A] to-[#C5A059] text-[#081711] font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <span>{PRODUCT_CONFIG.secondaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#081711] shrink-0" />
                  </a>
                </div>

              </div>

              {/* Trust Microcopy */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-white/75">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Acesso imediato no seu e-mail</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Garantia incondicional de {PRODUCT_CONFIG.guaranteeDays} dias</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Lock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Pagamento 100% seguro via Kiwify</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

