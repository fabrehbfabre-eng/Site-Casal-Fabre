import { useState } from 'react';
import { CHAPTERS_DATA } from '../data/chapters';
import { ChevronRight, CheckCircle2, BookOpen } from 'lucide-react';

export default function ChaptersSection() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const activeChapter = CHAPTERS_DATA[activeChapterIndex];

  return (
    <section
      id="capitulos"
      className="py-20 md:py-28 bg-[#180B0E] text-[#F4EFE5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A1722]/50 border border-[#C9A24A]/30 text-[#E0C477] text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Índice Oficial do Livro</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE5] leading-tight">
            Os 15 Capítulos de O Prazer da Vida a Dois
          </h2>

          <p className="text-base sm:text-lg text-[#F4EFE5]/80 font-normal leading-relaxed">
            Quinze capítulos construídos em torno de gestos práticos, conversas sinceras e o Compromisso dos 40 Dias para transformar atitudes em novos hábitos diários.
          </p>
        </div>

        {/* Master Editorial Layout: Interactive Chapter Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Numbered Chapter Navigation List */}
          <div className="lg:col-span-6 bg-[#241115] border border-[#C9A24A]/25 rounded-2xl p-4 sm:p-6 shadow-sm">
            <h3 className="text-xs uppercase tracking-widest text-[#E0C477] font-bold mb-4 px-2">
              Selecione um capítulo para explorar:
            </h3>

            <div className="space-y-1.5 max-h-[620px] overflow-y-auto pr-1">
              {CHAPTERS_DATA.map((ch, idx) => {
                const isSelected = idx === activeChapterIndex;
                return (
                  <button
                    key={ch.number}
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-[#4A1722] text-[#F4EFE5] shadow-md border border-[#C9A24A]/40'
                        : 'hover:bg-[#4A1722]/30 text-[#F4EFE5]/80 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`font-editorial text-base font-bold shrink-0 ${
                          isSelected ? 'text-[#E0C477]' : 'text-[#C9A24A]'
                        }`}
                      >
                        {ch.number}
                      </span>
                      <div className="min-w-0">
                        <p className="font-editorial text-base sm:text-lg font-semibold truncate leading-tight">
                          {ch.title}
                        </p>
                        <p className="text-xs text-[#F4EFE5]/60 truncate font-light mt-0.5">
                          {ch.theme}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-[#E0C477] translate-x-1' : 'text-white/30 group-hover:text-white/60'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Chapter Detailed Dossier */}
          <div className="lg:col-span-6 bg-[#241115] border border-[#C9A24A]/40 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
            
            {/* Subtle Chapter Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#4A1722]/50 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-editorial text-3xl font-bold text-[#E0C477]">
                  Capítulo {activeChapter.number}
                </span>
                <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#4A1722] text-[#E0C477] border border-[#C9A24A]/30 font-semibold">
                  {activeChapter.theme}
                </span>
              </div>

              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F4EFE5] leading-snug">
                  {activeChapter.title}
                </h3>
                <p className="text-sm text-[#F4EFE5]/80 font-light mt-1.5 leading-relaxed">
                  {activeChapter.subtitle}
                </p>
              </div>

              {/* Editorial Highlight Quote */}
              <div className="bg-[#180B0E] border-l-2 border-[#C9A24A] p-4 rounded-r-xl">
                <p className="font-serif italic text-base sm:text-lg text-[#E0C477] leading-relaxed">
                  &ldquo;{activeChapter.highlight}&rdquo;
                </p>
              </div>

              {/* Action & Practical Application */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-[#E0C477] uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A24A]" />
                  <span>Aplicação Prática no Dia a Dia:</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#F4EFE5]/80 leading-relaxed bg-[#180B0E]/60 p-4 rounded-xl border border-white/5 font-light">
                  {activeChapter.actionSummary}
                </p>
              </div>

              {/* Special highlight if chapter 14 */}
              {activeChapter.number === '14' && (
                <div className="bg-[#4A1722]/60 border border-[#C9A24A]/40 rounded-xl p-4 space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#E0C477] font-bold block">
                    ★ Destaque Prático do Livro
                  </span>
                  <p className="text-xs text-[#F4EFE5]/90 leading-relaxed font-light">
                    4 Fases estruturadas: Reconexão e Presença (Dias 1-10), Comunicação e Cuidado (Dias 11-20), Intencionalidade e Rituais (Dias 21-30) e Consolidação e Continuidade (Dias 31-40).
                  </p>
                </div>
              )}
            </div>

            {/* In-Card Transparent Reserved Space */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-white/60">
                <span>Disponível imediatamente após confirmação</span>
              </div>

              <div
                id="chapter-card-cta-slot"
                className="w-full sm:w-[180px] h-[44px] bg-transparent pointer-events-none select-none"
                aria-hidden="true"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
