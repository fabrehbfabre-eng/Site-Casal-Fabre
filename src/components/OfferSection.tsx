import { ShieldCheck, Zap, CheckCircle2, Sparkles, Lock, Download, ArrowRight } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';
import { trackInitiateCheckout } from '../config/analytics';

export default function OfferSection() {
  const packageSections = [
    {
      category: "LIVRO PRINCIPAL",
      items: [
        "Livro Principal: O Prazer da Vida a Dois (15 Capítulos Oficiais)",
        "Compromisso dos 40 Dias (Capítulo 14 com 4 Fases Práticas)",
        "História Oficial do Casal Fabre (Capítulo 15)",
        "Reflexões, Roteiros de Conversa a Dois e Práticas Semanais",
      ],
    },
    {
      category: "6 BÔNUS PRINCIPAIS",
      items: [
        "Bônus 01: Como Reacender a Paixão",
        "Bônus 02: 12 Mensagens Poderosas",
        "Bônus 03: Como Lidar com Ciúmes e Insegurança",
        "Bônus 04: Filhos de Outro Relacionamento | Como Lidar",
        "Bônus 05: 3 Passos para Manter a Chama Acesa",
        "Bônus 06: 12 Maneiras de Transformar o Cotidiano",
      ],
    },
    {
      category: "3 BÔNUS | VIDA FINANCEIRA",
      items: [
        "Bônus 07: Finanças do Casal | Como Organizar a Vida Financeira a Dois",
        "Bônus 08: Método Canal IA | Como Criar um Canal com Inteligência Artificial",
        "Bônus 09: Dinheiro a Dois | Como Construir uma Vida Financeira Próspera",
      ],
    },
    {
      category: "3 BÔNUS | VIDA ESPIRITUAL",
      items: [
        "Bônus 10: Fé a Dois | Como Construir um Relacionamento Mais Forte com Deus",
        "Bônus 11: Um Propósito a Dois | Como Construir uma Vida com Amor e Propósito",
        "Bônus 12: Juntos na Tempestade | Como Permanecer Unidos Quando a Vida Aperta",
      ],
    },
  ];

  return (
    <section
      id="oferta"
      className="py-20 md:py-28 bg-[#180B0E] text-[#F4EFE5] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A1722]/50 border border-[#C9A24A]/30 text-[#E0C477] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Condição Oficial</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE5] leading-tight">
            Leve o pacote completo
          </h2>

          <p className="text-base sm:text-lg text-[#F4EFE5]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Uma decisão simples para dar ao seu relacionamento o cuidado, o carinho e a atenção que ele merece.
          </p>
        </div>

        {/* Master Offer Card */}
        <div className="bg-[#241115] text-[#F4EFE5] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#C9A24A] shadow-[0_25px_60px_rgba(24,11,14,0.6)] relative overflow-hidden">
          
          {/* Subtle Ambient Light */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C9A24A]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
            
            {/* Left: What is Included Checklist (Structured by groups for 12 bonuses) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#E0C477] font-bold block mb-1">
                    Pacote Exclusivo Casal Fabre
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F4EFE5] leading-snug">
                    O Prazer da Vida a Dois + 12 Bônus
                  </h3>
                </div>

                <div className="space-y-4 pt-1">
                  {packageSections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#E0C477] block">
                        {sec.category}
                      </span>
                      <div className="space-y-2">
                        {sec.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F4EFE5]/90">
                            <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                            <span className={sIdx === 0 && idx === 0 ? 'font-semibold text-[#E0C477]' : 'font-light'}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra reassurance badge */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-white/70">
                <Download className="w-4 h-4 text-[#C9A24A] shrink-0" />
                <span>Formato digital em PDF de alta qualidade para leitura em qualquer dispositivo.</span>
              </div>

            </div>

            {/* Right: Reserved Transparent CTA Area Box */}
            <div className="lg:col-span-5 bg-[#180B0E] border border-[#C9A24A]/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
              
              <div className="space-y-5 text-center">
                
                {/* Header Tag */}
                <div className="pb-3 border-b border-white/10">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#4A1722] border border-[#C9A24A]/30 text-[11px] font-semibold uppercase tracking-wider text-[#E0C477]">
                    Edição Digital Oficial
                  </span>
                </div>

                {/* Offer Headline */}
                <div className="space-y-2 py-1">
                  <span className="text-xs uppercase tracking-wider text-[#E0C477] font-semibold block">
                    Livro + 12 Bônus Inclusos
                  </span>
                  <p className="font-editorial text-xl sm:text-2xl font-bold text-[#F4EFE5]">
                    Comece hoje a cuidar da sua vida a dois
                  </p>
                  <p className="text-xs text-white/70 font-light">
                    Clique no botão abaixo para garantir o seu exemplar oficial na plataforma.
                  </p>
                </div>

                {/* Price Display */}
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
                    Pagamento único com acesso vitalício e 12 bônus
                  </span>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-2">
                  <a
                    id="offer-section-cta"
                    href={PRODUCT_CONFIG.checkoutUrl}
                    onClick={() => trackInitiateCheckout('offer')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl font-bold text-[#180B0E] bg-gradient-to-r from-[#C9A24A] via-[#E0C477] to-[#C9A24A] hover:brightness-110 hover:shadow-[0_0_25px_rgba(201,162,74,0.45)] active:scale-[0.99] transition-all duration-200 text-xs sm:text-sm md:text-base tracking-wider uppercase shadow-xl cursor-pointer text-center group"
                  >
                    <span>{PRODUCT_CONFIG.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#180B0E] group-hover:translate-x-1 transition-transform shrink-0" />
                  </a>
                </div>

              </div>

              {/* Trust Microcopy */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-white/75">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>Acesso digital aos materiais</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>Garantia incondicional de {PRODUCT_CONFIG.guaranteeDays} dias</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Lock className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>Ambiente seguro de compra</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
