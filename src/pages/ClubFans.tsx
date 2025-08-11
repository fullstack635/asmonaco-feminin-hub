import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Instagram, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ClubFans = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleNewsletterSubscribe = async () => {
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
      title: "Supporters",
      subtitle: "Restez Connectés au Cœur d'AS Monaco Football Féminin",
      backButton: "Retour au Club",
      content: `Pour la saison 2025/26, nous voulons rapprocher encore plus nos supporters de l'équipe.

Que vous encouragiez depuis les tribunes du Sud de la France ou que vous nous suiviez de loin, c'est votre chance de faire partie du voyage. Soyez les premiers à connaître les mises à jour des matchs, le contenu exclusif et les moments en coulisses en vous inscrivant à notre newsletter officielle ou en nous suivant sur Instagram.

Nous n'avons peut-être pas encore d'adhésion officielle, mais nous construisons quelque chose de spécial — et vous en faites partie.

Suivez-nous sur Instagram
Inscrivez-vous à notre newsletter

Parce que cette saison, chaque supporter compte.
Ensemble, écrivons le prochain chapitre d'AS Monaco Football Féminin.
#UneÉquipeUneAmbition #ASMonacoFF`
    },
    en: {
      title: "Fans",
      subtitle: "Stay Connected to the Heart of AS Monaco Football Féminin",
      backButton: "Back to Club",
      content: `For the 2025/26 season, we want to bring our supporters even closer to the team.

Whether you're cheering from the stands in the South of France or following us from afar, this is your chance to stay part of the journey. Be the first to know about match updates, exclusive content, and behind-the-scenes moments by signing up for our official newsletter or following us on Instagram.

We may not have an official membership yet, but we're building something special — and you're part of it.

Follow us on Instagram
Sign up for our newsletter

Because this season, every supporter counts.
Together, let's write the next chapter of AS Monaco Football Féminin.
#UneÉquipeUneAmbition #ASMonacoFF`
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

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
            {/* Fan Community Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-monaco-red"></div>
              <div className="absolute top-20 right-20 w-16 h-16 rounded-full border-2 border-monaco-yellow"></div>
              <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full border-2 border-monaco-red"></div>
              <div className="absolute bottom-10 right-10 w-14 h-14 rounded-full border-2 border-monaco-yellow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-monaco-red/20"></div>
            </div>
            
            <div className="relative z-10">
              <div className="prose prose-lg max-w-none">
                {currentContent.content.split('\n\n').map((paragraph, index) => {
                  // Season opener - Modern card style
                  if (paragraph.includes('For the 2025/26 season') || paragraph.includes('Pour la saison 2025/26')) {
                    return (
                      <div key={index} className="mb-12">
                        <div className="bg-gradient-to-br from-monaco-red via-red-500 to-monaco-red rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                          
                          <div className="relative z-10">
                            <div className="flex items-center justify-center mb-6">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                                <span className="text-2xl font-montserrat-extrabold">2025/26</span>
                              </div>
                            </div>
                            <p className="text-xl lg:text-2xl font-cinzel-decorative text-center leading-relaxed">
                              {paragraph.replace('For the 2025/26 season, ', '').replace('Pour la saison 2025/26, ', '')}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  // Global community - Updated to Monaco colors
                  else if (paragraph.includes('Whether you\'re cheering from the stands') || paragraph.includes('Que vous encouragiez depuis les tribunes')) {
                    return (
                      <div key={index} className="mb-12">
                        <div className="bg-gradient-to-r from-monaco-red/10 to-monaco-yellow/10 rounded-2xl p-8 border border-monaco-red/20 shadow-lg">
                          <div className="text-center">
                            <h3 className="text-2xl font-cinzel-decorative-bold text-monaco-red mb-4">
                              {language === 'fr' ? 'Notre Communauté Mondiale' : 'Our Global Community'}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                              {paragraph}
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-3">
                              <span className="bg-white rounded-full px-4 py-2 text-sm font-medium text-monaco-red shadow-sm border border-monaco-red/20">
                                {language === 'fr' ? 'Sud de la France' : 'South of France'}
                              </span>
                              <span className="bg-white rounded-full px-4 py-2 text-sm font-medium text-monaco-red shadow-sm border border-monaco-red/20">
                                {language === 'fr' ? 'Partout dans le monde' : 'Around the world'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  // Building something special - Community card
                  else if (paragraph.includes('We may not have an official membership') || paragraph.includes('Nous n\'avons peut-être pas encore d\'adhésion')) {
                    return (
                      <div key={index} className="mb-12">
                        <div className="bg-gradient-to-r from-monaco-yellow/10 to-monaco-red/10 rounded-2xl p-8 border-2 border-monaco-yellow/20 shadow-lg">
                          <div className="text-center">
                            <h3 className="text-2xl font-cinzel-decorative-bold text-monaco-red mb-4">
                              {language === 'fr' ? 'Construisons Ensemble' : 'Building Together'}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
                              {paragraph}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  // Instagram - Updated to Monaco colors
                  else if (paragraph.includes('Follow us on Instagram') || paragraph.includes('Suivez-nous sur Instagram')) {
                    return (
                      <div key={index} className="mb-8">
                        <div className="bg-gradient-to-br from-monaco-red/10 via-monaco-yellow/10 to-monaco-red/10 rounded-3xl p-8 border border-monaco-red/20 shadow-xl">
                          <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                              <div className="relative">
                                <div className="w-24 h-24 bg-gradient-to-br from-monaco-red to-monaco-yellow rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3">
                                  <Instagram className="w-12 h-12 text-white" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-monaco-red rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h3 className="text-2xl font-cinzel-decorative-bold text-monaco-red mb-3">
                                {language === 'fr' ? 'Suivez Notre Aventure' : 'Follow Our Journey'}
                              </h3>
                              <p className="text-muted-foreground mb-6">
                                {language === 'fr' 
                                  ? 'Contenu exclusif • Moments en coulisses • Stories en direct • Interactions avec l\'équipe'
                                  : 'Exclusive content • Behind-the-scenes • Live stories • Team interactions'
                                }
                              </p>
                              <Button 
                                onClick={() => window.open('https://instagram.com/asmfootballfeminin', '_blank', 'noopener,noreferrer')}
                                className="bg-gradient-to-r from-monaco-red to-monaco-yellow hover:from-monaco-red/90 hover:to-monaco-yellow/90 text-white px-8 py-3 rounded-full font-montserrat-extrabold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                              >
                                <Instagram className="w-5 h-5 mr-2" />
                                {language === 'fr' ? 'Rejoindre Instagram' : 'Follow Us on Instagram'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  // Newsletter - Email focused design
                  else if (paragraph.includes('Sign up for our newsletter') || paragraph.includes('Inscrivez-vous à notre newsletter')) {
                    return (
                      <div key={index} className="mb-12">
                        <div className="bg-gradient-to-r from-monaco-red/5 via-white to-monaco-yellow/5 rounded-3xl p-8 border-2 border-monaco-red/10 shadow-xl">
                          <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                              <div className="relative">
                                <div className="w-24 h-24 bg-gradient-to-br from-monaco-red to-monaco-yellow rounded-xl flex items-center justify-center shadow-2xl">
                                  <Mail className="w-12 h-12 text-white" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-monaco-yellow rounded-full flex items-center justify-center">
                                  <Mail className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h3 className="text-2xl font-cinzel-decorative-bold text-monaco-red mb-3">
                                {language === 'fr' ? 'Newsletter Exclusive' : 'Exclusive Newsletter'}
                              </h3>
                              <p className="text-muted-foreground mb-6">
                                {language === 'fr' 
                                  ? 'Infos en avant-première • Analyses d\'experts • Invitations spéciales • Contenu VIP'
                                  : 'Breaking news first • Expert analysis • Special invitations • VIP content'
                                }
                              </p>
                              <div className="flex flex-col md:flex-row items-center gap-3">
                                <input
                                  type="email"
                                  placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                      handleNewsletterSubscribe();
                                    }
                                  }}
                                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-monaco-red focus:border-transparent"
                                  disabled={isSubscribing}
                                />
                                <Button
                                  onClick={handleNewsletterSubscribe}
                                  className="bg-monaco-red hover:bg-monaco-red/90 text-white px-6 py-2 rounded-lg font-montserrat-extrabold shadow-md transition-all duration-300"
                                  disabled={isSubscribing}
                                >
                                  {isSubscribing ? 'Abonnement...' : language === 'fr' ? 'S\'abonner' : 'Subscribe'}
                                </Button>
                              </div>
                              {subscriptionMessage && (
                                <p className="mt-4 text-sm text-monaco-red">{subscriptionMessage}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  // Final community call - Stadium atmosphere
                  else if (paragraph.includes('Because this season, every supporter counts') || paragraph.includes('Parce que cette saison, chaque supporter compte')) {
                    return (
                      <div key={index} className="mt-16">
                        <div className="bg-gradient-to-br from-gray-900 via-monaco-red to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                          {/* Stadium lights effect */}
                          <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-white/20 to-transparent"></div>
                          <div className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-white/20 to-transparent"></div>
                          <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-white/30 to-transparent"></div>
                          
                          <div className="relative z-10 text-center">
                            <h2 className="text-3xl lg:text-4xl font-cinzel-decorative-bold mb-8">
                              {language === 'fr' 
                                ? 'Ensemble, Nous Sommes Plus Forts' 
                                : 'Together, We Are Stronger'
                              }
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                  <p className="text-xl font-medium">
                                    {language === 'fr' ? 'Chaque Supporter Compte' : 'Every Supporter Counts'}
                                  </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                  <p className="text-xl font-medium">
                                    {language === 'fr' ? 'Écrivons L\'Histoire' : 'Write History'}
                                  </p>
                                </div>
                              </div>
                            
                            <p className="text-2xl font-cinzel-decorative mb-8 opacity-90">
                              {language === 'fr' 
                                ? 'Ensemble, écrivons le prochain chapitre d\'AS Monaco Football Féminin.'
                                : 'Together, let\'s write the next chapter of AS Monaco Football Féminin.'
                              }
                            </p>
                            
                            <div className="text-lg opacity-75 font-medium">
                              #UneÉquipeUneAmbition #ASMonacoFF
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  // Skip processed paragraphs
                  else if (
                    paragraph.includes('#UneÉquipeUneAmbition') ||
                    paragraph.includes('Together, let\'s write') ||
                    paragraph.includes('Ensemble, écrivons')
                  ) {
                    return null;
                  }
                  
                  // Default paragraph - Clean modern style
                  else {
                    return (
                      <div key={index} className="mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed bg-gray-50 rounded-xl p-6 border-l-4 border-monaco-red/30">
                          {paragraph}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubFans; 