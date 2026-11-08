import { useEffect, useState } from 'react';
import { MessageSquare, ArrowDown, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { siteData, buildWhatsAppLink } from '../data/siteData';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Parallax rate 0.35 - smooth and natural
      setOffsetY(window.scrollY * 0.35);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-slate-950"
    >
      {/* Real JS Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
        }}
      >
        <img
          src="/src/assets/images/hero_construction_equipment_1794155688721.jpg"
          alt="Canteiro de obras com andaimes tubulares e equipamentos da Marco Zero MT em Cuiabá"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
        />
        {/* Measured dark scrim for WCAG AA 4.5:1 text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Superior Badge (clean industrial tag) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Locação de Andaimes e Equipamentos em Cuiabá - MT</span>
        </div>

        {/* High-Impact Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl text-balance mb-6">
          Aluguel de Andaimes, Betoneiras e Equipamentos para Construção com{' '}
          <span className="text-amber-400 underline decoration-amber-500/40 decoration-wavy decoration-2">
            Entrega Rápida
          </span>
        </h1>

        {/* Objective & Direct Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed text-balance mb-8">
          Equipamentos rigorosamente revisados, seguros e prontos para operação imediata. Atendimento
          desburocratizado e entrega pontual direto no canteiro de obras no Boa Esperança e em toda a região de Cuiabá.
        </p>

        {/* Action Buttons (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950" />
            <span>Orçar Locação no WhatsApp</span>
          </a>

          <a
            href="#equipamentos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg backdrop-blur-sm transition-all hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Ver Equipamentos Disponíveis</span>
          </a>

          {onOpenQuoteModal && (
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto text-xs text-amber-300/80 hover:text-amber-300 underline underline-offset-4 py-1"
            >
              Ou monte sua lista de cotação online →
            </button>
          )}
        </div>

        {/* Trust Markers Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300/90 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Equipamentos Inspecionados NR-18</span>
          </div>
          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Entrega e Retirada Programadas</span>
          </div>
          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-amber-400">★ 4.9</span>
            <span>Avaliação de Clientes no Google</span>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none opacity-80">
        <span className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">Rolar para baixo</span>
        <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-amber-400 rounded-full animate-bounce mt-1" />
        </div>
      </div>
    </section>
  );
}
