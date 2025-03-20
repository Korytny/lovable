
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Главная', href: '#hero' },
  { name: 'Проекты', href: '#projects' },
  { name: 'Бизнес Примеры', href: '#case-studies' },
  { name: 'Этапы проекта', href: '#workflow' },
  { name: 'Команда', href: '#team' },
  { name: 'Отзывы', href: '#testimonials' },
  { name: 'Контакты', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    sections.forEach(section => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 border-b",
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-white/10 shadow-lg" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hero" 
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-gradient hover:opacity-90 transition-opacity">AI Business</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-white/80 hover:text-white transition-colors duration-200 relative",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all",
                activeSection === link.href 
                  ? "text-white after:w-full" 
                  : "after:w-0 hover:after:w-full"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            variant="primary"
            className="hover:scale-105 transition-transform"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Начать проект
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-base font-medium text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="primary"
                className="mt-4 w-full hover:scale-[1.02] transition-transform"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
              >
                Начать проект
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
