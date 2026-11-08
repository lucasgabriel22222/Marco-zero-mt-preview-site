import { Star, CheckCircle, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';

export function SocialProofSection() {
  return (
    <section id="avaliacoes" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background industrial pattern */}
      <div className="absolute inset-0 dark-industrial-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Rating Box */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-slate-800">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
              Prova Social e Reputação
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-base text-slate-400 leading-relaxed text-balance">
              Confira os relatos de quem já alugou andaimes, betoneiras e ferramentas para reformas residenciais e grandes canteiros em Cuiabá.
            </p>
          </div>

          {/* Google Score summary card */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 flex items-center gap-5 shrink-0 shadow-lg">
            <div className="text-center">
              <span className="text-4xl font-black text-amber-400 tracking-tight tabular-nums">
                {siteData.company.googleRating.score}
              </span>
              <span className="text-xs text-slate-400 block font-medium">de 5.0</span>
            </div>
            <div className="border-l border-slate-700 pl-5">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-200">
                Avaliação no Google
              </p>
              <p className="text-[11px] text-slate-400">
                {siteData.company.googleRating.reviewCount} avaliações verificadas
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-800/60 backdrop-blur-xs border border-slate-700/80 rounded-xl p-7 flex flex-col justify-between hover:border-slate-600 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role}</p>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  <CheckCircle className="w-3 h-3" />
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
