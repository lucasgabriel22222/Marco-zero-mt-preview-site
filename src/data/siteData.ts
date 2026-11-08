import heroImg from '../assets/images/hero_construction_equipment_1794155688721.jpg';
import scaffoldingImg from '../assets/images/scaffolding_tubular_1794155688673.jpg';
import concreteMixerImg from '../assets/images/concrete_mixer_1794155689404.jpg';
import soilCompactorImg from '../assets/images/soil_compactor_1794155689771.jpg';

export interface Equipment {
  id: string;
  name: string;
  category: 'andaimes' | 'concretagem' | 'compactacao' | 'eletricas' | 'elevacao';
  tag: 'Mais Alugado' | 'Revisado' | 'Pronta Entrega' | 'Alta Demanda';
  description: string;
  specs: string[];
  image: string;
  fallbackImage?: string;
  recommendedDuration: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const siteData = {
  company: {
    name: 'Marco Zero Mato Grosso',
    fullName: 'Marco Zero Mato Grosso - Locação de Equipamentos',
    shortName: 'MARCO ZERO MT',
    segment: 'Locação de Andaimes, Betoneiras, Ferramentas e Equipamentos para Construção Civil',
    tagline: 'Aluguel de andaimes, betoneiras e equipamentos para construção civil com agilidade em Cuiabá',
    address: {
      street: 'R. Maria Dimpina Lobo Duarte, 475',
      neighborhood: 'Boa Esperança',
      city: 'Cuiabá',
      state: 'MT',
      cep: '78068-360',
      country: 'Brasil',
      fullAddress: 'R. Maria Dimpina Lobo Duarte, 475 - Boa Esperança, Cuiabá - MT, 78068-360, Brasil',
      googleMapsUrl: 'https://maps.google.com/?q=R.+Maria+Dimpina+Lobo+Duarte,+475+-+Boa+Esperan%C3%A7a,+Cuiab%C3%A1+-+MT,+78068-360',
      embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.846660144955!2d-56.07185242416246!3d-15.602521919921474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1bf86c96a35%3A0x6b4ef8d16ba69a53!2sR.%20Maria%20Dimpina%20Lobo%20Duarte%2C%20475%20-%20Boa%20Esperan%C3%A7a%2C%20Cuiab%C3%A1%20-%20MT%2C%2078068-360!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr'
    },
    contact: {
      phone: '+55 65 98113-5053',
      phoneDisplay: '(65) 98113-5053',
      whatsappRaw: '5565981135053',
      whatsappDefaultMessage: 'Olá! Vim pelo site e gostaria de solicitar um orçamento de locação de equipamentos na Marco Zero Mato Grosso.',
      email: 'contato@marcozeromt.com.br',
      instagram: '@marcozeromt_locacoes',
      instagramUrl: 'https://instagram.com'
    },
    hours: {
      schedule: 'Segunda a Sábado: 07h30 às 18h',
      weekdays: '07:30 - 18:00',
      saturday: '07:30 - 18:00',
      sunday: 'Fechado (Atendimento WhatsApp em regime de plantão)'
    },
    googleRating: {
      score: 4.9,
      reviewCount: 15,
      maxScore: 5.0
    }
  },

  categories: [
    { id: 'todos', label: 'Todos os Equipamentos' },
    { id: 'andaimes', label: 'Andaimes & Torres' },
    { id: 'concretagem', label: 'Concretagem' },
    { id: 'compactacao', label: 'Compactação de Solo' },
    { id: 'eletricas', label: 'Ferramentas Elétricas' }
  ],

  equipments: [
    {
      id: 'andaime-tubular-1x1-5',
      name: 'Andaimes Tubulares e Acessórios',
      category: 'andaimes',
      tag: 'Mais Alugado',
      description: 'Torres modulares de encaixe rápido com máxima estabilidade e segurança para trabalhos em altura, pintura, alvenaria e fachadas.',
      specs: ['Pisos metálicos antiderrapantes', 'Rodízios com freio de segurança', 'Sapatas reguláveis e diagonais', 'Conforme norma regulamentadora NR-18'],
      image: scaffoldingImg,
      fallbackImage: '/images/scaffolding_tubular.jpg',
      recommendedDuration: 'Diária, Semanal ou Mensal'
    },
    {
      id: 'betoneira-400l',
      name: 'Betoneiras 400L para Concreto',
      category: 'concretagem',
      tag: 'Pronta Entrega',
      description: 'Betoneira profissional de alta capacidade com motor elétrico trifásico/monofásico revisado, basculamento suave e máxima produtividade na mistura.',
      specs: ['Capacidade do tambor: 400 litros', 'Motor com proteção elétrica blindada', 'Chassi reforçado com rodas de borracha maciça', 'Descarga rápida e volante ergonômico'],
      image: concreteMixerImg,
      fallbackImage: '/images/concrete_mixer.jpg',
      recommendedDuration: 'Semanal ou Mensal'
    },
    {
      id: 'compactador-sapo',
      name: 'Compactador de Solo (Sapo Percussão)',
      category: 'compactacao',
      tag: 'Revisado',
      description: 'Compactador de percussão a gasolina com alto poder de impacto para valas, sapatas, fundações, aterros e preparo de pisos.',
      specs: ['Força de impacto superior', 'Motor 4 tempos de partida ágil', 'Sapata reforçada para solo denso', 'Filtro de ar duplo para poeira pesada'],
      image: soilCompactorImg,
      fallbackImage: '/images/soil_compactor.jpg',
      recommendedDuration: 'Diária ou Semanal'
    },
    {
      id: 'placa-vibratoria',
      name: 'Placa Vibratória Unidirecional',
      category: 'compactacao',
      tag: 'Revisado',
      description: 'Ideal para compactação de asfalto a frio, paver, brita, pedriscos e pisos intertravados com acabamento liso e uniforme.',
      specs: ['Base em aço fundido de alta resistência', 'Coxins antivibração para o operador', 'Tanque de água para asfalto', 'Rodas retráteis para transporte fácil'],
      image: soilCompactorImg,
      fallbackImage: '/images/soil_compactor.jpg',
      recommendedDuration: 'Diária ou Semanal'
    },
    {
      id: 'martelete-rompedor',
      name: 'Marteletes Rompedores e Perfuradores (10kg a 16kg)',
      category: 'eletricas',
      tag: 'Alta Demanda',
      description: 'Equipamentos elétricos potentes para demolição de concreto, abertura de canaletas, rasgos em alvenaria e remoção de pisos.',
      specs: ['Encaixe SDS-Max / Hexagonal rápido', 'Acompanha ponteiro e talhadeira afiados', 'Sistema de amortecimento de impacto', 'Excelente relação peso/potência'],
      image: heroImg,
      fallbackImage: '/images/hero_construction_equipment.jpg',
      recommendedDuration: 'Diária ou Semanal'
    },
    {
      id: 'vibrador-concreto',
      name: 'Vibradores de Imersão e Mangotes para Concreto',
      category: 'concretagem',
      tag: 'Pronta Entrega',
      description: 'Elimina bolhas de ar e vazios na concretagem de vigas, pilares, lajes e sapatas, garantindo cura uniforme e resistência estrutural.',
      specs: ['Motor elétrico portátil e leve', 'Mangotes de 35mm e 45mm flexíveis', 'Engate rápido padrão', 'Operação contínua confiável'],
      image: concreteMixerImg,
      fallbackImage: '/images/concrete_mixer.jpg',
      recommendedDuration: 'Diária ou Semanal'
    }
  ],

  differentials: [
    {
      id: 'reputation',
      title: 'Nota 4.9 no Google',
      description: 'Avaliação média excelente atestada por mestres de obras, engenheiros e clientes reais em Cuiabá pela qualidade dos equipamentos e cumprimento de prazos.'
    },
    {
      id: 'maintenance',
      title: 'Equipamentos 100% Revisados',
      description: 'Todo o maquinário e conjunto de andaimes passa por rigorosa checagem preventiva, limpeza e teste antes de sair do nosso pátio para o seu canteiro.'
    },
    {
      id: 'logistics',
      title: 'Entrega e Retirada Ágil na Obra',
      description: 'Logística programada para Cuiabá e região metropolitana, evitando que sua equipe fique parada aguardando ferramentas.'
    },
    {
      id: 'whatsapp',
      title: 'Atendimento Direto e Sem Burocracia',
      description: 'Cotação rápida e contratação descomplicada pelo WhatsApp. Resposta imediata com valores claros e contrato prático.'
    },
    {
      id: 'location',
      title: 'Localização Estratégica no Boa Esperança',
      description: 'Ponto de fácil acesso na R. Maria Dimpina Lobo Duarte, 475, perfeito para retirada imediata de ferramentas ou despacho rápido.'
    },
    {
      id: 'support',
      title: 'Orientação Técnica para sua Obra',
      description: 'Indicamos os modelos e configurações ideais para o tamanho da sua demanda, economizando tempo e evitando desperdício de material.'
    }
  ],

  testimonials: [
    {
      id: 'rev-1',
      name: 'Carlos Alberto',
      role: 'Empreiteiro e Construtor',
      rating: 5,
      text: 'Empresa excelente! Aluguei andaimes e betoneira para uma reforma e fui muito bem atendido. Equipamentos em perfeito estado e entrega pontual.',
      date: 'Avaliação recente no Google',
      verified: true
    },
    {
      id: 'rev-2',
      name: 'Juliana Ribeiro',
      role: 'Arquiteta e Gestora de Obras',
      rating: 5,
      text: 'Atendimento rápido pelo WhatsApp e preços justos. Facilitou muito a nossa obra no Boa Esperança. Super recomendo.',
      date: 'Avaliação recente no Google',
      verified: true
    },
    {
      id: 'rev-3',
      name: 'Marcos Vinicius',
      role: 'Responsável Técnico',
      rating: 5,
      text: 'Precisávamos de martelete e compactador com urgência para abertura de vala. Chegou no mesmo dia e com tudo funcionando 100%. Parceria de confiança.',
      date: 'Avaliação recente no Google',
      verified: true
    }
  ],

  faq: [
    {
      id: 'faq-1',
      question: 'Vocês entregam os equipamentos diretamente na obra em Cuiabá?',
      answer: 'Sim! Realizamos a entrega e a retirada programada de andaimes, betoneiras, compactadores e ferramentas no endereço da sua obra em Cuiabá e municípios vizinhos com agilidade.'
    },
    {
      id: 'faq-2',
      question: 'Como faço para solicitar um orçamento de locação?',
      answer: 'É muito simples! Basta clicar em qualquer botão de WhatsApp do site, informar quais equipamentos precisa e a estimativa de dias ou semanas. Enviamos a cotação formal na hora.'
    },
    {
      id: 'faq-3',
      question: 'Os equipamentos passam por revisão antes da locação?',
      answer: 'Sim, rigorosamente! Todos os motores elétricos, sistemas a combustão, travas, rodízios e torres de andaimes são testados e higienizados antes de cada entrega para garantir segurança total.'
    },
    {
      id: 'faq-4',
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos Pix (com confirmação instantânea), cartões de crédito e débito, e faturamento para pessoas jurídicas mediante cadastro prévio.'
    },
    {
      id: 'faq-5',
      question: 'Onde a empresa está localizada e posso retirar pessoalmente?',
      answer: 'Estamos localizados na R. Maria Dimpina Lobo Duarte, 475 - Bairro Boa Esperança, Cuiabá - MT (CEP 78068-360). Você pode retirar ferramentas e equipamentos diretamente no local em nosso horário comercial.'
    }
  ]
};

export function buildWhatsAppLink(customMessage?: string): string {
  const phone = siteData.company.contact.whatsappRaw;
  const message = customMessage || siteData.company.contact.whatsappDefaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildEquipmentWhatsAppLink(equipmentName: string): string {
  const text = `Olá! Gostaria de fazer um orçamento de locação de ${equipmentName} na Marco Zero Mato Grosso.`;
  return buildWhatsAppLink(text);
}
