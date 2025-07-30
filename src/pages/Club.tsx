import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Club = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    fr: {
      title: "Notre Club",
      subtitle: "Découvrez l'histoire, la direction et la communauté qui font d'AS Monaco FF un club unique",
      sections: [
        {
          title: "Histoire du Club",
          text: "Découvrez l'histoire fascinante d'AS Monaco Football Féminin, de ses débuts en 1976 à nos jours.",
          route: "/club/history"
        },
        {
          title: "Direction du Club",
          text: "Rencontrez l'équipe dirigeante qui guide AS Monaco FF vers l'excellence et le succès.",
          route: "/club/leadership"
        },
        {
          title: "Supporters",
          text: "Rejoignez notre communauté de supporters et restez connectés avec AS Monaco FF.",
          route: "/club/fans"
        }
      ]
    },
    en: {
      title: "Our Club",
      subtitle: "Discover the history, leadership and community that make AS Monaco FF a unique club",
      sections: [
        {
          title: "Club History",
          text: "Discover the fascinating history of AS Monaco Football Féminin, from its beginnings in 1976 to today.",
          route: "/club/history"
        },
        {
          title: "Club Leadership",
          text: "Meet the leadership team that guides AS Monaco FF towards excellence and success.",
          route: "/club/leadership"
        },
        {
          title: "Fans",
          text: "Join our community of supporters and stay connected with AS Monaco FF.",
          route: "/club/fans"
        }
      ]
    }
  };

  const currentContent = content[language];

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Brand Colors */}
      <section className="relative h-[250px] bg-monaco-red flex items-center justify-center">
        {/* Content */}
        <div className="relative z-10 text-center text-white">

          <h1 className="text-4xl md:text-5xl font-bold mb-3">{currentContent.title}</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-4xl mx-auto px-2 leading-relaxed">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Three Cards in One Row */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.sections.map((section, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => handleCardClick(section.route)}
              >
                {/* Placeholder Image */}
                <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">200x200 Image</div>
                </div>
                
                {/* Content Area */}
                <div className="p-6">
                  {/* Title Area with Red Background */}
                  <div className="bg-red-600 h-[50px] -mt-6 -mx-6 mb-4 flex items-center px-6">
                    <h3 className="text-white font-bold text-lg">{section.title}</h3>
                  </div>
                  
                  {/* Placeholder Text */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">{section.text}</p>
                  </div>
                  
                  {/* Red Button */}
                  <div className="flex justify-center">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white w-[100px]"
                    >
                      {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Club;