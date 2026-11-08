import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { buildWhatsAppLink } from '../data/siteData';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = buildWhatsAppLink(
    'Olá! Vim pelo site e gostaria de solicitar um orçamento de locação de equipamentos na Marco Zero Mato Grosso.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover / active */}
      <div
        className={`absolute right-16 mr-2 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
        role="tooltip"
      >
        <span>Faça seu orçamento no WhatsApp!</span>
        {/* Tooltip arrow */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer orçamento pelo WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
      >
        {/* Subtle pulsating ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageSquare className="w-7 h-7 fill-white stroke-emerald-500 relative z-10" />
      </a>
    </div>
  );
}
