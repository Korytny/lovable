
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
  gradient?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
  subtitleClassName,
  gradient = false
}) => {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      <h2 
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          gradient && "text-gradient",
          className
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            "mt-4 text-xl text-muted-foreground max-w-3xl",
            centered && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
