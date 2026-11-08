import { useEffect, useState } from 'react';
import { Star, CheckCircle2, Truck, Zap } from 'lucide-react';
import { siteData } from '../data/siteData';

export function StatsBanner() {
  const [bgOffset, setBgOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setBgOffset(window.scrollY * 0.15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    {
      icon: Star,
      value: `${siteData.company.googleRating.score} / ${siteData.company.googleRating.maxScore}`,
      label: 'Nota de Excelência no Google',
      description: `Comprovada por ${siteData.company.googleRating.reviewCount} avaliações de profissionais e construtores em Cuiabá.`,
      highlightColor: 'text-amber-500'
    },
    {
      icon: CheckCircle2,
      value: '100% Revisados',
      label: 'Equipamentos Testados',
      description: 'Manutenção rigorosa e checagem de segurança antes de cada envio para o canteiro.',
      highlightColor: 'text-emerald-600'
    },
    {
      icon: Truck,
      value: 'Entrega Pontual',
      label: 'Logística em Cuiabá',
      description: 'Envio rápido e retirada programada para manter o cronograma da sua obra em dia.',
      highlightColor: 'text-sky-600'
    },
    {
      icon: Zap,
      value: 'Orçamento Ágil',
      label: 'Direto no WhatsApp',
      description: 'Cotação descomplicada, sem burocracia e com envio imediato de disponibilidade.',
      highlightColor: 'text-amber-600'
    }
  ];

  return (
    <section className="relative py-14 overflow-hidden bg-slate-900 border-y border-slate-800">
      {/* Background Parallax Texture / Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          transform: `translate3d(0, ${bgOffset}px, 0)`,
          backgroundImage: `radial-gradient(circle at 25px 25px, #f59e0b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ffffff 1.5%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-md rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 tabular-nums">
                      {item.value}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${item.highlightColor}`} />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1.5 uppercase tracking-wide">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
