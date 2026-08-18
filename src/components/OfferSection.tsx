import { ShieldCheck, Zap, CheckCircle2, Sparkles, Lock, Download } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';

export default function OfferSection() {
  const packageItems = [
    "Livro Principal: O Prazer da Vida a Dois (15 Capítulos Oficiais)",
    "Compromisso dos 40 Dias (Capítulo 14 com 4 Fases Práticas)",
    "História Oficial do Casal Fabre (Capítulo 15)",
    "Reflexões, Roteiros de Conversa a Dois e Práticas Semanais",
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
            
            {/* Left: What is Included Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#E0C477] font-bold block mb-1">
                    Pacote Exclusivo Casal Fabre
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F4EFE5] leading-snug">
                    O Prazer da Vida a Dois + 6 Bônus
                  </h3>
                </div>

                <div className="space-y-2.5 pt-1">
                  {packageItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4EFE5]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                      <span className={idx === 0 || idx === 1 ? 'font-semibold text-[#E0C477]' : 'font-light'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra reassurance badge */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-white/70">
                <Download className="w-4 h-4 text-[#C9A24A] shrink-0" />
                <span>Download imediato disponível logo após a confirmação.</span>
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
                    Acesso Imediato & Vitalício
                  </span>
                  <p className="font-editorial text-xl sm:text-2xl font-bold text-[#F4EFE5]">
                    Comece hoje a cuidar da sua vida a dois
                  </p>
                  <p className="text-xs text-white/70 font-light">
                    Clique no botão abaixo para garantir o seu exemplar oficial na plataforma.
                  </p>
                </div>

                {/* Reserved Primary CTA Transparent Visual Area */}
                <div className="pt-2">
                  <div
                    id="offer-section-cta-slot"
                    className="w-full h-[56px] bg-transparent pointer-events-none select-none"
                    aria-hidden="true"
                  />
                </div>

              </div>

              {/* Trust Microcopy */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-white/75">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>Acesso imediato no seu e-mail</span>
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
