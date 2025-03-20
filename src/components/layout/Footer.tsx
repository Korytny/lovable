
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="dark-purple-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gradient hover:opacity-90 transition-opacity">AI Business</span>
            </h3>
            <p className="text-white/80 mb-6 max-w-xs">
              Автоматизация бизнес-процессов с использованием искусственного интеллекта для масштабирования вашего бизнеса.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/80 hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">Проекты</a>
              </li>
              <li>
                <a href="#case-studies" className="text-white/80 hover:text-white transition-colors">Бизнес Примеры</a>
              </li>
              <li>
                <a href="#workflow" className="text-white/80 hover:text-white transition-colors">Этапы проекта</a>
              </li>
              <li>
                <a href="#team" className="text-white/80 hover:text-white transition-colors">Команда</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Отзывы</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-white/80" />
                <a href="mailto:info@aibusiness.com" className="text-white/80 hover:text-white transition-colors">info@aibusiness.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-white/80" />
                <a href="tel:+71234567890" className="text-white/80 hover:text-white transition-colors">+7 (123) 456-78-90</a>
              </li>
            </ul>
            <button 
              className="button-primary mt-6 hover:scale-[1.02] transition-transform"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Начать проект
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/80">
          <p>&copy; {currentYear} AI Business. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
