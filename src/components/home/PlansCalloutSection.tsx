import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const PlansCalloutSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Planos <span className="text-[#00BFFF]">Personalizados</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Oferecemos soluções escaláveis que crescem junto com seu negócio. 
              Desde o primeiro investimento até a máquina de vendas completa.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#00BFFF] flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">Plano Essencial – Base Digital - A Consultar </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#00BFFF] flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">Fase 2 – Escala e Funil - A Consultar</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#00BFFF] flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">Fase 3 – Máquina de Vendas - A Consultar</span>
              </div>
            </div>

            <a
              href="/planos"
              className="inline-flex items-center space-x-2 bg-[#00BFFF] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#0099CC] transition-all duration-300 group"
            >
              <span>Ver todos os planos</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Plano Essencial – Base Digital</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Ideal para negócios locais ou empresas que não estão faturando no digital.</p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <li>• Landing Page Simples otimizada para conversão</li>
                  <li>• Gestão de Tráfego Pago (Google ou Meta Ads)</li>
                  <li>• CRM WhatsApp básico automatizado</li>
                  <li>• Painel de Relatórios (Reportei)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#8A2BE2]/20 to-[#00BFFF]/20 backdrop-blur-sm border border-[#00BFFF]/30 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Fase 2 – Escala e Funil</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Para empresas que querem escalar com inteligência e tecnologia.</p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <li>• Tráfego Multicanal (Google + Meta ou TikTok/LinkedIn Ads)</li>
                  <li>• Remarketing Inteligente e Testes A/B</li>
                  <li>• Segmentação de Leads e IA no WhatsApp</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#8A2BE2]/20 backdrop-blur-sm border border-[#00BFFF]/30 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Fase 3 – Máquina de Vendas</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Solução completa para escalar e automatizar vendas.</p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <li>• Tudo da Fase 1 e 2</li>
                  <li>• SEO Estratégico + IA Avançada</li>
                  <li>• CRM Completo + Conteúdo + Relatórios Gerenciais</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlansCalloutSection;