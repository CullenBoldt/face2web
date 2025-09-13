
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Auth } from './components/Auth';
import { content } from './data/content';
import { Language } from './types';

const App: React.FC = () => {
  const firstLanguageKey = Object.keys(content)[0] as Language;
  const [language, setLanguage] = useState<Language>(firstLanguageKey);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const currentContent = content[language];

  if (!isAuthenticated) {
    return <Auth onAuthenticate={setIsAuthenticated} />;
  }

  return (
    <div className="bg-background">
      <Header 
        content={currentContent.header} 
        language={language} 
        setLanguage={setLanguage} 
      />
      <main>
        <Hero content={currentContent.hero} />
        <Menu content={currentContent.menu} language={language} />
        <About content={currentContent.about} />
        <Contact content={currentContent.contact} />
      </main>
      <Footer content={currentContent.footer}/>
    </div>
  );
};

export default App;
