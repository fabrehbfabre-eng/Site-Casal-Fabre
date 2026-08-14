import { useState } from 'react';
import { BookOpen, Sparkles, MessageCircle, Calendar, CheckCircle, ArrowRight, Quote } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';

export default function InsideBookPreview() {
  const [activeTab, setActiveTab] = useState<'reflexao' | 'conversa' | 'desafio'>('conversa');

  const componentsData = [
    {
      id: 'reflexao',
      title: 'Reflexão & Clareza',
      badge: 'Etapa 1',
      desc: 'Um olhar sincero sobre como a correria afasta os dois e como pequenas atitudes restauram a harmonia.',
    },
    {
      id: 'conversa',
      title: 'Conversa a Dois',
      badge: 'Etapa 2',
      desc: 'Perguntas guiadas para destravar diálogos profundos com leveza, sem cobranças ou brigas.',
    },
    {
      id: 'desafio',
      title: 'Desafio de 7 Dias',
      badge: 'Etapa 3',
      desc: 'Uma atitude clara por semana para transformar intenções em hábitos consolidados na rotina.',
    },
  ];

  return (
    <section
      id="experiencia"
      className="py-20 md:py-28 bg-[#0D2119] text-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163628] border border-[#C5A059]/30 text-[#E5C78A] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estrutura Editorial</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-tight">
            Veja o que existe dentro do livro
          </h2>

          <p className="text-base sm:text-lg text-[#E3DCD3] font-light leading-relaxed">
            Cada um dos 12 capítulos foi concebido para ser uma experiência completa de conexão e transformação, dividida em blocos claros e aplicáveis.
          </p>
        </div>

        {/* Experience Flow Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12 text-center">
          <div className="bg-[#081711] border border-white/10 rounded-xl p-3.5">
            <span className="text-[10px] text-[#C5A059] uppercase font-bold tracking-widest block mb-1">Passo 1</span>
            <span className="font-semibold text-sm text-[#FAF8F5]">Leia Juntos</span>
          </div>
          <div className="bg-[#081711] border border-white/10 rounded-xl p-3.5">
            <span className="text-[10px] text-[#C5A059] uppercase font-bold tracking-widest block mb-1">Passo 2</span>
            <span className="font-semibold text-sm text-[#FAF8F5]">Conversem</span>
          </div>
          <div className="bg-[#081711] border border-white/10 rounded-xl p-3.5">
            <span className="text-[10px] text-[#C5A059] uppercase font-bold tracking-widest block mb-1">Passo 3</span>
            <span className="font-semibold text-sm text-[#FAF8F5]">Escolham uma Atitude</span>
          </div>
          <div className="bg-[#081711] border border-white/10 rounded-xl p-3.5">
            <span className="text-[10px] text-[#C5A059] uppercase font-bold tracking-widest block mb-1">Passo 4</span>
            <span className="font-semibold text-sm text-[#FAF8F5]">Pratiquem na Semana</span>
          </div>
        </div>

        {/* Interactive Book Page Mockup Showcase */}
        <div className="max-w-4xl mx-auto bg-[#081711] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-white/10 pb-4">
            {componentsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#C5A059] text-[#081711] shadow-md'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Book Spread Mockup */}
          <div className="bg-[#FAF8F5] text-[#1D2B24] rounded-xl p-6 sm:p-8 md:p-10 shadow-inner border border-[#D5C9B8] relative">
            
            {/* Editorial Header in simulated page */}
            <div className="flex items-center justify-between border-b border-[#D5C9B8] pb-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-editorial text-xs font-bold text-[#8C6D2D] uppercase tracking-widest">
                  O PRAZER DA VIDA A DOIS
                </span>
                <span className="text-[#8C6D2D] font-light">|</span>
                <span className="text-[11px] text-[#5C6E65]">Capítulo 01</span>
              </div>
              <span className="text-[10px] font-mono text-[#8C6D2D]">Pág. 18</span>
            </div>

            {/* Dynamic Content based on activeTab */}
            {activeTab === 'reflexao' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-[#8C6D2D]">
                  <Quote className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold font-editorial">
                    Reflexão Fundamental
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0D2119]">
                  O que acontece quando deixamos de andar lado a lado?
                </h3>
                <p className="text-sm sm:text-base text-[#3A4B42] leading-relaxed">
                  "No início do relacionamento, andar de mãos dadas é instintivo. Mas, com o passar dos anos e o acúmulo de compromissos, passamos a andar um na frente e outro atrás, tanto na rua quanto nas decisões da vida. Andar de mãos dadas não é apenas um gesto físico, é a decisão diária de desacelerar o próprio passo para caminhar no mesmo ritmo do outro."
                </p>
                <div className="bg-[#F0EAE1] p-4 rounded-lg border-l-4 border-[#8C6D2D] text-xs sm:text-sm text-[#23352B]">
                  <strong>Ponto de Consciência:</strong> Você tem andado no mesmo ritmo do seu parceiro ou tem corrido na frente esperando que ele acompanhe sozinho?
                </div>
              </div>
            )}

            {activeTab === 'conversa' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-[#8C6D2D]">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold font-editorial">
                    Roteiro de Conversa a Dois
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0D2119]">
                  Perguntas para uma noite sem distrações
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6E65]">
                  Separem 15 minutos, desliguem as notificações do celular e façam estas 3 perguntas um ao outro com o coração aberto:
                </p>
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#E3DACD]">
                    <span className="w-6 h-6 rounded-full bg-[#8C6D2D]/10 text-[#8C6D2D] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                    <p className="text-xs sm:text-sm text-[#1D2B24] font-medium">
                      "Qual foi o último momento em que você se sentiu verdadeiramente acolhido(a) por mim?"
                    </p>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#E3DACD]">
                    <span className="w-6 h-6 rounded-full bg-[#8C6D2D]/10 text-[#8C6D2D] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                    <p className="text-xs sm:text-sm text-[#1D2B24] font-medium">
                      "Existe algum pequeno carinho do início do nosso namoro que você sente falta no dia a dia?"
                    </p>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#E3DACD]">
                    <span className="w-6 h-6 rounded-full bg-[#8C6D2D]/10 text-[#8C6D2D] font-bold text-xs flex items-center justify-center shrink-0">3</span>
                    <p className="text-xs sm:text-sm text-[#1D2B24] font-medium">
                      "O que nós podemos fazer juntos esta semana para termos um momento só nosso?"
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'desafio' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-[#8C6D2D]">
                  <Calendar className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold font-editorial">
                    Desafio Prático de 7 Dias
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0D2119]">
                  A Missão da Semana: O Toque Intencional
                </h3>
                <p className="text-sm text-[#3A4B42] leading-relaxed">
                  Pelos próximos 7 dias seguidos, o casal se compromete com uma atitude simples e inegociável:
                </p>
                <div className="bg-[#0D2119] text-[#FAF8F5] p-5 rounded-xl border border-[#C5A059]/40 space-y-2">
                  <span className="text-[#E5C78A] text-xs font-bold uppercase tracking-wider block">Compromisso Prático:</span>
                  <p className="text-sm font-semibold">
                    "Dar as mãos voluntariamente sempre que saírem juntos e dar um abraço de pelo menos 15 segundos ao se despedirem ou se reencontrarem."
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5C6E65]">
                  <CheckCircle className="w-4 h-4 text-[#8C6D2D]" />
                  <span>Sem cobranças. Apenas presença e consistência.</span>
                </div>
              </div>
            )}

          </div>

          {/* Micro Footer inside container */}
          <div className="mt-8 text-center">
            <a
              href={PRODUCT_CONFIG.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] text-[#081711] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#DFBE7A] transition-all"
            >
              <span>GARANTIR MEU ACESSO AOS 12 CAPÍTULOS POR {PRODUCT_CONFIG.formattedPrice}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
