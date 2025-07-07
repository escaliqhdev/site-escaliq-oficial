import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0B0B0F] via-[#1a1a2e] to-[#0B0B0F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#00BFFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#8A2BE2]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para <span className="text-[#00BFFF]">escalar</span> seu negócio?
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed px-4 sm:px-0">
            Comece agora com nosso <strong>Plano Base Digital</strong> e transforme 
            seu marketing em uma máquina de vendas automatizada.
          </p>

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Diagnóstico Gratuito
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              Análise completa do seu negócio e proposta personalizada sem compromisso
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contato"
                className="group bg-[#00BFFF] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#0099CC] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Solicitar proposta gratuita</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="https://wa.me/5516981985528?text=Olá! Quero escalar meu negócio com a Escaliq."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#00BFFF] mb-2">24h</div>
              <div className="text-xs sm:text-sm text-gray-400">Suporte disponivel para solucionar todas suas dúvidas sobre marketing</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#00BFFF] mb-2">100%</div>
              <div className="text-xs sm:text-sm text-gray-400">Sem compromisso</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#00BFFF] mb-2">Grátis</div>
              <div className="text-xs sm:text-sm text-gray-400">Diagnóstico completo + PDF com dicas de como escalar seu negócio</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;