import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      description: "AS Monaco Football Féminin - Développer les stars de demain dans la Principauté de Monaco.",
      quickLinks: "Liens Rapides",
      contact: "Contact",
      followUs: "Suivez-nous",
      allRights: "Tous droits réservés",
      address: "Stade Louis II, Monaco",
      email: "contact@asm-ff.com",
      phone: "+377 92 05 74 73"
    },
    en: {
      description: "AS Monaco Football Féminin - Developing tomorrow's stars in the Principality of Monaco.",
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us",
      allRights: "All rights reserved",
      address: "Stade Louis II, Monaco",
      email: "contact@asm-ff.com",
      phone: "+377 92 05 74 73"
    }
  };

  const currentContent = content[language];

  const quickLinks = [
    { name: language === 'fr' ? 'Accueil' : 'Home', href: '/' },
    { name: language === 'fr' ? 'Effectif' : 'Roster', href: '/roster' },
    { name: language === 'fr' ? 'Matchs' : 'Matches', href: '/matches' },
    { name: language === 'fr' ? 'Club' : 'Club', href: '/club' },
    { name: language === 'fr' ? 'Académie' : 'Academy', href: '/academy' },
    { name: language === 'fr' ? 'Actualités' : 'News', href: '/news' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: `mailto:${currentContent.email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-monaco-red text-white">
      <div className="container mx-auto px-2 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/src/assets/team logo/AS MONACO FF.png"
                alt="AS Monaco FF"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">AS Monaco</h3>
                <p className="text-sm opacity-90">Football Féminin</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{currentContent.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">{currentContent.contact}</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>{currentContent.address}</p>
              <p>
                <a 
                  href={`mailto:${currentContent.email}`}
                  className="hover:opacity-100 transition-opacity duration-200"
                >
                  {currentContent.email}
                </a>
              </p>
              <p>
                <a 
                  href={`tel:${currentContent.phone}`}
                  className="hover:opacity-100 transition-opacity duration-200"
                >
                  {currentContent.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{currentContent.followUs}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 AS Monaco Football Féminin. {currentContent.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
}; 