import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identification from './components/Identification';
import ProductPresentation from './components/ProductPresentation';
import ChaptersSection from './components/ChaptersSection';
import InsideBookPreview from './components/InsideBookPreview';
import Benefits from './components/Benefits';
import BonusesSection from './components/BonusesSection';
import OfferSection from './components/OfferSection';
import AboutAuthors from './components/AboutAuthors';
import SocialProof from './components/SocialProof';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';
import { initAnalytics } from './config/analytics';

export default function App() {
  useEffect(() => {
    // Inicia scripts opcionais de analytics se configurados
    initAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1D2B24] flex flex-col selection:bg-[#C5A059]/25 selection:text-[#081711]">
      {/* Navegação Superior Fixa */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* Dobra 1: Hero Section com Oferta Imediata e Mockup 3D */}
        <Hero />

        {/* Dobra 2: Identificação Emocional com a Rotina */}
        <Identification />

        {/* Dobra 3: Apresentação do Método dos 5 Passos */}
        <ProductPresentation />

        {/* Dobra 4: Os 12 Temas Reais do Livro */}
        <ChaptersSection />

        {/* Dobra 5: O que há dentro do livro (Experiência e Roteiros) */}
        <InsideBookPreview />

        {/* Dobra 6: Benefícios Reais e Transformação */}
        <Benefits />

        {/* Dobra 7: Os 6 Bônus Inclusos no Pacote */}
        <BonusesSection />

        {/* Dobra 8: Seção de Oferta do Pacote Completo (R$ 19,97) */}
        <OfferSection />

        {/* Dobra 9: Sobre o Casal Fabre (Heberson & Katia Fabre) */}
        <AboutAuthors />

        {/* Dobra 10: Prova Social - Depoimentos de Leitores */}
        <SocialProof />

        {/* Dobra 11: Garantia Incondicional de 7 Dias */}
        <GuaranteeSection />

        {/* Dobra 12: Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* Dobra 13: Chamada Final Emocional */}
        <FinalCta />
      </main>

      {/* Rodapé Editorial */}
      <Footer />

      {/* CTA Flutuante para Dispositivos Móveis */}
      <StickyMobileCta />
    </div>
  );
}
