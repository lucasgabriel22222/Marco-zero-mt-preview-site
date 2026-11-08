import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { siteData, buildWhatsAppLink } from '../data/siteData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(siteData.faq[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            Tire Suas Dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Perguntas Frequentes sobre Locação
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-balance">
            Tudo o que você precisa saber sobre o processo de aluguel de andaimes, prazos, entregas e condições comerciais.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-4">
          {siteData.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-amber-400 bg-amber-50/20 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-amber-500 text-slate-950 rotate-180'
                        : 'bg-slate-200/80 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Ainda possui alguma dúvida específica para sua obra?</p>
              <p className="text-xs text-slate-500">Nossa equipe responde em instantes no WhatsApp.</p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink('Olá! Tenho uma dúvida sobre a locação de equipamentos na Marco Zero Mato Grosso.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap inline-flex items-center gap-2 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Atendente</span>
          </a>
        </div>
      </div>
    </section>
  );
}
