import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, TrendingUp, Zap } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Ana Paula Silva',
      role: 'CEO & Estrategista Digital',
      specialty: 'Google Ads & Meta Ads',
      experience: '8+ anos'
    },
    {
      name: 'Carlos Mendes',
      role: 'CTO & Desenvolvedor',
      specialty: 'IA & Automações',
      experience: '10+ anos'
    },
    {
      name: 'Marina Santos',
      role: 'Head de Performance',
      specialty: 'CRO & Analytics',
      experience: '6+ anos'
    },
    {
      name: 'Rafael Costa',
      role: 'Especialista em SEO',
      specialty: 'SEO & Conteúdo',
      experience: '7+ anos'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada estratégia é desenvolvida com foco em ROI mensurável e crescimento sustentável.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Contínuo',
      description: 'Buscamos constantemente inovação e melhoria para entregar sempre mais valor.'
    },
    {
      icon: Users,
      title: 'Parceria Verdadeira',
      description: 'Trabalhamos como uma extensão da sua equipe, com transparência total.'
    },
    {
      icon: Zap,
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos as ferramentas mais avançadas para maximizar seus resultados.'
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
              Sobre a <span className="text-[#00BFFF]">Escaliq</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos especialistas em transformar negócios através do marketing digital 
              inteligente, combinando tecnologia, dados e criatividade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Quem <span className="text-[#00BFFF]">Somos</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  A Escaliq nasceu com o propósito de unir tecnologia, dados e criatividade 
                  para construir estratégias de marketing digital escaláveis e eficientes.
                </p>
                <p>
                  Nossa equipe é formada por especialistas certificados nas principais 
                  plataformas digitais, com experiência comprovada em diversos segmentos 
                  e tamanhos de negócio.
                </p>
                <p>
                  Acreditamos que cada empresa tem seu potencial único de crescimento, 
                  e nossa missão é desbloquear esse potencial através de estratégias 
                  personalizadas e resultados mensuráveis.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">100+</div>
                    <div className="text-gray-400 text-sm">Projetos Entregues</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">+40M</div>
                    <div className="text-gray-400 text-sm">Faturamento Gerado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">98%</div>
                    <div className="text-gray-400 text-sm">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">5+</div>
                    <div className="text-gray-400 text-sm">Anos de Mercado</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/30 to-[#1a1a2e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Nossa Missão</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Gerar crescimento real para negócios com base em performance, 
                rastreabilidade e inteligência estratégica, transformando 
                investimento em marketing em resultados mensuráveis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#8A2BE2] to-[#00BFFF] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Nossa Visão</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ser referência nacional em Martech orientada por dados, 
                reconhecida pela inovação tecnológica e pelos resultados 
                excepcionais entregues aos nossos clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossos <span className="text-[#00BFFF]">Valores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Os princípios que guiam cada projeto e relacionamento que construímos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-[#00BFFF]/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nosso <span className="text-[#00BFFF]">Time</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Especialistas apaixonados por resultados e inovação em marketing digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-[#00BFFF]/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#00BFFF] font-medium mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-2">{member.specialty}</p>
                  <div className="inline-flex items-center space-x-1 bg-gray-800 rounded-full px-3 py-1">
                    <Award className="h-3 w-3 text-[#00BFFF]" />
                    <span className="text-xs text-gray-300">{member.experience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossos <span className="text-[#00BFFF]">Parceiros</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Certificações e parcerias estratégicas que garantem acesso às melhores ferramentas e práticas do mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Google Partners', 'Meta Business', 'TikTok Partners', 'LinkedIn Partners'].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-[#00BFFF]/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-12 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-xs">{partner}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;