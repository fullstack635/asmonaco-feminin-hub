import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play, Trophy, Users, Target, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import background1 from '@/assets/background1.png';
import backgound2 from '@/assets/backgound2.png';

const Index = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Only trigger initial load-in animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const homeContent = {
    fr: {
      title: "Bienvenue à\nAS Monaco Football Féminin",
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
      title: "Welcome to\nAS Monaco Football Féminin",
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
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Laptop optimized */}
      <section 
        ref={heroRef}
        className="hero-mobile spacing-mobile flex items-center justify-center overflow-hidden min-h-screen lg:h-screen xl:min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${background1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay the second background image as a decorative element */}
        <img 
          src={backgound2} 
          alt="Decorative background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0" 
          style={{mixBlendMode: 'lighten'}}
        />
        
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-monaco-yellow/10 animate-pulse"></div>
        
        {/* Geometric Shapes - Enhanced for laptop */}
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 border border-secondary/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 border border-secondary/15 rounded-lg animate-float transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/6 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-secondary/10 rounded-full animate-pulse"></div>
        </div>
        
        <div className={`relative z-10 text-center text-white max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Animated Title - Laptop responsive typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-montserrat-extrabold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 leading-tight transform-gpu mobile-text-shadow">
            <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              {content.title.split('\n').map((line, lineIndex) => (
                <div 
                  key={lineIndex}
                  className="block"
                  style={{ animationDelay: `${lineIndex * 0.1}s` }}
                >
                  {line.split(' ').map((word, wordIndex) => (
                <span 
                      key={`${lineIndex}-${wordIndex}`}
                  className="inline-block mr-1 sm:mr-2 md:mr-4 lg:mr-5 xl:mr-6 hover:text-secondary transition-colors duration-300 hover:scale-105 transform-gpu"
                      style={{ animationDelay: `${(lineIndex * 5 + wordIndex) * 0.1}s` }}
                >
                  {word}
                </span>
                  ))}
                </div>
              ))}
            </span>
          </h1>
          
          {/* Animated Subtitle - Laptop responsive */}
          <p className="text-mobile-responsive lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 opacity-90 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed animate-fade-in transform-gpu px-2 sm:px-0 font-cinzel-decorative" style={{ animationDelay: '0.6s' }}>
            {content.subtitle}
          </p>
          
          {/* CTA Buttons with laptop responsiveness */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-10 justify-center items-center animate-fade-in px-4 sm:px-0 mb-8 sm:mb-12 lg:mb-16 xl:mb-20" style={{ animationDelay: '0.8s' }}>
            <Link to="/roster" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="btn-mobile group bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-transparent hover:border-white/20 shadow-glow hover:shadow-xl transition-all duration-500 hover:scale-110 transform-gpu relative overflow-hidden w-[200px] lg:px-8 lg:py-4 xl:px-10 xl:py-5 lg:text-lg xl:text-xl"
              >
                <span className="relative z-10">{t('roster')}</span>
                {/* <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:translate-x-2 transition-transform duration-300" /> */}
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:animate-shimmer"></div>
              </Button>
            </Link>
            
            <Link to="/matches" className="w-full sm:w-auto">
              <Button 
                size="lg"
                className="btn-mobile group bg-monaco-red text-white hover:bg-monaco-red/90 border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 transform-gpu shadow-lg hover:shadow-xl w-[200px] lg:px-8 lg:py-4 xl:px-10 xl:py-5 lg:text-lg xl:text-xl"
              >
                {/* <ArrowRight className="mr-2 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:translate-x-2 transition-transform duration-300" /> */}
                {t('matches')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Laptop responsive */}
      <section ref={aboutRef} className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-background relative overflow-hidden spacing-mobile">
        {/* Background Elements - Enhanced for laptop */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-0 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-24 sm:h-32 md:h-48 lg:h-64 xl:h-80 bg-secondary/5 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container-mobile relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center max-w-6xl lg:max-w-7xl mx-auto">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cinzel-decorative-bold text-foreground leading-tight relative">
                <span className="inline-block hover:text-secondary transition-colors duration-500">
                  {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
                </span>
                <div className="absolute -bottom-2 left-0 w-12 sm:w-16 lg:w-20 xl:w-24 h-1 lg:h-1.5 xl:h-2 bg-monaco-red rounded-full"></div>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-mobile-responsive lg:text-xl xl:text-xl text-muted-foreground leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  {content.description}
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-mobile-responsive lg:text-xl xl:text-xl text-muted-foreground leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  {content.mission}
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-mobile-responsive lg:text-xl xl:text-xl text-muted-foreground leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  {content.closing}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 lg:pt-8">
                <Link to="/academy" className="w-full sm:w-auto">
                  <Button className="btn-mobile group shadow-glow hover:shadow-xl transition-all duration-500 hover:scale-110 transform-gpu relative overflow-hidden w-full sm:w-auto lg:px-8 lg:py-4 xl:px-10 xl:py-5 lg:text-lg xl:text-xl">
                    <span className="relative z-10">{t('academy')}</span>
                    {/* <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:translate-x-2 transition-transform duration-300" /> */}
                    <div className="absolute inset-0 bg-white/10 transform -skew-x-12 group-hover:animate-shimmer"></div>
                  </Button>
                </Link>
                
                <Link to="/club" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="btn-mobile group bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-transparent hover:border-white/20 shadow-glow hover:shadow-xl transition-all duration-500 hover:scale-110 transform-gpu relative overflow-hidden w-[200px] lg:px-8 lg:py-4 xl:px-10 xl:py-5 lg:text-lg xl:text-xl"
                  >
                    <span className="relative z-10">{t('Learn More')}</span>
                    {/* <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:translate-x-2 transition-transform duration-300" /> */}
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:animate-shimmer"></div>
                  </Button>
                </Link>

                {/* <Link to="/club" className="w-full sm:w-auto">
                  <Button variant="secondary" className="btn-mobile group hover:scale-110 transition-all duration-500 transform-gpu border-2 border-secondary/50 hover:border-secondary bg-white/10 hover:bg-white/20 text-foreground hover:text-secondary w-full sm:w-auto lg:px-8 lg:py-4 xl:px-10 xl:py-5 lg:text-lg xl:text-xl">
                    {t('learn_more')}
                  </Button>
                </Link> */}
              </div>
            </div>
            
            <div className="relative animate-slide-in-right order-first lg:order-last" style={{ animationDelay: '0.4s' }}>
              {/* 3D Card Effect - Laptop optimized */}
              <div className="relative perspective-1000">
                <div className="absolute inset-0 bg-monaco-red rounded-2xl transform rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-700 hidden md:block"></div>
                <div className="absolute inset-0 bg-monaco-yellow/10 rounded-2xl transform -rotate-3 group-hover:rotate-3 transition-transform duration-700 hidden md:block"></div>
                
                <div className="relative group">
                  <img 
                    src={backgound2} 
                    alt="AS Monaco Football Féminin in action"
                    className="img-mobile-responsive relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-[520px] xl:h-[600px] 2xl:h-[680px] object-cover rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-700 transform-gpu group-hover:scale-105 group-hover:rotate-1"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-monaco-yellow/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-white/10 transform -skew-y-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000 rounded-2xl z-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Laptop responsive */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-monaco-red spacing-mobile">
        <div className="container-mobile text-center">
          <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cinzel-decorative-bold text-white mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
              {language === 'fr' ? 'Rejoignez le Mouvement' : 'Join the Movement'}
            </h2>
            <p className="text-mobile-responsive lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 px-2 sm:px-0 font-cinzel-decorative whitespace-pre-line">
              {language === 'fr' 
                ? 'Découvrez comment vous pouvez faire partie de \nl\'avenir du football féminin à Monaco.'
                : 'Discover how you can be part of the future of \nwomen\'s football in Monaco.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center">
              <Link to="/sponsor" className="w-full sm:w-auto">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="btn-mobile group shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto lg:px-8 lg:py-4 xl:px-10 xl:py-5 lg:text-lg xl:text-xl"
                >
                  {t('sponsor')}
                  {/* <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:translate-x-1 transition-transform duration-200" /> */}
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