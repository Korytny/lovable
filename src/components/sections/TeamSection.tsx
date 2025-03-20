
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import TeamMember from '../ui/TeamMember';

const teamMembers = [
  {
    name: 'Иван Иванов',
    role: 'CEO',
    imageSrc: 'https://placehold.co/400x400/FAFAFA/CCCCCC?text=CEO'
  },
  {
    name: 'Анна Петрова',
    role: 'Data Scientist',
    imageSrc: 'https://placehold.co/400x400/FAFAFA/CCCCCC?text=Data+Scientist'
  },
  {
    name: 'Алексей Смирнов',
    role: 'CTO',
    imageSrc: 'https://placehold.co/400x400/FAFAFA/CCCCCC?text=CTO'
  },
  {
    name: 'Мария Кузнецова',
    role: 'UX/UI Designer',
    imageSrc: 'https://placehold.co/400x400/FAFAFA/CCCCCC?text=Designer'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Наша команда"
          subtitle="Профессионалы с опытом в области ИИ, разработки и дизайна"
          className="text-black"
          subtitleClassName="text-white"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              index={index}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
