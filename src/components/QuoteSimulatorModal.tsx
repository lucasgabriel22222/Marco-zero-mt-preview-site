import { useState, useEffect } from 'react';
import { X, Check, Calculator, MessageSquare, Plus, Minus } from 'lucide-react';
import { siteData, buildWhatsAppLink } from '../data/siteData';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEquipmentId?: string;
}

export function QuoteSimulatorModal({
  isOpen,
  onClose,
  preselectedEquipmentId
}: QuoteSimulatorModalProps) {
  // Map of equipmentId -> quantity
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [duration, setDuration] = useState<string>('7 dias');
  const [neighborhood, setNeighborhood] = useState<string>('Boa Esperança');
  const [clientName, setClientName] = useState<string>('');

  useEffect(() => {
    if (preselectedEquipmentId) {
      setSelectedItems((prev) => ({
        ...prev,
        [preselectedEquipmentId]: (prev[preselectedEquipmentId] || 0) + 1
      }));
    }
  }, [preselectedEquipmentId]);

  if (!isOpen) return null;

  const updateQuantity = (id: string, delta: number) => {
    setSelectedItems((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      const copy = { ...prev };
      if (next === 0) {
        delete copy[id];
      } else {
        copy[id] = next;
      }
      return copy;
    });
  };

  const totalItemsCount = Object.values(selectedItems).reduce((a, b) => a + b, 0);

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const itemsSummary = Object.entries(selectedItems)
      .map(([id, qty]) => {
        const item = siteData.equipments.find((e) => e.id === id);
        return item ? `• ${qty}x ${item.name}` : '';
      })
      .filter(Boolean)
      .join('\n');

    const message = `Olá! Montei um pedido de orçamento no site da Marco Zero Mato Grosso:

${clientName ? `*Nome do Cliente/Obra:* ${clientName}\n` : ''}*Bairro/Local da Obra:* ${neighborhood || 'Cuiabá'}
*Período Previsto:* ${duration}

*Equipamentos Selecionados:*
${itemsSummary || '• Nenhum equipamento específico marcado (preciso de orientação)'}

Poderiam me informar a disponibilidade e os valores para entrega rápida?`;

    window.open(buildWhatsAppLink(message), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-slate-200">
          {/* Header */}
          <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">
                  Simulador de Cotação Rápida
                </h3>
                <p className="text-xs text-slate-400">
                  Monte sua lista de equipamentos e receba os valores no WhatsApp
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fechar simulador"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSendQuote} className="p-6 space-y-6">
            {/* Step 1: Select Equipment and Quantities */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  1. Selecione os Equipamentos Desejados:
                </label>
                <span className="text-xs font-semibold text-amber-700 tabular-nums">
                  {totalItemsCount} item(s) selecionado(s)
                </span>
              </div>

              <div className="space-y-2 max-h-56 overflow-y-auto pr-1 border border-slate-200 rounded-xl p-2.5 bg-slate-50">
                {siteData.equipments.map((item) => {
                  const qty = selectedItems[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                        qty > 0
                          ? 'bg-amber-50/70 border-amber-300'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex-1 pr-3">
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {item.recommendedDuration}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {qty > 0 ? (
                          <div className="flex items-center gap-2 bg-white rounded-md border border-slate-200 px-1 py-0.5">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded"
                              aria-label={`Diminuir quantidade de ${item.name}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold text-slate-900 w-5 text-center tabular-nums">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded"
                              aria-label={`Aumentar quantidade de ${item.name}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-amber-500 hover:text-slate-950 rounded-md transition-colors"
                          >
                            + Adicionar
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Tempo Previsto:
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="1 a 3 dias">1 a 3 dias</option>
                  <option value="7 dias (Semanal)">7 dias (Semanal)</option>
                  <option value="15 dias (Quinzenal)">15 dias (Quinzenal)</option>
                  <option value="30 dias (Mensal)">30 dias (Mensal)</option>
                  <option value="Acima de 30 dias">Acima de 30 dias</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Bairro da Obra (Cuiabá):
                </label>
                <input
                  type="text"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  placeholder="Ex: Boa Esperança, Jardim das Américas..."
                  className="w-full text-xs sm:text-sm bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Seu Nome / Empresa:
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex: Carlos Construtor"
                  className="w-full text-xs sm:text-sm bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atendimento humanizado sem espera</span>
              </p>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg shadow-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950/20" />
                  <span>Enviar Cotação pelo WhatsApp</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
