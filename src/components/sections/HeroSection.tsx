
import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 dark-purple-gradient">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={heroRef} 
            className="opacity-0 transition-opacity duration-1000 transform"
          >
            <span className="inline-block px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm font-medium mb-6 animate-fade-in">
              Современные ИИ-решения для бизнеса
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in text-white" style={{ animationDelay: '0.2s' }}>
              Масштабирование бизнеса с <span className="text-gradient">ИИ</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Автоматизируйте процессы, увеличивайте прибыль и масштабируйте бизнес с помощью современных решений на базе искусственного интеллекта
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                Начать проект 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="ghost"
                className="bg-white text-purple-900 hover:bg-white/90"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
              </Button>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div 
            ref={imageRef} 
            className="opacity-100 lg:pl-12"
          >
            <div className="animate-pulse-soft">
              <div className="aspect-video w-full overflow-hidden rounded-xl relative">
                <img 
                  src="/og-image.png" 
                  alt="AI Solutions" 
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
