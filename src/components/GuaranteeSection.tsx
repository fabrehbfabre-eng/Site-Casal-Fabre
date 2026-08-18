import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';
import { trackInitiateCheckout } from '../config/analytics';

export default function GuaranteeSection() {
  return (
    <section
      id="garantia"
      className="py-20 md:py-24 bg-[#180B0E] text-[#F4EFE5] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A24A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#241115] border-2 border-[#C9A24A]/50 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          
          {/* Guarantee Badge Icon */}
          <div className="shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#4A1722] to-[#180B0E] border-2 border-[#C9A24A] flex flex-col items-center justify-center p-2 text-center shadow-xl">
              <ShieldCheck className="w-8 h-8 text-[#E0C477] mb-1" />
              <span className="font-editorial text-xl sm:text-2xl font-bold text-[#F4EFE5] leading-none">
                {PRODUCT_CONFIG.guaranteeDays} DIAS
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#E0C477] font-semibold">
                Garantia
              </span>
            </div>
          </div>

          {/* Guarantee Copy */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#E0C477] font-bold">
                Sem Riscos Para Você
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F4EFE5]">
                Garantia Incondicional de {PRODUCT_CONFIG.guaranteeDays} Dias
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#F4EFE5]/80 leading-relaxed font-light">
              Queremos que você e seu cônjuge tenham total tranquilidade ao adquirir o ebook. Acesse o material, leia os primeiros capítulos, faça os exercícios a dois e teste os desafios práticos.
            </p>

            <p className="text-sm sm:text-base text-[#F4EFE5]/80 leading-relaxed font-light">
              Se por qualquer motivo você sentir que este conteúdo não é para o momento de vocês, basta solicitar o reembolso dentro do prazo de {PRODUCT_CONFIG.guaranteeDays} dias diretamente na plataforma Kiwify. Devolvemos 100% do seu dinheiro, sem ressentimentos.
            </p>

            <div className="pt-2">
              <a
                href={PRODUCT_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout('guarantee_section')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E0C477] hover:text-[#F4EFE5] transition-colors"
              >
                <span>Adquira seu exemplar com garantia total</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
