import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  MessageCircle,
  Target,
  BarChart3,
  Zap
} from 'lucide-react';

const PlansPage = () => {
  const plans = [
    {
      name: 'Plano Inicial – Base Digital',
      price: 'R$ 3.700',
      period: '/mês',
      description: 'Ideal para negócios locais ou empresas que estão começando a investir no digital com foco em resultados rápidos e rastreáveis.',
      badge: 'Promoção de Entrada',
      color: 'from-[#00BFFF] to-[#0099CC]',
      features: [
        'Landing Page Simples (1 seção otimizada para conversão)',
        'Gestão de Tráfego Pago (Google OU Meta Ads) – até R$3.000 de verba',
        'Painel de Relatórios (via Reportei)',
        'CRM básico com WhatsApp (funil automatizado com AdsMagic)'
      ],
      benefits: [
        'Aumento rápido de leads qualificados',
        'Primeiros resultados em até 30 dias',
        'Presença digital profissional e rastreável',
        'Automação do contato inicial com clientes',
        'Relatórios claros para tomada de decisão',
        'Contrato mínimo recomendado: 3 meses'
      ]
    },
    {
      name: 'Fase 2 – Escala e Funil',
      price: 'R$ 6.500',
      period: '/mês',
      description: 'Para empresas que já validaram sua operação e querem escalar com inteligência e tecnologia.',
      badge: 'Mais Vendido',
      color: 'from-[#8A2BE2] to-[#6A1B9A]',
      features: [
        'Tráfego Multicanal (Google + Meta ou TikTok/LinkedIn Ads)',
        'Estratégias de Remarketing Inteligente',
        'Testes A/B de criativos e públicos',
        'Segmentação de Leads no CRM (etiquetas, estágios, reengajamento)',
        'Agente de IA no WhatsApp Simples (responde dúvidas + direciona para atendente)'
      ],
      benefits: [
        '3x mais conversões com funil otimizado',
        'Redução do custo por lead',
        'Acompanhamento estratégico quinzenal',
        'Segmentação avançada para vendas recorrentes',
        'Até R$3.000 de mídia incluído',
        'Acima disso, acréscimo de 20% sobre o excedente',
        'Contrato mínimo recomendado: 6 meses'
      ]
    },
    {
      name: 'Fase 3 – Máquina de Vendas',
      price: 'R$ 10.000',
      period: '/mês',
      description: 'Para empresas que querem estruturar um ecossistema avançado de performance e vendas automatizadas.',
      badge: 'Mais Completo',
      color: 'from-[#00BFFF] to-[#8A2BE2]',
      features: [
        'Tráfego Multicanal com Escala (Google + Meta + TikTok/LinkedIn Ads)',
        'Produção de criativos para anúncios (cliente grava, equipe orienta com roteiro + briefing)',
        'CRM completo com automações e reengajamento via WhatsApp',
        'Agente de Atendimento com IA avançada (dúvidas, classificação de leads e automações)',
        'Manutenção e Otimização Nos Fluxos Avançada',
        'Conteúdo SEO Estratégico: blog, palavras-chave, link building',
        'Relatórios Gerenciais + Acompanhamento Estratégico'
      ],
      benefits: [
        'Máquina de vendas 100% automatizada',
        'Aumento expressivo do faturamento',
        'Leads ultraqualificados e prontos para fechar',
        'Conteúdo que posiciona sua marca no Google',
        'Relatórios gerenciais para decisões estratégicas',
        'Implementação: R$15.000',
        'Até R$5.000 de mídia incluído',
        'Acima disso, acréscimo de 20% sobre a verba excedente',
        'Contrato mínimo recomendado: 12 meses'
      ]
    }
  ];

  const addons = [
    {
      name: 'TikTok Ads',
      price: 'R$ 1000/mês',
      description: 'Campanhas específicas para TikTok'
    },
    {
      name: 'LinkedIn Ads',
      price: 'R$ 1.200/mês',
      description: 'Campanhas B2B no LinkedIn'
    },
    {
      name: 'Blog + SEO Básico',
      price: 'R$ 1.500/mês',
      description: '8 artigos/mês otimizados para SEO'
    },
    {
      name: 'Consultoria Avançada',
      price: 'R$ 2.000/mês',
      description: 'Reuniões Mensais + estratégia personalizada'
    }
  ];

  const packages = [
    {
      name: 'Google Meu Negócio – Setup Completo',
      price: 'R$ 500',
      period: '(pagamento único)',
      description: 'Ative e otimize sua presença local no Google.',
      features: [
        'Criação e verificação da ficha',
        'Configuração completa (fotos, horários, categorias)',
        'Descrição otimizada com SEO local',
        'Vinculação com site, WhatsApp e Google Maps',
        'Treinamento básico de uso (guia rápido)',
        'Acesso ao painel e gestão inicial'
      ]
    },
    {
      name: 'Manutenção de Site – Básico',
      price: 'R$ 300',
      period: '/mês',
      description: 'Manutenção técnica e visual para manter seu site estável, seguro e funcionando.',
      features: [
        'Atualizações de plugins e tema',
        'Correções de bugs simples',
        'Backup mensal automático',
        'Monitoramento de segurança',
        'Alterações pontuais de conteúdo (texto e imagem)',
        'Suporte técnico básico (até 1h/mês)'
      ]
    },
    {
      name: 'Manutenção de Site – Avançado',
      price: 'R$ 600',
      period: '/mês',
      description: 'Mais performance, estrutura e suporte técnico contínuo.',
      features: [
        'Tudo do plano básico',
        'Auditoria técnica mensal',
        'Correções avançadas de layout, usabilidade e responsividade',
        'Criação de até 1 nova seção por mês',
        'Implementação de integrações (Pixel, Analytics, WhatsApp, etc.)',
        'Suporte técnico estendido (até 3h/mês)'
      ]
    },
    {
      name: 'Pacote SEO Essencial',
      price: 'R$ 500',
      period: '/mês',
      description: 'Para quem quer começar a aparecer no Google.',
      features: [
        'Estudo básico de palavras-chave',
        'Otimização de 3 páginas com título, descrição e H1',
        'Configuração do Google Search Console',
        'Sitemap e robots.txt',
        'Relatório mensal de indexação e melhorias'
      ]
    },
    {
      name: 'Pacote SEO Avançado',
      price: 'R$ 1.200',
      period: '/mês',
      description: 'Para escalar tráfego orgânico e competir nos buscadores.',
      features: [
        'Tudo do SEO Essencial',
        'Pesquisa aprofundada de palavras-chave (até 20)',
        'Otimização completa on-page (URLs, imagens, headings, interlinking)',
        'Link building estratégico (links internos e externos)',
        'Criação de pauta de conteúdo com SEO',
        'Relatório de desempenho + plano de ação mensal'
      ]
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#0B0B0F]">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0B0B0F] via-[#1a1a2e] to-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Planos e <span className="text-[#00BFFF]">Preços</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Escolha o plano ideal para escalar seu negócio. 
              Todos incluem acompanhamento estratégico e suporte completo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <div className="flex flex-col items-stretch">
                {/* Badge acima do card */}
                {plan.badge && (
                  <div className="flex justify-center -mb-4 z-20">
                    <div className={`bg-gradient-to-r ${plan.color} text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg border-2 border-white/10`}>
                      <Star className="h-4 w-4" />
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group flex flex-col justify-between min-h-[600px] bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 ${
                    plan.badge === 'Promoção de Entrada' ? 'border-[#00BFFF] shadow-2xl scale-105' : 'border-gray-700'
                  } rounded-3xl p-6 sm:p-8 hover:border-[#00BFFF]/50 transition-all duration-300 hover:scale-105 h-full`}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">{plan.description}</p>
                      <div className="mb-4 sm:mb-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 text-base sm:text-lg">{plan.period}</span>
                      </div>
                    </div>

                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Incluso no plano:</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#00BFFF] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resultados esperados com scroll e destaque */}
                    <div className={`rounded-xl border-2 ${plan.badge === 'Promoção de Entrada' ? 'border-[#00BFFF]' : 'border-[#8A2BE2]'} bg-gradient-to-br from-[#0B0B0F] to-gray-900/80 p-4 mb-6 shadow-inner`}
                         style={{maxHeight: '180px', overflowY: 'auto'}}>
                      <div className="font-bold text-white mb-2">Resultados esperados:</div>
                      <ul className="space-y-1 text-sm">
                        {plan.benefits.map((benefit, idx) => (
                          <li key={idx} className={
                            plan.badge === 'Promoção de Entrada' ? 'text-[#00BFFF]' : plan.badge === 'Mais Vendido' ? 'text-[#8A2BE2]' : 'text-[#00BFFF]'
                          }>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mt-auto">
                    <a
                      href="/contato"
                      className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg hover:shadow-[#00BFFF]/25 transition-all duration-300 flex items-center justify-center space-x-2 group`}
                    >
                      <span>Solicitar Proposta</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={`https://wa.me/5511999999999?text=Olá! Tenho interesse no plano ${plan.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-green-600 text-green-400 py-2 sm:py-3 rounded-full font-medium hover:bg-green-600 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900/30 to-[#1a1a2e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Serviços <span className="text-[#00BFFF]">Adicionais</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Complemente seu plano com serviços especializados para maximizar seus resultados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-[#00BFFF]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{addon.description}</p>
                <div className="text-[#00BFFF] font-bold text-lg sm:text-xl">{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Todos os planos <span className="text-[#00BFFF]">incluem</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Acompanhamento Estratégico</h3>
              <p className="text-sm sm:text-base text-gray-300">Reuniões regulares para análise de performance e otimização de campanhas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#8A2BE2] to-[#00BFFF] rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Relatórios Detalhados</h3>
              <p className="text-sm sm:text-base text-gray-300">Dashboards completos com métricas de performance e insights acionáveis</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Automações Inteligentes</h3>
              <p className="text-sm sm:text-base text-gray-300">CRM integrado com automações para WhatsApp e qualificação de leads</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pacotes Separados Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900/30 to-[#1a1a2e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Pacotes <span className="text-[#00BFFF]">Separados</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Serviços avulsos para complementar sua presença digital e performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-[#00BFFF]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{pkg.description}</p>
                  <ul className="list-disc list-inside text-gray-300 text-xs mb-4 space-y-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-[#00BFFF] font-bold text-xl mt-2">{pkg.price} <span className="text-gray-400 text-base">{pkg.period}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Solicite seu <span className="text-[#00BFFF]">Diagnóstico Gratuito</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed px-4 sm:px-0">
              Análise completa do seu negócio e proposta personalizada. 
              Descubra o potencial de crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contato"
                className="group bg-[#00BFFF] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#0099CC] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Solicitar Diagnóstico</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um diagnóstico gratuito."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#00BFFF] mb-2">100%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Gratuito</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#00BFFF] mb-2">24h</div>
                <div className="text-gray-400 text-xs sm:text-sm">Resposta garantida</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#00BFFF] mb-2">0</div>
                <div className="text-gray-400 text-xs sm:text-sm">Compromisso</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlansPage;