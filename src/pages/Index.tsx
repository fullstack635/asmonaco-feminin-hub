import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play, Trophy, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import bg1 from '@/assets/bg1.jpg';
import bg2 from '@/assets/bg2.jpg';

const Index = () => {
  const { t, language } = useLanguage();

  const homeContent = {
    fr: {
      title: "Bienvenue à AS Monaco Football Féminin",
      subtitle: "Enracinée au cœur de la Principauté, AS Monaco Football Féminin est plus qu'une équipe — nous sommes un mouvement qui défend la croissance du football féminin à Monaco et au-delà.",
      description: "Notre club rassemble des athlètes talentueuses, des supporters passionnés et un engagement partagé vers l'excellence sur et en dehors du terrain. En tant que fière représentation de l'esprit sportif de Monaco, nous visons à élever le jeu féminin à travers la compétition, l'engagement communautaire et le développement des jeunes.",
      mission: "Nous compétitionnons avec un but. Nous nous entraînons avec fierté. Et nous croyons que lorsque les filles et les femmes ont la plateforme pour briller, tout le jeu devient plus fort.",
      closing: "Que vous soyez un fan de longue date, une jeune fille rêvant de son premier but, ou un partenaire prêt à soutenir quelque chose de plus grand — bienvenue à AS Monaco Football Féminin. L'avenir du football est ici.",
      stats: [
        { icon: Trophy, label: "Division 3", value: "FFF" },
        { icon: Users, label: "Joueuses", value: "150+" },
        { icon: Target, label: "Objectif", value: "Division 1" }
      ]
    },
    en: {
      title: "Welcome to AS Monaco Football Féminin",
      subtitle: "Rooted in the heart of the Principality, AS Monaco Football Féminin is more than just a team — we are a movement championing the growth of women's football in Monaco and beyond.",
      description: "Our club brings together talented athletes, passionate supporters, and a shared commitment to excellence on and off the pitch. As a proud representation of Monaco's sporting spirit, we aim to elevate the women's game through competition, community engagement, and youth development.",
      mission: "We compete with purpose. We train with pride. And we believe that when girls and women are given the platform to shine, the entire game gets stronger.",
      closing: "Whether you're a lifelong fan, a young girl dreaming of your first goal, or a partner ready to support something bigger — welcome to AS Monaco Football Féminin. The future of football is here.",
      stats: [
        { icon: Trophy, label: "Division 3", value: "FFF" },
        { icon: Users, label: "Players", value: "150+" },
        { icon: Target, label: "Goal", value: "Division 1" }
      ]
    }
  };

  const content = homeContent[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <div className="mb-6 animate-float">
            <div className="w-24 h-24 bg-gradient-monaco rounded-full flex items-center justify-center shadow-glow mx-auto mb-4">
              <span className="text-white font-bold text-3xl">AS</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {content.title}
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/roster">
              <Button 
                size="lg" 
                className="group bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t('roster')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            
            <Link to="/matches">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 w-4 h-4" />
                {t('matches')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {content.stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-monaco transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-monaco rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.description}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.mission}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.closing}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/academy">
                  <Button className="group shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {t('academy')}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                
                <Link to="/club">
                  <Button variant="outline" className="group hover:scale-105 transition-all duration-300">
                    {t('learn_more')}
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-monaco rounded-lg transform rotate-3 opacity-20"></div>
              <img 
                src={bg2} 
                alt="AS Monaco Football Féminin in action"
                className="relative z-10 w-full h-96 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-monaco">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'fr' ? 'Rejoignez le Mouvement' : 'Join the Movement'}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {language === 'fr' 
                ? 'Découvrez comment vous pouvez faire partie de l\'avenir du football féminin à Monaco.'
                : 'Discover how you can be part of the future of women\'s football in Monaco.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sponsor">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="group shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {t('sponsor')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              
              <Link to="/tickets">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  {t('tickets')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;