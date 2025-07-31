import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', href: '/' },
    { key: 'roster', href: '/roster' },
    { key: 'matches', href: '/matches' },
    { key: 'club', href: '/club' },
    { key: 'news', href: '/news' },
    { key: 'academy', href: '/academy' },
    { key: 'partners', href: '/partners' },
    { key: 'sponsor', href: '/sponsor' },
    { key: 'shop', href: '/shop' },
    { key: 'tickets', href: '/tickets' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="nav-mobile bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b shadow-sm">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo - Fully responsive with proper spacing */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-200 touch-friendly flex-shrink-0">
            <img 
              src="/teams/AS MONACO FF.png"
              alt="AS Monaco FF"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain flex-shrink-0"
            />
            <div className="hidden xs:block flex-shrink-0">
              <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-primary leading-tight block">
                AS Monaco
              </span>
              <span className="text-xs sm:text-xs md:text-sm lg:text-base text-muted-foreground block leading-tight">
                Football Féminin
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced responsive with proper text alignment */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-3 flex-shrink-0">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`px-2 py-2 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 rounded-md text-xs xl:text-sm 2xl:text-base font-bold transition-all duration-200 hover:scale-105 touch-friendly text-center whitespace-nowrap flex-shrink-0 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-monaco'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Tablet Navigation - Medium screens with proper spacing */}
          <div className="hidden md:flex lg:hidden items-center space-x-1 flex-shrink-0">
            {navigationItems.slice(0, 5).map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`px-1 py-2 rounded-md text-xs font-bold transition-all duration-200 hover:scale-105 touch-friendly text-center whitespace-nowrap flex-shrink-0 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-monaco'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            {/* More button for remaining items */}
            <Button
              variant="outline"
              size="sm"
              className="px-1 py-1 text-xs touch-friendly flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              +{navigationItems.length - 5}
            </Button>
          </div>

          {/* Language Switcher & Mobile Menu - Responsive with proper spacing */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-shrink-0">
            <LanguageSwitcher />
            
            {/* Mobile menu button - Enhanced */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden touch-friendly p-2 w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Button>

            {/* Tablet overflow menu button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:block lg:hidden touch-friendly p-2 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced responsive with proper text alignment */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in bg-background/98 backdrop-blur-sm">
            <div className="px-2 py-3 space-y-1 border-t">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`block px-4 py-3 rounded-md text-base font-bold transition-all duration-200 touch-friendly text-center ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground shadow-monaco'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tablet overflow menu with proper text alignment */}
        {isMenuOpen && (
          <div className="hidden md:block lg:hidden animate-fade-in bg-background/98 backdrop-blur-sm">
            <div className="px-2 py-3 space-y-1 border-t">
              {navigationItems.slice(5).map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`block px-4 py-3 rounded-md text-sm font-bold transition-all duration-200 touch-friendly text-center ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground shadow-monaco'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};