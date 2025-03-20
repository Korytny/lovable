
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  index
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
      className="opacity-0 translate-y-10 transition-all duration-700 glass-card overflow-hidden"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-10">
          <p className="text-sm font-medium mb-2 text-muted-foreground">{subtitle}</p>
          <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          <a href="#contact" className="inline-flex items-center text-sm font-medium text-primary hover:underline transition-all group">
            Узнать больше 
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
