import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Import staff images
import AndreImage from '@/assets/leader/STAFF-21-22-370x370_Andre.jpg';
import ThomasImage from '@/assets/leader/STAFF-21-227-370x370_Thomas.jpg';
import JulienImage from '@/assets/leader/Julien.jpg';
import GaryImage from '@/assets/leader/67eb9_Gary LaDrido Headshot.jpg';
import MarcyImage from '@/assets/leader/1548694377276_marcy.jpg';

const ClubLeadership = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    fr: {
      title: "Direction du Club",
      subtitle: "L'équipe dirigeante d'AS Monaco Football Féminin",
      backButton: "Retour au Club",
      leadership: [
        {
          name: "André-Pierre Couffet",
          position: "Président",
          image: AndreImage
        },
        {
          name: "Thomas Martini",
          position: "Directeur Sportif",
          image: ThomasImage
        },
        {
          name: "Julien Couffet",
          position: "Trésorier",
          image: JulienImage
        },
        {
          name: "Gary Ladrido",
          position: "Co-Propriétaire Principal",
          image: GaryImage
        },
        {
          name: "Marcy O'Connor",
          position: "Co-Propriétaire Principal",
          image: MarcyImage
        }
      ]
    },
    en: {
      title: "Club Leadership",
      subtitle: "The leadership team of AS Monaco Football Féminin",
      backButton: "Back to Club",
      leadership: [
        {
          name: "André-Pierre Couffet",
          position: "President",
          image: AndreImage
        },
        {
          name: "Thomas Martini",
          position: "Sporting Director",
          image: ThomasImage
        },
        {
          name: "Julien Couffet",
          position: "Treasurer",
          image: JulienImage
        },
        {
          name: "Gary Ladrido",
          position: "Co-Principal Owner",
          image: GaryImage
        },
        {
          name: "Marcy O'Connor",
          position: "Co-Principal Owner",
          image: MarcyImage
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Header Section */}
      <section className="relative h-[300px] bg-gradient-to-br from-monaco-red via-monaco-red to-red-700 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/15 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-white/25 rounded-lg rotate-12"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-montserrat-extrabold mb-4 animate-fade-in">{currentContent.title}</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed font-cinzel-decorative">{currentContent.subtitle}</p>
          
          {/* Decorative Line */}
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-monaco-yellow rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 pt-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/club')}
          className="flex items-center gap-2 hover:bg-monaco-red hover:text-white hover:border-monaco-red transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          {currentContent.backButton}
        </Button>
      </div>

      {/* Leadership Team Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* First Row - 3 Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {currentContent.leadership.slice(0, 3).map((member, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-monaco-red to-monaco-yellow"></div>
                
                <div className="p-6">
                  {/* Photo */}
                  <div className="relative mb-6">
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/300x300/e5e7eb/6b7280?text=${member.name.split(' ').map(n => n[0]).join('')}`;
                        }}
                      />
                    </div>
                    {/* Decorative corner */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-monaco-red rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-cinzel-decorative-bold text-foreground mb-2 group-hover:text-monaco-red transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {member.position}
                    </p>
                  </div>
                </div>
                
                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-monaco-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[800px] mx-auto">
            {currentContent.leadership.slice(3, 5).map((member, index) => (
              <div 
                key={index + 3}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 3) * 0.2}s` }}
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-monaco-red to-monaco-yellow"></div>
                
                <div className="p-6">
                  {/* Photo */}
                  <div className="relative mb-6">
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/300x300/e5e7eb/6b7280?text=${member.name.split(' ').map(n => n[0]).join('')}`;
                        }}
                      />
                    </div>
                    {/* Decorative corner */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-monaco-red rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-cinzel-decorative-bold text-foreground mb-2 group-hover:text-monaco-red transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {member.position}
                    </p>
                  </div>
                </div>
                
                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-monaco-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubLeadership; 