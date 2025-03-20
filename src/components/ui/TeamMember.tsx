
import React, { useEffect, useRef } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageSrc,
  index
}) => {
  const memberRef = useRef<HTMLDivElement>(null);

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

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={memberRef}
      className="opacity-0 translate-y-10 transition-all duration-700 text-center group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card p-3 rounded-2xl overflow-hidden mb-4 transition-transform duration-300 group-hover:shadow-lg">
        <div className="aspect-square overflow-hidden rounded-xl">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-black">{name}</h3>
      <p className="text-white">{role}</p>
    </div>
  );
};

export default TeamMember;
