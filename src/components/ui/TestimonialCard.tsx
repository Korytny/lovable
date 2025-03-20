
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  imageSrc: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  imageSrc,
  index
}) => {
  const testimonialRef = useRef<HTMLDivElement>(null);

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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={testimonialRef}
      className={cn(
        "opacity-0 translate-y-10 transition-all duration-700 glass-card p-8",
        "hover:shadow-xl transition-all duration-300"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Quote className="w-10 h-10 text-primary/30 mb-4" />
      <p className="text-lg mb-6 italic text-black">{quote}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={imageSrc} 
            alt={author} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
