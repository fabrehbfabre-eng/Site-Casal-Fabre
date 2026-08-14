import React from 'react';
import { ShieldCheck, Zap, CheckCircle2, Sparkles, Lock } from 'lucide-react';

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

            {/* Right: Format Details & Guarantees Container */}
            <div className="lg:col-span-5 bg-[#081711] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-[#E5C78A] font-bold block mb-1">
                    Edição Digital Oficial
                  </span>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Conteúdo completo com livro principal, guias práticos e 6 bônus exclusivos.
                  </p>
                </div>

                {/* Trust & Access Highlights */}
                <div className="space-y-3.5 text-xs text-white/80">
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Acesso digital aos materiais em formato PDF de alta qualidade.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>7 dias de garantia incondicional para leitura e aplicação.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Ambiente com total segurança e privacidade.</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#132C21] border border-[#C5A059]/20 text-center">
                <span className="text-[11px] text-[#E5C78A] font-medium tracking-wide uppercase block">
                  Material Vitalício | Download Disponível
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
