import { Wrench, Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { siteData, buildWhatsAppLink } from '../data/siteData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-md bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-white leading-none">
                  {siteData.company.shortName}
                </span>
                <span className="text-[10px] tracking-wider font-semibold text-amber-500 uppercase">
                  Locação de Equipamentos
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {siteData.company.fullName}. Locação de andaimes tubulares, betoneiras, compactadores e maquinário profissional para construção civil em Cuiabá - MT.
            </p>
            <div className="pt-2">
              <a
                href={siteData.company.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-amber-500" />
                <span>{siteData.company.contact.instagram}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="hover:text-amber-400 transition-colors">
                  Equipamentos Disponíveis
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">
                  Nossos Diferenciais
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-amber-400 transition-colors">
                  Avaliações no Google (4.9)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Endereço & Como Chegar
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Equipments Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Equipamentos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#equipamentos" className="hover:text-amber-400 transition-colors">
                  Andaimes Tubulares e Pisos
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="hover:text-amber-400 transition-colors">
                  Betoneiras 400 Litros
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="hover:text-amber-400 transition-colors">
                  Compactadores de Solo (Sapo)
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="hover:text-amber-400 transition-colors">
                  Placas Vibratórias
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="hover:text-amber-400 transition-colors">
                  Marteletes e Rompedores
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="hover:text-amber-400 transition-colors">
                  Vibradores de Concreto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Atendimento & Pátio
            </h4>
            <p className="flex items-start gap-2 text-xs leading-relaxed">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{siteData.company.address.fullAddress}</span>
            </p>
            <p className="flex items-center gap-2 text-xs">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors font-medium text-slate-200"
              >
                {siteData.company.contact.phoneDisplay}
              </a>
            </p>
            <p className="text-xs text-slate-400 pt-1">
              <span className="text-slate-300 font-semibold block">Horário Comercial:</span>
              {siteData.company.hours.schedule}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} {siteData.company.fullName}. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Cuiabá - Mato Grosso</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
