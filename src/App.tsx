import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { EquipmentSection } from './components/EquipmentSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedEquipmentId, setPreselectedEquipmentId] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (equipmentId?: string) => {
    setPreselectedEquipmentId(equipmentId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPreselectedEquipmentId(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
      {/* 1. NAVBAR (Header Fixo com Progresso de Scroll) */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* 2. HERO (Seção Principal com Parallax Real via JS onscroll) */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. SEÇÃO DE ESTATÍSTICAS E DESTAQUES (BANNER PARALLAX) */}
        <StatsBanner />

        {/* 4. SEÇÃO EQUIPAMENTOS & CATEGORIAS (Filtros, Cards, Orçamento) */}
        <EquipmentSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. SEÇÃO DIFERENCIAIS (Reputação 4.9, Revisão, Logística, Localização) */}
        <DifferentialsSection />

        {/* 6. SEÇÃO DE PROVA SOCIAL (AVALIAÇÕES DO GOOGLE) */}
        <SocialProofSection />

        {/* 7. SEÇÃO DE LOCALIZAÇÃO & HORÁRIOS (Dados Boa Esperança + Mapa Embed) */}
        <LocationSection />

        {/* 8. SEÇÃO FAQ (PERGUNTAS FREQUENTES - Accordion Interativo) */}
        <FaqSection />

        {/* 9. CTA FINAL (CHAMADA PARA AÇÃO DIRETA) */}
        <FinalCta />
      </main>

      {/* 10. FOOTER (RODAPÉ TEMA ESCURO PREMIUM) */}
      <Footer />

      {/* 11. BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsApp />

      {/* Modal Interativo de Cotação Rápida */}
      <QuoteSimulatorModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedEquipmentId={preselectedEquipmentId}
      />
    </div>
  );
}
