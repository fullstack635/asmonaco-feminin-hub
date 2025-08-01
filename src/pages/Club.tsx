import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Trophy } from 'lucide-react';

const Club = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    fr: {
      title: "Notre Club",
      subtitle: "Découvrez l'histoire, la direction et la communauté qui font d'AS Monaco Football Féminin un club unique",
      sections: [
        {
          title: "Histoire du Club",
          text: "Découvrez l'histoire fascinante d'AS Monaco Football Féminin, de ses débuts en 1976 à nos jours.",
          route: "/club/history"
        },
        {
          title: "Direction du Club",
          text: "Rencontrez l'équipe dirigeante qui guide AS Monaco Football Féminin vers l'excellence et le succès.",
          route: "/club/leadership"
        },
        {
          title: "Supporters",
          text: "Rejoignez notre communauté de supporters et restez connectés avec AS Monaco Football Féminin.",
          route: "/club/fans"
        }
      ]
    },
    en: {
      title: "Our Club",
      subtitle: "Discover the history, leadership and community that make \nAS Monaco Football Féminin a unique club",
      sections: [
        {
          title: "Club History",
          text: "Discover the fascinating history of AS Monaco Football Féminin, from its beginnings in 1976 to today.",
          route: "/club/history"
        },
        {
          title: "Club Leadership",
          text: "Meet the leadership team that guides AS Monaco Football Féminin towards excellence and success.",
          route: "/club/leadership"
        },
        {
          title: "Fans",
          text: "Join our community of supporters and stay connected with AS Monaco Football Féminin.",
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

          <h1 className="text-4xl md:text-5xl font-montserrat-extrabold mb-3">{currentContent.title}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl opacity-95 max-w-4xl mx-auto px-2 leading-relaxed font-cinzel-decorative whitespace-pre-line">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Three Cards in One Row */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {currentContent.sections.map((section, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleCardClick(section.route)}
              >
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-monaco-red via-monaco-yellow to-monaco-red"></div>
                
                {/* Image Placeholder with Overlay */}
                <div className="relative w-full h-[220px] bg-gradient-to-br from-monaco-red to-monaco-red/80 flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-lg rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/10 rounded-full"></div>
                  </div>
                  
                  {/* Content Icon Area */}
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/30">
                      <div className="text-white text-2xl font-bold">
                        {index === 0 ? <BookOpen /> : index === 1 ? <Users /> : <Trophy />}
                      </div>
                    </div>
                    <div className="text-white/80 text-sm font-medium tracking-wide mb-2">
                      {language === 'fr' ? 'Découvrir' : 'Explore'}
                    </div>
                    
                    {/* Title moved to center of red box */}
                    <div className="text-center">
                      <h3 className="text-xl lg:text-2xl font-cinzel-decorative-bold text-white mb-2 group-hover:text-monaco-yellow transition-colors duration-300">
                        {section.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-white mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-monaco-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content Area */}
                <div className="p-6 lg:p-8">
                  {/* Increased spacing between title and description */}
                  <div className="mb-8 text-center">
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base font-medium">
                      {section.text}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex justify-center">
                    <Button 
                      className="bg-monaco-red hover:bg-monaco-red/90 text-white px-8 py-3 rounded-full font-montserrat-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                      </span>
                      <div className="absolute inset-0 bg-monaco-yellow/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-500"></div>
                    </Button>
                  </div>
                </div>
                
                {/* Bottom Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-monaco-yellow/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Side Accent */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-monaco-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Club;