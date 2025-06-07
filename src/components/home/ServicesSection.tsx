import { motion } from 'framer-motion';
import { 
  Target, 
  Globe, 
  MessageSquare, 
  Brain, 
  BarChart3, 
  Search 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Gestão de Tráfego Pago',
      description: 'Google, Meta, TikTok e LinkedIn Ads com rastreamento 100% do funil usando AdsMagic',
      features: ['Campanhas otimizadas', 'ROI maximizado', 'Relatórios em tempo real']
    },
    {
      icon: Globe,
      title: 'Criação de Landing Pages',
      description: 'Pages focadas em conversão com design responsivo e otimização para performance',
      features: ['Design profissional', 'Otimização CRO', 'Integração com CRM']
    },
    {
      icon: MessageSquare,
      title: 'CRM e Funis no WhatsApp',
      description: 'Automações inteligentes para nutrição e qualificação de leads via WhatsApp',
      features: ['Automação completa', 'Segmentação avançada', 'Follow-up automático']
    },
    {
      icon: Brain,
      title: 'IA para Atendimento',
      description: 'Chatbots inteligentes que qualificam leads e respondem dúvidas 24/7',
      features: ['Atendimento 24h', 'Qualificação automática', 'Integração total']
    },
    {
      icon: BarChart3,
      title: 'Análise de Dados e Relatórios',
      description: 'Dashboards completos com métricas de performance e insights estratégicos',
      features: ['Relatórios detalhados', 'Insights acionáveis', 'Acompanhamento semanal']
    },
    {
      icon: Search,
      title: 'SEO Estratégico',
      description: 'Otimização para mecanismos de busca com foco em resultados orgânicos',
      features: ['Palavras-chave estratégicas', 'Conteúdo otimizado', 'Link building']
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-gradient-to-b from-[#0B0B0F] to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Nossos <span className="text-[#00BFFF]">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Soluções completas de marketing digital com tecnologia de ponta e estratégias personalizadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-[#00BFFF]/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;