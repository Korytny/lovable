
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: 'Умный чат-бот для вашего бизнеса',
    subtitle: 'ИИ-ассистент',
    description: 'Чат-бот, который решает задачи клиентов 24/7, интегрируется с вашей CRM и обучается на основе данных.',
    imageSrc: 'https://placehold.co/600x400/FAFAFA/CCCCCC?text=Chatbot',
    imageAlt: 'AI Chatbot для бизнеса'
  },
  {
    title: 'Мобильное приложение для вашего бизнеса',
    subtitle: 'Мобильные решения',
    description: 'Разработка мобильных приложений под iOS и Android с использованием ИИ для персонализации контента.',
    imageSrc: 'https://placehold.co/600x400/FAFAFA/CCCCCC?text=Mobile+App',
    imageAlt: 'Мобильное приложение'
  },
  {
    title: 'Управление бизнесом через админку',
    subtitle: 'Бизнес-аналитика',
    description: 'Создание мощных админ-панелей для управления бизнес-процессами и аналитикой.',
    imageSrc: 'https://placehold.co/600x400/FAFAFA/CCCCCC?text=Admin+Panel',
    imageAlt: 'Админка для бизнеса'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="dark-purple-gradient py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Наши проекты"
          subtitle="Современные решения для автоматизации бизнес-процессов с использованием искусственного интеллекта"
          gradient
          className="text-white"
        />
        
        <div className="space-y-10 mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="button-secondary"
          >
            Все проекты
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
