import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send,
  CheckCircle,
  User,
  Building,
  Target
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    segment: '',
    objective: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [whatsMsg, setWhatsMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    setIsSuccess(false);
    try {
      const response = await fetch('https://hook.us2.make.com/egirgl8g36ti6434i3btwy5dde6bbshm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário. Tente novamente.');
      }
      // Monta mensagem para WhatsApp
      const msg =
        `Olá! Gostaria de atendimento personalizado.\n` +
        `Nome: ${formData.name}\n` +
        `E-mail: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n` +
        `Empresa: ${formData.company}\n` +
        `Segmento: ${formData.segment}\n` +
        `Objetivo: ${formData.objective}\n` +
        `Mensagem: ${formData.message}`;
      setWhatsMsg(encodeURIComponent(msg));
      setIsSuccess(true);
      setTimeout(() => {
        setShowPopup(true);
        setIsLoading(false);
      }, 800);
    } catch (err: any) {
      setErrorMsg(err.message || 'Erro ao enviar o formulário.');
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Entre em <span className="text-[#00BFFF]">Contato</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Pronto para transformar seu marketing digital? 
              Solicite seu diagnóstico gratuito e descubra o potencial do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Solicite seu <span className="text-[#00BFFF]">Diagnóstico Gratuito</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-300">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas 
                  com uma proposta personalizada para seu negócio.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors text-sm sm:text-base"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors text-sm sm:text-base"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors text-sm sm:text-base"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors text-sm sm:text-base"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="segment" className="block text-sm font-medium text-gray-300 mb-2">
                    Segmento do Negócio *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-4 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <select
                      id="segment"
                      name="segment"
                      required
                      value={formData.segment}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-[#0B0B0F] border border-[#00BFFF] rounded-lg text-white focus:outline-none focus:border-[#00BFFF] transition-colors text-sm sm:text-base appearance-none"
                      style={{ backgroundImage: 'linear-gradient(90deg, #00BFFF 0%, #8A2BE2 100%)', backgroundBlendMode: 'overlay' }}
                    >
                      <option value="">Selecione seu segmento</option>
                      <option value="e-commerce">E-commerce</option>
                      <option value="servicos">Serviços</option>
                      <option value="saude">Saúde</option>
                      <option value="educacao">Educação</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="imobiliario">Imobiliário</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="objective" className="block text-sm font-medium text-gray-300 mb-2">
                    Principal Objetivo *
                  </label>
                  <div className="relative">
                    <Target className="absolute left-3 top-4 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <select
                      id="objective"
                      name="objective"
                      required
                      value={formData.objective}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-[#0B0B0F] border border-[#00BFFF] rounded-lg text-white focus:outline-none focus:border-[#00BFFF] transition-colors text-sm sm:text-base appearance-none"
                      style={{ backgroundImage: 'linear-gradient(90deg, #00BFFF 0%, #8A2BE2 100%)', backgroundBlendMode: 'overlay' }}
                    >
                      <option value="">Selecione seu objetivo</option>
                      <option value="gerar-leads">Gerar mais leads</option>
                      <option value="aumentar-vendas">Aumentar vendas</option>
                      <option value="reduzir-cac">Reduzir CAC</option>
                      <option value="automatizar">Automatizar processos</option>
                      <option value="presenca-digital">Criar presença digital</option>
                      <option value="escalar-negocio">Escalar o negócio</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors resize-none text-sm sm:text-base"
                    placeholder="Conte-nos mais sobre seu projeto e desafios..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-[#00BFFF]/25'}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                      <span>Enviando...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                      <span>Mensagem Enviada!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Enviar Solicitação</span>
                    </>
                  )}
                </button>
                {errorMsg && (
                  <div className="mt-2 text-red-500 text-sm text-center">{errorMsg}</div>
                )}
              </form>
              {/* Popup de sucesso */}
              {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                  <div className="bg-[#181824] border border-[#00BFFF] rounded-2xl p-8 max-w-md w-full text-center shadow-xl">
                    <h3 className="text-2xl font-bold text-[#00BFFF] mb-4">Formulário enviado com sucesso!</h3>
                    <p className="text-gray-300 mb-6">Nossa equipe entrará em contato em breve. Se preferir, clique abaixo para falar direto no WhatsApp com seus dados já preenchidos:</p>
                    <a
                      href={`https://wa.me/5516981985528?text=${whatsMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-green-700 transition-colors mb-4"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Falar no WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setShowPopup(false)}
                      className="block w-full mt-2 bg-[#00BFFF] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#0099CC] transition-colors"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              )}
              {/* Mensagem de confirmação */}
              {isSuccess && !showPopup && !isLoading && (
                <div className="mt-4 text-green-400 text-center font-semibold">Formulário enviado com sucesso! Aguarde, abrindo opções...</div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">Telefone</h4>
                      <p className="text-gray-400 text-sm">(16) 98198-5528</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#8A2BE2] to-[#00BFFF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">E-mail</h4>
                      <p className="text-gray-400 text-sm">contato@escaliq.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">Localização</h4>
                      <p className="text-gray-400 text-sm">Ribeirão Preto, SP - Brasil</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
                  <a
                    href="https://wa.me/5516981985528?text=Olá! Gostaria de solicitar um diagnóstico gratuito."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 border border-[#00BFFF]/20 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Por que escolher a Escaliq?</h4>
                <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                    <span>Resposta em até 24 horas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                    <span>Diagnóstico 100% gratuito</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                    <span>Proposta personalizada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                    <span>Sem compromisso</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Horário de Atendimento</h4>
                <div className="space-y-2 text-sm sm:text-base text-gray-300">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>WhatsApp: 24h (resposta automática)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;