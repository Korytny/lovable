
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    quote: "Спасибо за автоматизацию нашего бизнеса! Теперь мы экономим 20 часов в неделю на обработке запросов клиентов.",
    author: "Дмитрий Волков",
    position: "Генеральный директор",
    company: "E-commerce Pro",
    imageSrc: "https://placehold.co/100x100/FAFAFA/CCCCCC?text=CEO"
  },
  {
    quote: "Мобильное приложение, разработанное командой AI Business, превзошло все наши ожидания. Наши клиенты в восторге!",
    author: "Елена Сорокина",
    position: "Маркетинг-директор",
    company: "Retail Connect",
    imageSrc: "https://placehold.co/100x100/FAFAFA/CCCCCC?text=CMO"
  },
  {
    quote: "Админ-панель для управления складом значительно упростила нашу работу и сократила время обработки заказов вдвое.",
    author: "Сергей Николаев",
    position: "Руководитель логистики",
    company: "Logistics Plus",
    imageSrc: "https://placehold.co/100x100/FAFAFA/CCCCCC?text=CTO"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Что говорят наши клиенты"
          subtitle="Отзывы о нашей работе от довольных клиентов"
          gradient
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
