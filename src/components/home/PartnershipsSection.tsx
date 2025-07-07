import { motion } from 'framer-motion';

const PartnershipsSection = () => {
  const partners = [
    { name: 'Google Ads', logo: '/googleads.png' },
    { name: 'Meta Ads', logo: '/metaads.png' },
    { name: 'TikTok Ads', logo: '/tiktok.png' },
    { name: 'LinkedIn Ads', logo: '/linkedinads.png' },
    { name: 'Google Partners', logo: '/googlepartner.png' },
    { name: 'open-ai', logo: '/open-ai-logo.webp' },
    { name: 'Reportei', logo: '/reportei.png' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Parceiros <span className="text-[#00BFFF]">Certificados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com as principais plataformas do mercado para garantir resultados excepcionais
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex space-x-8 md:space-x-12"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src={partner.logo} alt={partner.name} className="h-20 w-auto object-contain" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;