import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface NewsArticle {
  id: string;
  title_fr: string;
  title_en: string;
  content_fr: string;
  content_en: string;
  excerpt_fr?: string;
  excerpt_en?: string;
  featured_image_url?: string;
  published: boolean;
  created_at: string;
}

const News = () => {
  const { language } = useLanguage();
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setNews(data);
    } catch (error) {
      console.error('Error loading news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscriptionMessage(language === 'fr' ? 'Veuillez entrer une adresse email valide' : 'Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    setSubscriptionMessage('');

    try {
      // Check if email already exists
      const { data: existingSubscriber } = await supabase
        .from('newsletter_subscribers')
        .select('id, subscribed')
        .eq('email', email)
        .single();

      if (existingSubscriber) {
        if (existingSubscriber.subscribed) {
          setSubscriptionMessage(language === 'fr' ? 'Vous êtes déjà abonné à notre newsletter!' : 'You are already subscribed to our newsletter!');
        } else {
          // Resubscribe
          const { error } = await supabase
            .from('newsletter_subscribers')
            .update({ subscribed: true })
            .eq('email', email);
          
          if (error) throw error;
          setSubscriptionMessage(language === 'fr' ? 'Bienvenue de retour! Vous êtes maintenant réabonné.' : 'Welcome back! You are now resubscribed.');
        }
      } else {
        // New subscription
        const { error } = await supabase
          .from('newsletter_subscribers')
          .insert([{ email, subscribed: true }]);
        
        if (error) throw error;
        setSubscriptionMessage(language === 'fr' ? 'Merci! Vous êtes maintenant abonné à notre newsletter.' : 'Thank you! You are now subscribed to our newsletter.');
      }

      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubscriptionMessage(language === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const content = {
    fr: {
      title: "News",
      subtitle: "Restez informés avec ASMFF",
      tagline: "Ne manquez jamais un moment !",
      features: [
        {
          title: "Résultats de Matchs",
          description: "Résultats passionnants et analyses"
        },
        {
          title: "Actualités Joueurs",
          description: "Mises à jour exclusives de l'équipe"
        },
        {
          title: "Coulisses",
          description: "Contenu exclusif des coulisses"
        },
        {
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
          title: "Match Results",
          description: "Thrilling results and analysis"
        },
        {
          title: "Player Updates",
          description: "Exclusive team updates"
        },
        {
          title: "Behind-the-Scenes",
          description: "Exclusive behind-the-scenes content"
        },
        {
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

      {/* News Articles Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-2">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-monaco-red mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading news...</p>
            </div>
          ) : news.length > 0 ? (
            <>
              <h2 className="text-3xl font-cinzel-decorative-bold text-foreground mb-8 text-center">
                {language === 'fr' ? 'Dernières Actualités' : 'Latest News'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((article) => (
                  <Card
                    key={article.id}
                    onClick={() => {
                      setSelectedArticle(article);
                      setIsModalOpen(true);
                    }}
                    className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    {article.featured_image_url && (
                      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                        <img
                          src={article.featured_image_url}
                          alt={language === 'fr' ? article.title_fr : article.title_en}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {language === 'fr' ? article.title_fr : article.title_en}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {language === 'fr' ? 
                          (article.excerpt_fr || article.content_fr.substring(0, 150) + '...') :
                          (article.excerpt_en || article.content_en.substring(0, 150) + '...')
                        }
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(article.created_at).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Article Modal */}
              <Dialog
                open={isModalOpen}
                onOpenChange={(open) => {
                  setIsModalOpen(open);
                  if (!open) setSelectedArticle(null);
                }}
              >
                <DialogContent className="max-w-3xl w-[95vw] sm:w-full">
                  {selectedArticle && (
                    <div className="space-y-4">
                      <DialogHeader>
                        <DialogTitle>
                          {language === 'fr' ? selectedArticle.title_fr : selectedArticle.title_en}
                        </DialogTitle>
                        <DialogDescription>
                          {new Date(selectedArticle.created_at).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                        </DialogDescription>
                      </DialogHeader>

                      {selectedArticle.featured_image_url && (
                        <img
                          src={selectedArticle.featured_image_url}
                          alt={language === 'fr' ? selectedArticle.title_fr : selectedArticle.title_en}
                          className="w-full h-auto rounded-md"
                        />
                      )}

                      <div className="prose max-w-none whitespace-pre-wrap">
                        {language === 'fr' ? selectedArticle.content_fr : selectedArticle.content_en}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <div className="mb-8">
                <h2 className="text-3xl font-cinzel-decorative-bold text-foreground mb-4">
                  {currentContent.comingSoon}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentContent.comingSoonText}
                </p>
              </div>
            </div>
          )}
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
            
            <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={currentContent.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-monaco-red focus:border-monaco-red transition-colors"
                required
              />
              <Button 
                type="submit"
                disabled={isSubscribing}
                className="bg-monaco-red hover:bg-monaco-red/90 text-white flex items-center gap-2 shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail className="w-4 h-4" />
                {isSubscribing ? (language === 'fr' ? 'Inscription...' : 'Subscribing...') : currentContent.subscribe}
              </Button>
            </form>
            
            {subscriptionMessage && (
              <div className={`mt-4 p-3 rounded-md text-sm ${
                subscriptionMessage.includes('error') || subscriptionMessage.includes('erreur') 
                  ? 'bg-red-100 text-red-700 border border-red-200' 
                  : 'bg-green-100 text-green-700 border border-green-200'
              }`}>
                {subscriptionMessage}
              </div>
            )}
            
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
            {/* <Button 
              onClick={() => window.open('https://instagram.com/asmfootballfeminin', '_blank', 'noopener,noreferrer')}
              variant="outline" 
              className="bg-white text-monaco-red hover:bg-white/90 border-white hover:border-white/90"
            >
              {language === 'fr' ? 'Suivez-nous' : 'Follow Us'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;