import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Globe className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-muted-foreground" />
      <Button
        variant={language === 'fr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('fr')}
        className="h-7 sm:h-8 md:h-9 lg:h-10 px-2 sm:px-3 md:px-4 text-xs sm:text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 touch-friendly mobile-button-tap"
      >
        FR
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-7 sm:h-8 md:h-9 lg:h-10 px-2 sm:px-3 md:px-4 text-xs sm:text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 touch-friendly mobile-button-tap"
      >
        EN
      </Button>
    </div>
  );
};