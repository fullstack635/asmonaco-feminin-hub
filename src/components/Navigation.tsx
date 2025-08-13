import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sponsorFormUrl = language === 'fr'
    ? 'https://docs.google.com/forms/d/e/1FAIpQLSf3H3lJR4k5kD3Gb0uOXCg4YE71fb37MTCUDe4DFejmiA0VeA/viewform?usp=header'
    : 'https://docs.google.com/forms/d/e/1FAIpQLSezKsdbcK52jzKe9_ch7scBY0TVGgrdhr9Ro76ce7jW_N3Dtg/viewform?usp=header';

  const navigationItems = [
    { key: 'home', href: '/' },
    { key: 'roster', href: '/roster' },
    { key: 'matches', href: '/matches' },
    { key: 'club', href: '/club' },
    { key: 'news', href: '/news' },
    { key: 'academy', href: '/academy' },
    { key: 'partners', href: '/partners' },
    { key: 'sponsor', href: sponsorFormUrl, external: true },
    { key: 'shop', href: '/shop' },
    { key: 'tickets', href: '/tickets' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleNavigation = (item: { key: string; href: string; external?: boolean }) => {
    if (item.external) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b shadow-sm" role="navigation" aria-label="Main Navigation">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Container with Fixed 50px Spacing */}
        <div className="flex items-center justify-between nav-height-responsive">
          
          {/* Logo Section - Responsive sizing */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-200"
            >
              <img 
                src="/teams/AS MONACO FF.png"
                alt="AS Monaco Football Féminin"
                className="logo-responsive object-contain"
              />
              <div className="hidden sm:block">
                <span className="font-montserrat-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-primary leading-tight block">
                  AS Monaco
                </span>
                <span className="font-cinzel-decorative text-xs sm:text-xs md:text-sm lg:text-base text-muted-foreground block leading-tight">
                  Football Féminin
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu - Hidden on mobile/tablet */}
          <div className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
            {navigationItems.map((item) => (
              item.external ? (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item)}
                  className="px-2 py-2 2xl:px-3 2xl:py-2 rounded-md text-xs 2xl:text-sm font-montserrat-extrabold transition-all duration-200 hover:scale-105 text-center whitespace-nowrap text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {t(item.key)}
                </button>
              ) : (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`px-2 py-2 2xl:px-3 2xl:py-2 rounded-md text-xs 2xl:text-sm font-montserrat-extrabold transition-all duration-200 hover:scale-105 text-center whitespace-nowrap ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {t(item.key)}
                </Link>
              )
            ))}
          </div>

          {/* Right Section: Menu Button + 50px + Language Switcher */}
          <div className="flex items-center">
            {/* Menu Button - Always visible on mobile/tablet, hidden on desktop */}
            <div className="xl:hidden">
              <Button
                variant="outline"
                size="sm"
                className="menu-btn-responsive p-0 flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? 
                  <X className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> : 
                  <Menu className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                }
              </Button>
            </div>

            {/* Fixed 50px Spacing */}
            <div className="nav-spacing-50"></div>

            {/* Language Switcher */}
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="xl:hidden animate-fade-in bg-background/98 backdrop-blur-sm border-t">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                item.external ? (
                  <button
                    key={item.key}
                    onClick={() => {
                      handleNavigation(item);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full px-4 py-3 rounded-md text-sm sm:text-base font-montserrat-extrabold transition-all duration-200 text-center text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {t(item.key)}
                  </button>
                ) : (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={`block px-4 py-3 rounded-md text-sm sm:text-base font-montserrat-extrabold transition-all duration-200 text-center ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};