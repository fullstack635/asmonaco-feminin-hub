import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ClubLeadership = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    fr: {
      title: "Direction du Club",
      subtitle: "L'équipe dirigeante d'AS Monaco Football Féminin",
      backButton: "Retour au Club",
      content: `Président: André‑Pierre Couffet
Directeur Sportif: Thomas Martini  
Trésorier: Julien Couffet
Co-Propriétaire Principal: Gary Ladrido
Co-Propriétaire Principal: Marcy O'Connor`
    },
    en: {
      title: "Club Leadership",
      subtitle: "The leadership team of AS Monaco Football Féminin",
      backButton: "Back to Club",
      content: `President: André‑Pierre Couffet
Sporting Director: Thomas Martini
Treasurer: Julien Couffet
Co-Principal Owner: Gary Ladrido
Co-Principal Owner: Marcy O'Connor`
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative h-[200px] bg-red-600 flex items-center justify-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">{currentContent.title}</h1>
          <p className="text-lg opacity-90">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 pt-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/club')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {currentContent.backButton}
        </Button>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              {currentContent.content.split('\n').map((line, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4 text-lg">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubLeadership; 