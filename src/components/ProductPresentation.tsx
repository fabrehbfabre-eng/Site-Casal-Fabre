import React from 'react';
import { BookOpen, BrainCircuit, MessagesSquare, CheckSquare, CalendarDays, Sparkles } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';

export default function ProductPresentation() {
  const steps = [
    {
      step: "01",
      name: "LER",
      title: "Leitura Curta & Direta",
      description: "Textos enxutos e focados, pensados para casais ocupados lerem juntos ou individualmente em menos de 10 minutos.",
      icon: BookOpen,
    },
    {
      step: "02",
      name: "REFLETIR",
      title: "Perguntas de Consciência",
      description: "Pausas intencionais para entender onde a relação está e como pequenas atitudes diárias impactam a harmonia.",
      icon: BrainCircuit,
    },
    {
      step: "03",
      name: "CONVERSAR",
      title: "Diálogo Seguro & Guiado",
      description: "Roteiros de conversa a dois para falar de sentimentos e desejos sem brigas, julgamentos ou defesas armadas.",
      icon: MessagesSquare,
    },
    {
      step: "04",
      name: "PRATICAR",
      title: "Atitudes Reais no Dia",
      description: "Ações simples e tangíveis que não dependem de dinheiro, mas de vontade e consideração mútua.",
      icon: CheckSquare,
    },
    {
      step: "05",
      name: "CRIAR HÁBITOS",
      title: "Desafio Prático de 7 Dias",
      description: "Metas semanais para consolidar os novos comportamentos até que o carinho e o respeito se tornem naturais.",
      icon: CalendarDays,
    },
  ];

  return (
    <section
      id="sobre-o-livro"
      className="py-20 md:py-28 bg-[#180B0E] text-[#F4EFE5] relative overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4A1722]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A24A]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A1722]/50 border border-[#C9A24A]/30 text-[#E0C477] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Método Editorial Casal Fabre</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE5] leading-tight">
            Conheça O Prazer da Vida a Dois
          </h2>

          <p className="text-base sm:text-lg text-[#F4EFE5]/80 font-light leading-relaxed">
            Este não é um livro acadêmico de teorias complexas e nem um PDF genérico para ser esquecido no computador. Ele foi desenhado como um <strong>guia prático de cabeceira</strong> para ser vivido pelo casal.
          </p>
        </div>

        {/* Highlight Banner Quote */}
        <div className="mb-16 bg-gradient-to-r from-[#241115] via-[#4A1722]/80 to-[#241115] border-y sm:border border-[#C9A24A]/40 sm:rounded-2xl p-8 sm:p-10 text-center shadow-2xl">
          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4EFE5] italic leading-snug">
            “Não é apenas um livro para ler.<br className="hidden sm:inline" /> É um livro para viver juntos.”
          </p>
          <div className="w-16 h-[1px] bg-[#C9A24A] mx-auto mt-4 mb-2" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#E0C477] font-medium">
            Heberson & Katia Fabre
          </span>
        </div>

        {/* 5-Pillar Experience Path */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#F4EFE5]">
              A dinâmica de cada tema foi estruturada em 5 passos:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#241115] border border-[#C9A24A]/20 rounded-xl p-5 hover:border-[#C9A24A]/60 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-lg bg-[#4A1722] border border-[#C9A24A]/30 flex items-center justify-center text-xs font-bold text-[#E0C477] font-editorial">
                        {item.step}
                      </span>
                      <Icon className="w-5 h-5 text-[#C9A24A] group-hover:scale-110 transition-transform" />
                    </div>

                    <h4 className="font-bold text-sm text-[#E0C477] tracking-wider uppercase">
                      {item.name}
                    </h4>

                    <p className="text-xs font-medium text-[#F4EFE5] leading-snug">
                      {item.title}
                    </p>

                    <p className="text-[12px] text-[#F4EFE5]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Summary Pill Bar */}
        <div className="mt-12 bg-[#241115] border border-[#C9A24A]/20 rounded-xl p-4 sm:p-6 flex flex-wrap items-center justify-around gap-4 text-center">
          <div>
            <span className="block font-editorial text-2xl sm:text-3xl font-bold text-[#E0C477]">12</span>
            <span className="text-xs text-[#F4EFE5]/70 uppercase tracking-wider">Capítulos Práticos</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div>
            <span className="block font-editorial text-2xl sm:text-3xl font-bold text-[#E0C477]">12</span>
            <span className="text-xs text-[#F4EFE5]/70 uppercase tracking-wider">Roteiros de Conversa</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div>
            <span className="block font-editorial text-2xl sm:text-3xl font-bold text-[#E0C477]">12</span>
            <span className="text-xs text-[#F4EFE5]/70 uppercase tracking-wider">Desafios de 7 Dias</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div>
            <span className="block font-editorial text-2xl sm:text-3xl font-bold text-[#E0C477]">6</span>
            <span className="text-xs text-[#F4EFE5]/70 uppercase tracking-wider">Bônus Inclusos</span>
          </div>
        </div>

      </div>
    </section>
  );
}
