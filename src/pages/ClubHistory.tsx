import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

Rejoignez-nous dans ce voyage.
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

Join us on the journey. 
#RiseWithUs #ASMonacoFF #UneÉquipeUneAmbition`
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Header Section */}
      <section className="relative h-[250px] sm:h-[300px] bg-gradient-to-br from-monaco-red via-monaco-red to-red-700 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-16 h-16 sm:w-32 sm:h-32 border border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-12 h-12 sm:w-24 sm:h-24 border border-white/20 rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 border border-white/15 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-10 h-10 sm:w-20 sm:h-20 border border-white/25 rounded-lg rotate-12"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-montserrat-extrabold mb-2 sm:mb-4 animate-fade-in">{currentContent.title}</h1>
          <p className="text-sm sm:text-lg md:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed font-cinzel-decorative">{currentContent.subtitle}</p>
          
          {/* Decorative Line */}
          <div className="mt-4 sm:mt-6 flex justify-center">
            <div className="w-16 sm:w-24 h-1 bg-monaco-yellow rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 pt-6 sm:pt-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/club')}
          className="flex items-center gap-2 hover:bg-monaco-red hover:text-white hover:border-monaco-red transition-all duration-300 group text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          {currentContent.backButton}
        </Button>
      </div>

      {/* Content Section */}
      <section className="py-8 sm:py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8 lg:p-12 relative overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-monaco-yellow/5 rounded-full -translate-y-10 sm:-translate-y-20 translate-x-10 sm:translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 bg-monaco-red/5 rounded-full translate-y-8 sm:translate-y-16 -translate-x-8 sm:-translate-x-16"></div>
            
            {/* Heritage Timeline Accent */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-monaco-red via-monaco-yellow to-monaco-red opacity-20"></div>
            
            <div className="relative z-10 pl-4 sm:pl-8">
            <div className="prose prose-sm sm:prose-lg max-w-none">
                {currentContent.content.split('\n\n').map((paragraph, index) => {
                  // Welcome message - Hero style
                  if (paragraph.includes('Welcome to AS Monaco Football Féminin') || paragraph.includes('Bienvenue à AS Monaco Football Féminin')) {
                    return (
                      <div key={index} className="mb-8 sm:mb-12 text-center">
                        <div className="inline-block bg-gradient-to-r from-monaco-red/10 to-monaco-yellow/10 rounded-2xl sm:rounded-full px-4 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-6">
                          <p className="text-base sm:text-xl lg:text-2xl font-cinzel-decorative text-foreground leading-relaxed m-0">
                            {paragraph}
                          </p>
                        </div>
                        <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-monaco-red to-monaco-yellow mx-auto rounded-full"></div>
                      </div>
                    );
                  }
                  
                  // Foundation story - 1976
                  else if (paragraph.includes('Founded in 1976') || paragraph.includes('Fondé en 1976')) {
                    return (
                      <div key={index} className="mb-6 sm:mb-10 relative">
                        <div className="absolute -left-8 sm:-left-12 top-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-monaco-red to-red-600 rounded-full flex items-center justify-center shadow-lg">
                        </div>
                        <div className="bg-gradient-to-r from-monaco-red/5 to-transparent rounded-r-xl sm:rounded-r-2xl p-4 sm:p-6 border-l-2 sm:border-l-4 border-monaco-red">
                          <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0 text-center sm:text-left">
                            <span className="bg-monaco-red text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-montserrat-extrabold mr-0 sm:mr-3 w-fit mx-auto sm:mx-0">1976</span>
                            <h3 className="text-base sm:text-lg font-cinzel-decorative-bold text-monaco-red m-0">
                              {language === 'fr' ? 'Les Fondations' : 'The Foundation'}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed m-0 text-center">
                            {paragraph}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  
                  // Rebuild story - 2019
                  else if (paragraph.includes('After a challenging period') || paragraph.includes('Après une période difficile')) {
                    return (
                      <div key={index} className="mb-6 sm:mb-10 relative">
                        <div className="absolute -left-8 sm:-left-12 top-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-monaco-red to-red-500 rounded-full flex items-center justify-center shadow-lg">
                        </div>
                        <div className="bg-gradient-to-r from-monaco-red/5 to-transparent rounded-r-xl sm:rounded-r-2xl p-4 sm:p-6 border-l-2 sm:border-l-4 border-monaco-red">
                          <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0 text-center sm:text-left">
                            <span className="bg-monaco-red text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-montserrat-extrabold mr-0 sm:mr-3 w-fit mx-auto sm:mx-0">2019</span>
                            <h3 className="text-base sm:text-lg font-cinzel-decorative-bold text-monaco-red m-0">
                              {language === 'fr' ? 'La Renaissance' : 'The Renaissance'}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed m-0 text-center">
                            {paragraph}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  
                  // Recent achievements - 2022-2024
                  else if (paragraph.includes('In 2022') || paragraph.includes('En 2022')) {
                    return (
                      <div key={index} className="mb-6 sm:mb-10 relative">
                        <div className="absolute -left-8 sm:-left-12 top-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                        </div>
                        <div className="bg-gradient-to-r from-red-50 to-transparent rounded-r-xl sm:rounded-r-2xl p-4 sm:p-6 border-l-2 sm:border-l-4 border-red-600">
                          <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0 text-center sm:text-left">
                            <span className="bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-montserrat-extrabold mr-0 sm:mr-3 w-fit mx-auto sm:mx-0">2022-2024</span>
                            <h3 className="text-base sm:text-lg font-cinzel-decorative-bold text-red-700 m-0">
                              {language === 'fr' ? 'Le Retour' : 'The Return'}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed m-0 text-center">
                            {paragraph}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  
                  // "More than a club" section
                  else if (paragraph.includes('AS Monaco FF is more than a club') || paragraph.includes('AS Monaco FF est plus qu\'un club')) {
                    return (
                      <div key={index} className="text-center border-t-2 border-gradient-to-r from-monaco-red to-monaco-yellow pt-8 sm:pt-12 mt-8 sm:mt-12">
                        <div className="bg-gradient-to-r from-monaco-red/10 via-monaco-yellow/10 to-monaco-red/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-6 sm:mb-8">
                          <h2 className="text-lg sm:text-2xl lg:text-3xl font-cinzel-decorative-bold text-foreground mb-6 sm:mb-8 text-center">
                            {language === 'fr' ? 'AS Monaco FF est plus qu\'un club.' : 'AS Monaco FF is more than a club.'}
                          </h2>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                              <p className="text-sm sm:text-lg font-medium text-monaco-red text-center">
                                {language === 'fr' ? 'Une histoire de résurgence' : 'A story of resurgence'}
                              </p>
                            </div>
                            
                            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                              <p className="text-sm sm:text-lg font-medium text-monaco-red text-center">
                                {language === 'fr' ? 'Un foyer pour les talents émergents' : 'A home for rising talent'}
                              </p>
                            </div>
                            
                            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                              <p className="text-sm sm:text-lg font-medium text-monaco-red text-center">
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
                      <div key={index} className="text-center mt-6 sm:mt-8">
                        <div className="bg-gradient-to-r from-monaco-red to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-4 right-4 w-8 h-8 sm:w-16 sm:h-16 border border-white/30 rounded-full"></div>
                            <div className="absolute bottom-4 left-4 w-6 h-6 sm:w-12 sm:h-12 border border-white/20 rounded-lg rotate-45"></div>
                          </div>
                          
                          <div className="relative z-10">
                            <p className="text-lg sm:text-2xl font-cinzel-decorative mb-4 sm:mb-6">
                              {language === 'fr' ? 'Rejoignez-nous dans ce voyage.' : 'Join us on the journey.'}
                            </p>
                            <div className="text-xs sm:text-sm opacity-90 font-medium">
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
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-lg text-center">
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