import { useState } from 'react';
import { CHAPTERS_DATA } from '../data/chapters';
import { Sparkles, ChevronRight, CheckCircle2, HeartHandshake, BookOpen } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';
import { trackInitiateCheckout } from '../config/analytics';

export default function ChaptersSection() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const activeChapter = CHAPTERS_DATA[activeChapterIndex];

  return (
    <section
      id="capitulos"
      className="py-20 md:py-28 bg-[#FAF8F5] text-[#1D2B24] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11281E]/10 border border-[#11281E]/15 text-[#11281E] text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-[#8C6D2D]" />
            <span>Índice Oficial</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D2119] leading-tight">
            Os 12 Temas Reais do Livro
          </h2>

          <p className="text-base sm:text-lg text-[#33463E] font-normal leading-relaxed">
            Uma jornada de 12 princípios fundamentais para restaurar a cumplicidade, nutrir a intimidade e blindar a relação contra o desgaste da rotina.
          </p>
        </div>

        {/* Master Editorial Layout: Interactive Chapter Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Numbered Chapter Navigation List */}
          <div className="lg:col-span-6 bg-white border border-[#E3DACD] rounded-2xl p-4 sm:p-6 shadow-sm">
            <h3 className="text-xs uppercase tracking-widest text-[#8C6D2D] font-bold mb-4 px-2">
              Selecione para explorar o conteúdo:
            </h3>

            <div className="space-y-1.5 max-h-[580px] overflow-y-auto pr-1">
              {CHAPTERS_DATA.map((ch, idx) => {
                const isSelected = idx === activeChapterIndex;
                return (
                  <button
                    key={ch.number}
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-[#0D2119] text-[#FAF8F5] shadow-md'
                        : 'hover:bg-[#F3ECE0] text-[#1D2B24]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`font-editorial text-base font-bold shrink-0 ${
                          isSelected ? 'text-[#E5C78A]' : 'text-[#8C6D2D]'
                        }`}
                      >
                        {ch.number}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold truncate leading-snug">
                          {ch.title}
                        </p>
                        <p
                          className={`text-[11px] truncate ${
                            isSelected ? 'text-[#FAF8F5]/70' : 'text-[#5C6E65]'
                          }`}
                        >
                          {ch.theme}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected
                          ? 'text-[#E5C78A] translate-x-0.5'
                          : 'text-[#8C6D2D]/40 group-hover:text-[#8C6D2D]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Featured Chapter Editorial Detail Card */}
          <div className="lg:col-span-6 bg-[#0D2119] text-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[580px]">
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-editorial text-2xl font-bold text-[#E5C78A]">
                    Capítulo {activeChapter.number}
                  </span>
                  <span className="text-white/30">|</span>
                  <span className="text-xs uppercase tracking-wider text-white/70 font-medium">
                    {activeChapter.theme}
                  </span>
                </div>
                <span className="text-[11px] text-[#E5C78A] bg-[#163628] px-2.5 py-1 rounded-full border border-[#C5A059]/30">
                  Prático & Direto
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF8F5] leading-tight">
                  {activeChapter.title}
                </h3>
                <p className="text-sm sm:text-base text-[#E5C78A]/90 mt-1 font-light italic">
                  {activeChapter.subtitle}
                </p>
              </div>

              {/* Central Reflection Highlight */}
              <div className="bg-[#081711]/90 border-l-2 border-[#C5A059] p-4 sm:p-5 rounded-r-xl space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#E5C78A] font-bold">
                  Reflexão Central:
                </span>
                <p className="text-sm sm:text-base text-[#EDE5D8] leading-relaxed">
                  "{activeChapter.highlight}"
                </p>
              </div>

              {/* Practical Action within Chapter */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-white/60 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  Ação Prática da Semana:
                </span>
                <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed pl-5">
                  {activeChapter.actionSummary}
                </p>
              </div>

              {/* Internal elements in every chapter */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-[#FAF8F5]/70 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Roteiro de conversa guiada</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Desafio de 7 dias</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Fechamento inspirador</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Espaço para anotações</span>
                </div>
              </div>

            </div>

            {/* Bottom CTA to secure ebook */}
            <div className="relative pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-white/60 block">Todos os 12 capítulos por apenas:</span>
                <span className="font-editorial text-2xl font-bold text-[#E5C78A]">{PRODUCT_CONFIG.formattedPrice}</span>
              </div>
              <a
                href={PRODUCT_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout('chapters_section')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBE7A] text-[#081711] font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity"
              >
                <span>QUERO OS 12 CAPÍTULOS</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
