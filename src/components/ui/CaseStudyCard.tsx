
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
  reverse?: boolean;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  index,
  reverse = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:grid-flow-col md:auto-cols-fr' : ''}`}>
        <div className={reverse ? 'md:order-2' : ''}>
          <p className="text-sm font-medium px-3 py-1 bg-black text-white rounded-full inline-block mb-4">{subtitle}</p>
          <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
          <p className="text-white mb-6">{description}</p>
          <a href="#contact" className="inline-flex items-center text-sm font-medium text-primary hover:underline transition-all group">
            Подробнее 
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className={`glass-card p-3 shadow-lg ${reverse ? 'md:order-1' : ''}`}>
          <div className="overflow-hidden rounded-lg">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
