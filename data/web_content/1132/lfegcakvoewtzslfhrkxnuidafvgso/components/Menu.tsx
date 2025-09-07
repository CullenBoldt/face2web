
import React, { useState } from 'react';
import { MenuContent, Language } from '../types';
import { menuData } from '../data/menuData';
import { AnimatedSection } from './AnimatedSection';

interface MenuProps {
  content: MenuContent;
  language: Language;
}

const Menu: React.FC<MenuProps> = ({ content, language }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'appetizers', 'mainCourses', 'desserts', 'drinks'];

  const getCategoryTitle = (key: string): string => {
      return content.categories[key as keyof typeof content.categories] || key;
  }

  const filteredItems = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-serif text-center font-bold mb-4">{content.title}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 ${
                  activeCategory === category 
                  ? 'bg-accent text-background scale-105 shadow-lg' 
                  : 'bg-background text-secondary hover:bg-gray-800 hover:text-primary'
                }`}
              >
                {getCategoryTitle(category)}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {filteredItems.map(item => (
              <div key={item.name.es} className="flex justify-between space-x-4">
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-semibold text-primary">{item.name[language]}</h4>
                  <p className="text-secondary text-sm mt-1">{item.description[language]}</p>
                </div>
                <div className="flex-shrink-0">
                  <p className="text-lg sm:text-xl font-semibold text-accent">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export { Menu };