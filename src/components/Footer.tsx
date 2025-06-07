import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#00BFFF]">ESCALIQ</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Marketing com inteligência: do clique à conversão automatizada. 
              Criamos estratégias escaláveis com tecnologia e performance real.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Links Rápidos</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-[#00BFFF] transition-colors text-sm">
                Home
              </Link>
              <Link to="/servicos" className="block text-gray-400 hover:text-[#00BFFF] transition-colors text-sm">
                Serviços
              </Link>
              <Link to="/sobre" className="block text-gray-400 hover:text-[#00BFFF] transition-colors text-sm">
                Sobre Nós
              </Link>
              <Link to="/planos" className="block text-gray-400 hover:text-[#00BFFF] transition-colors text-sm">
                Planos
              </Link>
              <Link to="/contato" className="block text-gray-400 hover:text-[#00BFFF] transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Serviços</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Gestão de Tráfego Pago</p>
              <p>Landing Pages</p>
              <p>CRM e WhatsApp</p>
              <p>IA para Atendimento</p>
              <p>SEO Estratégico</p>
              <p>Análise de Dados</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                <span className="text-gray-400 text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                <span className="text-gray-400 text-sm">contato@escaliq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                <span className="text-gray-400 text-sm">São Paulo, SP</span>
              </div>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors w-full sm:w-auto justify-center sm:justify-start"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Escaliq. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#00BFFF] transition-colors text-center">Política de Privacidade</a>
              <a href="#" className="hover:text-[#00BFFF] transition-colors text-center">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;