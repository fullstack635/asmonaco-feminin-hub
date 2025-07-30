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
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b shadow-sm">
      <div className="px-[150px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <img 
              src="/teams/AS MONACO FF.png"
              alt="AS Monaco FF"
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-primary">AS Monaco</span>
              <span className="text-xs text-muted-foreground block">Football Féminin</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`px-3 py-2 rounded-md text-base font-bold transition-all duration-200 hover:scale-105 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-monaco'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-bold transition-all duration-200 ${
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