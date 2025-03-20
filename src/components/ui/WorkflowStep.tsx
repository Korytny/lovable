
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface WorkflowStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({
  icon: Icon,
  title,
  description,
  index
}) => {
  const stepRef = useRef<HTMLDivElement>(null);

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

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      className={cn(
        "opacity-0 translate-y-10 transition-all duration-700 glass-card p-8 text-center",
        "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default WorkflowStep;
