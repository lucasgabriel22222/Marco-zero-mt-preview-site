import { MessageSquare, PhoneCall, ShieldCheck, Clock } from 'lucide-react';
import { siteData, buildWhatsAppLink } from '../data/siteData';

export function FinalCta() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-t border-slate-800">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Atendimento Ágil em Cuiabá e Várzea Grande</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mb-5 text-balance">
          Precisa de andaimes ou equipamentos para a sua obra?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed text-balance mb-8">
          Fale diretamente com a Marco Zero Mato Grosso pelo WhatsApp, verifique a disponibilidade imediata e garanta sua locação com entrega rápida e preço justo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-extrabold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-xl shadow-xl hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          <a
            href={`tel:${siteData.company.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>{siteData.company.contact.phoneDisplay}</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Resposta média em menos de 10 minutos</span>
          </span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span>Sem taxas ocultas</span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span>Contrato direto e transparente</span>
        </div>
      </div>
    </section>
  );
}
