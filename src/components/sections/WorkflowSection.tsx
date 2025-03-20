
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import WorkflowStep from '../ui/WorkflowStep';
import { FileText, Lightbulb, Rocket, CheckCircle } from 'lucide-react';

const workflowSteps = [
  {
    icon: FileText,
    title: 'ТЗ',
    description: 'Анализируем ваши требования и составляем техническое задание',
  },
  {
    icon: Lightbulb,
    title: 'Прототипирование',
    description: 'Создаем прототип будущего решения для согласования',
  },
  {
    icon: Rocket,
    title: 'MVP',
    description: 'Разрабатываем MVP для тестирования гипотез и сбора обратной связи',
  },
  {
    icon: CheckCircle,
    title: 'Готовое решение',
    description: 'Запускаем полноценное решение и поддерживаем его развитие',
  }
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-20 dark-purple-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Как мы работаем"
          subtitle="Прозрачный процесс разработки от идеи до готового продукта"
          gradient
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={index}
              index={index}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
