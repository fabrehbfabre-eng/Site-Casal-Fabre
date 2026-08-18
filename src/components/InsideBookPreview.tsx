import { useState } from 'react';
import { BookOpen, Sparkles, MessageCircle, Calendar, CheckCircle, Quote } from 'lucide-react';

export default function InsideBookPreview() {
  const [activeTab, setActiveTab] = useState<'reflexao' | 'pratica' | 'conversa' | 'compromisso'>('compromisso');

  const componentsData = [
    {
      id: 'reflexao',
      title: 'Reflexão & Consciência',
      badge: 'Bloco 1',
      desc: 'Um olhar sincero e acolhedor sobre como a rotina afasta os dois e como o amor mora nas pequenas atitudes.',
    },
    {
      id: 'pratica',
      title: 'Coloque em Prática',
      badge: 'Bloco 2',
      desc: '3 atitudes tangíveis e simples para fazer no mesmo dia, sem esperar uma ocasião especial.',
    },
    {
      id: 'conversa',
      title: 'Conversa a Dois',
      badge: 'Bloco 3',
      desc: 'Perguntas guiadas para destravar diálogos sinceros e íntimos sem acusação ou medo de briga.',
    },
    {
      id: 'compromisso',
      title: 'Compromisso dos 40 Dias',
      badge: 'Jornada',
      desc: '40 ações diárias divididas em 4 fases para transformar intenção em prática e prática em novos hábitos.',
    },
  ];

  return (
    <section
      id="experiencia"
      className="py-20 md:py-28 bg-[#180B0E] text-[#F4EFE5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A1722]/50 border border-[#C9A24A]/30 text-[#E0C477] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estrutura Real do Livro</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE5] leading-tight">
            Veja o que existe dentro do livro
          </h2>

          <p className="text-base sm:text-lg text-[#F4EFE5]/80 font-light leading-relaxed">
            O livro combina reflexão, conteúdo prático, atitudes aplicáveis, conversas a dois e o Compromisso dos 40 Dias para gerar continuidade na relação.
          </p>
        </div>

        {/* Experience Flow Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12 text-center">
          <div className="bg-[#241115] border border-[#C9A24A]/20 rounded-xl p-3.5">
            <span className="text-[10px] text-[#C9A24A] uppercase font-bold tracking-widest block mb-1">Parte 1</span>
            <span className="font-semibold text-sm text-[#F4EFE5]">Reflexão & Consciência</span>
          </div>
          <div className="bg-[#241115] border border-[#C9A24A]/20 rounded-xl p-3.5">
            <span className="text-[10px] text-[#C9A24A] uppercase font-bold tracking-widest block mb-1">Parte 2</span>
            <span className="font-semibold text-sm text-[#F4EFE5]">Coloque em Prática</span>
          </div>
          <div className="bg-[#241115] border border-[#C9A24A]/20 rounded-xl p-3.5">
            <span className="text-[10px] text-[#C9A24A] uppercase font-bold tracking-widest block mb-1">Parte 3</span>
            <span className="font-semibold text-sm text-[#F4EFE5]">Conversa a Dois</span>
          </div>
          <div className="bg-[#241115] border border-[#C9A24A]/40 bg-[#4A1722]/40 rounded-xl p-3.5">
            <span className="text-[10px] text-[#E0C477] uppercase font-bold tracking-widest block mb-1">Parte 4</span>
            <span className="font-semibold text-sm text-[#E0C477]">Compromisso 40 Dias</span>
          </div>
        </div>

        {/* Interactive Deep-Dive Preview Box */}
        <div className="bg-[#241115] border border-[#C9A24A]/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-sm">
          
          {/* Tab Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-white/10 pb-6">
            {componentsData.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl font-editorial text-sm sm:text-base font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#4A1722] text-[#E0C477] border border-[#C9A24A]/60 shadow-md scale-105'
                      : 'bg-[#180B0E]/60 text-[#F4EFE5]/70 hover:text-[#F4EFE5] border border-transparent'
                  }`}
                >
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          <div className="min-h-[220px]">
            {activeTab === 'reflexao' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E0C477] font-bold">
                  <BookOpen className="w-4 h-4 text-[#C9A24A]" />
                  <span>Exemplo Real extraído do Livro:</span>
                </div>
                <div className="bg-[#180B0E] border-l-2 border-[#C9A24A] p-6 rounded-r-2xl space-y-3">
                  <Quote className="w-6 h-6 text-[#C9A24A]/40" />
                  <p className="font-serif italic text-base sm:text-lg text-[#F4EFE5] leading-relaxed">
                    &ldquo;O relacionamento não é cuidado apenas quando existe um problema. Ele também precisa ser cuidado nos dias comuns, nos pequenos gestos e nas escolhas que fazemos todos os dias.&rdquo;
                  </p>
                  <p className="text-xs text-[#E0C477] uppercase tracking-wider font-semibold">
                    Apresentação Oficial | Heberson Fabre
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'pratica' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E0C477] font-bold">
                  <CheckCircle className="w-4 h-4 text-[#C9A24A]" />
                  <span>Exemplo de Coloque em Prática (Capítulo 01):</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#180B0E] p-4 rounded-xl border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-[#E0C477] block">01 | Observação</span>
                    <p className="text-xs text-[#F4EFE5]/80 leading-relaxed font-light">
                      Observe a rotina de vocês sem procurar culpados. Perceba quais momentos do dia poderiam ter mais presença e carinho.
                    </p>
                  </div>
                  <div className="bg-[#180B0E] p-4 rounded-xl border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-[#E0C477] block">02 | Resgate</span>
                    <p className="text-xs text-[#F4EFE5]/80 leading-relaxed font-light">
                      Escolha um gesto simples que vocês faziam no começo do relacionamento e que deixaram de fazer. Tente trazê-lo de volta.
                    </p>
                  </div>
                  <div className="bg-[#180B0E] p-4 rounded-xl border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-[#E0C477] block">03 | Demonstração</span>
                    <p className="text-xs text-[#F4EFE5]/80 leading-relaxed font-light">
                      Faça pelo menos uma coisa pelo companheiro que não seja obrigação, mas demonstração de que você valoriza sua presença.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'conversa' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E0C477] font-bold">
                  <MessageCircle className="w-4 h-4 text-[#C9A24A]" />
                  <span>Exemplo de Conversa a Dois (Capítulo 02):</span>
                </div>
                <div className="bg-[#180B0E] p-6 rounded-2xl border border-white/5 space-y-3">
                  <div className="space-y-2 text-sm text-[#F4EFE5]/90">
                    <p className="flex items-start gap-2">
                      <span className="text-[#C9A24A] font-bold">•</span>
                      <span>Em quais momentos vocês mais se sentem conectados?</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#C9A24A] font-bold">•</span>
                      <span>Que gesto simples faz você se sentir cuidado(a)?</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#C9A24A] font-bold">•</span>
                      <span>O que vocês podem fazer juntos esta semana?</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'compromisso' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E0C477] font-bold">
                  <Calendar className="w-4 h-4 text-[#C9A24A]" />
                  <span>Compromisso dos 40 Dias (Capítulo 14):</span>
                </div>
                <div className="bg-[#180B0E] p-6 rounded-2xl border border-[#C9A24A]/30 space-y-3">
                  <p className="text-sm text-[#F4EFE5]/90 font-light leading-relaxed">
                    Depois de refletir sobre os pequenos gestos que fortalecem a vida a dois, vocês encontram uma jornada de 40 dias para transformar intenção em prática e prática em novos hábitos.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs">
                    <div className="bg-[#241115] p-2.5 rounded-lg border border-white/5">
                      <span className="text-[#E0C477] font-bold block">Fase 1 (1-10)</span>
                      <span className="text-[11px] text-white/70">Reconexão & Presença</span>
                    </div>
                    <div className="bg-[#241115] p-2.5 rounded-lg border border-white/5">
                      <span className="text-[#E0C477] font-bold block">Fase 2 (11-20)</span>
                      <span className="text-[11px] text-white/70">Comunicação & Cuidado</span>
                    </div>
                    <div className="bg-[#241115] p-2.5 rounded-lg border border-white/5">
                      <span className="text-[#E0C477] font-bold block">Fase 3 (21-30)</span>
                      <span className="text-[11px] text-white/70">Intencionalidade & Rituais</span>
                    </div>
                    <div className="bg-[#241115] p-2.5 rounded-lg border border-white/5">
                      <span className="text-[#E0C477] font-bold block">Fase 4 (31-40)</span>
                      <span className="text-[11px] text-white/70">Consolidação & Continuidade</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Fast Action Transparent Space */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-white/60 text-center sm:text-left">
              Todo o conteúdo disponível em PDF de alta qualidade para celular e tablet
            </span>
            <div
              id="inside-book-cta-slot"
              className="w-full sm:w-[220px] h-[48px] bg-transparent pointer-events-none select-none"
              aria-hidden="true"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
