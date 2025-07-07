import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, TrendingUp } from 'lucide-react';

const WhyEscaliqSection = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: 'Rastreamento 100% do funil',
      description: 'Acompanhe cada etapa da jornada do cliente com precisão absoluta'
    },
    {
      icon: Zap,
      title: 'CRM com automações no WhatsApp',
      description: 'Sistema completo de gestão de leads com automações inteligentes'
    },
    {
      icon: Users,
      title: 'Acompanhamento estratégico semanal',
      description: 'Reuniões regulares para análise de performance e ajustes estratégicos'
    },
    {
      icon: TrendingUp,
      title: 'Especialistas certificados Google',
      description: 'Time com certificações oficiais das principais plataformas'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900/30 to-[#1a1a2e]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Por que escolher a <span className="text-[#00BFFF]">Escaliq?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Combinamos tecnologia de ponta, estratégias personalizadas e acompanhamento próximo 
              para entregar resultados excepcionais para seu negócio.
            </p>
            
            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-lg flex items-center justify-center">
                    <advantage.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                    <p className="text-gray-300">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-12">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-full opacity-20 blur-xl"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">98%</div>
                    <div className="text-gray-400 text-sm">Taxa de satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">250%</div>
                    <div className="text-gray-400 text-sm">ROI médio dos clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">24h</div>
                    <div className="text-gray-400 text-sm">Tempo de resposta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">100+</div>
                    <div className="text-gray-400 text-sm">Projetos entregues</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Resultados Comprovados</h3>
                  <p className="text-gray-300">
                    Mais de 100 empresas já transformaram seus negócios com nossas estratégias
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyEscaliqSection;