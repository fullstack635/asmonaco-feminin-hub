import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Trophy, Target, Heart } from 'lucide-react';

const ClubHistory = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    fr: {
      title: "Histoire du Club",
      subtitle: "AS Monaco Football Féminin – Notre Voyage. Notre Ascension.",
      backButton: "Retour au Club",
      content: `Bienvenue à AS Monaco Football Féminin — où l'héritage rencontre l'ambition sur les rives de la Méditerranée.

Fondé en 1976, notre club a commencé comme une initiative petite mais passionnée par les pionnières Bettina Gallo et Muriel Banaudo. Dès ces premiers jours, AS Monaco FF était destiné à la grandeur, se frayant un chemin dans la Division 1 française de haut niveau au milieu des années 1980 et obtenant plusieurs apparitions en demi-finale de Coupe de France. Nous étions une force alors — et nous nous reconstruisons pour en redevenir une.

Après une période difficile dans les ligues inférieures, notre club a commencé une reconstruction puissante. Alimentés par la détermination et la communauté, nous avons investi dans le développement des jeunes et élargi notre portée à travers la Riviera. En 2019, la section féminine avait grandi à plus de 150 joueuses licenciées, devenant un phare pour le football féminin dans la région.

En 2022, nous avons fait la une des journaux nationaux avec un parcours époustouflant jusqu'au 16e de finale de la Coupe de France, et en 2024, nous avons obtenu la promotion en Division 3 Féminine, rallumant notre parcours professionnel. Soutenus par un investissement international et l'esprit d'excellence de Monaco, nous construisons quelque chose d'audacieux — une équipe avec du cœur, du courage et la vision d'atteindre la Division 1 Féminine et au-delà.

AS Monaco FF est plus qu'un club.
Nous sommes une histoire de résurgence.
Nous sommes un foyer pour les talents émergents.
Nous sommes l'avenir du football féminin à Monaco.

Rejoignez-nous dans ce voyage. ⚽❤️🤍
#RiseWithUs #ASMonacoFF #UneÉquipeUneAmbition`
    },
    en: {
      title: "Club History",
      subtitle: "AS Monaco Football Féminin – Our Journey. Our Rise.",
      backButton: "Back to Club",
      content: `Welcome to AS Monaco Football Féminin — where legacy meets ambition on the shores of the Mediterranean.

Founded in 1976, our club began as a small but passionate initiative by trailblazers Bettina Gallo and Muriel Banaudo. From those early days, AS Monaco FF was destined for greatness, making its way into France's top-tier Division 1 by the mid-1980s and earning multiple Coupe de France semi-final appearances. We were a force then — and we're building to become one again.

After a challenging period in the lower leagues, our club began a powerful rebuild. Fueled by determination and community, we invested in youth development and expanded our reach across the Riviera. By 2019, the women's section had grown to over 150 licensed players, becoming a leading light for women's football in the region.

In 2022, we made national headlines with a stunning run to the Coupe de France Round of 16, and in 2024, we earned promotion to Division 3 Féminine, reigniting our professional journey. Backed by international investment and Monaco's spirit of excellence, we are building something bold — a team with heart, grit, and the vision to reach Division 1 Féminine and beyond.

AS Monaco FF is more than a club.
We are a story of resurgence.
We are a home for rising talent.
We are the future of women's football in Monaco.

Join us on the journey. ⚽❤️🤍
#RiseWithUs #ASMonacoFF #UneÉquipeUneAmbition`
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
            {/* Enhanced Background Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-monaco-yellow/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-monaco-red/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            {/* Heritage Timeline Accent */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-monaco-red via-monaco-yellow to-monaco-red opacity-20"></div>
            
            <div className="relative z-10 pl-8">
            <div className="prose prose-lg max-w-none">
                {currentContent.content.split('\n\n').map((paragraph, index) => {
                  // Welcome message - Hero style
                  if (paragraph.includes('Welcome to AS Monaco Football Féminin') || paragraph.includes('Bienvenue à AS Monaco Football Féminin')) {
                    return (
                      <div key={index} className="mb-12 text-center">
                        <div className="inline-block bg-gradient-to-r from-monaco-red/10 to-monaco-yellow/10 rounded-full px-8 py-4 mb-6">
                          <p className="text-xl lg:text-2xl font-cinzel-decorative text-foreground leading-relaxed m-0">
                            {paragraph}
                          </p>
                        </div>
                        <div className="w-24 h-1 bg-gradient-to-r from-monaco-red to-monaco-yellow mx-auto rounded-full"></div>
                      </div>
                    );
                  }
                  
                  // Foundation story - 1976
                  else if (paragraph.includes('Founded in 1976') || paragraph.includes('Fondé en 1976')) {
                    return (
                      <div key={index} className="mb-10 relative">
                        <div className="absolute -left-12 top-2 w-8 h-8 bg-gradient-to-r from-monaco-red to-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gradient-to-r from-monaco-red/5 to-transparent rounded-r-2xl p-6 border-l-4 border-monaco-red">
                          <div className="flex items-center mb-3">
                            <span className="bg-monaco-red text-white px-3 py-1 rounded-full text-sm font-montserrat-extrabold mr-3">1976</span>
                            <h3 className="text-lg font-cinzel-decorative-bold text-monaco-red m-0">
                              {language === 'fr' ? 'Les Fondations' : 'The Foundation'}
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed m-0">
                            {paragraph}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  
                  // Rebuild story - 2019
                  else if (paragraph.includes('After a challenging period') || paragraph.includes('Après une période difficile')) {
                    return (
                      <div key={index} className="mb-10 relative">
                        <div className="absolute -left-12 top-2 w-8 h-8 bg-gradient-to-r from-monaco-yellow to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                          <Target className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gradient-to-r from-monaco-yellow/5 to-transparent rounded-r-2xl p-6 border-l-4 border-monaco-yellow">
                          <div className="flex items-center mb-3">
                            <span className="bg-monaco-yellow text-white px-3 py-1 rounded-full text-sm font-montserrat-extrabold mr-3">2019</span>
                            <h3 className="text-lg font-cinzel-decorative-bold text-monaco-yellow m-0">
                              {language === 'fr' ? 'La Renaissance' : 'The Renaissance'}
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed m-0">
                            {paragraph}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  
                  // Recent achievements - 2022-2024
                  else if (paragraph.includes('In 2022') || paragraph.includes('En 2022')) {
                    return (
                      <div key={index} className="mb-10 relative">
                        <div className="absolute -left-12 top-2 w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                          <Trophy className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-transparent rounded-r-2xl p-6 border-l-4 border-green-600">
                          <div className="flex items-center mb-3">
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-montserrat-extrabold mr-3">2022-2024</span>
                            <h3 className="text-lg font-cinzel-decorative-bold text-green-700 m-0">
                              {language === 'fr' ? 'Le Retour' : 'The Return'}
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed m-0">
                            {paragraph}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  
                  // "More than a club" section
                  else if (paragraph.includes('AS Monaco FF is more than a club') || paragraph.includes('AS Monaco FF est plus qu\'un club')) {
                    return (
                      <div key={index} className="text-center border-t-2 border-gradient-to-r from-monaco-red to-monaco-yellow pt-12 mt-12">
                        <div className="bg-gradient-to-r from-monaco-red/10 via-monaco-yellow/10 to-monaco-red/10 rounded-3xl p-8 mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-monaco-red to-monaco-yellow rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <span className="text-2xl">⚽</span>
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-cinzel-decorative-bold text-foreground mb-8">
                            {language === 'fr' ? 'AS Monaco FF est plus qu\'un club.' : 'AS Monaco FF is more than a club.'}
                          </h2>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                              <div className="w-12 h-12 bg-monaco-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📈</span>
                              </div>
                              <p className="text-lg font-medium text-monaco-red">
                                {language === 'fr' ? 'Une histoire de résurgence' : 'A story of resurgence'}
                              </p>
                            </div>
                            
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                              <div className="w-12 h-12 bg-monaco-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌟</span>
                              </div>
                              <p className="text-lg font-medium text-monaco-yellow">
                                {language === 'fr' ? 'Un foyer pour les talents émergents' : 'A home for rising talent'}
                              </p>
                            </div>
                            
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                              </div>
                              <p className="text-lg font-medium text-blue-600">
                                {language === 'fr' ? 'L\'avenir du football féminin à Monaco' : 'The future of women\'s football in Monaco'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  // Call to action
                  else if (paragraph.includes('Join us on the journey') || paragraph.includes('Rejoignez-nous dans ce voyage')) {
                    return (
                      <div key={index} className="text-center mt-8">
                        <div className="bg-gradient-to-r from-monaco-red to-red-600 rounded-3xl p-8 text-white relative overflow-hidden">
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full"></div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-lg rotate-45"></div>
                          </div>
                          
                          <div className="relative z-10">
                            <div className="flex justify-center gap-2 text-3xl mb-4">
                              <span>⚽</span>
                              <span>❤️</span>
                              <span>🤍</span>
                            </div>
                            <p className="text-2xl font-cinzel-decorative mb-6">
                              {language === 'fr' ? 'Rejoignez-nous dans ce voyage.' : 'Join us on the journey.'}
                            </p>
                            <div className="text-sm opacity-90 font-medium">
                              #RiseWithUs #ASMonacoFF #UneÉquipeUneAmbition
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  // Skip hashtag-only paragraphs
                  else if (paragraph.includes('#RiseWithUs') && paragraph.length < 100) {
                    return null;
                  }
                  
                  // Skip "We are" paragraphs as they're handled in the "more than a club" section
                  else if (paragraph.includes('We are a story of resurgence') || paragraph.includes('Nous sommes une histoire')) {
                    return null;
                  }
                  
                  // Default paragraph styling
                  else {
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
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

export default ClubHistory; 