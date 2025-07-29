import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play, Trophy, Users, Target, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import bg1 from '@/assets/bg1.jpg';
import bg2 from '@/assets/bg2.jpg';

const Index = () => {
  const { t, language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    // Trigger initial animation
    setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

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
    <div className="min-h-screen overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-secondary/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/35 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent animate-pulse"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-secondary/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-secondary/15 rounded-lg animate-float transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-secondary/10 rounded-full animate-pulse"></div>
        </div>
        
        <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Logo with 3D effect */}
          <div className="mb-8 perspective-1000">
            <div className="relative transform-gpu transition-transform duration-700 hover:rotate-y-12 hover:scale-110">
              <div className="w-28 h-28 bg-gradient-monaco rounded-full flex items-center justify-center shadow-glow mx-auto mb-6 animate-float relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -skew-y-12 animate-shimmer"></div>
                <span className="text-white font-bold text-3xl relative z-10">AS</span>
                <Sparkles className="absolute top-2 right-2 w-4 h-4 text-secondary animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Animated Title */}
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight transform-gpu">
            <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              {content.title.split(' ').map((word, index) => (
                <span 
                  key={index}
                  className="inline-block mr-4 hover:text-secondary transition-colors duration-300 hover:scale-105 transform-gpu"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          
          {/* Animated Subtitle */}
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in transform-gpu" style={{ animationDelay: '0.6s' }}>
            {content.subtitle}
          </p>
          
          {/* CTA Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link to="/roster">
              <Button 
                size="lg" 
                className="group bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow hover:shadow-xl transition-all duration-500 hover:scale-110 transform-gpu relative overflow-hidden"
              >
                <span className="relative z-10">{t('roster')}</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
              </Button>
            </Link>
            
            <Link to="/matches">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-white/60 text-white hover:bg-white/10 hover:border-secondary transition-all duration-500 hover:scale-110 transform-gpu backdrop-blur-sm"
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                {t('matches')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Star 
              key={i}
              className="absolute text-secondary/30 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 8 + 4}px`
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-muted/50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-slide-right"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/5 rounded-full animate-float"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {content.stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-glow transition-all duration-500 hover:scale-110 transform-gpu animate-fade-in group border border-secondary/10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-monaco rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -skew-y-12 group-hover:animate-shimmer"></div>
                  <stat.icon className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{stat.value}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight relative">
                <span className="inline-block hover:text-secondary transition-colors duration-500">
                  {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
                </span>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-monaco rounded-full"></div>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  {content.description}
                </p>
                
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  {content.mission}
                </p>
                
                <p className="transform hover:translate-x-2 transition-transform duration-300 font-medium">
                  {content.closing}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link to="/academy">
                  <Button className="group shadow-glow hover:shadow-xl transition-all duration-500 hover:scale-110 transform-gpu relative overflow-hidden">
                    <span className="relative z-10">{t('academy')}</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
                  </Button>
                </Link>
                
                <Link to="/club">
                  <Button variant="outline" className="group hover:scale-110 transition-all duration-500 transform-gpu border-secondary/30 hover:border-secondary">
                    {t('learn_more')}
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              {/* 3D Card Effect */}
              <div className="relative perspective-1000">
                <div className="absolute inset-0 bg-gradient-monaco rounded-2xl transform rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent rounded-2xl transform -rotate-3 group-hover:rotate-3 transition-transform duration-700"></div>
                
                <div className="relative group">
                  <img 
                    src={bg2} 
                    alt="AS Monaco Football Féminin in action"
                    className="relative z-10 w-full h-[480px] object-cover rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-700 transform-gpu group-hover:scale-105 group-hover:rotate-1"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -skew-y-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000 rounded-2xl z-30"></div>
                </div>
              </div>
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