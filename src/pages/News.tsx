import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, ArrowRight } from 'lucide-react';

const News = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Actualités",
      subtitle: "Restez au courant avec ASMFF. Ne manquez jamais un moment ! Des résultats de matchs passionnants et des mises à jour exclusives sur les joueuses au contenu en coulisses et aux annonces du club — c'est votre foyer pour tout ce qui concerne AS Monaco Football Féminin. Revenez souvent et restez connectés au cœur de l'équipe. Parce que chaque histoire commence ici.",
      newsletterTitle: "Restez Informés",
      newsletterSubtitle: "Abonnez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail",
      subscribe: "S'abonner",
      emailPlaceholder: "Votre email",
      comingSoon: "Bientôt disponible",
      comingSoonText: "Nous travaillons actuellement sur de nouvelles actualités passionnantes. Revenez bientôt pour découvrir les dernières nouvelles d'AS Monaco Football Féminin !"
    },
    en: {
      title: "News",
      subtitle: "Stay in the Know with ASMFF. Never miss a moment! From thrilling match results and exclusive player updates to behind-the-scenes content and club announcements — this is your home for all things AS Monaco Football Féminin. Check back often and stay connected to the heart of the team. Because every story starts here.",
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
      {/* Header Section with Brand Colors */}
      <section className="relative h-[250px] bg-monaco-red flex items-center justify-center">
        {/* Content */}
        <div className="relative z-10 text-center text-white">

          <h1 className="text-4xl md:text-5xl font-bold mb-3">{currentContent.title}</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-4xl mx-auto px-2 leading-relaxed">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-2">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
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
            <h2 className="text-3xl font-bold text-foreground mb-6">
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
            <h2 className="text-2xl font-bold mb-4">
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