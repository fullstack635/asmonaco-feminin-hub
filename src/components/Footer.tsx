import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Instagram, Facebook } from 'lucide-react';

// Custom X (Twitter) Icon Component
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      contactUs: "Contactez-nous",
      followUs: "Suivez-nous",
      allRights: "Tous droits réservés"
    },
    en: {
      contactUs: "Contact Us",
      followUs: "Follow Us",
      allRights: "All rights reserved"
    }
  };

  const currentContent = content[language];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: XIcon, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-monaco-red text-white">
      <div className="container mx-auto px-2 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          
          {/* Follow Us Section - Left Side */}
          <div className="lg:absolute lg:left-0 lg:w-1/4">
            <h4 className="font-bold text-lg mb-4 text-center lg:text-left font-cinzel-decorative">
              {currentContent.followUs}
            </h4>
            <div className="flex justify-center lg:justify-start space-x-4">
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

          {/* Contact Us Section - Center */}
          <div className="flex items-center justify-center space-x-6">
            {/* Team Logo - Left Side */}
            <div className="flex-shrink-0">
              <img 
                src="/teams/AS MONACO FF.png"
                alt="AS Monaco FF"
                className="w-40 h-40 object-contain"
              />
            </div>

            {/* Contact Information - Right Side */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-2 font-cinzel-decorative">
                {currentContent.contactUs}
              </h2>
              <div className="space-y-1">
                <p className="text-lg">
                  <a 
                    href="tel:+330675326255"
                    className="hover:opacity-80 transition-opacity duration-200 underline"
                  >
                    +33 (0)6 75 32 62 55
                  </a>
                </p>
                <p className="text-lg">
                  <a 
                    href="mailto:contact@asm-ff.com"
                    className="hover:opacity-80 transition-opacity duration-200 underline"
                  >
                    contact@asm-ff.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Ownership Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2025 AS Monaco Football Féminin. {currentContent.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
}; 