import React from 'react';
import { PRODUCT_CONFIG } from '../config/offer';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';

export default function AboutAuthors() {
  return (
    <section
      id="autores"
      className="py-20 md:py-28 bg-[#0D2119] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Decorative Lights */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#163628]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Author Couple Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              {/* Outer Golden Border Frame */}
              <div className="p-2 rounded-2xl bg-gradient-to-b from-[#C5A059] via-[#163628] to-[#081711] shadow-2xl">
                <div className="relative rounded-xl overflow-hidden bg-[#081711] aspect-[4/5]">
                  <img
                    src={PRODUCT_CONFIG.images.coupleRealPhoto}
                    alt="Heberson e Kátia Fabre - Casal Fabre"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081711]/70 via-transparent to-transparent" />
                  
                  {/* Photo Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#081711]/90 backdrop-blur-md border border-[#C5A059]/30 rounded-xl p-3 text-center">
                    <span className="font-editorial text-lg font-bold text-[#E5C78A] block">
                      Heberson & Kátia Fabre
                    </span>
                    <span className="text-[11px] text-white/70 uppercase tracking-widest">
                      Casal Fabre • Autores
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Monogram Seal */}
              <div className="absolute -top-4 -left-4 w-14 h-14 rounded-full bg-[#081711] border-2 border-[#C5A059] flex items-center justify-center text-[#E5C78A] shadow-xl">
                <span className="font-editorial text-base font-bold">CF</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163628] border border-[#C5A059]/30 text-[#E5C78A] text-xs font-semibold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 fill-[#E5C78A]/30" />
              <span>Quem Está por Trás do Livro</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-tight">
              A história real por trás de cada página
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#E3DCD3] font-light leading-relaxed">
              <p className="font-serif italic text-lg sm:text-xl text-[#E5C78A] border-l-2 border-[#C5A059] pl-4">
                "{PRODUCT_CONFIG.authorsBio}"
              </p>

              <p>
                Não acreditamos em relacionamentos perfeitos de conto de fadas, mas sim em casais que decidem, todos os dias, cuidar um do outro com respeito, paciência, verdade e carinho.
              </p>

              <p>
                O livro <strong>O Prazer da Vida a Dois</strong> nasceu da vivência prática, dos aprendizados e da certeza de que quando um casal volta a cultivar pequenos hábitos diários de cumplicidade, a relação ganha uma nova força e um novo frescor.
              </p>
            </div>

            {/* Core Values Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#081711] border border-white/10 rounded-xl p-4 text-center">
                <span className="text-xs uppercase tracking-wider text-[#E5C78A] font-bold block mb-1">Amor & Fé</span>
                <span className="text-[12px] text-white/70">Valores sólidos e princípios duradouros</span>
              </div>
              <div className="bg-[#081711] border border-white/10 rounded-xl p-4 text-center">
                <span className="text-xs uppercase tracking-wider text-[#E5C78A] font-bold block mb-1">Vida Real</span>
                <span className="text-[12px] text-white/70">Sem promessas fáceis ou irreais</span>
              </div>
              <div className="bg-[#081711] border border-white/10 rounded-xl p-4 text-center">
                <span className="text-xs uppercase tracking-wider text-[#E5C78A] font-bold block mb-1">Acolhimento</span>
                <span className="text-[12px] text-white/70">Para todas as fases do casamento</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
