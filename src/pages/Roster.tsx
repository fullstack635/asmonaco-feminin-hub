import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram } from 'lucide-react';

const Roster = () => {
  const { language } = useLanguage();

  const rosterInfo = {
    fr: {
      title: "Notre Équipe",
      subtitle: "AS Monaco Football Féminin évolue en Division 3 FFF, le troisième niveau du football féminin en France. La ligue met en valeur les talents émergents et sert d'étape clé dans le développement du jeu féminin à travers le pays.",
      positions: {
        goalkeeper: "Gardienne",
        defender: "Défenseure",
        midfielder: "Milieu",
        forward: "Attaquante"
      }
    },
    en: {
      title: "Our Team",
      subtitle: "AS Monaco Football Féminin competes in FFF Division 3, the third tier of women's football in France. The league showcases rising talent and serves as a key stepping stone in the development of the women's game across the country.",
      positions: {
        goalkeeper: "Goalkeeper",
        defender: "Defender", 
        midfielder: "Midfielder",
        forward: "Forward"
      }
    }
  };

  const content = rosterInfo[language];

  // Real player data from provided spreadsheet
  const players = [
    { id: 1, firstName: "Manelle", lastName: "Ben Mohammed", number: 1, position: "GK", instagram: "maanelle_bm" },
    { id: 2, firstName: "Manon", lastName: "Frey", number: 2, position: "Defendeur", instagram: "manfoot_al1" },
    { id: 3, firstName: "Elise", lastName: "Gaucher", number: 3, position: "Defendeur", instagram: "elise.gaucher" },
    { id: 4, firstName: "Julie", lastName: "Lievremont", number: 4, position: "Defendeur", instagram: "julie_lvmt" },
    { id: 5, firstName: "Solène", lastName: "Noizat", number: 5, position: "Defendeur", instagram: "solene.noizat" },
    { id: 6, firstName: "Lina", lastName: "Chabanne", number: 6, position: "Midfield", instagram: "linaachabane22" },
    { id: 7, firstName: "Maureen", lastName: "Bigot", number: 7, position: "Midfield", instagram: "bigotmaureen" },
    { id: 8, firstName: "Jade", lastName: "Gaiffe", number: 8, position: "Midfield", instagram: "jadegatffe_" },
    { id: 9, firstName: "Marie", lastName: "Lextrayt", number: 9, position: "Strike", instagram: "marie_lextrayt" },
    { id: 10, firstName: "Laure", lastName: "Robert", number: 10, position: "Defendeur", instagram: "laure_robert_4" },
    { id: 11, firstName: "Manon", lastName: "Issert", number: 14, position: "Midfield", instagram: "TBD" },
    { id: 12, firstName: "Enola", lastName: "Dumontet", number: 18, position: "Midfield", instagram: "userrr.83" },
    { id: 13, firstName: "Ines", lastName: "Koré", number: 20, position: "Strike", instagram: "kore_ines" },
    { id: 14, firstName: "Fatoumata", lastName: "Baldé", number: 21, position: "Strike", instagram: "fatoudinho_b" },
    { id: 15, firstName: "Salma", lastName: "Zeitouni", number: 22, position: "Defendeur", instagram: "salma_zei" },
    { id: 16, firstName: "Chelsea", lastName: "Abrin", number: 23, position: "Strike", instagram: "chelsea_abrin" },
    { id: 17, firstName: "Melie", lastName: "Lacolla", number: 27, position: "Defendeur", instagram: "meelie.l08" },
    { id: 18, firstName: "Anais", lastName: "Leclerc", number: 28, position: "Defendeur", instagram: "anais_lb" },
    { id: 19, firstName: "Pauline", lastName: "Moitrel", number: 30, position: "GK", instagram: "pauline_moitrel" },
    { id: 20, firstName: "Yrma", lastName: "Mze Issa", number: null, position: "Strike", instagram: "yrmaajr" },
    { id: 21, firstName: "Adama", lastName: "Tamba", number: null, position: "TBD", instagram: "TBD" },
    { id: 22, firstName: "Ramsey", lastName: "Davis", number: null, position: "Strike", instagram: "ramsdavis" },
  ].sort((a, b) => (a.number || 999) - (b.number || 999)); // Sort by jersey number

  const getPositionColor = (position: string) => {
    switch (position.toLowerCase()) {
      case 'gk': return 'bg-monaco-yellow';
      case 'defendeur': return 'bg-primary';
      case 'midfield': return 'bg-accent';
      case 'strike': return 'bg-monaco-red';
      default: return 'bg-muted';
    }
  };

  const getPositionDisplay = (position: string) => {
    const displays = {
      fr: {
        'GK': 'Gardienne',
        'Defendeur': 'Défenseure', 
        'Midfield': 'Milieu',
        'Strike': 'Attaquante',
        'TBD': 'À déterminer'
      },
      en: {
        'GK': 'Goalkeeper',
        'Defendeur': 'Defender',
        'Midfield': 'Midfielder', 
        'Strike': 'Forward',
        'TBD': 'To Be Determined'
      }
    };
    return displays[language][position as keyof typeof displays[typeof language]] || position;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-monaco">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {content.title}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto animate-fade-in">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {players.map((player, index) => (
              <div 
                key={player.id}
                className="relative group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Player Card */}
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-background to-muted aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  {/* Jersey Number Background */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-12 h-12 bg-monaco-yellow rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-background font-bold text-lg">
                        {player.number || '?'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Player Photo Placeholder */}
                  <div className="absolute inset-0 bg-gradient-monaco opacity-80">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-white text-6xl font-bold opacity-20">
                        {player.firstName.charAt(0)}{player.lastName.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Player Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-sm mb-1 leading-tight">
                        {player.firstName}
                      </h3>
                      <h3 className="font-bold text-sm mb-2 leading-tight">
                        {player.lastName}
                      </h3>
                      
                      <Badge 
                        className={`${getPositionColor(player.position)} text-white text-xs mb-2`}
                      >
                        {getPositionDisplay(player.position)}
                      </Badge>
                      
                      {/* Instagram Link */}
                      {player.instagram && player.instagram !== 'TBD' && (
                        <a 
                          href={`https://instagram.com/${player.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Instagram className="w-3 h-3" />
                          @{player.instagram}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {language === 'fr' ? 'Division 3 FFF' : 'FFF Division 3'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'fr' 
                ? 'Notre équipe représente fièrement Monaco dans la Division 3 du championnat féminin français, un niveau compétitif qui nous permet de développer nos talents et de viser une promotion vers les divisions supérieures.'
                : 'Our team proudly represents Monaco in the French women\'s Division 3 championship, a competitive level that allows us to develop our talents and aim for promotion to higher divisions.'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">
                  {language === 'fr' ? 'Joueuses licenciées' : 'Licensed Players'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <p className="text-muted-foreground">
                  {language === 'fr' ? 'Promotion en D3' : 'Promoted to D3'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2022</div>
                <p className="text-muted-foreground">
                  {language === 'fr' ? '16e de finale Coupe' : 'Cup Round of 16'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roster;