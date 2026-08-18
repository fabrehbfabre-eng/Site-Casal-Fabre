import React, { useState } from 'react';
import { PRODUCT_CONFIG } from '../config/offer';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [modalType, setModalType] = useState<'termos' | 'privacidade' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#180B0E] text-[#F4EFE5] border-t border-[#C9A24A]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={PRODUCT_CONFIG.images.officialLogo}
                alt="Casal Fabre Logo Oficial"
                className="h-11 w-auto object-contain drop-shadow-md"
              />
              <div>
                <span className="font-editorial text-xl font-bold tracking-widest text-[#F4EFE5] uppercase block">
                  Casal Fabre
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#C9A24A] uppercase">
                  O Prazer da Vida a Dois
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm font-light">
              Conteúdo editorial sobre relacionamentos, comunicação, cumplicidade e princípios para o fortalecimento da vida a dois por Heberson e Katia Fabre.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E0C477] font-bold block">
              Navegação Rápida
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#sobre-o-livro" className="hover:text-[#E0C477] transition-colors">
                  Sobre o Livro
                </a>
              </li>
              <li>
                <a href="#capitulos" className="hover:text-[#E0C477] transition-colors">
                  Os 15 Capítulos
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#E0C477] transition-colors">
                  Compromisso dos 40 Dias
                </a>
              </li>
              <li>
                <a href="#bonus" className="hover:text-[#E0C477] transition-colors">
                  Os 6 Bônus Inclusos
                </a>
              </li>
              <li>
                <a href="#autores" className="hover:text-[#E0C477] transition-colors">
                  Casal Fabre
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E0C477] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Contact */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E0C477] font-bold block">
              Atendimento & Suporte
            </span>
            <p className="text-xs text-white/60 font-light">
              Dúvidas sobre o produto ou acesso ao material digital:
            </p>
            <a
              href={`mailto:${PRODUCT_CONFIG.supportEmail}`}
              className="text-xs sm:text-sm text-[#E0C477] hover:underline block break-all font-mono"
            >
              {PRODUCT_CONFIG.supportEmail}
            </a>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-[#241115] border border-[#C9A24A]/30 text-[11px] text-[#E0C477]">
                Garantia Incondicional de {PRODUCT_CONFIG.guaranteeDays} Dias
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Casal Fabre. Todos os direitos reservados.</span>
            <div className="flex items-center gap-4 text-[11px]">
              <button
                onClick={() => setModalType('termos')}
                className="hover:text-[#E0C477] transition-colors underline cursor-pointer"
              >
                Termos de Uso
              </button>
              <span>•</span>
              <button
                onClick={() => setModalType('privacidade')}
                className="hover:text-[#E0C477] transition-colors underline cursor-pointer"
              >
                Políticas de Privacidade
              </button>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-[#E0C477] transition-colors cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5 text-[11px] text-white/40 leading-relaxed text-center sm:text-left">
          <p>
            Este produto digital é comercializado pela internet. O conteúdo aqui exposto tem finalidade estritamente educacional, reflexiva e de apoio à convivência a dois, não constituindo promessa de resultados infalíveis nem substituindo orientação profissional, médica ou psicoterapêutica especializada.
          </p>
        </div>

      </div>

      {/* Legal Modals */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#241115] border border-[#C9A24A]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl text-[#F4EFE5] max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-editorial text-xl font-bold text-[#E0C477]">
                {modalType === 'termos' ? 'Termos de Uso' : 'Política de Privacidade'}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="text-white/60 hover:text-[#F4EFE5] text-lg font-bold p-1"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-white/80 leading-relaxed space-y-3 font-light">
              {modalType === 'termos' ? (
                <>
                  <p>
                    Ao adquirir ou acessar o livro digital &ldquo;O Prazer da Vida a Dois&rdquo; e seus bônus, você concorda com os presentes termos. O conteúdo é protegido por direitos autorais e destina-se exclusivamente ao uso pessoal do adquirente, sendo vedada sua reprodução, distribuição comercial, compartilhamento ou revenda sem autorização prévia por escrito.
                  </p>
                  <p>
                    O material busca oferecer princípios práticos e reflexivos sobre convivência e relacionamento conjugal. Os resultados dependem da aplicação voluntária e do contexto de cada casal.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Respeitamos sua privacidade e protegemos seus dados pessoais de acordo com a legislação aplicável (LGPD). As informações fornecidas durante a compra (como nome e e-mail) são utilizadas exclusivamente para o envio do acesso ao produto, comunicações de suporte e notas fiscais.
                  </p>
                  <p>
                    Seus dados nunca serão comercializados ou compartilhados com terceiros não autorizados. Os pagamentos são processados em ambiente seguro e criptografado pela plataforma de pagamentos.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-white/10 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-lg bg-[#4A1722] hover:bg-[#4A1722]/80 text-[#E0C477] border border-[#C9A24A]/30 text-xs font-semibold"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
