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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative h-[200px] bg-red-600 flex items-center justify-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">{currentContent.title}</h1>
          <p className="text-lg opacity-90">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 pt-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/club')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {currentContent.backButton}
        </Button>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-2 pt-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              {currentContent.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubHistory; 