import React from 'react';
import { 
  MessageSquareHeart, 
  HeartHandshake, 
  Sparkles, 
  MessagesSquare, 
  Compass, 
  Flame, 
  CalendarHeart, 
  TrendingUp 
} from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      title: "Melhorar a comunicação no dia a dia",
      description: "Aprender a expressar sentimentos e necessidades com clareza e gentileza, desarmando discussões antes que elas comecem.",
      icon: MessageSquareHeart,
    },
    {
      title: "Recuperar pequenos gestos de carinho",
      description: "Resgatar o beijo demorado, o abraço na chegada, o andar de mãos dadas e o toque espontâneo que a correria foi apagando.",
      icon: HeartHandshake,
    },
    {
      title: "Criar momentos genuínos de conexão",
      description: "Descobrir como transformar 15 minutos diários em um espaço sagrado de escuta, risadas e cumplicidade a dois.",
      icon: Sparkles,
    },
    {
      title: "Conversar sobre assuntos que ficaram de lado",
      description: "Trazer à tona sonhos, planos e sentimentos com segurança emocional, sem medo de ser julgado ou incompreendido.",
      icon: MessagesSquare,
    },
    {
      title: "Cultivar novos interesses em comum",
      description: "Encontrar atividades prazerosas que ambos gostem de fazer juntos, criando novas memórias e quebrando a mesmice.",
      icon: Compass,
    },
    {
      title: "Fortalecer a admiração mútua",
      description: "Voltar a enxergar as qualidades que fizeram vocês se apaixonarem e aprender a elogiar com sinceridade no cotidiano.",
      icon: Flame,
    },
    {
      title: "Criar rituais e datas especiais",
      description: "Blindar a agenda para que o casal tenha encontros regulares e momentos exclusivos sem interferência externa.",
      icon: CalendarHeart,
    },
    {
      title: "Transformar pequenas atitudes em hábitos",
      description: "Sair das boas intenções temporárias e consolidar comportamentos diários de carinho e respeito duradouros.",
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="beneficios"
      className="py-20 md:py-28 bg-[#180B0E] text-[#F4EFE5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A1722]/50 border border-[#C9A24A]/30 text-[#E0C477] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Transformação Real</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE5] leading-tight">
            O que vocês podem começar a transformar
          </h2>

          <p className="text-base sm:text-lg text-[#F4EFE5]/80 font-normal leading-relaxed">
            Sem fórmulas mágicas ou promessas exageradas. Apenas princípios sólidos, atitudes intencionais e a decisão mútua de cuidar do que é mais valioso.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#241115] border border-[#C9A24A]/20 rounded-2xl p-6 hover:border-[#C9A24A] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4A1722] border border-[#C9A24A]/30 flex items-center justify-center text-[#E0C477] group-hover:bg-[#C9A24A] group-hover:text-[#180B0E] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-base text-[#F4EFE5] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F4EFE5]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
