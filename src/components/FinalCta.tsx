import { Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';
import { trackInitiateCheckout } from '../config/analytics';

export default function FinalCta() {
  return (
    <section
      id="chamada-final"
      className="py-20 md:py-28 bg-gradient-to-b from-[#180B0E] via-[#241115] to-[#180B0E] text-[#F4EFE5] relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A24A]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Caixa bordô com borda dourada */}
        <div className="bg-[#241115]/90 border border-[#C9A24A]/40 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-2xl space-y-6 backdrop-blur-xs">
          {/* Heart Icon */}
          <div className="w-12 h-12 rounded-full bg-[#4A1722] border border-[#C9A24A]/40 flex items-center justify-center mx-auto text-[#E0C477] shadow-lg">
            <Heart className="w-6 h-6 fill-[#E0C477]/20" />
          </div>

          {/* Headlines / Mensagem Final */}
          <div className="space-y-4">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE5] leading-tight">
              Talvez vocês não precisem de mais uma promessa.
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E0C477] leading-relaxed">
              “Talvez precisem apenas voltar a cuidar, conversar, tocar, rir e viver juntos.”
            </p>
          </div>

          {/* Price and CTA */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            <div className="text-center space-y-1.5">
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
                Livro digital completo + 12 bônus exclusivos inclusos
              </span>
            </div>

            <div className="flex justify-center">
              <a
                id="final-section-cta"
                href={PRODUCT_CONFIG.checkoutUrl}
                onClick={() => trackInitiateCheckout('final_section')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-[#180B0E] bg-gradient-to-r from-[#C9A24A] via-[#E0C477] to-[#C9A24A] hover:brightness-110 hover:shadow-[0_0_25px_rgba(201,162,74,0.45)] active:scale-[0.99] transition-all duration-200 text-xs sm:text-sm md:text-base tracking-wider uppercase shadow-xl cursor-pointer text-center group"
              >
                <span>{PRODUCT_CONFIG.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-[#180B0E] group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-white/60 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#C9A24A]" />
              <span>Garantia incondicional de {PRODUCT_CONFIG.guaranteeDays} dias | Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

