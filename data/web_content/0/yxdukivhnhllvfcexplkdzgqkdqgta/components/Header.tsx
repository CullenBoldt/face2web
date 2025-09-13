import React, { useState } from 'react';
import { HeaderContent, Language } from '../types';

interface HeaderProps {
  content: HeaderContent;
  language: Language;
  setLanguage: (language: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ content, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = Object.entries(content.nav);

  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-3xl font-serif font-bold text-accent">{content.logo}</a>

        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(([key, text]) => (
              <a key={key} href={`#${key}`} className="text-primary hover:text-accent transition-colors duration-300">{text}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center ml-8 space-x-2 border-l border-gray-700 pl-6">
            <button 
              onClick={() => setLanguage('es')} 
              className={`px-2 py-1 text-sm rounded-md transition-colors ${language === 'es' ? 'text-background bg-accent' : 'text-secondary hover:text-primary'}`}
              aria-pressed={language === 'es'}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`px-2 py-1 text-sm rounded-md transition-colors ${language === 'en' ? 'text-background bg-accent' : 'text-secondary hover:text-primary'}`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>

          <div className="md:hidden ml-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary focus:outline-none" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background">
          <nav className="flex flex-col items-center px-6 pt-2 pb-4 space-y-1">
            {navLinks.map(([key, text]) => (
              <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="block w-full text-center py-3 text-lg text-primary hover:text-accent transition-colors duration-300">{text}</a>
            ))}
             <div className="flex items-center w-full justify-center mt-4 space-x-4 border-t border-gray-700 pt-4">
              <button 
                onClick={() => { setLanguage('es'); setIsMenuOpen(false); }} 
                className={`px-4 py-2 text-sm rounded-md transition-colors ${language === 'es' ? 'text-background bg-accent' : 'text-secondary hover:text-primary'}`}
              >
                Español
              </button>
              <button 
                onClick={() => { setLanguage('en'); setIsMenuOpen(false); }} 
                className={`px-4 py-2 text-sm rounded-md transition-colors ${language === 'en' ? 'text-background bg-accent' : 'text-secondary hover:text-primary'}`}
              >
                English
              </button>
             </div>
          </nav>
        </div>
      )}
    </header>
  );
};
