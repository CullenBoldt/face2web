import React from 'react';
import { HeroContent } from '../types';

interface HeroProps {
  content: HeroContent;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${content.image}')` }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="text-center z-10 p-4 sm:p-6">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white tracking-wider leading-tight">
          {content.title}
        </h2>
        <p className="text-lg md:text-xl text-secondary mt-4 mb-8 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        <a
          href="#contact"
          className="bg-accent text-background font-bold py-3 px-8 rounded-md text-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105"
        >
          {content.cta}
        </a>
      </div>
    </section>
  );
};
