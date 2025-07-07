import { motion } from 'framer-motion';
import { 
  Target, 
  Globe, 
  MessageSquare, 
  Brain, 
  BarChart3, 
  Search,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Target,
      title: 'Gestão de Tráfego Pago',
      description: 'Estratégias avançadas em Google, Meta, TikTok e LinkedIn Ads com rastreamento completo do funil.',
      features: [
        'Campanhas otimizadas para máximo ROI',
        'Rastreamento 100% do funil de vendas',
        'Relatórios em tempo real com insights',
        'Testes A/B contínuos para otimização',
        'Remarketing inteligente e segmentado'
      ],
      benefits: [
        'Redução de até 40% no CAC',
        'Aumento de 250% na conversão',
        'ROI médio de 4:1'
      ]
    },
    {
      icon: Globe,
      title: 'Criação de Landing Pages',
      description: 'Landing Pages simples e otimizadas para conversão, com design responsivo, roteirização estratégica e otimização contínua.',
      features: [
        'Design profissional e responsivo',
        'Otimização CRO (Conversion Rate Optimization)',
        'Integração completa com CRM',
        'Testes de performance contínuos',
        'Roteirização focada em vendas'
      ],
      benefits: [
        'Taxa de conversão 300% maior',
        'Carregamento em menos de 3s',
        'Mobile-first design'
      ]
    },
    {
      icon: MessageSquare,
      title: 'CRM e Funis no WhatsApp',
      description: 'Sistema completo de gestão de relacionamento com automações inteligentes via WhatsApp e integração com AdsMagic para nutrição e conversão.',
      features: [
        'Automação completa de follow-up',
        'Segmentação avançada de leads',
        'Integração com todas as plataformas',
        'Relatórios de performance detalhados',
        'Qualificação automática de prospects'
      ],
      benefits: [
        '5x mais conversões',
        '80% de automação no atendimento',
        'Follow-up 24/7'
      ]
    },
    {
      icon: Brain,
      title: 'IA para Atendimento',
      description: 'Chatbots inteligentes que respondem dúvidas, qualificam leads e entregam prospects qualificados 24 horas por dia.',
      features: [
        'Atendimento automatizado 24/7',
        'Qualificação inteligente de leads',
        'Integração total com CRM',
        'Respostas personalizadas por segmento',
        'Aprendizado contínuo'
      ],
      benefits: [
        'Resposta instantânea',
        '70% menos tempo manual',
        'Leads 3x mais qualificados'
      ]
    },
    {
      icon: BarChart3,
      title: 'Análise de Dados e Relatórios',
      description: 'Dashboards completos com métricas de performance, insights estratégicos, painel via Reportei e acompanhamento semanal personalizado.',
      features: [
        'Dashboards em tempo real',
        'Insights acionáveis semanais',
        'Integração com todas as plataformas',
        'Relatórios personalizados',
        'Acompanhamento estratégico'
      ],
      benefits: [
        'Decisões baseadas em dados',
        'Performance 40% melhor',
        'Otimização contínua'
      ]
    },
    {
      icon: Search,
      title: 'SEO Estratégico',
      description: 'Otimização completa para mecanismos de busca com estratégias de conteúdo, palavras-chave e link building.',
      features: [
        'Pesquisa avançada de palavras-chave',
        'Criação de conteúdo otimizado',
        'Estratégia de link building',
        'Otimização técnica completa',
        'Monitoramento de rankings'
      ],
      benefits: [
        'Tráfego orgânico 300% maior',
        'Posições top 3 no Google',
        'Autoridade de domínio elevada'
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0B0B0F]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B0B0F] via-[#1a1a2e] to-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nossos <span className="text-[#00BFFF]">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Soluções completas de marketing digital com tecnologia de ponta, 
              estratégias personalizadas e foco total em resultados mensuráveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''} flex flex-col min-h-[520px] justify-between`}>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">O que está incluído:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-[#00BFFF] mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 border border-[#00BFFF]/20 rounded-xl p-6 mt-auto">
                    <h4 className="text-xl font-bold text-white mb-4">Resultados Esperados:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#00BFFF] rounded-full"></div>
                          <span className="text-gray-300 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-12">
                      <div className="aspect-square bg-gradient-to-br from-[#00BFFF]/20 to-[#8A2BE2]/20 rounded-2xl flex items-center justify-center">
                        <service.icon className="h-24 w-24 text-[#00BFFF]" />
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Pronto para <span className="text-[#00BFFF]">começar</span>?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Solicite uma proposta personalizada e descubra como podemos 
              transformar seu marketing digital em uma máquina de vendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="group bg-[#00BFFF] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0099CC] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Solicitar Proposta</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/planos"
                className="border border-[#00BFFF] text-[#00BFFF] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
              >
                Ver Planos
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;