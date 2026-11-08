import { Star, ShieldCheck, Truck, MessageSquare, MapPin, Wrench } from 'lucide-react';
import { siteData } from '../data/siteData';

export function DifferentialsSection() {
  const icons = [Star, ShieldCheck, Truck, MessageSquare, MapPin, Wrench];

  return (
    <section id="diferenciais" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            Por que escolher a Marco Zero MT
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Compromisso Operacional e Máxima Confiabilidade no Canteiro
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-balance">
            Entendemos que máquina parada ou andaime atrasado é sinônimo de prejuízo na construção civil. Nossa operação é desenhada para garantir pontualidade, segurança e facilidade em cada locação.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.differentials.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={item.id}
                className="p-7 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                  <span>Padrão Marco Zero MT</span>
                  <span aria-hidden="true">✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
