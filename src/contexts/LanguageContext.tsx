import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    roster: 'Équipe',
    matches: 'Calendrier',
    club: 'Club',
    news: 'Actualités',
    academy: 'Académie',
    partners: 'Partenaires',
    sponsor: 'Devenir Sponsor',
    shop: 'Boutique',
    tickets: 'Billetterie',
    
    // Home
    welcome_title: 'Bienvenue à AS Monaco Football Féminin',
    welcome_text: 'Enracinée au cœur de la Principauté, AS Monaco Football Féminin est plus qu\'une équipe — nous sommes un mouvement qui défend la croissance du football féminin à Monaco et au-delà.',
    
    // Common
    learn_more: 'En savoir plus',
    contact_us: 'Nous contacter',
    join_us: 'Nous rejoindre',
    read_more: 'Lire la suite',
  },
  en: {
    // Navigation
    home: 'Home',
    roster: 'Roster',
    matches: 'Matches Table',
    club: 'Club',
    news: 'News',
    academy: 'Academy',
    partners: 'Partners',
    sponsor: 'Become A Sponsor',
    shop: 'Shop',
    tickets: 'Tickets',
    
    // Home
    welcome_title: 'Welcome to AS Monaco Football Féminin',
    welcome_text: 'Rooted in the heart of the Principality, AS Monaco Football Féminin is more than just a team — we are a movement championing the growth of women\'s football in Monaco and beyond.',
    
    // Common
    learn_more: 'Learn more',
    contact_us: 'Contact us',
    join_us: 'Join us',
    read_more: 'Read more',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};