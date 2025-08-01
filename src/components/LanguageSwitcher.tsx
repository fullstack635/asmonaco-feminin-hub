import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
      <Globe className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-muted-foreground flex-shrink-0" />
      <Button
        variant={language === 'fr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('fr')}
        className="h-6 w-8 sm:h-7 sm:w-9 md:h-8 md:w-10 lg:h-9 lg:w-11 xl:h-10 xl:w-12 px-0 text-xs sm:text-xs md:text-sm font-medium transition-all duration-200 hover:scale-105 flex-shrink-0 whitespace-nowrap"
      >
        FR
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-6 w-8 sm:h-7 sm:w-9 md:h-8 md:w-10 lg:h-9 lg:w-11 xl:h-10 xl:w-12 px-0 text-xs sm:text-xs md:text-sm font-medium transition-all duration-200 hover:scale-105 flex-shrink-0 whitespace-nowrap"
      >
        EN
      </Button>
    </div>
  );
};