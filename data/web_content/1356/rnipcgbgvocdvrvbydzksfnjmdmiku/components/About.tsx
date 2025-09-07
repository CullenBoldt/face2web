import React from 'react';
import { AboutContent } from '../types';
import { AnimatedSection } from './AnimatedSection';

interface AboutProps {
  content: AboutContent;
}

export const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2">
          <AnimatedSection>
            <img
              src={content.image}
              alt="Restaurant Interior"
              className="rounded-lg shadow-2xl w-full"
            />
          </AnimatedSection>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">{content.title}</h2>
            <div className="w-24 h-1 bg-accent mb-6 mx-auto md:mx-0"></div>
            <p className="text-secondary mb-4 leading-relaxed">{content.paragraph1}</p>
            <p className="text-secondary leading-relaxed">{content.paragraph2}</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};