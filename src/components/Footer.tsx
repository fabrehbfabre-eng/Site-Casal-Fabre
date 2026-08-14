import React, { useState } from 'react';
import { PRODUCT_CONFIG } from '../config/offer';
import { Heart, ShieldCheck, Lock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [modalType, setModalType] = useState<'termos' | 'privacidade' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050E0B] text-[#FAF8F5] border-t border-[#C5A059]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#132C21] border border-[#C5A059]/40 flex items-center justify-center">
                <span className="font-editorial text-lg font-bold text-[#E5C78A]">CF</span>
              </div>
              <div>
                <span className="font-editorial text-xl font-bold tracking-widest text-[#FAF8F5] uppercase block">
                  Casal Fabre
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#C5A059] uppercase">
                  O Prazer da Vida a Dois
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm font-light">
              Conteúdo editorial sobre relacionamentos, comunicação, cumplicidade e princípios para o fortalecimento da vida a dois por Heberson e Kátia Fabre.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E5C78A] font-bold block">
              Navegação Rápida
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#sobre-o-livro" className="hover:text-[#E5C78A] transition-colors">
                  Sobre o Livro
                </a>
              </li>
              <li>
                <a href="#capitulos" className="hover:text-[#E5C78A] transition-colors">
                  Os 12 Capítulos
                </a>
              </li>
              <li>
                <a href="#bonus" className="hover:text-[#E5C78A] transition-colors">
                  Os 6 Bônus Inclusos
                </a>
              </li>
              <li>
                <a href="#autores" className="hover:text-[#E5C78A] transition-colors">
                  Sobre o Casal Fabre
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E5C78A] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Security & Support */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E5C78A] font-bold block">
              Atendimento & Suporte
            </span>
            <p className="text-xs text-white/60 leading-relaxed">
              Dúvidas sobre o produto ou acesso ao material:
            </p>
            <a
              href={`mailto:${PRODUCT_CONFIG.supportEmail}`}
              className="inline-block text-xs sm:text-sm font-semibold text-[#E5C78A] hover:underline"
            >
              {PRODUCT_CONFIG.supportEmail}
            </a>

            <div className="pt-2 flex items-center gap-2 text-xs text-white/60">
              <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Checkout seguro Kiwify</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} Casal Fabre — {PRODUCT_CONFIG.name}. Todos os direitos reservados.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('termos')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              onClick={() => setModalType('privacidade')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#E5C78A] hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Kiwify and educational disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5 text-[10px] text-white/40 text-center max-w-3xl mx-auto leading-relaxed">
          Aviso: Este produto não substitui o acompanhamento profissional psicológico, médico ou aconselhamento conjugal clínico quando necessário. Os resultados práticos dependem do comprometimento individual e conjunto do casal na aplicação dos princípios abordados.
        </div>

      </div>

      {/* Legal Modal Component */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] text-[#1D2B24] rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#D5C9B8] pb-3">
              <h3 className="font-editorial text-2xl font-bold text-[#0D2119]">
                {modalType === 'termos' ? 'Termos de Uso' : 'Política de Privacidade'}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="w-8 h-8 rounded-full bg-[#E3DACD] text-[#0D2119] font-bold flex items-center justify-center hover:bg-[#C5A059] hover:text-[#081711] transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#465A51] space-y-3 leading-relaxed">
              {modalType === 'termos' ? (
                <>
                  <p>
                    Bem-vindo ao site oficial do ebook <strong>O Prazer da Vida a Dois</strong> (Casal Fabre). Ao adquirir ou acessar nossos materiais digitais, você concorda com os seguintes termos:
                  </p>
                  <p>
                    1. <strong>Propriedade Intelectual:</strong> Todo o conteúdo, incluindo textos, capítulos, exercícios e materiais bônus, é protegido por direitos autorais pertencentes a Heberson Fabre e Casal Fabre. É estritamente proibida a reprodução, redistribuição ou comercialização não autorizada.
                  </p>
                  <p>
                    2. <strong>Acesso Digital:</strong> O produto é 100% digital e o acesso é disponibilizado após a confirmação do pagamento pelo intermediador Kiwify.
                  </p>
                  <p>
                    3. <strong>Garantia de 7 Dias:</strong> Conforme o Código de Defesa do Consumidor, você tem até 7 dias corridos a partir da data de compra para solicitar o reembolso integral diretamente pela plataforma Kiwify.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    A privacidade e a segurança dos seus dados são prioritárias para o <strong>Casal Fabre</strong>.
                  </p>
                  <p>
                    1. <strong>Coleta de Dados:</strong> Os dados de pagamento (cartão de crédito, PIX) são processados diretamente pela plataforma certificada Kiwify em ambiente seguro criptografado. Não armazenamos informações financeiras sensíveis em nossos servidores.
                  </p>
                  <p>
                    2. <strong>Uso do E-mail:</strong> Seu e-mail é utilizado exclusivamente para o envio dos links de acesso aos materiais digitais adquiridos e comunicações relevantes sobre o produto.
                  </p>
                  <p>
                    3. <strong>Não Compartilhamento:</strong> Não vendemos nem compartilhamos seus dados cadastrais com terceiros para fins de marketing abusivo.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-[#D5C9B8] text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-xl bg-[#0D2119] text-[#FAF8F5] text-xs font-semibold hover:bg-[#163628] transition-colors"
              >
                Entendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
