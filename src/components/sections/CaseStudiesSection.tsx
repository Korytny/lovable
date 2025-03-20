
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import CaseStudyCard from '../ui/CaseStudyCard';

const caseStudies = [
  {
    title: 'Автоматизация поддержки клиентов',
    subtitle: 'Увеличение скорости обработки запросов на 200%',
    description: 'Внедрение чат-бота для компании из сферы e-commerce, что позволило сократить нагрузку на поддержку и увеличить удовлетворенность клиентов.',
    imageSrc: 'https://placehold.co/600x400/FAFAFA/CCCCCC?text=Support+Automation',
    imageAlt: 'Автоматизация поддержки клиентов'
  },
  {
    title: 'Мобильное приложение для ритейла',
    subtitle: 'Рост продаж на 30% за 3 месяца',
    description: 'Разработка мобильного приложения с персонализированными рекомендациями на основе ИИ помогла ритейл-компании значительно увеличить продажи.',
    imageSrc: 'https://placehold.co/600x400/FAFAFA/CCCCCC?text=Retail+App',
    imageAlt: 'Мобильное приложение для ритейла'
  },
  {
    title: 'Автоматизация управления складом',
    subtitle: 'Сокращение времени обработки заказов на 50%',
    description: 'Создание админ-панели для управления складскими процессами с интеграцией ИИ-алгоритмов помогло оптимизировать логистику компании.',
    imageSrc: 'https://placehold.co/600x400/FAFAFA/CCCCCC?text=Warehouse+Management',
    imageAlt: 'Автоматизация управления складом'
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Реальные кейсы"
          subtitle="Примеры успешных проектов автоматизации бизнеса с помощью искусственного интеллекта"
          className="text-black"
          subtitleClassName="text-white"
        />
        
        <div className="space-y-20 mt-16">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              index={index}
              reverse={index % 2 !== 0}
              {...caseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
