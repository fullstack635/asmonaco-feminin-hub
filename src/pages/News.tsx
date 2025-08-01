import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Globe, Users, Video, Megaphone, ArrowRight } from 'lucide-react';

const News = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "News",
      subtitle: "Restez informés avec ASMFF",
      tagline: "Ne manquez jamais un moment !",
      features: [
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Résultats de Matchs",
          description: "Résultats passionnants et analyses"
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: "Actualités Joueurs",
          description: "Mises à jour exclusives de l'équipe"
        },
        {
          icon: <Video className="w-8 h-8" />,
          title: "Coulisses",
          description: "Contenu exclusif des coulisses"
        },
        {
          icon: <Megaphone className="w-8 h-8" />,
          title: "Annonces du Club",
          description: "Toutes les actualités officielles"
        }
      ],
      callToAction: "Votre source pour tout ce qui concerne AS Monaco Football Féminin",
      footerText: "Revenez souvent • Restez connectés • Chaque histoire commence ici",
      newsletterTitle: "Restez Informés",
      newsletterSubtitle: "Abonnez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail",
      subscribe: "S'abonner",
      emailPlaceholder: "Votre email",
      comingSoon: "Bientôt disponible",
      comingSoonText: "Nous travaillons actuellement sur de nouvelles actualités passionnantes. Revenez bientôt pour découvrir les dernières nouvelles d'AS Monaco Football Féminin !"
    },
    en: {
      title: "News",
      subtitle: "Stay in the Know with ASMFF",
      tagline: "Never miss a moment!",
      features: [
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Match Results",
          description: "Thrilling results and analysis"
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: "Player Updates",
          description: "Exclusive team updates"
        },
        {
          icon: <Video className="w-8 h-8" />,
          title: "Behind-the-Scenes",
          description: "Exclusive behind-the-scenes content"
        },
        {
          icon: <Megaphone className="w-8 h-8" />,
          title: "Club Announcements",
          description: "All official news and updates"
        }
      ],
      callToAction: "Your home for all things AS Monaco Football Féminin",
      footerText: "Check back often • Stay connected • Every story starts here",
      newsletterTitle: "Stay Informed",
      newsletterSubtitle: "Subscribe to our newsletter to receive the latest news directly in your inbox",
      subscribe: "Subscribe",
      emailPlaceholder: "Your email",
      comingSoon: "Coming Soon",
      comingSoonText: "We're currently working on exciting new content. Check back soon to discover the latest news from AS Monaco Football Féminin!"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative h-[400px] bg-monaco-red flex items-center justify-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-montserrat-extrabold mb-4">{currentContent.title}</h1>
          <p className="text-xl md:text-2xl font-cinzel-decorative mb-2 opacity-95">{currentContent.subtitle}</p>
          <p className="text-lg md:text-xl opacity-90 mb-8">{currentContent.tagline}</p>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-monaco-yellow mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cinzel-decorative-bold text-foreground mb-4">
              {currentContent.callToAction}
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentContent.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-cinzel-decorative-bold text-foreground mb-3 group-hover:text-monaco-red transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground font-medium">
              {currentContent.footerText}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-2">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-cinzel-decorative-bold text-foreground mb-4">
                {currentContent.comingSoon}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentContent.comingSoonText}
              </p>
            </div>
            
            {/* Placeholder for future news content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-muted rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-monaco-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-foreground font-bold text-lg">?</div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === 'fr' ? 'Article à venir' : 'Article Coming Soon'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Contenu passionnant en préparation' : 'Exciting content in preparation'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-[1200px] mx-auto px-2">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-cinzel-decorative-bold text-foreground mb-6">
              {currentContent.newsletterTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {currentContent.newsletterSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={currentContent.emailPlaceholder}
                className="flex-1 px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-monaco-red focus:border-monaco-red transition-colors"
              />
              <Button 
                className="bg-monaco-red hover:bg-monaco-red/90 text-white flex items-center gap-2 shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                {currentContent.subscribe}
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              {language === 'fr' 
                ? 'Nous respectons votre vie privée. Désabonnez-vous à tout moment.'
                : 'We respect your privacy. Unsubscribe at any time.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-2 text-center">
          <div className="bg-gradient-to-r from-monaco-red to-monaco-red/90 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-cinzel-decorative-bold mb-4">
              {language === 'fr' ? 'Rejoignez Notre Communauté' : 'Join Our Community'}
            </h2>
            <p className="text-lg mb-6 opacity-90">
              {language === 'fr' 
                ? 'Soyez les premiers à connaître les dernières nouvelles d\'AS Monaco Football Féminin'
                : 'Be the first to know the latest news from AS Monaco Football Féminin'
              }
            </p>
            <Button 
              variant="outline" 
              className="bg-white text-monaco-red hover:bg-white/90 border-white hover:border-white/90"
            >
              {language === 'fr' ? 'Suivez-nous' : 'Follow Us'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;