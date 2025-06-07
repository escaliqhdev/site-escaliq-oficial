import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      company: 'Tech Solutions',
      role: 'CEO',
      content: 'A Escaliq transformou nosso marketing digital. Em 6 meses, aumentamos nosso faturamento em 300% com as estratégias de tráfego pago.',
      rating: 5,
      result: '+300% Faturamento'
    },
    {
      name: 'Maria Santos',
      company: 'Beleza & Estilo',
      role: 'Proprietária',
      content: 'O CRM integrado ao WhatsApp revolucionou nosso atendimento. Agora convertemos 5x mais leads em clientes reais.',
      rating: 5,
      result: '5x Mais Conversões'
    },
    {
      name: 'Roberto Lima',
      company: 'Consultoria Pro',
      role: 'Sócio-Diretor',
      content: 'As landing pages criadas pela Escaliq têm uma taxa de conversão impressionante. Nossa geração de leads aumentou 250%.',
      rating: 5,
      result: '+250% Leads'
    }
  ];

  return (
    <section id="casos-sucesso" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Casos de <span className="text-[#00BFFF]">Sucesso</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Veja como nossos clientes alcançaram resultados extraordinários com nossas estratégias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-[#00BFFF]/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#00BFFF] opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm sm:text-base text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm sm:text-base lg:text-lg text-[#00BFFF] font-bold">{testimonial.result}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="/contato"
            className="inline-flex items-center bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg hover:shadow-[#00BFFF]/25 transition-all duration-300"
          >
            Seja nosso próximo caso de sucesso
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;