import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

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

  // Sample player data - replace with real data later
  const players = [
    { id: 1, name: "Marie Dubois", position: "goalkeeper", number: 1, age: 24 },
    { id: 2, name: "Sophie Martin", position: "defender", number: 2, age: 22 },
    { id: 3, name: "Camille Rousseau", position: "defender", number: 3, age: 25 },
    { id: 4, name: "Emma Leroy", position: "midfielder", number: 8, age: 21 },
    { id: 5, name: "Léa Bernard", position: "midfielder", number: 10, age: 23 },
    { id: 6, name: "Julie Moreau", position: "forward", number: 9, age: 20 },
    { id: 7, name: "Amélie Petit", position: "forward", number: 11, age: 24 },
    { id: 8, name: "Clara Thomas", position: "defender", number: 4, age: 26 },
  ];

  const getPositionColor = (position: string) => {
    switch (position) {
      case 'goalkeeper': return 'bg-monaco-yellow';
      case 'defender': return 'bg-primary';
      case 'midfielder': return 'bg-accent';
      case 'forward': return 'bg-monaco-red';
      default: return 'bg-muted';
    }
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

      {/* Player Carousel/Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {players.map((player, index) => (
              <Card 
                key={player.id}
                className="p-6 hover:shadow-monaco transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {/* Player Photo Placeholder */}
                  <div className="w-24 h-24 bg-gradient-monaco rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-white font-bold text-xl">{player.number}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {player.name}
                  </h3>
                  
                  <Badge 
                    className={`${getPositionColor(player.position)} text-white mb-2`}
                  >
                    {content.positions[player.position as keyof typeof content.positions]}
                  </Badge>
                  
                  <p className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Âge' : 'Age'}: {player.age}
                  </p>
                </div>
              </Card>
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