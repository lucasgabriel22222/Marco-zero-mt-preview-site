import { useState } from 'react';
import { MessageSquare, Check, ShieldCheck, Calculator, ArrowUpRight } from 'lucide-react';
import { siteData, buildEquipmentWhatsAppLink, Equipment } from '../data/siteData';

interface EquipmentSectionProps {
  onOpenQuoteModal?: (preselectedEquipmentId?: string) => void;
}

export function EquipmentSection({ onOpenQuoteModal }: EquipmentSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredEquipments = activeCategory === 'todos'
    ? siteData.equipments
    : siteData.equipments.filter((item) => item.category === activeCategory);

  const getTagBadgeStyle = (tag: string) => {
    switch (tag) {
      case 'Mais Alugado':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Pronta Entrega':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Revisado':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="equipamentos" className="py-20 bg-slate-50 relative industrial-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            Catálogo de Maquinário e Estruturas
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Nossa Linha de Equipamentos para Locação
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-balance">
            Soluções completas com máxima robustez, segurança e rendimento para acelerar sua obra sem paradas não planejadas. Equipamentos entregues testados e prontos para uso.
          </p>

          {/* Interactive Category Filter Tabs (Single-line controls) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-2xl mx-auto">
            {siteData.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipments.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-400/80 transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Slot with Fallback & Tag */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to neutral patterned container with icon
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Fallback pattern if image is hidden */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 -z-10 flex items-center justify-center p-4 text-center">
                  <span className="text-xs font-semibold text-slate-500">{item.name}</span>
                </div>

                {/* Status / Highlight Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center text-[11px] font-bold px-2.5 py-1 rounded-md border shadow-xs ${getTagBadgeStyle(
                      item.tag
                    )}`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Duration indicator */}
                <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-xs text-slate-200 text-[11px] font-medium px-2 py-0.5 rounded">
                  {item.recommendedDuration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Bullet Specs */}
                  <div className="mb-6 space-y-2 border-t border-slate-100 pt-3">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Destaques Técnicos:
                    </p>
                    <ul className="space-y-1.5">
                      {item.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <a
                    href={buildEquipmentWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg shadow-xs transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <MessageSquare className="w-4 h-4 fill-slate-950/20" />
                    <span>Alugar / Orçar via WhatsApp</span>
                  </a>

                  {onOpenQuoteModal && (
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(item.id)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <Calculator className="w-3.5 h-3.5 text-slate-400" />
                      <span>Adicionar ao simulador de cotação</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Equipment Section */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Não encontrou a máquina ou acessório específico que precisa?
              </h4>
              <p className="text-sm text-slate-600">
                Temos acessórios sobressalentes como rodízios de andaime, sapatas reguláveis, mangotes adicionais e ponteiros especiais. Consulte nossa equipe!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            {onOpenQuoteModal && (
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="w-full md:w-auto px-4 py-3 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Simular Obra Completa</span>
              </button>
            )}
            <a
              href={buildEquipmentWhatsAppLink('Acessórios e Ferramentas Específicas')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-5 py-3 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Consultar Disponibilidade</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
