import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteData, buildWhatsAppLink } from '../data/siteData';

export function LocationSection() {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);

  // Check if open based on Cuiabá MT local time (UTC-4)
  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        // Convert to America/Cuiaba time string
        const cuiabaTimeStr = now.toLocaleTimeString('en-US', {
          timeZone: 'America/Cuiaba',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit'
        });
        const cuiabaDay = new Date(
          now.toLocaleString('en-US', { timeZone: 'America/Cuiaba' })
        ).getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday

        const [hours, minutes] = cuiabaTimeStr.split(':').map(Number);
        const currentMinutes = hours * 60 + minutes;

        // Schedule: Mon - Sat: 07:30 (450 mins) to 18:00 (1080 mins)
        if (cuiabaDay >= 1 && cuiabaDay <= 6) {
          if (currentMinutes >= 450 && currentMinutes < 1080) {
            setIsOpenNow(true);
            return;
          }
        }
        setIsOpenNow(false);
      } catch {
        setIsOpenNow(true);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="localizacao" className="py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            Base Operacional e Retirada
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Nossa Localização em Cuiabá
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-balance">
            Instalada em ponto estratégico no bairro Boa Esperança, facilitando tanto a logística rápida de entrega na sua obra quanto a retirada imediata no balcão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Practical Information (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Endereço Completo
                  </h3>
                  <p className="text-base font-semibold text-slate-900 leading-snug">
                    {siteData.company.address.street}
                  </p>
                  <p className="text-sm text-slate-600">
                    {siteData.company.address.neighborhood} — {siteData.company.address.city} - {siteData.company.address.state}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    CEP: {siteData.company.address.cep}
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Telefone e WhatsApp Direto
                  </h3>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    {siteData.company.contact.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Atendimento imediato para cotações e reservas
                  </p>
                </div>
              </div>

              {/* Working Hours with Open status */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Horário de Funcionamento
                    </h3>
                    <div
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                        isOpenNow
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {isOpenNow ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Aberto Agora</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3 h-3 text-slate-500" />
                          <span>Fechado no Momento</span>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    {siteData.company.hours.schedule}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Domingos: Plantão de reservas pelo WhatsApp
                  </p>
                </div>
              </div>

              {/* Highlights for parking & loading */}
              <div className="p-3.5 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-200/80">
                <span className="font-semibold text-slate-800">Fácil embarque e desembarque: </span>
                espaço apropriado para caminhonetes e carretinhas retirarem andaimes e equipamentos sem complicação.
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={siteData.company.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Navigation className="w-4 h-4 fill-slate-950/20" />
                <span>Como Chegar via Google Maps</span>
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm min-h-[380px] flex flex-col">
            <div className="p-3 bg-slate-900 text-slate-300 text-xs flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="font-semibold text-white">Mapa de Localização - Bairro Boa Esperança</span>
              </div>
              <a
                href={siteData.company.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                Ver ampliado
              </a>
            </div>
            <div className="flex-1 w-full h-full relative min-h-[350px]">
              <iframe
                title="Localização Marco Zero Mato Grosso no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.846660144955!2d-56.07185242416246!3d-15.602521919921474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1bf86c96a35%3A0x6b4ef8d16ba69a53!2sR.%20Maria%20Dimpina%20Lobo%20Duarte%2C%20475%20-%20Boa%20Esperan%C3%A7a%2C%20Cuiab%C3%A1%20-%20MT%2C%2078068-360!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
